'use client';

import styles from './page.module.css';

import SphereCanvas from '@/components/shapes/SphereCanvas';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import AccountRegisterForm from './AccountRegisterForm';

const RegisterPage: React.FC = () => {
    const handleFormSubmit = async (FormData: {
        username: string;
        email: string;
        password: string;
    }) => {
        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(FormData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result.message);
            } else {
                console.log('Failed to register user.');
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
        }
    };

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

            <div className={styles.form}>
                <AccountRegisterForm onSubmit={handleFormSubmit} />
            </div>

            <div className={styles.button}>
                <PrimaryButton
                    primaryDelayMS={2000}
                    buttonType='button'
                    buttonLabel='Return to Home'
                    redirectUrl='/'
                />
            </div>
        </div>
    );
};

export default RegisterPage;
