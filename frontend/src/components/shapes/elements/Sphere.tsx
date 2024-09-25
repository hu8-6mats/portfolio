'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

import Dot from './Dot';
import Hexagon from './Hexagon';

type SphereProps = {
    elementType: 'Dot' | 'Hexagon';
    elementQuantity: number;
    areElementsRandomized: boolean;
};

const SPHERE_ROTATION_SPEED: number = 0.001;
const SPHERE_OPACITY: number = 0.75;

const Sphere: React.FC<SphereProps> = ({ elementType, elementQuantity, areElementsRandomized }) => {
    const groupReference = useRef<Group>(null!);

    useFrame(() => {
        if (groupReference.current) {
            groupReference.current.rotation.y += SPHERE_ROTATION_SPEED;
        }
    });

    const createSphereElements = (numDots: number) => {
        const dots = [];
        const radius = 1.5;

        for (let i = 0; i < numDots; i++) {
            let theta, phi;
            if (areElementsRandomized) {
                theta = Math.random() * 2 * Math.PI;
                phi = Math.acos(2 * Math.random() - 1);
            } else {
                const phiStep = Math.PI * (3 - Math.sqrt(5));
                theta = phiStep * i;
                phi = Math.acos(1 - (2 * i + 1) / numDots);
            }

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            const position: [number, number, number] = [x, y, z];
            dots.push(position);
        }
        return dots;
    };

    return (
        <group ref={groupReference}>
            {createSphereElements(elementQuantity).map((position, index) => {
                switch (elementType) {
                    case 'Dot':
                        return <Dot key={index} position={position} opacity={SPHERE_OPACITY} />;
                    case 'Hexagon':
                        return <Hexagon key={index} position={position} opacity={SPHERE_OPACITY} />;
                    default:
                        return null;
                }
            })}
        </group>
    );
};

export default Sphere;
