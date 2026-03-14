import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const stages = [
        "Inizializzazione Core Components...",
        "Caricamento Assets Visivi...",
        "Ottimizzazione GPU & Shader...",
        "Compilazione Frontend Architecture...",
        "Establishing Secure Connection...",
        "Rendering UI..."
    ];

    useEffect(() => {
        let progressInterval: NodeJS.Timeout;

        // Progress automation
        progressInterval = setInterval(() => {
            setProgress((prev) => {
                const step = Math.random() * 8 + 2; // Slower progress for longer feel
                const next = prev + step;

                if (next >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        setIsVisible(false); // Start fade out
                        setTimeout(() => setLoading(false), 800); // Wait for fade out to complete
                    }, 500); // Stay at 100% for brief moment
                    return 100;
                }

                // Update text stage based on progress
                const currentStage = Math.floor((next / 100) * stages.length);
                if (currentStage !== stage && currentStage < stages.length) {
                    setStage(currentStage);
                }

                return next;
            });
        }, 120); // 120ms tick rate for a longer preloader

        return () => clearInterval(progressInterval);
    }, [stage, stages.length]);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050508] transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="w-full max-w-md px-8 relative z-10 flex flex-col items-center">

                {/* Visual Icon */}
                <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
                    <Terminal className="w-12 h-12 text-cyan-400 relative z-10 animate-bounce" />
                </div>

                {/* Loading Text */}
                <div className="mb-6 h-6 text-center text-sm sm:text-base text-gray-300 font-mono flex items-center gap-2">
                    <span className="text-purple-400">{'>'}</span>
                    {stages[stage]}
                    <span className="w-1.5 h-4 bg-cyan-400 animate-pulse inline-block" />
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    {/* The Fill */}
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 ease-out relative"
                        style={{ width: `${progress}%` }}
                    >
                        {/* Shimmer effect inside the bar */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_1.5s_infinite] -translate-x-full" />
                    </div>
                </div>

                {/* Percentage & Status */}
                <div className="w-full mt-4 flex justify-between items-center text-xs font-mono">
                    <span className="text-gray-500">SYSTEM.BOOT</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold text-lg">
                        {Math.floor(progress)}%
                    </span>
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
};

export default Preloader;
