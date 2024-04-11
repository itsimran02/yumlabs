import { useEffect, useState } from 'react';
import { arrowDown } from '../assets';

const ProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const calculatedScrollPercent = (scrollTop / scrollHeight) * 100;
            setScrollPercent(calculatedScrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className="fixed z-50 bottom-6 right-6 md:h-24 md:w-24 h-16 w-16 rotate-90 rounded-full overflow-hidden border-8 border-pink cursor-pointer"
            onClick={scrollToBottom}>
            <div className="bg-scroll-gradient h-full" style={{ width: `${scrollPercent}%` }}></div>
            <img
                src={arrowDown}
                className="absolute md:w-8 md:h-8 h-6 w-6 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90 cursor-pointer"
                alt="scroll down"
            />
        </div>
    );
};

export default ProgressBar;
