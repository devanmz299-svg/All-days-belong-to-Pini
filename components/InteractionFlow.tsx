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
  const paragraphs = [
    "Hallo pinii \nApi kita 200 Yeyyyyy!",
    "Ganyangka ya kita bisa sedeket ini pinn, yang awalnya cuman satu grup saling save, trus kita saling follow tiktok trus ig juga, trus dupen pernah post story buat map roblox dan itu dikomen sama pinii \"inpoo azaa map-nya\" ini pas 3 September 2025, udah itu kita hampir gapernah chattan, sampe dupen live tiktok pas 17 Januari, pinii komenn sampe dimana pini nanya sec account dupen, dari situlah dimulai kita mulai chattan sering tapi ga sering banget pas januarinya, akhirnya kita bikin api di 28 februari, banyak banget lika liku ternyata bisa sampai sekarang.",
    "Pini pernah nanya ke dupen \"percaya ga jodoh itu cerminan diri\" padahal mah jodohnya di depan mata heheee, pini juga bilang \"ada juga yang berbeda tapi melengkapi\". Pini juga pernah ngirim video tiktok pas 18 mei: \"i choose you. and i'll choose you over and over. without pause, without a doubt. in a heartbeat. i'll keep choosing you.\" Sekarang bagiann dupen yang bakal buktiin.",
    "Makasi ya pinii buat semuanya, trus maaf juga mungkin terkadang dupen nyebelin. Dupen berharap kita sama usahainn teruss supaya kita teruss bersama, trus jugaa dupen berharap kita punya satu tujuan yang sama, semogaa tahapan ini sampai, truss dupenn mau kita berkembang bareng bareng, dupen jugaa seneng banget kalau dilibatkan dalam kehidupan pini.",
    "Owh iya pin dupen juga sekarang sering pulang ke Serang kan, terkadang juga dupenn seneng di Cilegon. Kalau dupen ke Serang tu berharap pini mau ngajakin maen hehee, atau butuh sesuatu dupen bisa langsung otw. Kalau di Cilegon trus ngasih taunya malem, kemungkinannya takut gajadi maen kaya waktu itu karena kemaleman, tapi kalau butuh sesuatu di Cilegon juga bisa, cuman kalau di Serang bisa lebih cepet. Trus kalau yang dupen seneng di Cilegon, kalau pinii lagi sibuk dan mau callan biar lebih seru dan gaberisik dupen langsung ke Cilegon, begitu deh.",
    "Pini dupenn boleh minta sesuatu tida, dupen pengen pini ngabarin dupen apapun itu, tapi kalau semisal pini ada masalah dan ga sempet ngabarin dupenn, its okeii tida apa-apa, soalnya kabar pini tu penting banget bagi dupen. Pini juga kalau mau ceritaa apapun ituu dupen dengerin ko, kalau yang tentang cerita ini pini juga udah ngasih tau dupen kan. Okeii tapi pini perlu tauu kalau pini mau cerita apapun itu serandom apapun itu dupenn mau dengerin ko, trus pinii jugaa gaperlu sungkan sama dupen, kalau butuh sesuatu, jemput, anter, butuh dupen langsung buat cerita atau apapun itu, dupenn usahain, dupenn gamau pini ngerasa sendiri.",
    "Dupen juga mau nanya boleh tida, pini pernah ga si takut kehilangan dupen? Arah kita satu tujuan kan pin? Ada hal ga yang pini butuh dari dupen tapi pini gaberani minta? Ada ga ketakutan pini buat ngejalanin hubungan ini yang ga dupen tau? Tapi pinii bisa liatt dupenn, dupen juga gapernah neko neko kalau udah nyiapin buat hubungan apa lagi sampe ngejalaninya. Prinsip dupen gini: \"dupen bakal usahain apapun ituu buat pinii selagi dupen bisa\" trus juga \"selagi dupenn ga macem macem disini, maka pini juga gabakal macem macem\". Ini anggapan karena kita jarang ketemu. Owh iyaa dari semua pertanyaan ini dupen mau tau sama mau ngeyakinin pini, kalau buatt waktunya sambil berjalan dupen tunggu koo.",
    "dupenn bakal belajar semua buat pinii 🫶🏼"
  ];

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#100712] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(190,70,130,0.13),transparent_70%)]" />

      <img
        src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=500&q=80"
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-44 w-28 object-cover object-center opacity-75 [mask-image:linear-gradient(to_bottom,black,transparent)] sm:h-64 sm:w-44"
      />

      <img
        src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=500&q=80"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 h-48 w-32 rotate-180 object-cover object-center opacity-75 [mask-image:linear-gradient(to_top,black,transparent)] sm:h-72 sm:w-48"
      />

      <div className="relative z-10 h-full overflow-y-auto px-4 py-8 sm:px-8 sm:py-12">
        <article className="mx-auto max-w-2xl rounded-3xl border border-pink-300/25 bg-[#120a13]/90 px-5 py-8 shadow-[0_0_45px_rgba(236,72,153,0.10)] sm:px-10 sm:py-12">
          <h1 className="mb-3 text-center font-serif text-3xl italic text-pink-300 sm:text-5xl">
            Untuk Pinii ♡
          </h1>

          <p className="mb-2 text-center font-serif italic text-pink-100">
            Sebuah surat kecil dari Dupen
          </p>

          <div className="mb-8 text-center text-pink-300">
            ───── ♡ ─────
          </div>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-6 whitespace-pre-line text-sm leading-7 text-pink-50/90 sm:text-base sm:leading-8 ${
                index === 0 || index === paragraphs.length - 1
                  ? "text-center font-serif text-lg italic text-pink-300 sm:text-xl"
                  : ""
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-8 text-center text-pink-300">
            ───── ♡ ─────
          </div>

          <p className="mt-5 text-center text-xs text-pink-100/70">
            Scroll pelan-pelan ke bawah ya, Pinii... ♡
          </p>

          <button
            onClick={onComplete}
            className="mt-8 block w-full rounded-full border border-pink-300/40 px-5 py-3 text-sm text-pink-200 transition hover:bg-pink-400/10"
          >
            Peluk jauh buat Pinii ♡
          </button>
        </article>
      </div>
    </div>
  );
};

export default function InteractionFlow({ onFlowComplete }: { onFlowComplete: () => void }) {
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
