import styles from './page.module.css';

import SphereCanvas from '@/components/visuals/SphereCanvas';
import SequentialMessage from '@/functions/SequentialMessage';
import PrimaryButton from '@/components/buttons/PrimaryButton';

const Home = () => {
    return (
        <div className={styles.top}>
            <div className={styles.canvas}>
                <SphereCanvas
                    elementType={'Dot'}
                    areElementsRandomized={true}
                    elementQuantity={3000}
                    primaryDelay={1000}
                    cameraPosition={[0, 0, 3]}
                    cameraFOV={90}
                    lightIntensity={2}
                    lightPosition={[0, 0, 0]}
                />
            </div>
            <div className={styles.message}>
                <SequentialMessage
                    message={'Welcome to our portfolio.\nPlease login or register to proceed.'}
                    primaryDelay={1500}
                />
            </div>
            <div className={styles.button}>
                <PrimaryButton
                    primaryDelayMS={6000}
                    buttonLabel='Login'
                    buttonType='button'
                    redirectUrl='/login'
                />
                <PrimaryButton
                    primaryDelayMS={7000}
                    buttonLabel='Register'
                    buttonType='button'
                    redirectUrl='/register'
                />
            </div>
        </div>
    );
};

export default Home;
