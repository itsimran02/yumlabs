import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ourServiceImage1, ourServiceImage2, ourServiceImage3, rightArrowIcon } from '../../assets';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const ExploreService = () => {
    const containerRef = useRef(null);
    useGSAP(() => {
        const container = containerRef.current;
        const children = container.children;

        gsap.from(children, {
            y: 500,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                end: 'top 20%',
                scrub: 1,
                once: true
            }
        });
    }, []);

    return (
        <div className="px-5 mx-auto max-w-screen-2xl pt-12 pb-8">
            <div className="flex flex-col md:flex-row gap-2 overflow-hidden" ref={containerRef}>
                <div className="bg-fade-white lg:w-[38%] 2xl:w-[90%] lg:pt-20 pt-10 2xl:pt-40 rounded-xl flex flex-col">
                    <h2 className="lg:mt-6 md:mt-24 text-2xl lg:text-4xl xl:text-5xl md:text-4xl lg:px-16 px-10 font-poppins">
                        Innovation is the New Marketing.
                    </h2>
                    <p className="mt-4 md:mt-16 text-our-service-paragraph sm:text-lg md:text-lg lg:px-16 px-10 font-roboto">
                        Build your brand moat with us and leave the competition in the dust.
                    </p>
                    <span className="flex lg:mt-32 md:mt-16 mt-12 mb-6 items-center justify-center hover:bg-gradient-to-r from-fade-white from-30% to-pink-200 bg-gray-bg-color mx-auto py-2 w-44 lg:w-60 gap-0 lg:gap-12 rounded-full">
                        <h3 className="text-accent-blue font-semibold font-poppins text-sm">ALL OUR SERVICES</h3>
                        <NavLink to="/service">
                            <div className="bg-brand-blue rounded-full ml-2 p-3 hover:bg-gradient-to-r from-pink-300 from-30% to-brand-blue">
                                <img
                                    src={rightArrowIcon}
                                    alt="arrow icon"
                                    className="w-2 h-2 lg:h-4 lg:w-4 hover:scale-125"
                                />
                            </div>
                        </NavLink>
                    </span>
                </div>
                <div className="w-full flex md:flex-col sm:flex-row items-center gap-3 relative">
                    <div className="w-full lg:h-80 md:h-72 h-64 relative bg-white rounded-xl">
                        <img
                            src={ourServiceImage1}
                            alt="service image"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute bottom-0 left-0 p-4">
                            <span className=" text-sm md:text-lg lg:text-xl text-gray-500 font-poppins block">
                                PRODUCT
                            </span>
                            <span className=" text-xs md:text-sm lg:text-base text-gray-500 font-poppins">
                                INNOVATION
                            </span>
                        </div>
                    </div>
                    <div className="w-full  lg:h-80 md:h-72 h-64 relative bg-white rounded-xl">
                        <img
                            src={ourServiceImage2}
                            alt="service image"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute bottom-0 left-0 p-4">
                            <span className="text-sm md:text-lg lg:text-xl text-gray-500 font-poppins block">
                                INDUSTRIAL
                            </span>
                            <span className="text-xs md:text-sm lg:text-base text-gray-500 font-poppins">DESIGNS</span>
                        </div>
                    </div>
                </div>
                <div className="bg-fade-orange w-full lg:h-auto md:h-auto h-48 rounded-xl flex justify-center items-center overflow-hidden relative">
                    <div className="overflow-hidden" style={{ marginRight: '-100px' }}>
                        <img
                            src={ourServiceImage3}
                            alt="service image"
                            className="lg:w-full lg:h-full h-64 w-64 py-6 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                            <span className="text-sm md:text-lg lg:text-xl font-semibold">UX/UI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExploreService;
