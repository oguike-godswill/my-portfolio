"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* ─── Mouse Tracker ─── */
function MouseTracker({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const autoAngle = useRef(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    autoAngle.current += delta * 0.04;
    const autoX = Math.sin(autoAngle.current) * 0.08;
    const autoY = Math.cos(autoAngle.current * 0.7) * 0.04;
    groupRef.current.rotation.y += (mouse.current.x * 0.3 + autoX - groupRef.current.rotation.y) * 0.015;
    groupRef.current.rotation.x += (mouse.current.y * 0.15 + autoY - groupRef.current.rotation.x) * 0.015;
  });

  return <group ref={groupRef}>{children}</group>;
}

/* ─── Stars ─── */
function Stars({ count = 900 }: { count?: number }) {
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 30 + Math.random() * 70;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const temp = Math.random();
      if (temp < 0.12) {
        col[i * 3] = 0.7; col[i * 3 + 1] = 0.8; col[i * 3 + 2] = 1;
      } else if (temp < 0.22) {
        col[i * 3] = 1; col[i * 3 + 1] = 0.9; col[i * 3 + 2] = 0.7;
      } else if (temp < 0.28) {
        col[i * 3] = 1; col[i * 3 + 1] = 0.7; col[i * 3 + 2] = 0.6;
      } else {
        col[i * 3] = 1; col[i * 3 + 1] = 1; col[i * 3 + 2] = 1;
      }
    }
    return [pos, col];
  }, [count]);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.002;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.09} vertexColors transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

