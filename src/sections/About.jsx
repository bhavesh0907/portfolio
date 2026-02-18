import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-accent mb-12">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto text-secondaryText leading-relaxed space-y-6">

          <p>
            I am a final-year Computer Science Engineering student with a strong
            foundation in Machine Learning, Computer Vision, and backend development.
            I enjoy building structured, scalable, and practical software solutions.
          </p>

          <p>
            My academic and project work focuses on solving real-world problems
            using deep learning models and efficient system design. I am particularly
            interested in AI-driven applications and performance-optimized backend systems.
          </p>

          <p>
            I value clean architecture, measurable outcomes, and continuous learning.
            Currently seeking opportunities where I can contribute as a Software
            or Machine Learning Engineer.
          </p>

        </div>
      </Reveal>
    </section>
  );
}
