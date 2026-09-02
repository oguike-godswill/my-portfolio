"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D").then((mod) => mod.Scene3D), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 bg-background" />,
});

export function Scene3DWrapper() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}
