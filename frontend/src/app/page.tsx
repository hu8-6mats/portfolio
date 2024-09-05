import styles from './page.module.css';

import SphereCanvas from '@/components/visuals/SphereCanvas';
import BinaryToMessage from '@/functions/BinaryToMessage';
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
                <BinaryToMessage
                    message={'Welcome to our portfolio.\nPlease login or register to proceed.'}
                    primaryDelay={1500}
                    binaryStringDelay={25}
                    messageDelay={50}
                />
            </div>
            <div className={styles.button}>
                <PrimaryButton
                    label='Login'
                    redirectUrl='/login'
                    buttonType='button'
                    primaryDelay={9000}
                />
                <PrimaryButton
                    label='Register'
                    redirectUrl='/register'
                    buttonType='button'
                    primaryDelay={10000}
                />
            </div>
        </div>
    );
};

export default Home;
