import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
  id="about"
  className="min-h-screen flex flex-col items-center justify-center text-center px-6
  bg-gradient-to-br from-[#0b0e14] via-[#10182a] to-[#0b0e14]
  animate-gradient"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-accent">Bhavesh Mishra</span>
        </h1>

        <h2 className="text-xl text-secondaryText mb-6">
          <Typewriter
            words={[
              "Machine Learning Engineer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-secondaryText mb-10 leading-relaxed">
          Final-year Computer Science Engineering student with practical experience in Machine Learning. Interested in building real-world AI systems and scalable applications.
        </p>

      </motion.div>

    </section>
  );
}
