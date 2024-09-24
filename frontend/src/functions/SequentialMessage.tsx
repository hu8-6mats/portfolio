'use client';

import React, { useState } from 'react';
import styles from './SequentialMessage.module.css';

type SequentialMessageProps = {
    primaryDelayMS?: number;
    binaryStringDelayMS?: number;
    messageDelayMS?: number;
    endOfLineDelayMS?: number;
    message: string;
};

const SequentialMessage: React.FC<SequentialMessageProps> = ({
    primaryDelayMS = 1000,
    binaryStringDelayMS = 10,
    messageDelayMS = 20,
    endOfLineDelayMS = 750,
    message,
}) => {
    const [displayedMessage, setDisplayedMessage] = useState<string>('');

    const setDelay = (ms: number): Promise<void> =>
        new Promise((resolve) => setTimeout(resolve, ms));

    const generateBinaryString = (length: number): string => {
        return Array.from({ length }, () => Math.round(Math.random()).toString()).join('');
    };

    const setBinaryString = async (
        binaryString: string,
        delayMS: number,
        temporaryMessage: string
    ): Promise<string> => {
        for (let i = 0; i < binaryString.length; i++) {
            temporaryMessage += binaryString[i];
            setDisplayedMessage(temporaryMessage);
            await setDelay(delayMS);
        }
        return temporaryMessage;
    };

    const displayOriginalMessage = async (
        segment: string,
        binaryString: string,
        delayMS: number,
        temporaryMessage: string
    ): Promise<string> => {
        for (let i = 0; i < segment.length; i++) {
            await setDelay(delayMS);

            temporaryMessage =
                temporaryMessage.slice(0, temporaryMessage.length - binaryString.length + i) +
                segment[i] +
                temporaryMessage.slice(temporaryMessage.length - binaryString.length + i + 1);

            setDisplayedMessage(temporaryMessage);
        }
        return temporaryMessage;
    };

    const processMessage = async (): Promise<void> => {
        await setDelay(primaryDelayMS);

        const segments: string[] = message.split('\n');
        let temporaryMessage: string = '';

        for (let i: number = 0; i < segments.length; i++) {
            const segment: string = segments[i];
            const binaryString: string = generateBinaryString(segment.length);

            temporaryMessage = await setBinaryString(
                binaryString,
                binaryStringDelayMS,
                temporaryMessage
            );

            temporaryMessage = await displayOriginalMessage(
                segment,
                binaryString,
                messageDelayMS,
                temporaryMessage
            );

            if (i < segments.length - 1) {
                temporaryMessage += '<br>';
                setDisplayedMessage(temporaryMessage);
            }

            await setDelay(endOfLineDelayMS);
        }
    };

    if (!displayedMessage) {
        processMessage();
    }

    return (
        <div>
            <p className={styles.message} dangerouslySetInnerHTML={{ __html: displayedMessage }} />
        </div>
    );
};

export default SequentialMessage;
