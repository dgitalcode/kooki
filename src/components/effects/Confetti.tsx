const pieces = [
  { left: "12%", delay: "0s", color: "#C9B07A", rotate: "12deg" },
  { left: "28%", delay: "1.1s", color: "#E8B4B8", rotate: "-16deg" },
  { left: "44%", delay: "0.4s", color: "#E6D5B8", rotate: "22deg" },
  { left: "58%", delay: "1.8s", color: "#C45C6A", rotate: "-10deg" },
  { left: "72%", delay: "0.7s", color: "#C9B07A", rotate: "18deg" },
  { left: "86%", delay: "2.2s", color: "#E8B4B8", rotate: "-20deg" },
];

type ConfettiProps = {
  active?: boolean;
};

export function Confetti({ active = false }: ConfettiProps) {
  if (!active) return null;

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((piece, index) => (
        <span
          key={`${piece.left}-${index}`}
          className="confetti-piece"
          style={{
            left: piece.left,
            background: piece.color,
            animationDelay: piece.delay,
            transform: `rotate(${piece.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
