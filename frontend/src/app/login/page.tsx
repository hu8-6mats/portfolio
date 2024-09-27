import styles from './page.module.css';

import SequentialRender from '@/components/timers/SequentialRender';
import SphereCanvas from '@/components/shapes/SphereCanvas';

const Home = () => {
    return (
        <div className={styles.top}>
            <SequentialRender initialRenderDelayMS={3000} sequentialRenderDelayMS={1000}>
                <div className={styles.canvas}>
                    <SphereCanvas
                        elementType={'Dot'}
                        elementQuantity={500}
                        areElementsRandomized={true}
                    />
                </div>
                <div className={styles.canvas}>
                    <SphereCanvas
                        elementType={'Dot'}
                        elementQuantity={100}
                        areElementsRandomized={true}
                    />
                </div>
                <div className={styles.canvas}>
                    <SphereCanvas
                        elementType={'Dot'}
                        elementQuantity={1500}
                        areElementsRandomized={true}
                    />
                </div>
            </SequentialRender>
        </div>
    );
};

export default Home;
