// src/components/Project3DPlaceholder.js
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// Inner component for the 3D mesh and its animation
const SpinningBox = ({ projectName, onClick }) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5; // Auto-rotate
            if (hovered) {
                // Optional: slightly change rotation speed or scale on hover
                meshRef.current.rotation.x += delta * 0.2;
            }
        }
    });

    return (
        <mesh
            ref={meshRef}
            onClick={(event) => {
                event.stopPropagation(); // prevent click from bubbling to OrbitControls if any
                setActive(!active);
                if (onClick) onClick();
            }}
            onPointerOver={(event) => {
                event.stopPropagation();
                setHover(true);
                document.body.style.cursor = 'pointer';
            }}
            onPointerOut={(event) => {
                setHover(false);
                document.body.style.cursor = 'auto';
            }}
            scale={active ? 1.2 : 1} // Scale up when active/clicked
        >
            <boxGeometry args={[2, 2, 2]} /> {/* Simple cube dimensions */}
            <meshStandardMaterial color={hovered ? '#4AA17C' : '#266144'} /> {/* Accent colors */}
            <Text
                position={[0, 0, 1.1]} // Position text slightly in front of the cube face
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={1.8} // Max width of text block
                textAlign="center"
            >
                {projectName.split(' ').join('\n')} {/* Split name for multiline */}
            </Text>
        </mesh>
    );
};

const Project3DPlaceholder = ({ projectName, onClick }) => {
    return (
        <div style={{ width: '100%', height: '200px', cursor: 'grab' }}> {/* Match image height */}
            <Canvas camera={{ position: [0, 1, 4], fov: 50 }}> {/* Adjust camera as needed */}
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                
                <SpinningBox projectName={projectName} onClick={onClick} />
                
                <OrbitControls 
                    enableZoom={true} 
                    enablePan={false} // Disable panning to keep focus on the object
                    minPolarAngle={Math.PI / 3} // Limit vertical rotation
                    maxPolarAngle={Math.PI * (2/3)} // Limit vertical rotation
                    minDistance={3} // Min zoom distance
                    maxDistance={7} // Max zoom distance
                />
            </Canvas>
        </div>
    );
};

export default Project3DPlaceholder;