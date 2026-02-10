
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Stars, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { login } from "./actions";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(password);
    if (result.success) {
      router.push("/main");
    } else {
      setError("ayyyooooo riaaaa you can't get this wrong.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      <div className="z-10 text-center px-4 md:px-8 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-pink-200/50 text-pink-700 text-sm font-medium tracking-wide mb-4 border border-pink-200 backdrop-blur-sm">
            Hehehehe ❤️
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 font-[family-name:var(--font-playfair)] tracking-tight drop-shadow-sm">
            Riaaaaaa!!!!!
          </h1>
          <p className="mt-6 text-slate-600 text-lg md:text-xl font-[family-name:var(--font-outfit)] leading-relaxed">
            Swalpa special efforts I have put and creating a special palce for you on the internet
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="open-button"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/80 hover:bg-white text-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 backdrop-blur-md"
            >
              <Heart className="w-5 h-5 fill-current animate-pulse" />
              <span className="font-semibold text-lg">Click for a Surprise</span>
              <div className="absolute inset-0 rounded-full ring-2 ring-pink-400/20 group-hover:ring-pink-500/40 transition-all" />
            </motion.button>
          ) : (
            <motion.div
              key="content"
              initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-pink-100 max-w-lg mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-pink-50 rounded-full text-pink-500">
                  <Lock className="w-8 h-8" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-2 font-[family-name:var(--font-playfair)]">
                Locked for You
              </h2>
              <p className="text-slate-500 text-sm mb-6 italic">
                "he was the reason for our first kiss"
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter the secret name..."
                    className="w-full px-4 py-3 rounded-xl border border-pink-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all text-center text-slate-800 placeholder:text-slate-400"
                    autoFocus
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 font-medium"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-semibold shadow-lg shadow-pink-200 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Unlock</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 text-center z-10 opacity-60">
        <p className="text-sm text-pink-400 font-medium flex items-center gap-2">
          Skibidi made it with <Heart className="w-3 h-3 fill-current" /> for you
        </p>
      </div>
    </main>
  );
}
