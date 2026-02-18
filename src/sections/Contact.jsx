import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-accent mb-12">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/mzdagjpk"
          method="POST"
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-card p-4 rounded border border-gray-800"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-card p-4 rounded border border-gray-800"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-card p-4 rounded border border-gray-800"
          ></textarea>

          <button
            type="submit"
            className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accentHover transition"
          >
            Send Message →
          </button>
        </form>
      </Reveal>
    </section>
  );
}
