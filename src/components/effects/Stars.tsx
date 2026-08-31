function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const stars = Array.from({ length: 52 }, (_, index) => {
  const random = mulberry32(index + 11);
  return {
    id: index,
    left: `${random() * 100}%`,
    top: `${random() * 100}%`,
    size: `${1 + random() * 2}px`,
    delay: `${random() * 4.5}s`,
    duration: `${3.6 + random() * 3.2}s`,
    opacity: 0.25 + random() * 0.6,
  };
});

export function Stars() {
  return (
    <div className="stars-layer" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
