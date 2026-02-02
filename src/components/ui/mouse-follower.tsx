
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const MouseFollower = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Precision Dot - Follows perfectly */}
            <motion.div
                className="fixed top-0 left-0 bg-white h-2 w-2 rounded-full pointer-events-none z-[10000] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />

            {/* Ambient Glow - Trails slightly with spring physics */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 bg-brand-orange/30 rounded-full blur-2xl pointer-events-none z-[9999]",
                    hovered ? "h-32 w-32" : "h-16 w-16"
                )}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};
