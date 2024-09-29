import { useState, useEffect } from 'react';

type DelayVisibilityProps = {
    initialRenderDelayMS?: number;
};

const useDelayVisibility = ({ initialRenderDelayMS = 1000 }: DelayVisibilityProps): boolean => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, initialRenderDelayMS);

        return () => clearTimeout(timer);
    }, []);

    return isVisible;
};

export default useDelayVisibility;
