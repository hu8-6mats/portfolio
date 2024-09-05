'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import Sphere from './elements/Sphere';

import styles from './SphereCanvas.module.css';

type SphereCanvasProps = {
    elementType: 'Dot' | 'Hexagon';
    elementQuantity: number;
    areElementsRandomized: boolean;
    primaryDelay: number;
    cameraPosition: [number, number, number];
    cameraFOV: number;
    lightIntensity: number;
    lightPosition: [number, number, number];
};

const SphereCanvas: React.FC<SphereCanvasProps> = ({
    elementType,
    areElementsRandomized,
    elementQuantity,
    primaryDelay,
    cameraPosition,
    cameraFOV,
    lightIntensity,
    lightPosition,
}) => {
    const [isSphereVisible, setIsSphereVisible] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSphereVisible(true);
            setIsVisible(true);
        }, primaryDelay);

        return () => clearTimeout(timer);
    }, [primaryDelay]);

    let sphereContent = null;

    switch (elementType) {
        case 'Dot':
            sphereContent = isSphereVisible ? (
                <Sphere
                    elementType='Dot'
                    areElementsRandomized={areElementsRandomized}
                    elementQuantity={elementQuantity}
                />
            ) : null;
            break;
        case 'Hexagon':
            sphereContent = isSphereVisible ? (
                <Sphere
                    elementType='Hexagon'
                    areElementsRandomized={areElementsRandomized}
                    elementQuantity={elementQuantity}
                />
            ) : null;
            break;
        default:
            break;
    }

    return (
        <Canvas
            camera={{ position: cameraPosition, fov: cameraFOV }}
            className={`${styles.canvas} ${isVisible ? styles.canvasVisible : ''}`}
        >
            <ambientLight intensity={lightIntensity} />
            <pointLight position={lightPosition} />
            {sphereContent}
        </Canvas>
    );
};

export default SphereCanvas;
