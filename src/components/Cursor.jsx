import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
    useGSAP(() => {
        gsap.set('.ball', { xPercent: -50, yPercent: -50 });
        let targets = gsap.utils.toArray('.ball');
        window.addEventListener('mousemove', (e) => {
            gsap.to(targets, {
                duration: 0.5,
                pointerEvents: 'none',
                x: e.clientX,
                y: e.clientY,
                ease: 'power1.out',
                overwrite: 'auto',
                stagger: 0.05
            });
        });
    });

    return (
        <>
            {[...Array(5)].map((_, index) => (
                <div
                    key={`balll-${index}`}
                    className="ball bg-gradient-linear blur-lg w-96 h-96 z-[-111] fixed top-0 left-0 rounded-full"></div>
            ))}
        </>
    );
};

export default Cursor;
