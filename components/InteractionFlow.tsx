'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Circle, Sparkles } from 'lucide-react';

// --- Background Particles ---
const BackgroundHearts = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => ( // Reduced to 10 for better performance
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        y: '110vh',
                        x: `${(i * 10) + Math.random() * 5}%`, // More deterministic distribution
                        scale: 0.5
                    }}
                    animate={{
                        opacity: [0, 0.2, 0],
                        y: '-10vh',
                        rotate: [0, 180],
                        scale: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                    className="absolute text-red-500/10"
                >
                    <Heart size={30} fill="currentColor" />
                </motion.div>
            ))}
        </div>
    );
};

// --- Step 1: Love Mode ---
const LoveModeStep = ({ onComplete }: { onComplete: () => void }) => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        if (isOn) {
            const timer = setTimeout(() => onComplete(), 3000);
            return () => clearTimeout(timer);
        }
    }, [isOn, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            className="flex flex-col items-center justify-center relative z-10"
        >
            <div className={`backdrop-blur-2xl p-12 rounded-[3rem] transition-all duration-1000 ease-in-out flex flex-col items-center space-y-10 border border-white/10 ${isOn ? 'bg-red-500/10 shadow-[0_0_80px_rgba(239,68,68,0.2)] border-red-500/20' : 'bg-white/5 shadow-2xl'}`}>
                <div className="relative">
                    <motion.div
                        animate={isOn ? {
                            scale: [1, 1.15, 1],
                            filter: ['drop-shadow(0 0 0px rgba(239,68,68,0))', 'drop-shadow(0 0 20px rgba(239,68,68,0.6))', 'drop-shadow(0 0 0px rgba(239,68,68,0))']
                        } : {}}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <Heart className={`w-24 h-24 transition-all duration-1000 ${isOn ? 'text-red-500 fill-red-500' : 'text-white/10'}`} />
                    </motion.div>
                </div>

                <div className="flex flex-col items-center space-y-6">
                    <span className={`text-5xl font-playfair transition-colors duration-1000 ${isOn ? 'text-white' : 'text-white/40'}`}>
                        Love mode
                    </span>

                    <button
                        onClick={() => setIsOn(!isOn)}
                        className={`group relative w-32 h-16 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] p-1.5 focus:outline-none ${isOn ? 'bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.5)]' : 'bg-white/10'
                            }`}
                    >
                        <motion.div
                            animate={{ x: isOn ? 64 : 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="w-13 h-13 bg-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center pointer-events-none"
                        >
                            <Heart
                                size={24}
                                className={`transition-colors duration-500 ${isOn ? "text-red-500 fill-red-500" : "text-gray-300"}`}
                            />
                        </motion.div>

                        <AnimatePresence>
                            {!isOn && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30"
                                >
                                    off
                                </motion.span>
                            )}
                            {isOn && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80"
                                >
                                    on
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

// --- Step 2: GirlfriendQuestion ---
const GirlfriendQuestionStep = ({
  onComplete,
}: {
  onComplete: () => void;
}) => {
  const [noPosition, setNoPosition] = useState({
    top: 50,
    left: 68,
  });

  const moveNo = () => {
    setNoPosition({
      top: 10 + Math.random() * 75,
      left: 5 + Math.random() * 75,
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#060010] px-5 text-center text-white">
      <div className="w-full max-w-md rounded-3xl border border-pink-400/30 bg-white/5 p-6 shadow-2xl">
        <div className="mb-4 text-5xl">💗</div>

        <h2 className="mb-3 text-2xl font-bold text-pink-300">
          Will you be my girlfriend?
        </h2>

        <p className="mb-5 text-sm text-pink-100">
          Dupen punya satu pertanyaan buat pini hehe...
        </p>

        <div className="relative h-48 w-full overflow-hidden rounded-2xl">
          <button
            onClick={onComplete}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-110"
          >
            Iyaaa
          </button>

          <button
            onMouseEnter={moveNo}
            onClick={moveNo}
            style={{
              position: "absolute",
              top: `${noPosition.top}%`,
              left: `${noPosition.left}%`,
              transform: "translate(-50%, -50%)",
            }}
            className="rounded-full bg-gray-600 px-6 py-2 font-semibold text-white transition-all duration-150"
          >
            Tidak
          </button>
        </div>

        <p className="mt-2 text-xs text-pink-200/70">
          Hehehe, ayo coba pilih 
        </p>
      </div>
    </div>
  );
};

// --- Step 3: Love Meter ---
const LoveMeterStep = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 1500);
                    return 100;
                }
                return prev + 1;
            });
        }, 40);
        return () => clearInterval(interval);
    }, [onComplete]);

    // SVG parameters for the semi-circle
    const radius = 90;
    const circumference = Math.PI * radius;
    const dashOffset = circumference - (progress / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center space-y-12 w-full max-w-lg px-6 relative z-10"
        >
            <div className="relative w-full aspect-[2/1] flex flex-col items-center justify-end overflow-hidden">
                {/* SVG Gauge */}
                <svg viewBox="0 0 200 100" className="w-full h-full absolute top-0 overflow-visible">
                    {/* Background Path (Gray) */}
                    <path
                        d="M 10,100 A 90,90 0 0 1 190,100"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                    {/* Progress Path (Red) */}
                    <motion.path
                        d="M 10,100 A 90,90 0 0 1 190,100"
                        fill="none"
                        stroke="url(#loveGradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        animate={{ strokeDashoffset: dashOffset }}
                        transition={{ duration: 0.1, ease: "linear" }}
                        style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))' }}
                    />
                    <defs>
                        <linearGradient id="loveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="z-10 flex flex-col items-center pb-4">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Heart className="w-16 h-16 text-red-500 fill-red-500 mb-2" />
                    </motion.div>
                    <div className="text-6xl font-black text-white font-mono tracking-tighter">
                        {progress}<span className="text-red-400 text-3xl">%</span>
                    </div>
                    <span className="text-2xl text-white/60 font-playfair italic mt-2 tracking-widest">Love Intensity</span>
                </div>
            </div>

            {/* Progress Bar for consistency */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-pink-500"
                    animate={{ width: `${progress}%` }}
                />
            </div>
        </motion.div>
    );
};

