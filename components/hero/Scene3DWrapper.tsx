"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D").then((mod) => mod.Scene3D), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background" />,
});

export function Scene3DWrapper() {
  return (
    <div className="scene-3d fixed inset-0 z-0 h-screen w-full">
      <Scene3D />
      {/* Gradient fade at bottom for seamless blend into page content */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
