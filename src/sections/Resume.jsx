import Reveal from "../components/Reveal";

export default function Resume() {
  return (
    <section id="resume" className="py-32 px-6 text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-accent mb-10">
          Resume
        </h2>

        <p className="text-secondaryText mb-10">
          Download my resume to know more about my academic background and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="bg-accent text-white px-8 py-4 rounded-xl hover:bg-accentHover transition"
        >
          Download Resume →
        </a>
      </Reveal>
    </section>
  );
}
