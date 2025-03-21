import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function AnimatedSphere() {
  const mesh = useRef();
  const randomPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < 100; i++) {
      points.push([
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ]);
    }
    return points;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh ref={mesh} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#79826A"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
}

function Background3D() {
  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-full -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </motion.div>
  );
}

export default Background3D;