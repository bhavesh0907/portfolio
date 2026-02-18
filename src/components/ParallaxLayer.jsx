import { useEffect, useState } from "react";

export default function ParallaxLayer({ speed = 0.02 }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * speed;
      const y = (e.clientY - window.innerHeight / 2) * speed;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [speed]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    />
  );
}
