"use client";

import { Line, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ================= TYPES ================= */
export type GlobeConfig = {
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

/* ================= DOT GLOBE ================= */
function DotGlobe({ config }: { config?: GlobeConfig }) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(
    () => new THREE.SphereGeometry(2.8, 140, 140),
    []
  );

  useFrame(() => {
    if (ref.current && config?.autoRotate) {
      ref.current.rotation.y += config.autoRotateSpeed ?? 0.0015;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#e5f0ff"
        size={0.018}
        sizeAttenuation={false}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

/* ================= CITY DATA ================= */
const CITIES = [
  new THREE.Vector3(1.4, 0.6, 2.3),
  new THREE.Vector3(-1.9, 0.3, 1.8),
  new THREE.Vector3(2.2, 0.9, -1.6),
  new THREE.Vector3(-2.1, -0.6, -1.3),
];

/* ================= ARC WITH MOVING DOT ================= */
function AnimatedArc({
  start,
  end,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
}) {
  const progress = useRef(0);
  const dotRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const mid = start.clone().add(end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(3.4);
    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(80), [curve]);

  useFrame((_, delta) => {
    progress.current += delta * 0.25;
    if (progress.current > 1) progress.current = 0;

    const pos = curve.getPoint(progress.current);
    dotRef.current?.position.copy(pos);
  });

  return (
    <>
      {/* Arc line */}
      <Line
        points={points}
        color="#38bdf8"
        transparent
        opacity={0.35}
        lineWidth={1}
      />

      {/* Moving dot */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
    </>
  );
}

/* ================= CONNECTIONS ================= */
function Connections() {
  return (
    <>
      {CITIES.map((start, i) => {
        const end = CITIES[(i + 1) % CITIES.length];
        return <AnimatedArc key={i} start={start} end={end} />;
      })}
    </>
  );
}

/* ================= BOTTOM FADE ================= */
function BottomFade() {
  return (
    <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 6]} />
      <meshBasicMaterial
        color="black"
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

/* ================= WORLD ================= */
export function World({ globeConfig }: { globeConfig?: GlobeConfig }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, 5]} intensity={0.6} />

      {/* Globe */}
      <DotGlobe config={globeConfig} />

      {/* Connections */}
      <Connections />

      {/* Fade */}
      <BottomFade />

      {/* Controls */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
