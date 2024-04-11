import { useState, useRef } from 'react';
import { downArrowIcon, researchImage, rightArrowIcon } from '../../assets';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ToggleableSection = (props) => {
    const { title } = props;

    const [isOpen, setIsOpen] = useState(false);
    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between mb-2">
                <h1>{title}</h1>
                <div
                    className={`text-black transform hover:cursor-pointer ${
                        isOpen ? 'rotate-180' : ''
                    } transition-transform duration-300`}
                    onClick={toggleSection}>
                    <img src={downArrowIcon} alt="Down-arrow" />
                </div>
            </div>
            <hr className="w-full" />
            {isOpen && (
                <div className="px-4 lg:w-8/12 md:w-8/12 sm:w-8/12 pt-6 pb-6">
                    <div>
                        <img
                            src={researchImage}
                            alt="Research image"
                            className="mb-4 w-full lg:h-44 h-28 object-cover rounded-lg"
                        />
                        <p>
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

ToggleableSection.propTypes = {
    title: PropTypes.string.isRequired
};

const Research = () => {
    const contentRef = useRef(null);

    const sections = [
        'Qualitative Research',
        'Heuristic Evaluation',
        'Usability Testing',
        'Quantitative Research',
        'Competitor Analysis',
        'Ethnographic Research'
    ];

    return (
        <div className="overflow-x:auto" ref={contentRef}>
            <div className="gap-4 md:gap-20 md:flex w-full pb-20">
                <div className="py-6">
                    <h1 className="font-bold text-4xl md:text-2xl lg:text-4xl text-color-black font-poppins">
                        Research
                    </h1>
                    <p className="md:text-sm lg:text-lg xl:text-xl pt-6 pb-6 text-section-box-paragraph-color font-roboto">
                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                        through fail-proof design innovation systems.
                    </p>
                </div>
                <span className="flex flex-col">
                    <div className="flex flex-col gap-4 text-section-box-paragraph-color font-poppins pb-8">
                        {sections.map((sectionTitle) => (
                            <ToggleableSection key={sectionTitle} title={sectionTitle} /> // No props needed
                        ))}
                    </div>
                    <div className="flex overflow-x-auto scrollbar-hide w-full">
                        <div className="w-full flex flex-shrink-0">
                            <div className="flex gap-2 2xl:w-full">
                                <div className="lg:w-auto xl:w-full flex  ">
                                    <div className="lg:w-auto w-full md:w-auto">
                                        <img
                                            src={researchImage}
                                            className="bg-[#E7E7FC] rounded-md w-full lg:w-[98%] h-40 object-cover"
                                        />
                                        <div className="">
                                            <span className="flex lg:gap-12 md:gap-7 gap-6 text-accent-blue font-poppins md:font-semibold font-semibold lg:font-bold pt-6">
                                                <h1>#UX/UI</h1>
                                                <h1>#DEVELOPMENT</h1>
                                            </span>
                                            <h1 className="font-semibold text-2xl tracking-wider text-fade-black font-poppins pt-2">
                                                Simplicontract
                                            </h1>
                                            <p className="pt-3 text-section-box-paragraph-color font-roboto">
                                                Yumelabs is a global UI UX Design and Industrial Design agency that
                                                helps your business scale through fail-proof design innovation systems.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-auto xl:w-full">
                                    <div className="lg:w-auto w-full md:w-auto">
                                        <img
                                            src={researchImage}
                                            alt="Research image"
                                            className="bg-[#E7E7FC] rounded-md w-full lg:w-full h-40 object-cover"
                                        />
                                        <div>
                                            <span className="flex lg:gap-12 md:gap-7 gap-6 text-accent-blue md:font-semibold font-semibold lg:font-bold font-poppins pt-6">
                                                <h1>#UX/UI</h1>
                                                <h1>#DEVELOPMENT</h1>
                                            </span>
                                            <h1 className="font-semibold text-2xl tracking-wider pt-2">
                                                Simplicontract
                                            </h1>
                                            <p className="pt-3 text-section-box-paragraph-color">
                                                Yumelabs is a global UI UX Design and Industrial Design agency that
                                                helps your business scale through fail-proof design innovation systems.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            <div className="flex justify-center mt-4 md:ml-20 lg:ml:96 w-full pb-16">
                <NavLink to={'/service'}>
                    <span className="flex lg:mt-0 md:mt-12 px-2 items-center justify-center hover:bg-gradient-to-r from-[#F4F8FF] from-30% to-pink-200 bg-[#F4F8FF] md:mx-40 py-2 gap-6 rounded-full">
                        <h1 className="text-accent-blue font-semibold font-poppins">ALL OUR SERVICES</h1>
                        <div className="bg-brand-blue rounded-full ml-2 p-3 hover:bg-gradient-to-r from-pink-300 from-30% to-brand-blue">
                            <img src={rightArrowIcon} alt="arrow icon" className="w-4 h-4 hover:scale-125" />
                        </div>
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default Research;
