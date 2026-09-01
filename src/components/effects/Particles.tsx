function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const specks = Array.from({ length: 12 }, (_, index) => {
  const random = mulberry32(index + 41);
  return {
    id: index,
    left: `${8 + random() * 84}%`,
    top: `${20 + random() * 70}%`,
    delay: `${random() * 8}s`,
    duration: `${12 + random() * 10}s`,
  };
});

const edgeHearts = Array.from({ length: 5 }, (_, index) => {
  const random = mulberry32(index + 91);
  const startSide = index % 2 === 0;
  return {
    id: `h-${index}`,
    left: startSide ? `${4 + random() * 10}%` : `${86 + random() * 10}%`,
    top: `${12 + random() * 76}%`,
    delay: `${random() * 7}s`,
    duration: `${14 + random() * 8}s`,
    size: `${0.55 + random() * 0.35}rem`,
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
      {edgeHearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-speck heart-speck-fixed"
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: heart.size,
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
