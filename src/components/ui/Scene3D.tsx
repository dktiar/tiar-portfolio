"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

function ParallaxGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Parallax effect following mouse
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.2,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main distorted sphere */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere args={[1.2, 64, 64]} position={[2, 0.5, -1]}>
          <MeshDistortMaterial
            color="#1e40af"
            roughness={0.2}
            metalness={0.9}
            distort={0.4}
            speed={1.5}
            transparent
            opacity={0.5}
          />
        </Sphere>
      </Float>

      {/* Wireframe torus */}
      <Float speed={0.8} rotationIntensity={0.6} floatIntensity={0.3}>
        <Torus args={[1, 0.02, 16, 100]} position={[-2, -1, -2]} rotation={[Math.PI / 4, 0, 0]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} wireframe />
        </Torus>
      </Float>

      {/* Small icosahedron */}
      <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
        <Icosahedron args={[0.4]} position={[-1.5, 1.5, -1]}>
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} wireframe />
        </Icosahedron>
      </Float>

      {/* Floating cubes */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.4}>
        <Box args={[0.3, 0.3, 0.3]} position={[3, -1.5, -2]} rotation={[0.5, 0.5, 0]}>
          <meshBasicMaterial color="#93c5fd" transparent opacity={0.3} wireframe />
        </Box>
      </Float>

      <Float speed={1} rotationIntensity={1.2} floatIntensity={0.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[-3, 0.5, -3]} rotation={[1, 0.3, 0.5]}>
          <meshBasicMaterial color="#1d4ed8" transparent opacity={0.25} wireframe />
        </Box>
      </Float>

      {/* Another torus ring */}
      <Float speed={0.5} rotationIntensity={0.3} floatIntensity={0.2}>
        <Torus args={[2.5, 0.01, 16, 100]} position={[0, 0, -4]} rotation={[Math.PI / 3, 0.5, 0]}>
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.15} />
        </Torus>
      </Float>
    </group>
  );
}

function GridFloor() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = (clock.getElapsedTime() * 0.3) % 1;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[30, 30, "#1e3a5f", "#0f1729"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function FloatingDots() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 100; i++) {
      pts.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
    }
    return new Float32Array(pts);
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  // Respect user's reduced motion preference
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  return (
    <div className="absolute inset-0 opacity-70" style={{ mixBlendMode: "screen" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.4} color="#93c5fd" />
          <pointLight position={[-5, -5, -5]} intensity={0.2} color="#1d4ed8" />
          <ParallaxGroup />
          <FloatingDots />
          <GridFloor />
          <fog attach="fog" args={["#0a0a0a", 5, 20]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
