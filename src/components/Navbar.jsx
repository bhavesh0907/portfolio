import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", to: "about" },
  { name: "Metrics", to: "metrics" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Resume", to: "resume" },
  { name: "Socials", to: "socials" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`hidden md:flex fixed top-6 inset-x-0 justify-center z-50 transition-all
        ${scrolled ? "scale-90" : "scale-100"}`}
      >
        <div
          className={`relative flex items-center gap-8 bg-card/70 backdrop-blur-xl
          border border-gray-800 rounded-full shadow-xl transition-all
          ${scrolled ? "px-6 py-2" : "px-10 py-3"}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              offset={-120}
              onSetActive={() => setActive(item.to)}
              className="relative cursor-pointer text-secondaryText text-sm font-medium hover:text-accent"
            >
              {item.name}

              {active === item.to && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-accent rounded-full"
                />
              )}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-xl p-3 rounded-lg border border-gray-800"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-8 text-xl z-40">
          {navItems.map((item) => (
            <Link
              key={item.to}
              onClick={() => setOpen(false)}
              to={item.to}
              smooth
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
