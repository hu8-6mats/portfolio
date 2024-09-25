'use client';

import { Canvas } from '@react-three/fiber';
import styles from './SphereCanvas.module.css';
import Sphere from './elements/Sphere';


type SphereCanvasProps = {
    elementType: 'Dot' | 'Hexagon';
    elementQuantity: number;
    areElementsRandomized: boolean;
    cameraPosition?: [number, number, number];
    cameraFOV?: number;
    lightIntensity?: number;
    lightPosition?: [number, number, number];
};

const SphereCanvas: React.FC<SphereCanvasProps> = ({
    elementType,
    elementQuantity,
    areElementsRandomized,
    cameraPosition = [0, 0, 3],
    cameraFOV = 90,
    lightIntensity = 2,
    lightPosition = [0, 0, 0],
}) => {
    let sphereContent = null;

    switch (elementType) {
        case 'Dot':
            sphereContent = (
                <Sphere
                    elementType='Dot'
                    elementQuantity={elementQuantity}
                    areElementsRandomized={areElementsRandomized}
                />
            );

            break;
        case 'Hexagon':
            sphereContent = (
                <Sphere
                    elementType='Hexagon'
                    elementQuantity={elementQuantity}
                    areElementsRandomized={areElementsRandomized}
                />
            );

            break;
        default:
            break;
    }

    return (
        <Canvas
            camera={{ position: cameraPosition, fov: cameraFOV }}
            className={styles.canvas}
        >
            <ambientLight intensity={lightIntensity} />
            <pointLight position={lightPosition} />
            {sphereContent}
        </Canvas>
    );
};

export default SphereCanvas;
