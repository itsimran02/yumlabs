import { useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import { gridlineBgImage, rightArrowIcon, technologyImage, theArtPosterImage } from '../../assets';
import { NavLink } from 'react-router-dom';
import useWindowResize from '../../utils/windowResizeUtils';
import { SCREEN_SIZE } from '../../constants/app-constant';

const TheArt = () => {
    const textRef = useRef(null);
    const windowWidth = useWindowResize();

    useGSAP(() => {
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
                    end: 'top 50%',
                    scrub: true,
                    once: true
                }
            });
        }
    }, []);

    const containerRef = useRef(null);
    useGSAP(() => {
        const container = containerRef.current;
        const children = container.children;

        if (windowWidth > SCREEN_SIZE.SM) {
            gsap.from(children, {
                y: 200,
                opacity: 0,
                duration: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1,
                    once: true
                }
            });
        }
    }, []);

    return (
        <div className="px-4 pt-12 mx-auto max-w-screen-2xl">
            <section>
                <div>
                    <div className="hidden lg:block lg:relative lg:h-0 lg:top-[-6.668rem] lg:left-[-5.2rem] xl:left-[-7.7rem] 2xl:left-0">
                        <img src={gridlineBgImage} alt="Grid image" className="md:w-full md:h-96" />
                    </div>
                    <span className="text-accent-blue lg:text-white lg:bg-accent-blue md:text-accent-blue md:bg-dark-blue lg:px-12 lg:text-lg xl:text-xl italic font-serif py-2">
                        The Art of the Possible
                    </span>
                    <p
                        className="text-3xl text-fade-black sm:text-4xl font-poppins font-medium 2xl:text-6xl mb-4 sm:mb-12 xl:mb-32 leading-9 pt-4 w-9/12"
                        ref={textRef}>
                        Learn from our time in the trenches innovating for user advocacy.
                    </p>
                </div>
            </section>
            <div className="relative flex pb-8">
                <div
                    className="bg-cover lg:h-[35rem] h-auto w-full rounded-lg md:rounded-xl object-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${theArtPosterImage})` }}>
                    <div className="lg:pt-64 lg:pl-32 md:pt-32 md:pl-12 pt-16 pl-8 lg:pb-4 p-16 pr-2">
                        <span className="text-white lg:text-xl">/01/News Technology/03 March 2022</span>
                        <p className="text-fade-gray lg:text-xl">Great Place to Work 2022 Survey:</p>
                        <p className=" text-fade-gray lg:text-xl">
                            Vincit is the best place to work in Finland, again!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-auto overflow-hidden scrollbar-hide gap-4 w-full">
                <div className="w-full flex flex-shrink-0">
                    <div className="flex flex-no-wrap w-full" ref={containerRef}>
                        <div className="w-full mr-4">
                            <div className="w-56 lg:w-auto md:w-full">
                                <img
                                    src={technologyImage}
                                    alt="technology image"
                                    className="bg-light-blue w-full rounded-md"
                                />
                                <div className="mt-2">
                                    <h1 className="font-bold font-poppins text-lg pt-4">
                                        /01/ News Technology /03 March 2022
                                    </h1>
                                    <p className="font-roboto text-header-gray pt-4 text-lg lg:w-8/12">
                                        Great Place to Work 2022 Survey: Vincit is the best place to work in Finland,
                                        again!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mr-4">
                            <div className="w-56 lg:w-auto md:w-full">
                                <img
                                    src={technologyImage}
                                    alt="technology image"
                                    className="w-full bg-light-blue rounded-md"
                                />
                                <div className="mt-2">
                                    <h1 className="font-bold font-poppins text-lg pt-4">
                                        /01/ News Technology / 03 March 2022
                                    </h1>
                                    <p className="font-roboto text-header-gray pt-4 text-lg lg:w-8/12">
                                        Great Place to Work 2022 Survey: Vincit is the best place to work in Finland,
                                        again!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-56 lg:w-auto md:w-full">
                                <img
                                    src={technologyImage}
                                    alt="technology image"
                                    className="bg-light-blue w-full rounded-md"
                                />
                                <div className="mt-2 pb-28">
                                    <h1 className="font-bold font-poppins text-lg pt-4">
                                        /01/ News Technology / 03 March 2022
                                    </h1>
                                    <p className="font-roboto text-header-gray pt-4 text-lg lg:w-8/12">
                                        Great Place to Work 2022 Survey: Vincit is the best place to work in Finland,
                                        again!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="flex justify-center w-full pb-16">
                    <NavLink
                        to="/"
                        className="flex items-center justify-center cursor-pointer gap-8 2xs:gap-8 xs:gap-12 sm:gap-14 2xl:gap-12 py-1.5 xl:py-2 pl-5 sm:pl-7 xl:pl-10 bg-gray-bg-color rounded-full hover:bg-gradient-to-r hover:from-gray-bg-color hover:from-30% hover:to-pink-300">
                        <h1 className="text-accent-blue text-xs sm:text-sm md:text-base xl:text-xl leading-5 md:leading-6 tracking-wide xs:tracking-wider xl:tracking-widest font-semibold">
                            ALL OUR SERVICE
                        </h1>
                        <div className="flex items-center justify-center rounded-full p-3.5 sm:p-4 xl:p-6 mr-1 xs:mr-1.5 xl:mr-2 bg-brand-blue hover:bg-gradient-to-r  hover:from-brand-blue hover:from-5% hover:to-brand-pink">
                            <img
                                src={rightArrowIcon}
                                alt="right arrow icon"
                                className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-125"
                            />
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};
export default TheArt;
