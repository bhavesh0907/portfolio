import { useEffect, useRef } from "react";

export default function AIBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let mouse = { x: -1000, y: -1000 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const NODE_COUNT = 35;

    const nodes = Array.from({ length: NODE_COUNT }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const packets = [];

    function spawnPacket(a, b) {
      packets.push({ from: a, to: b, t: 0 });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // 🔥 HEATMAP GRADIENT (Step 2 combined)
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        250
      );
      gradient.addColorStop(0, "rgba(249,115,22,0.18)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      // Draw connections + spawn packets
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.strokeStyle = `rgba(249,115,22,${1 - dist / 140})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            if (Math.random() < 0.002) {
              spawnPacket(nodes[i], nodes[j]);
            }
          }
        }
      }

      // Draw data packets
      packets.forEach((p, index) => {
        p.t += 0.02;
        if (p.t >= 1) packets.splice(index, 1);

        const x = p.from.x + (p.to.x - p.from.x) * p.t;
        const y = p.from.y + (p.to.y - p.from.y) * p.t;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249,115,22,0.9)";
        ctx.fill();
      });

      // Draw nodes (pulse near cursor)
      nodes.forEach((n) => {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        const radius = d < 120 ? 4 : 2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249,115,22,0.9)";
        ctx.fill();
      });

      // 🔥 CNN KERNEL SLIDING WINDOW (Step 3 combined)
      const kernelSize = 80;
      const kernelX = (Date.now() * 0.05) % w;
      const kernelY = (Date.now() * 0.03) % h;

      ctx.strokeStyle = "rgba(249,115,22,0.4)";
      ctx.lineWidth = 1;
      ctx.strokeRect(kernelX, kernelY, kernelSize, kernelSize);

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
}
