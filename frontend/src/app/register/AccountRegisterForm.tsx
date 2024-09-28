'use client';

import React, { useState } from 'react';

import styles from './AccountRegisterForm.module.css';

import InputField from '@/components/texts/InputField';
import ArrowButton from '@/components/buttons/ArrowButton';
import SequentialMessage from '@/components/texts/SequentialMessage';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import PrimaryModal from '@/components/modals/PrimaryModal';

type AccountRegisterFormProps = {
    onSubmit: (formData: { username: string; email: string; password: string }) => void;
};

const AccountRegisterForm: React.FC<AccountRegisterFormProps> = ({ onSubmit }) => {
    const [step, setStep] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <form>
            {step === 0 && (
                <div className={styles.form}>
                    <SequentialMessage message={'Set your UserName.'} />

                    <div className={styles.field}>
                        <ArrowButton
                            primaryDelayMS={2000}
                            buttonType='button'
                            buttonDirection='left'
                        />

                        <InputField
                            primaryDelay={1500}
                            inputType='text'
                            inputValue={username}
                            inputPlaceholder='UserName'
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <ArrowButton
                            primaryDelayMS={2000}
                            buttonType='button'
                            buttonDirection='right'
                            onClick={nextStep}
                        />
                    </div>
                </div>
            )}

            {step === 1 && (
                <div className={styles.form}>
                    <SequentialMessage message={'Set your Email.'} />

                    <div className={styles.field}>
                        <ArrowButton
                            primaryDelayMS={2000}
                            buttonType='button'
                            buttonDirection='left'
                            onClick={prevStep}
                        />

                        <InputField
                            primaryDelay={1500}
                            inputType='email'
                            inputValue={email}
                            inputPlaceholder='sample@sample.com'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <ArrowButton
                            primaryDelayMS={2000}
                            buttonType='button'
                            buttonDirection='right'
                            onClick={nextStep}
                        />
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className={styles.form}>
                    <SequentialMessage message={'Set your password.'} />

                    <div className={styles.field}>
                        <ArrowButton
                            buttonType='button'
                            buttonDirection='left'
                            primaryDelayMS={2000}
                            onClick={prevStep}
                        />

                        <InputField
                            inputType='password'
                            inputValue={password}
                            inputPlaceholder='password'
                            onChange={(e) => setPassword(e.target.value)}
                            primaryDelay={1500}
                        />

                        <ArrowButton
                            buttonType='button'
                            buttonDirection='right'
                            primaryDelayMS={2000}
                            onClick={nextStep}
                        />
                    </div>
                </div>
            )}

            {step == 3 && (
                <div className={styles.form}>
                    <SequentialMessage
                        message={'Thank you very much.\nThis completes your input.'}
                    />

                    <PrimaryButton
                        primaryDelayMS={5000}
                        buttonType='button'
                        buttonLabel='Confirm your input'
                        onClick={openModal}
                    />

                    <PrimaryModal isOpen={isModalOpen} onClose={closeModal}>
                        <div className={styles.modalTitle}>
                            <SequentialMessage message={'- Register Contents -'} />
                        </div>

                        <div className={styles.modalDescription}>
                            <SequentialMessage
                                message={
                                    "If you are satisfied with this information,\nplease click the 'Submit' button at the bottom\nto complete your registration."
                                }
                            />
                        </div>

                        <ul className={styles.modalContents}>
                            <li className={styles.modalContent}>
                                <SequentialMessage
                                    primaryDelayMS={10000}
                                    message={'- UserName -'}
                                />

                                <InputField
                                    inputType='text'
                                    inputValue={username}
                                    inputPlaceholder={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    primaryDelay={10000}
                                />
                            </li>

                            <li className={styles.modalContent}>
                                <SequentialMessage primaryDelayMS={10000} message={'- Email -'} />

                                <InputField
                                    inputType='email'
                                    inputValue={email}
                                    inputPlaceholder={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    primaryDelay={10000}
                                />
                            </li>

                            <li className={styles.modalContent}>
                                <SequentialMessage
                                    primaryDelayMS={10000}
                                    message={'- Password -'}
                                />

                                <InputField
                                    inputType='password'
                                    inputValue={password}
                                    inputPlaceholder={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    primaryDelay={10000}
                                />
                            </li>
                        </ul>

                        <div className={styles.modalButton}>
                            <PrimaryButton
                                primaryDelayMS={10000}
                                buttonType='submit'
                                buttonLabel='Submit'
                                // redirectUrl='/top'
                                onClick={() => onSubmit({ username, email, password })}
                            />
                        </div>
                    </PrimaryModal>
                </div>
            )}
        </form>
    );
};

export default AccountRegisterForm;
