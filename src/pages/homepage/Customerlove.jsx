import { useState } from 'react';
import { SLIDES } from '../../constants/app-constant';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);
import { leftbtnarrow, rightbtnarrow, custimage1, custloveicon, gridimage, pritamSaha } from '../../assets';

const Customerlove = () => {
    const textRef = useRef(null);
    useEffect(() => {
        if (textRef.current) {
            const splitText = new SplitType(textRef.current, {
                types: 'chars,words,lines'
            });

            gsap.from(splitText.chars, {
                opacity: 0.3,
                duration: 1.5,
                ease: 'power1.out',
                stagger: 1,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    once: true
                }
            });
        }
    }, []);

    const [currentindex, Setcureentindex] = useState(0);

    const prevSlide = () => {
        const isFirstslide = currentindex === 0;
        const newIndex = isFirstslide ? 0 : currentindex - 1;
        Setcureentindex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentindex === SLIDES.length - 1;
        const newIndex = isLastSlide ? SLIDES.length - 1 : currentindex + 1;
        Setcureentindex(newIndex);
    };
    return (
        <section className="px-5 pt-31.25 md:pt-62.5 md:pb-31.25 mx-auto max-w-screen-2xl">
            <div className="hidden lg:block lg:relative lg:h-0 lg:top-[-6.668rem] lg:left-[-2.6rem] xl:left-[-2.7rem] 2xl:left-[-0.813rem] 3xl:left-[-2.375rem]">
                <img src={gridimage} alt="Grid image" className="md:w-full md:h-96" />
            </div>
            <div className="">
                <div className="bg-transparent md:bg-accent-blue w-32 md:w-64">
                    <p className="flex justify-center font-serif italic text-accent-blue md:text-white text-lg md:text-xl">
                        Customer Love
                    </p>
                </div>
            </div>
            <div>
                <p ref={textRef} className="text-4xl font-medium md:text-6xl  lg:pr-44  xl:pr-96 2xl:pr-169 mt-1">
                    Our customer brands see consistent return on design investment
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 xl:pr-96 2xl:pr-169 my-20">
                <img src={custloveicon} alt="coustomer love icon" className="w-fit md:w-fit md:h-fit" />
                <h3 className="opacity-55 md:opacity-60 italic text-2xl md:text-4xl ">
                    “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale
                    through fail-proof design innovation systems. “
                </h3>
            </div>

            <div className="flex gap-14">
                <div className="relative">
                    <img src={custimage1} alt="linear gradiant" className="w-20 h-20 md:w-36 md:h-36" />
                    <img
                        src={pritamSaha}
                        className="w-17.5 h-17.5 md:w-28 md:h-28 rounded-full absolute left-8 top-2 md:left-12 md:top-4"
                        alt="CTO image"
                    />
                </div>
                <div className="mt-2 md:mt-4">
                    <h3 className="font-bold text-wrap text-sm md:text-2xl">{SLIDES[currentindex].name}</h3>
                    <h3 className="text-light-brown opacity-90 twxt-sm md:text-2xl">
                        {SLIDES[currentindex].desgination}
                    </h3>
                    <h3 className="text-light-brown opacity-90 text-sm md:text-2xl">{SLIDES[currentindex].company}</h3>
                </div>
            </div>

            <div className="py-10 gap-5 flex  items-center">
                <div className="bg-light-gray h-px opacity-70 w-full"></div>
                <button className="basis-auto" onClick={prevSlide}>
                    <img src={leftbtnarrow} alt="left btn" />
                </button>
                <button className="basis-auto" onClick={nextSlide}>
                    <img src={rightbtnarrow} alt="right btn" />
                </button>
            </div>
        </section>
    );
};

export default Customerlove;
