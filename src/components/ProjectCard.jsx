import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ title, description, tech, github }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onClick={() => setOpen(true)}
        className="bg-card p-8 rounded-2xl border border-gray-800 
                   hover:border-accent cursor-pointer transition"
      >
        <h3 className="text-2xl font-semibold text-accent mb-4">
          {title}
        </h3>

        <p className="text-secondaryText">
          {description.substring(0, 120)}...
        </p>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="bg-card p-10 rounded-2xl max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl text-accent mb-4">{title}</h3>

              <p className="text-secondaryText mb-6 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm border border-accent text-accent px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accentHover"
              >
                View on GitHub →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
