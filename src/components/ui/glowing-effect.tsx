"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const GlowingEffect = ({
    children,
    className,
    glow = true,
    blur = 0,
    spread = 40,
    glowColor = "#ffffff",
    disabled = false,
    movementDuration = 2,
    borderWidth = 1,
}: {
    children?: React.ReactNode;
    className?: string;
    glow?: boolean;
    blur?: number;
    spread?: number;
    glowColor?: string;
    disabled?: boolean;
    movementDuration?: number;
    borderWidth?: number;
}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;

        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => {
        if (disabled) return;
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        if (disabled) return;
        setOpacity(0);
    };

    return (
        <div
            className={cn(
                "relative h-full w-full overflow-hidden rounded-[inherit] bg-transparent p-[1px]",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit]"
                style={{
                    background: disabled
                        ? undefined
                        : `radial-gradient(
              ${spread}px circle at ${position.x}px ${position.y}px,
              ${glowColor} 0%,
              transparent 100%
            )`,
                    opacity: glow ? opacity : 0,
                    transition: "opacity 0.2s",
                }}
            />
            {/* Grid Pattern Effect - continuous animation */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* Animated Glowing Grid Box if children not present */}
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <GlowingGrid />
                </motion.div>
            </AnimatePresence>

            <div className="relative h-full w-full rounded-[inherit] bg-background">
                {children}
            </div>
        </div>
    );
};

const GlowingGrid = () => {
    return (
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] p-2 opacity-30">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0.2,
                        backgroundColor: "trasparent",
                    }}
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        backgroundColor: ["transparent", "rgba(240, 171, 0, 0.1)", "transparent"], // Brand orange tint
                    }}
                    transition={{
                        duration: Math.random() * 2 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                    className="aspect-square rounded-[4px] border border-white/5"
                />
            ))}
        </div>
    )
}

export const GlowingEffectGrid = ({
    className
}: { className?: string }) => {
    return (
        <div className={cn("absolute inset-0 z-0", className)}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <motion.div
                className="absolute inset-0 bg-brand-orange/5"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    )
}
