import { useEffect, useRef } from "react";

export default function NeuralWave() {
  const ref = useRef();

  useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.01;
      ref.current.style.backgroundPosition = `${t * 40}px ${t * 20}px`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 opacity-20 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at center, rgba(249,115,22,0.15), transparent 70%)",
      }}
    />
  );
}
