import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialCard({ name, url, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.08 }}
        onClick={() => setOpen(true)}
        className="bg-card w-20 h-20 flex items-center justify-center rounded-xl 
                   border border-gray-800 hover:border-accent cursor-pointer transition"
      >
        <div className="text-3xl text-accent">
          {icon}
        </div>
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
              className="bg-card p-10 rounded-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl text-accent mb-6">{name}</h3>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accentHover transition"
              >
                Open Profile →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
