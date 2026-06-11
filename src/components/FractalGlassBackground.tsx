export default function FractalGlassBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* High-contrast gradient layer — bright fractal colors */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: 'linear-gradient(125deg, #ff2d7b 0%, #7c3aed 20%, #2563eb 40%, #06b6d4 55%, #7c6fff 70%, #ff2d7b 90%, #2563eb 100%)',
            filter: 'blur(80px) saturate(1.5)',
            transform: 'scale(1.2)',
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, #fbbf24 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #ec4899 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, #3b82f6 0%, transparent 50%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, #a78bfa, #f472b6, #2dd4bf, #a78bfa)',
            backgroundSize: '400% 400%',
            animation: 'gradientDrift 15s ease-in-out infinite alternate',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Glass columns — 20% on each side, center 60% clear */}
      <div
        className="absolute inset-0 flex"
        style={{
          gap: '1px',
          maskImage: 'linear-gradient(to right, black 0%, black 20%, transparent 26%, transparent 74%, black 80%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 20%, transparent 26%, transparent 74%, black 80%, black 100%)',
        }}
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="relative flex-1 h-full"
            style={{
              background: `linear-gradient(180deg, rgba(255,255,255,${0.03 + Math.sin(i * 1.5) * 0.02}) 0%, rgba(255,255,255,${0.06 + Math.sin(i * 2.1) * 0.03}) 30%, rgba(255,255,255,${0.02 + Math.sin(i * 1.2) * 0.015}) 60%, rgba(255,255,255,${0.05 + Math.cos(i * 1.8) * 0.025}) 100%)`,
              backdropFilter: `blur(${8 + Math.sin(i * 0.9) * 3}px)`,
              WebkitBackdropFilter: `blur(${8 + Math.sin(i * 0.9) * 3}px)`,
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              boxShadow: `inset 0 0 ${40 + Math.sin(i * 1.3) * 20}px rgba(124, 58, 237, ${0.05 + Math.sin(i * 1.1) * 0.03})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${60 + Math.sin(i * 1.7) * 25}deg, transparent 0%, rgba(255,255,255,${0.08 + Math.sin(i * 0.8) * 0.04}) ${12 + Math.sin(i * 1.4) * 8}%, rgba(255,255,255,${0.14 + Math.sin(i * 2.3) * 0.05}) ${22 + Math.sin(i * 1.1) * 10}%, rgba(255,255,255,${0.08 + Math.cos(i * 1.6) * 0.04}) ${32 + Math.sin(i * 0.7) * 8}%, transparent 48%)`,
                opacity: 0.5 + Math.sin(i * 1.9) * 0.4,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(37,99,235,${0.04 + Math.sin(i * 0.5) * 0.03}) 0%, rgba(124,58,237,${0.03 + Math.cos(i * 0.7) * 0.02}) 30%, rgba(6,182,212,${0.05 + Math.sin(i * 0.9) * 0.03}) 60%, rgba(255,45,123,${0.04 + Math.sin(i * 1.3) * 0.025}) 100%)`,
                mixBlendMode: 'overlay' as const,
                opacity: 0.4,
              }}
            />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,${0.06 + Math.sin(i * 1.5) * 0.04}), transparent)` }}
            />
            <div
              className="absolute top-[5%] bottom-[5%] left-0 w-px"
              style={{ background: `linear-gradient(180deg, transparent, rgba(255,255,255,${0.03 + Math.sin(i * 2.0) * 0.02}), transparent)` }}
            />
          </div>
        ))}
      </div>

      {/* Dark vertical bar — top-to-bottom mask covering center 60% */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(8,8,15,0.95) 24%, rgba(8,8,15,0.95) 76%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Sweeping light across the full width */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 10%, transparent 20%, transparent 35%, rgba(167,139,250,0.03) 45%, rgba(244,114,182,0.025) 50%, transparent 60%, transparent 75%, rgba(255,255,255,0.015) 85%, transparent 100%)',
          animation: 'shimmer 10s ease-in-out infinite alternate',
        }}
      />

      {/* Top fade into glass */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, rgba(8,8,15,1) 0%, transparent 100%)' }}
      />
    </div>
  )
}
