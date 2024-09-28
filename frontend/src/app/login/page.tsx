import styles from './page.module.css';
import SphereCanvas from '@/components/shapes/SphereCanvas';

const Home = () => {
    return (
        <div className={styles.top}>
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
        </div>
    );
};

export default Home;