/* ─── Distant Galaxy ─── */
function DistantGalaxy({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.005;
  });

  const arms = useMemo(() => {
    const result: { x: number; y: number; z: number; size: number }[] = [];
    for (let arm = 0; arm < 3; arm++) {
      const armOffset = (arm / 3) * Math.PI * 2;
      for (let i = 0; i < 80; i++) {
        const t = i / 80;
        const angle = armOffset + t * Math.PI * 2.5;
        const r = t * 3;
        const spread = t * 0.6;
        result.push({
          x: Math.cos(angle) * r + (Math.random() - 0.5) * spread,
          y: (Math.random() - 0.5) * spread * 0.3,
          z: Math.sin(angle) * r + (Math.random() - 0.5) * spread,
          size: 0.02 + Math.random() * 0.03,
        });
      }
    }
    return result;
  }, []);

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Core glow */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#ffeedd" transparent opacity={0.15} />
      </mesh>
      {/* Arm stars */}
      {arms.map((star, i) => (
        <mesh key={i} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[star.size, 6, 6]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.3 + Math.random() * 0.3} />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Asteroid Belt ─── */
function AsteroidBelt() {
  const count = 350;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 16 + (Math.random() - 0.5) * 3;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#9a8a70" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

/* ─── Shooting Star ─── */
function ShootingStar() {
  const groupRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const angle = useRef(0);
  const active = useRef(false);
  const timer = useRef(0);
  const trailPositions = useMemo(() => new Float32Array(30 * 3), []);

  useFrame((_, delta) => {
    timer.current += delta;
    if (!active.current && timer.current > 4 + Math.random() * 6) {
      active.current = true;
      timer.current = 0;
      angle.current = Math.random() * Math.PI * 2;
    }
    if (!active.current) return;

    angle.current += delta * 3;
    const a = angle.current;
    const r = 20 + Math.sin(a * 0.5) * 8;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const y = Math.sin(a * 0.3) * 5;

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z);
      groupRef.current.lookAt(x + Math.cos(a + 0.1) * r, y, z + Math.sin(a + 0.1) * r);
    }

    if (trailRef.current) {
      const positions = trailRef.current.geometry.attributes.position;
      for (let i = 29; i > 0; i--) {
        trailPositions[i * 3] = trailPositions[(i - 1) * 3];
        trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
        trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
      }
      trailPositions[0] = x;
      trailPositions[1] = y;
      trailPositions[2] = z;
      positions.needsUpdate = true;
    }

    if (timer.current > 1.5) {
      active.current = false;
      timer.current = 0;
    }
  });

  return (
    <group>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshBasicMaterial color="#aaddff" transparent opacity={0.3} />
        </mesh>
      </group>
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[trailPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#88bbee" transparent opacity={0.5} sizeAttenuation />
      </points>
    </group>
  );
}

/* ─── Sun with Enhanced Corona ─── */
function Sun() {
  const coronaRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const raysRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coronaRef.current) {
      coronaRef.current.rotation.z = t * 0.04;
      coronaRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(t * 0.6) * 0.06;
      glowRef.current.scale.setScalar(scale);
    }
    if (raysRef.current) {
      raysRef.current.rotation.z = t * 0.02;
    }
  });

  return (
    <group>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#ffd700"
          emissive="#ffa500"
          emissiveIntensity={1.2}
          roughness={0.15}
          metalness={0.1}
        />
      </mesh>
      {/* Inner glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial color="#ff8800" transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>
      {/* Corona */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial color="#ffaa33" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
      {/* Outer haze */}
      <mesh>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial color="#ff6600" transparent opacity={0.015} side={THREE.BackSide} />
      </mesh>
      {/* Light rays */}
      <group ref={raysRef}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh key={i} rotation={[0, 0, (i / 6) * Math.PI * 2]}>
            <planeGeometry args={[0.03, 8]} />
            <meshBasicMaterial color="#ffcc44" transparent opacity={0.04} side={THREE.DoubleSide} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ─── Banded Planet (Gas Giant) ─── */
function BandedPlanet({
  radius,
  bands,
  emissiveIntensity = 0.08,
  atmosphereColor,
  position,
  rotationSpeed = 0.1,
  floatSpeed = 1,
  floatIntensity = 0.3,
  children,
}: {
  radius: number;
  bands: { color: string; y: number; height: number }[];
  emissiveIntensity?: number;
  atmosphereColor?: string;
  position: [number, number, number];
  rotationSpeed?: number;
  floatSpeed?: number;
  floatIntensity?: number;
  children?: React.ReactNode;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.1} floatIntensity={floatIntensity}>
      <group ref={groupRef} position={position}>
        {/* Base sphere */}
        <mesh>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={bands[0].color}
            emissive={bands[0].color}
            emissiveIntensity={emissiveIntensity}
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
        {/* Bands */}
        {bands.map((band, i) => (
          <mesh key={i} position={[0, band.y * radius, 0]}>
            <cylinderGeometry args={[radius * Math.cos(Math.asin(Math.min(band.y, 0.99))), radius * Math.cos(Math.asin(Math.min(band.y + band.height, 0.99))), 0.01, 32]} />
            <meshStandardMaterial
              color={band.color}
              emissive={band.color}
              emissiveIntensity={emissiveIntensity * 0.5}
              roughness={0.6}
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
        {atmosphereColor && (
          <mesh>
            <sphereGeometry args={[radius * 1.12, 32, 32]} />
            <meshBasicMaterial
              color={atmosphereColor}
              transparent
              opacity={0.08}
              side={THREE.BackSide}
            />
          </mesh>
        )}
      </group>
      {children}
    </Float>
  );
}

/* ─── Planet with Atmosphere ─── */
function Planet({
  radius,
  color,
  emissive,
  emissiveIntensity = 0.1,
  atmosphereColor,
  position,
  rotationSpeed = 0.1,
  floatSpeed = 1,
  floatIntensity = 0.3,
  children,
}: {
  radius: number;
  color: string;
  emissive?: string;
  emissiveIntensity?: number;
  atmosphereColor?: string;
  position: [number, number, number];
  rotationSpeed?: number;
  floatSpeed?: number;
  floatIntensity?: number;
  children?: React.ReactNode;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <Float speed={floatSpeed} rotationIntensity={0.1} floatIntensity={floatIntensity}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive ?? color}
          emissiveIntensity={emissiveIntensity}
          roughness={0.55}
          metalness={0.35}
        />
      </mesh>
      {atmosphereColor && (
        <mesh position={position}>
          <sphereGeometry args={[radius * 1.15, 32, 32]} />
          <meshBasicMaterial
            color={atmosphereColor}
            transparent
            opacity={0.1}
            side={THREE.BackSide}
          />
        </mesh>
      )}
      {children}
    </Float>
  );
}

/* ─── Multi-Ring (Saturn-style) ─── */
function MultiRing({
  innerRadius,
  outerRadius,
  rotation,
}: {
  innerRadius: number;
  outerRadius: number;
  rotation: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });

  const rings = useMemo(() => {
    const count = 7;
    const result = [];
    const ringColors = ["#e8d4a8", "#d4b48a", "#c4a070", "#b89060", "#c4a878", "#d8c098", "#b89868"];
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      result.push({
        inner: innerRadius + t * (outerRadius - innerRadius) * 0.95,
        outer: innerRadius + t * (outerRadius - innerRadius) * 0.95 + 0.1,
        opacity: 0.3 - Math.abs(t - 0.5) * 0.35,
        color: ringColors[i],
      });
    }
    return result;
  }, [innerRadius, outerRadius]);

  return (
    <group ref={ref} rotation={rotation}>
      {rings.map((ring, i) => (
        <mesh key={i}>
          <ringGeometry args={[ring.inner, ring.outer, 64]} />
          <meshStandardMaterial
            color={ring.color}
            transparent
            opacity={ring.opacity}
            side={THREE.DoubleSide}
            roughness={0.85}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Orbit Line ─── */
function OrbitLine({ radius, color = "#ffffff", opacity = 0.05, tilt = 0 }: { radius: number; color?: string; opacity?: number; tilt?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2 + tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 6, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

/* ─── Orbiting Moon ─── */
function OrbitingMoon({
  orbitRadius,
  moonRadius,
  speed,
  color,
  startAngle = 0,
}: {
  orbitRadius: number;
  moonRadius: number;
  speed: number;
  color: string;
  startAngle?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  return (
    <group ref={ref} rotation={[0, startAngle, 0]}>
      <mesh position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[moonRadius, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.65} metalness={0.25} />
      </mesh>
    </group>
  );
}

/* ─── Comet ─── */
function Comet() {
  const groupRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const angle = useRef(0);
  const trailPositions = useMemo(() => new Float32Array(80 * 3), []);

  useFrame((_, delta) => {
    angle.current += delta * 0.35;
    const a = angle.current;
    const r = 22 + Math.sin(a * 0.3) * 6;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const y = Math.sin(a * 0.7) * 4;

    if (groupRef.current) groupRef.current.position.set(x, y, z);

    if (trailRef.current) {
      const positions = trailRef.current.geometry.attributes.position;
      for (let i = 79; i > 0; i--) {
        trailPositions[i * 3] = trailPositions[(i - 1) * 3];
        trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
        trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
      }
      trailPositions[0] = x;
      trailPositions[1] = y;
      trailPositions[2] = z;
      positions.needsUpdate = true;
    }
  });

  return (
    <group>
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshBasicMaterial color="#ccddff" />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.35, 12, 12]} />
          <meshBasicMaterial color="#7799cc" transparent opacity={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.6, 12, 12]} />
          <meshBasicMaterial color="#446688" transparent opacity={0.08} />
        </mesh>
      </group>
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[trailPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#99bbdd" transparent opacity={0.45} sizeAttenuation />
      </points>
    </group>
  );
}

/* ─── Scene ─── */
function SolarSystem() {
  return (
    <MouseTracker>
      <group rotation={[0.15, 0, 0.05]}>
        {/* Lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={1.1} color="#ffe8b0" distance={65} decay={2} />
        <pointLight position={[-14, 7, 12]} intensity={0.45} color="#b0c4ff" />
        <pointLight position={[14, -7, -12]} intensity={0.3} color="#ffd4a0" />
        <pointLight position={[0, 10, 0]} intensity={0.15} color="#aabbff" />

        <Stars count={800} />
        <AsteroidBelt />

        {/* Distant galaxies */}
        <DistantGalaxy position={[-30, 15, -40]} scale={0.6} />
        <DistantGalaxy position={[35, -10, -50]} scale={0.4} />

        <Sun />

        {/* Mercury */}
        <Planet
          radius={0.25}
          color="#7a7062"
          emissive="#5a5042"
          emissiveIntensity={0.05}
          position={[4.5, 0.6, 0.8]}
          rotationSpeed={0.4}
          floatSpeed={2.5}
          floatIntensity={0.05}
        />

        {/* Venus */}
        <Planet
          radius={0.45}
          color="#d4956a"
          emissive="#b07040"
          emissiveIntensity={0.12}
          atmosphereColor="#ff9955"
          position={[7, -0.8, 1.8]}
          rotationSpeed={0.25}
          floatSpeed={1.8}
          floatIntensity={0.1}
        />

        {/* Earth */}
        <Planet
          radius={0.5}
          color="#3a8899"
          emissive="#1a6878"
          emissiveIntensity={0.1}
          atmosphereColor="#44aacc"
          position={[10, 1.2, -1.5]}
          rotationSpeed={0.3}
          floatSpeed={1.5}
          floatIntensity={0.15}
        >
          <OrbitingMoon orbitRadius={1.1} moonRadius={0.1} speed={1.8} color="#aaaaaa" />
        </Planet>

        {/* Mars */}
        <Planet
          radius={0.35}
          color="#b05533"
          emissive="#883322"
          emissiveIntensity={0.1}
          atmosphereColor="#cc6644"
          position={[13, -0.6, 2.5]}
          rotationSpeed={0.28}
          floatSpeed={2}
          floatIntensity={0.08}
        />

        {/* Gas Giant — banded */}
        <BandedPlanet
          radius={1.3}
          bands={[
            { color: "#c4a060", y: -0.9, height: 0.2 },
            { color: "#b89050", y: -0.6, height: 0.2 },
            { color: "#d4b878", y: -0.3, height: 0.2 },
            { color: "#a88848", y: 0, height: 0.15 },
            { color: "#c4a868", y: 0.2, height: 0.2 },
            { color: "#b89858", y: 0.5, height: 0.2 },
            { color: "#d4b470", y: 0.8, height: 0.15 },
          ]}
          emissiveIntensity={0.08}
          atmosphereColor="#ddbb77"
          position={[19, 0.8, 4]}
          rotationSpeed={0.12}
          floatSpeed={0.8}
          floatIntensity={0.08}
        >
          <MultiRing innerRadius={1.8} outerRadius={3.2} rotation={[1.3, 0, 0.2]} />
          <OrbitingMoon orbitRadius={3.5} moonRadius={0.14} speed={0.7} color="#8a8a7a" startAngle={0.5} />
          <OrbitingMoon orbitRadius={4.2} moonRadius={0.08} speed={0.5} color="#7a7a6a" startAngle={2} />
        </BandedPlanet>

        {/* Ice Giant */}
        <Planet
          radius={0.65}
          color="#4466aa"
          emissive="#2244aa"
          emissiveIntensity={0.07}
          atmosphereColor="#5577cc"
          position={[26, -1, -4]}
          rotationSpeed={0.15}
          floatSpeed={0.6}
          floatIntensity={0.06}
        >
          <OrbitingMoon orbitRadius={1.3} moonRadius={0.08} speed={1.4} color="#7788aa" />
          <OrbitingMoon orbitRadius={1.8} moonRadius={0.06} speed={1} color="#6677aa" startAngle={3} />
        </Planet>

        <Comet />
        <ShootingStar />
      </group>
    </MouseTracker>
  );
}

/* ─── Wrapper ─── */
export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [2, 5, 22], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent", position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
    >
      <SolarSystem />
    </Canvas>
  );
}
