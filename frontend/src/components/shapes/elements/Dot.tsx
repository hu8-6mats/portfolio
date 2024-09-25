type DotProps = {
    position: [number, number, number];
    opacity: number;
};

const DOT_COLOR: string = 'white';
const DOT_RADIUS: number = 0.01;
const DOT_SEGMENTS: number = 15;

const Dot: React.FC<DotProps> = ({ position, opacity }) => (
    <mesh position={position}>
        <sphereGeometry args={[DOT_RADIUS, DOT_SEGMENTS, DOT_SEGMENTS]} />
        <meshStandardMaterial color={DOT_COLOR} opacity={opacity} transparent />
    </mesh>
);

export default Dot;
