import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <Reveal>
        <h2 className="text-4xl font-bold text-center text-accent mb-20">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          <ProjectCard
            title="Automated Ophthalmic Disease Detection"
            description="Comparative study of CNN architectures (VGG19, ResNet50) for retinal disease classification. Implemented preprocessing pipelines, augmentation strategies, and transfer learning to improve generalization under class imbalance."
            tech={["Python", "TensorFlow", "CNN", "Flask"]}
            github="https://github.com/bhavesh0907/Automated-Ophthalmic-Disease-Detection"
          />

          <ProjectCard
            title="GestureX"
            description="Computer vision-based hand gesture recognition system enabling real-time gamepad control. Integrated MediaPipe and OpenCV with gesture mapping for enhanced accessibility."
            tech={["Python", "MediaPipe", "OpenCV"]}
            github="https://github.com/bhavesh0907/GestureX"
          />

        </div>
      </Reveal>
    </section>
  );
}
