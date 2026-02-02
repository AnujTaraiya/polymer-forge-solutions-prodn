"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 bg-neutral-950",
                className
            )}
        >
            {/*  Gradient Background */}
            <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            {/* Animated Beams */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 overflow-hidden"
            >
                {/* Beam 1 */}
                <div
                    className="absolute -top-[50%] left-[50%] h-[200%] w-[1px] bg-gradient-to-t from-transparent via-brand-orange to-transparent opacity-20 rotate-[20deg]"
                    style={{ filter: "blur(2px)" }}
                />
                {/* Beam 2 */}
                <div
                    className="absolute -top-[50%] left-[30%] h-[200%] w-[1px] bg-gradient-to-t from-transparent via-blue-500 to-transparent opacity-20 rotate-[35deg]"
                    style={{ filter: "blur(2px)" }}
                />
                {/* Beam 3 */}
                <div
                    className="absolute -top-[50%] left-[70%] h-[200%] w-[1px] bg-gradient-to-t from-transparent via-brand-navy to-transparent opacity-20 rotate-[-15deg]"
                    style={{ filter: "blur(2px)" }}
                />

                {/* Simple grid overlay for tech feel */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </motion.div>
        </div>
    );
};
