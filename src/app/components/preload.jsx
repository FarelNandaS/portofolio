import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      // Animasi menghilang (fade out) saat selesai loading
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#588157]" 
    >
      <div className="text-center space-y-4">
        {/* Logo Inisial dengan Animasi Denyut Premium */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-white text-5xl font-bold tracking-wider"
        >
          FN
        </motion.div>

        {/* Garis Progress Bar Minimalis */}
        <div className="w-24 h-[2px] bg-white/20 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}