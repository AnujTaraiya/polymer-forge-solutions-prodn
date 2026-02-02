"use client";
import React, { useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useMotionTemplate,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { triggerHaptic } from "@/lib/haptics";

export const CometCard = ({
    rotateDepth = 10,
    translateDepth = 10,
    className,
    children,
}: {
    rotateDepth?: number;
    translateDepth?: number;
    className?: string;
    children: React.ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [`-${rotateDepth}deg`, `${rotateDepth}deg`],
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [`${rotateDepth}deg`, `-${rotateDepth}deg`],
    );

    const translateX = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [`-${translateDepth}px`, `${translateDepth}px`],
    );
    const translateY = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [`${translateDepth}px`, `-${translateDepth}px`],
    );

    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

    const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;
    const spotlightMask = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, white, transparent 80%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        const xPct = localX / width - 0.5;
        const yPct = localY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
        mouseX.set(localX);
        mouseY.set(localY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className={cn("perspective-distant transform-3d group/spotlight", className)}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTapStart={triggerHaptic}
                style={{
                    rotateX,
                    rotateY,
                    translateX,
                    translateY,
                    boxShadow:
                        "rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px",
                }}
                initial={{ scale: 1, z: 0 }}
                whileHover={{
                    scale: 1.05,
                    z: 50,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-2xl h-full border border-transparent bg-white/5 dark:bg-black/5"
            >
                {/* Spotlight Layer */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100 z-10"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)", // Increased visibility
                        maskImage: spotlightMask,
                        WebkitMaskImage: spotlightMask,
                    }}
                />

                <div className="relative z-20 h-full">
                    {children}
                </div>

                {/* Glare Layer */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay"
                    style={{
                        background: glareBackground,
                        opacity: 0.6,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </div>
    );
};
