import Reveal from "../components/Reveal";

export default function Skills() {
  const skills = [
    "Python",
    "React",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "FastAPI",
    "MySQL",
    "Git",
    "Java",
    "C++",
  ];

  return (
    <section id="skills" className="py-32 text-center px-6">
      <Reveal>
        <h2 className="text-4xl font-bold text-accent mb-16">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-card py-6 rounded-xl border border-gray-800 
                         hover:border-accent hover:-translate-y-2 
                         transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
