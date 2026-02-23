import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 14 + Math.random() * 18,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-particle"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
