// utils/scrollHandler.js
import { gsap } from 'gsap';

export const scrollHandler = () => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 100 && scrollY < 500) {
            gsap.from('.service-item-1', {
                y: 800,
                opacity: 0,
                duration: 2,
                stagger: 1
            });
            gsap.to('.service-item-1', {
                y: -1,
                opacity: 50,
                duration: 2,
                stagger: 1
            });
            gsap.from('.service-item-2', {
                y: 800,
                duration: 3,
                stagger: 1
            });

            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};
