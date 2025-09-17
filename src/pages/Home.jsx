import { motion } from "framer-motion";

function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-[80vh]">
      <motion.img
  src="/profile.jpg" // 👈 ruta directa desde public/
  alt="David Sandoval"
  className="w-40 h-40 rounded-full border-4 border-green-400 shadow-lg object-cover"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
/>

      <motion.h1
        className="mt-6 text-4xl md:text-5xl font-bold text-green-400"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        David Sandoval
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-pink-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        Ciberseguridad & Web Developer
      </motion.p>
    </section>
  );
}

export default Home;
