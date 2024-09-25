import { Shape, Matrix4, Vector3, Euler } from 'three';
import React from 'react';

type HexagonProps = {
    position: [number, number, number];
    opacity: number;
};

const HEXAGON_COLOR: string = 'white';
const HEXAGON_RADIUS: number = 0.075;

const Hexagon: React.FC<HexagonProps> = ({ position, opacity }) => {
    const hexagonShape = new Shape();

    for (let i: number = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = HEXAGON_RADIUS * Math.cos(angle);
        const y = HEXAGON_RADIUS * Math.sin(angle);

        if (i === 0) {
            hexagonShape.moveTo(x, y);
        } else {
            hexagonShape.lineTo(x, y);
        }
    }

    hexagonShape.closePath();

    const hexagonCenter = new Vector3(...position);
    const sphereCenter = new Vector3(0, 0, 0);
    const direction = new Vector3().subVectors(hexagonCenter, sphereCenter).normalize();

    const up = new Vector3(0, 1, 0);
    const right = new Vector3().crossVectors(up, direction).normalize();
    const newUp = new Vector3().crossVectors(direction, right).normalize();

    const rotationMatrix = new Matrix4().makeBasis(right, newUp, direction);
    const euler = new Euler().setFromRotationMatrix(rotationMatrix);

    return (
        <mesh position={position} rotation={euler}>
            <shapeGeometry args={[hexagonShape]} />
            <meshStandardMaterial color={HEXAGON_COLOR} opacity={opacity} transparent />
        </mesh>
    );
};

export default Hexagon;
