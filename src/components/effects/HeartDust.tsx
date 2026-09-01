function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const hearts = Array.from({ length: 8 }, (_, index) => {
  const random = mulberry32(index + 73);
  const side = index % 2 === 0;
  return {
    id: index,
    left: side ? `${3 + random() * 14}%` : `${83 + random() * 14}%`,
    top: `${8 + random() * 84}%`,
    size: `${0.55 + random() * 0.45}rem`,
    delay: `${random() * 9}s`,
    duration: `${11 + random() * 9}s`,
    opacity: 0.12 + random() * 0.16,
  };
});

type HeartDustProps = {
  className?: string;
};

export function HeartDust({ className = "" }: HeartDustProps) {
  return (
    <div className={`heart-dust-layer ${className}`.trim()} aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-speck"
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: heart.size,
            opacity: heart.opacity,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
          }}
        >
          ♡
        </span>
      ))}
    </div>
  );
}
