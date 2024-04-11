import gsap from 'gsap';
const scrollHandler = (boxRefs) => {
    const handleScroll = () => {
        boxRefs.current.forEach((boxRef) => {
            const boxTop = boxRef.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            let triggerPoint;
            triggerPoint = windowHeight * 1.0;

            if (boxTop < triggerPoint) {
                gsap.to(boxRef, { duration: 1.5, y: -50, opacity: 1, stagger: 0.5 });
            } else {
                gsap.to(boxRef, { duration: 1.5, y: 150, opacity: 0.1, stagger: 0.5 });
            }
        });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
};

export default scrollHandler;
