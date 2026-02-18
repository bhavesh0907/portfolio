import Reveal from "../components/Reveal";
import kpmgLogo from "../assets/kpmg.png";
import ariseLogo from "../assets/arisepoint.png";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <Reveal>
        <h2 className="text-4xl font-bold text-accent text-center mb-20">
          Experience
        </h2>

        <div className="relative max-w-3xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/40"></div>

          {/* Arise Point */}
          <div className="relative pl-20 mb-16">

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute left-3 top-6 w-6 h-6 bg-accent rounded-full"
            />

            <div className="bg-card p-8 rounded-xl border border-gray-800">

              <div className="flex items-center gap-4 mb-3">
                <img src={ariseLogo} className="w-10" alt="Arise Point" />
                <div>
                  <h3 className="text-accent font-semibold text-lg">
                    Arise Point — Business Development Intern
                  </h3>
                  <p className="text-sm text-secondaryText">
                    March 2025 – May 2025 • Chennai, Tamil Nadu
                  </p>
                </div>
              </div>

              <ul className="list-disc ml-5 text-secondaryText space-y-2">
                <li>Worked with AI content generation and prompt engineering.</li>
                <li>Improved quality and accuracy of AI outputs.</li>
                <li>Applied technical writing for business development tasks.</li>
              </ul>

            </div>
          </div>

          {/* KPMG */}
          <div className="relative pl-20">

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute left-3 top-6 w-6 h-6 bg-accent rounded-full"
            />

            <div className="bg-card p-8 rounded-xl border border-gray-800">

              <div className="flex items-center gap-4 mb-3">
                <img src={kpmgLogo} className="w-10" alt="KPMG" />
                <div>
                  <h3 className="text-accent font-semibold text-lg">
                    KPMG India — Academic Trainee Intern
                  </h3>
                  <p className="text-sm text-secondaryText">
                    Dec 2024 – Jan 2025 • Gurgaon, Haryana
                  </p>
                </div>
              </div>

              <ul className="list-disc ml-5 text-secondaryText space-y-2">
                <li>Worked on database normalization for vendor profiling systems.</li>
                <li>Contributed to technical documentation in G&PS – DGA.</li>
                <li>Gained exposure to consulting workflows and public policy projects.</li>
              </ul>

            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
