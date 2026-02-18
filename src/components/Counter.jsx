import { useEffect, useRef, useState } from "react";

export default function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
