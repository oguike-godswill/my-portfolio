"use client";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient orbs - pure CSS, GPU-accelerated */}
      <div
        className="orb absolute rounded-full bg-accent/20 blur-[80px] will-change-transform"
        style={{
          width: 600,
          height: 600,
          left: "-10%",
          top: "-5%",
          animation: "orb1 20s ease-in-out infinite",
        }}
      />
      <div
        className="orb absolute rounded-full bg-purple-500/15 blur-[80px] will-change-transform"
        style={{
          width: 500,
          height: 500,
          right: "10%",
          top: "15%",
          animation: "orb2 25s ease-in-out infinite",
        }}
      />
      <div
        className="orb absolute rounded-full bg-cyan-500/10 blur-[80px] will-change-transform"
        style={{
          width: 450,
          height: 450,
          left: "25%",
          bottom: "10%",
          animation: "orb3 22s ease-in-out infinite",
        }}
      />
      <div
        className="orb absolute rounded-full bg-amber-500/10 blur-[80px] will-change-transform"
        style={{
          width: 350,
          height: 350,
          right: "5%",
          bottom: "20%",
          animation: "orb4 18s ease-in-out infinite",
        }}
      />
    </div>
  );
}
