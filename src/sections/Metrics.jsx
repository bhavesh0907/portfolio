import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { FaProjectDiagram, FaBriefcase, FaCode, FaTools } from "react-icons/fa";

export default function Metrics() {
  return (
    <section id="metrics" className="py-32 px-6 text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-accent mb-16">
          Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">

          <Metric icon={<FaProjectDiagram />} value={10} suffix="+" label="Projects" />

          <Metric icon={<FaBriefcase />} value={2} label="Internships" />

          <Metric icon={<FaCode />} value={1600} suffix="+" label="LeetCode Problems" />

          <Metric icon={<FaTools />} value={5} suffix="+" label="Core Technologies" />

        </div>
      </Reveal>
    </section>
  );
}

function Metric({ icon, value, suffix, label }) {
  return (
    <div className="bg-card p-8 rounded-xl border border-gray-800 hover:border-accent transition">
      <div className="text-accent text-3xl mb-4 flex justify-center">{icon}</div>

      <p className="text-4xl text-accent font-bold">
        <Counter end={value} suffix={suffix} />
      </p>

      <p className="text-secondaryText mt-2">{label}</p>
    </div>
  );
}
