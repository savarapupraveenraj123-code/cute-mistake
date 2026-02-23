import { useMemo } from "react";

const emojis = ["♥", "💕", "🌸", "✨", "💗", "🦋", "💖", "🌷"];

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 12 + Math.random() * 20,
        duration: 8 + Math.random() * 14,
        delay: Math.random() * 12,
        emoji: emojis[i % emojis.length],
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
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
