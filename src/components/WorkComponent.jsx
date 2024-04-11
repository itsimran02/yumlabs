import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';
import scrollHandler from '../utils/scrollHandlerUtils';
import { workImg1, workImg2, workImg3, workImg4, rightArrow } from '../assets/index';
import PropTypes from 'prop-types';

const WorkComponent = (props) => {
    const { isHomePage } = props;
    const boxRefs = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useGSAP(() => {
        return scrollHandler(boxRefs);
    }, []);

    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-2xl pt-12 px-5">
                    <h3 className="italic font-serif font-light text-center mb-2 2xl:mb-3 text-white w-28 md:w-32 lg:w-36 2xl:w-44 text-base md:text-lg 2xl:text-2xl bg-accent-blue">
                        Our Work
                    </h3>
                    <p className="text-3xl text-section-box-heading-color sm:text-4xl font-poppins font-medium 2xl:text-6xl sm:w-4/5 mb-28 sm:mb-32 xl:mb-36 leading-9 md:leading-10 lg:leading-normal 2xl:leading-tighter">
                        Discover brand innovation stories that will inspire you to reimagine the Next for yours.
                    </p>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center mx-auto max-w-screen-2xl px-5">
                    <div
                        ref={(el) => (boxRefs.current[0] = el)}
                        className="flex flex-col md:justify-start w-full box md:w-5/12 md:mx-7 lg:mx-10 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div className="aspect-[5/6] bg-white rounded-lg md:rounded-xl 2xl:rounded-2xl overflow-hidden">
                            <img src={workImg1} alt="work image 1" className="object-cover w-full h-full" />
                        </div>
                        <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                            <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                            <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                        </p>
                        <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                            Simplicontract
                        </h4>
                        <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                    <div className="flex flex-col md:justify-start w-full md:w-5/12 md:mx-7 lg:mx-9 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div className="w-full md:h-44 lg:h-48 xl:h-60 2xl:h-72"></div>
                        <div ref={(el) => (boxRefs.current[1] = el)}>
                            <div className="aspect-[5/6] bg-white rounded-lg md:rounded-xl 2xl:rounded-2xl overflow-hidden">
                                <img src={workImg2} alt="work image 2" className="object-cover w-full h-full" />
                            </div>
                            <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                                <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                                <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                            </p>
                            <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                                Simplicontract
                            </h4>
                            <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>
                    </div>
                    <div
                        ref={(el) => (boxRefs.current[2] = el)}
                        className="flex flex-col md:justify-start w-full md:w-5/12 md:mx-7 lg:mx-9 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div className="aspect-[5/6] bg-white rounded-lg md:rounded-xl 2xl:rounded-2xl overflow-hidden">
                            <img src={workImg3} alt="work image 3" className="object-cover w-full h-full" />
                        </div>
                        <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                            <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                            <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                        </p>
                        <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                            Simplicontract
                        </h4>
                        <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                    <div className="flex flex-col md:justify-start w-full md:w-5/12 md:mx-7 lg:mx-9 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div className="w-full md:h-44 lg:h-48 xl:h-60 2xl:h-72"></div>
                        <div ref={(el) => (boxRefs.current[3] = el)}>
                            <div className="aspect-[5/6] bg-white rounded-lg md:rounded-xl 2xl:rounded-2xl overflow-hidden">
                                <img src={workImg4} alt="work image 4" className="object-cover w-full h-full" />
                            </div>
                            <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                                <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                                <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                            </p>
                            <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                                Simplicontract
                            </h4>
                            <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex justify-center w-full md:my-10 mb-10">
                    {isHomePage ? (
                        <NavLink
                            to="/"
                            className="flex items-center justify-center cursor-pointer gap-8 sm:gap-14 2xl:gap-20 py-1.5 xl:py-2 pl-5 sm:pl-7 xl:pl-10 2xl:pl-12 bg-gray-bg-color rounded-full">
                            <h1 className="text-accent-blue text-xs sm:text-sm md:text-base xl:text-xl leading-5 md:leading-6 tracking-wide xs:tracking-wider xl:tracking-widest font-semibold">
                                EXPORT PORTFOLIO
                            </h1>
                            <div className="flex items-center justify-center rounded-full p-3.5 sm:p-4 xl:p-6 mr-1 sm:mr-1.5 xl:mr-2 bg-brand-blue hover:bg-gradient-to-r hover:from-brand-blue hover:from-5% hover:to-brand-pink">
                                <img src={rightArrow} alt="right arrow icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                        </NavLink>
                    ) : (
                        <NavLink
                            to="/load-more"
                            className="flex items-center justify-center cursor-pointer gap-8 sm:gap-14 2xl:gap-20 py-2 md:py-4 xl:py-6 px-5 sm:px-7 xl:px-10 2xl:px-12 bg-gray-bg-color rounded-full hover:bg-gradient-to-r hover:from-gray-50 hover:from-35% hover:to-pink-bg-color">
                            <h1 className="text-accent-blue text-xs sm:text-sm md:text-base xl:text-xl leading-5 md:leading-6 tracking-wide xs:tracking-wider xl:tracking-widest font-semibold">
                                LOAD MORE
                            </h1>
                        </NavLink>
                    )}
                </div>
            </section>
        </>
    );
};

WorkComponent.propTypes = {
    isHomePage: PropTypes.bool.isRequired
};

export default WorkComponent;
