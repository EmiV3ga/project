import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

function Background3D() {
  const count = 100;
  const positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push([
        Math.random() * 40 - 20,
        Math.random() * 40 - 20,
        Math.random() * 40 - 20
      ]);
    }
    return positions;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <color attach="background" args={['#1A2D42']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {positions.map((position, i) => (
          <Sphere key={i} position={position as [number, number, number]} args={[0.1]}>
            <meshStandardMaterial color="#AAB7B7" />
          </Sphere>
        ))}
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}

export default Background3D;