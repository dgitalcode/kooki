function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const specks = Array.from({ length: 14 }, (_, index) => {
  const random = mulberry32(index + 41);
  return {
    id: index,
    left: `${8 + random() * 84}%`,
    top: `${20 + random() * 70}%`,
    delay: `${random() * 8}s`,
    duration: `${12 + random() * 10}s`,
  };
});

export function Particles() {
  return (
    <div className="particles-layer" aria-hidden="true">
      {specks.map((speck) => (
        <span
          key={speck.id}
          className="dust"
          style={{
            left: speck.left,
            top: speck.top,
            animationDelay: speck.delay,
            animationDuration: speck.duration,
          }}
        />
      ))}
    </div>
  );
}
