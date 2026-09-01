"use client";

import { useRef, useMemo, useCallback, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

/* ─── Mouse Tracker ─── */
function MouseTracker({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = mouse.current.y * 0.15;
    const targetY = mouse.current.x * 0.15;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
  });

  return <group ref={groupRef}>{children}</group>;
}

/* ─── Scroll Camera ─── */
function ScrollCamera() {
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const targetScroll = useRef(0);

  useEffect(() => {
    const handler = () => {
      targetScroll.current = window.scrollY / (window.innerHeight || 1);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useFrame(() => {
    scrollRef.current += (targetScroll.current - scrollRef.current) * 0.05;
    camera.position.y = -scrollRef.current * 2;
    camera.rotation.x = -scrollRef.current * 0.1;
  });

  return null;
}

/* ─── Interactive Shape Wrapper ─── */
function GlowShape({
  children,
  position,
  rotationSpeed = [0.15, 0.1, 0],
  floatSpeed = 1.5,
  floatIntensity = 0.8,
}: {
  children: React.ReactNode;
  position: [number, number, number];
  rotationSpeed?: [number, number, number];
  floatSpeed?: number;
  floatIntensity?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * rotationSpeed[0];
    ref.current.rotation.y += delta * rotationSpeed[1];
    ref.current.rotation.z += delta * rotationSpeed[2];
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.3} floatIntensity={floatIntensity}>
      <group
        ref={ref}
        position={position}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
        scale={hovered ? 1.1 : 1}
      >
        {children}
      </group>
    </Float>
  );
}

/* ─── Geometric Shapes ─── */
function Torus() {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <GlowShape position={[-3.5, 1.5, -2]} rotationSpeed={[0.15, 0, 0.1]} floatSpeed={1.5}>
      <mesh ref={ref}>
        <torusGeometry args={[1, 0.35, 16, 32]} />
        <meshStandardMaterial
          color="#1a2a0a"
          emissive="#d8ff3e"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[1, 0.36, 16, 32]} />
        <meshStandardMaterial
          color="#d8ff3e"
          wireframe
          transparent
          opacity={0.3}
          emissive="#d8ff3e"
          emissiveIntensity={0.5}
        />
      </mesh>
    </GlowShape>
  );
}

function Icosahedron() {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <GlowShape position={[3, -1, -1.5]} rotationSpeed={[0.08, 0.2, 0]} floatSpeed={2}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#0a1a2a"
          emissive="#00bfff"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.12, 0]} />
        <meshStandardMaterial
          color="#d8ff3e"
          wireframe
          transparent
          opacity={0.25}
          emissive="#d8ff3e"
          emissiveIntensity={0.4}
        />
      </mesh>
    </GlowShape>
  );
}

function Octahedron() {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <GlowShape position={[-2, -2.5, -1]} rotationSpeed={[0, -0.25, 0.12]} floatSpeed={1.8}>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#d8ff3e"
          emissiveIntensity={0.5}
          roughness={0.4}
          metalness={0.6}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.82, 0]} />
        <meshStandardMaterial
          color="#a1a1a1"
          wireframe
          transparent
          opacity={0.2}
          emissive="#a1a1a1"
          emissiveIntensity={0.3}
        />
      </mesh>
    </GlowShape>
  );
}

function Sphere() {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <GlowShape position={[4, 2, -3]} rotationSpeed={[0, 0.1, 0]} floatSpeed={1.2}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial
          color="#1a0a1a"
          emissive="#ff69b4"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.72, 16, 16]} />
        <meshStandardMaterial
          color="#d8ff3e"
          wireframe
          transparent
          opacity={0.2}
          emissive="#d8ff3e"
          emissiveIntensity={0.3}
        />
      </mesh>
    </GlowShape>
  );
}

function TorusKnot() {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <GlowShape position={[0, 2.5, -2.5]} rotationSpeed={[0.12, 0.18, 0]} floatSpeed={1}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.6, 0.2, 64, 8, 2, 3]} />
        <meshStandardMaterial
          color="#0a0a2a"
          emissive="#7b68ee"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh>
        <torusKnotGeometry args={[0.61, 0.21, 64, 8, 2, 3]} />
        <meshStandardMaterial
          color="#d8ff3e"
          wireframe
          transparent
          opacity={0.2}
          emissive="#d8ff3e"
          emissiveIntensity={0.4}
        />
      </mesh>
    </GlowShape>
  );
}

function Dodecahedron() {
  const ref = useRef<THREE.Mesh>(null);
  return (
    <GlowShape position={[-4, 0, -2]} rotationSpeed={[0, 0, 0.15]} floatSpeed={1.6}>
      <mesh ref={ref}>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#0a1a1a"
          emissive="#00bfff"
          emissiveIntensity={0.4}
          roughness={0.4}
          metalness={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh>
        <dodecahedronGeometry args={[0.62, 0]} />
        <meshStandardMaterial
          color="#d8ff3e"
          wireframe
          transparent
          opacity={0.2}
          emissive="#d8ff3e"
          emissiveIntensity={0.3}
        />
      </mesh>
    </GlowShape>
  );
}

/* ─── Constellation Particles ─── */
function ConstellationParticles() {
  const count = 80;
  const maxDistance = 2.5;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return pos;
  }, []);

  const linePositions = useMemo(() => new Float32Array(count * count * 6), []);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  useFrame((_, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    pointsRef.current.rotation.y += delta * 0.02;

    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    let lineIndex = 0;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions[lineIndex++] = posArray[i * 3];
          linePositions[lineIndex++] = posArray[i * 3 + 1];
          linePositions[lineIndex++] = posArray[i * 3 + 2];
          linePositions[lineIndex++] = posArray[j * 3];
          linePositions[lineIndex++] = posArray[j * 3 + 1];
          linePositions[lineIndex++] = posArray[j * 3 + 2];
        }
      }
    }

    const lineGeo = linesRef.current.geometry;
    lineGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions.slice(0, lineIndex), 3)
    );
    lineGeo.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#d8ff3e" transparent opacity={0.7} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#d8ff3e" transparent opacity={0.08} />
      </lineSegments>
    </>
  );
}

/* ─── Post Processing ─── */
function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new THREE.Vector2(0.0006, 0.0006)}
      />
      <Vignette eskil={false} offset={0.1} darkness={0.7} />
    </EffectComposer>
  );
}

/* ─── Main Scene ─── */
export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#d8ff3e" />
      <pointLight position={[-5, -5, 3]} intensity={0.4} color="#7b68ee" />
      <pointLight position={[0, 3, -2]} intensity={0.3} color="#00bfff" />
      <pointLight position={[-3, 2, 4]} intensity={0.3} color="#ff69b4" />

      <ScrollCamera />

      <MouseTracker>
        <Torus />
        <Icosahedron />
        <Octahedron />
        <Sphere />
        <TorusKnot />
        <Dodecahedron />
        <ConstellationParticles />
      </MouseTracker>

      <PostProcessing />
    </Canvas>
  );
}
