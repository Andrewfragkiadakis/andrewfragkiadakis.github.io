// src/components/FidgetSpinner3D.js
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// A simple, realistic 3D fidget spinner model (click to spin)
function SpinnerModel() {
  const group = useRef();
  const [speed, setSpeed] = useState(0);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += speed * delta;
      setSpeed((s) => Math.max(s * 0.97, 0));
    }
  });

  // Click to spin
  const handlePointerDown = () => setSpeed(8);

  return (
    <group ref={group} onPointerDown={handlePointerDown}>
      {/* Center bearing */}
      <mesh>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 32]} />
        <meshStandardMaterial color="#4aa17c" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Arms */}
      {[0, 120, 240].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <group key={i} rotation={[0, rad, 0]}>
            <mesh position={[1, 0, 0]}>
              <boxGeometry args={[1.2, 0.22, 0.4]} />
              {/* Use the accent color for the spinner arms */}
              <meshStandardMaterial color="#4aa17c" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* End weight */}
            <mesh position={[1.7, 0, 0]}>
              <cylinderGeometry args={[0.28, 0.28, 0.22, 24]} />
              <meshStandardMaterial color="#4aa17c" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

const FidgetSpinner3D = () => (
  <div style={{
    width: '100%',
    maxWidth: '320px',
    height: '320px',
    margin: '2rem auto',
    border: '1px solid var(--shadow-color)',
    borderRadius: '10px',
    background: 'rgba(0,0,0,0.03)'
  }}>
    <Canvas camera={{ position: [0, 2, 4], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 2]} intensity={0.7} />
      <SpinnerModel />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  </div>
);

export default FidgetSpinner3D;