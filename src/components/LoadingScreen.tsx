import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
    onComplete: () => void;
}

const words = ["Design", "Sviluppo", "Eccellenza"];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    // Handle word rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => {
                if (prev < words.length - 1) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, 900);
        return () => clearInterval(interval);
    }, []);

    // Handle counter progress
    useEffect(() => {
        let start: number | null = null;
        const duration = 2700;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const val = Math.min((elapsed / duration) * 100, 100);
            setProgress(val);

            if (elapsed < duration) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    onCompleteRef.current();
                }, 400);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            {/* Element 1: Label (Top-Left) */}
            <motion.div
                className="absolute top-8 left-8 md:top-12 md:left-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="text-xs md:text-sm text-[#888888] uppercase tracking-[0.3em] font-medium">
                    NEXIVO &reg;
                </span>
            </motion.div>

            {/* Element 2: Rotating Words (Center) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={wordIndex}
                        className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[#FA93FA]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {words[wordIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Element 3: Counter (Bottom-Right) */}
            <motion.div
                className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="text-6xl md:text-8xl lg:text-9xl font-display text-white tabular-nums">
                    {Math.round(progress).toString().padStart(3, '0')}
                </span>
            </motion.div>

            {/* Element 4: Progress Bar (Bottom Edge) */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
                <motion.div
                    className="h-full origin-left bg-gradient-to-r from-[#FA93FA] to-[#C967E8]"
                    style={{
                        scaleX: progress / 100,
                        boxShadow: "0 0 15px rgba(250, 147, 250, 0.5)"
                    }}
                    transition={{ duration: 0.1, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