// --- Step 4: Typewriter ---
const TypewriterStep = ({ onComplete }: { onComplete: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const title = 'Untuk Cantikku Pini';
    let index = 0;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let nextTimer: ReturnType<typeof setTimeout> | undefined;

    const typingTimer = setInterval(() => {
      index += 1;
      setDisplayedText(title.slice(0, index));

      if (index >= title.length) {
        clearInterval(typingTimer);
        fadeTimer = setTimeout(() => setIsFading(true), 1000);
        nextTimer = setTimeout(() => onComplete(), 2000);
      }
    }, 130);

    return () => {
      clearInterval(typingTimer);
      if (fadeTimer) clearTimeout(fadeTimer);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isFading ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 text-center">
      <h1 className="font-sans text-2xl font-light tracking-[0.12em] text-pink-100 sm:text-4xl">
        {displayedText}
        {!isFading && <span className="ml-1 animate-pulse text-pink-300">|</span>}
      </h1>
    </motion.div>
  );
};

export default function InteractionFlow({onFlowComplete,}: {onFlowComplete: () => void;}) {
  const [step, setStep] = useState(1);
    
    return (
        <div className="fixed inset-0 z-50 bg-[#060010] flex items-center justify-center overflow-hidden">
            {/* Visual background layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <BackgroundHearts />

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <LoveModeStep key="step1" onComplete={() => setStep(2)} />
                )}
                
                {step === 2 && (
                  <GirlfriendQuestionStep key="step2" onComplete={() => setStep(3)} />
                )}

                {step === 3 && (
                    <LoveMeterStep key="step3" onComplete={() => setStep(4)} />
                )}
                {step === 4 && (
                    <TypewriterStep key="step4" onComplete={() => onFlowComplete()} />
                )}
            </AnimatePresence>

            {/* Corner Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-900/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-900/20 blur-[100px] rounded-full" />
        </div>
    );
}
