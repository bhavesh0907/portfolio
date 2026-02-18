import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        window.scrollY /
        (document.body.scrollHeight - window.innerHeight);
      setScroll(scrolled * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-accent z-50"
      style={{ width: `${scroll}%` }}
    />
  );
}
