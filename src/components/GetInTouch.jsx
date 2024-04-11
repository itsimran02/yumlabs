import { NavLink } from 'react-router-dom';
import { rightArrow } from '../assets/index';

const GetInTouch = () => {
    const divVerticalElements = Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="h-[80vh] bg-fade-white opacity-20 w-px mr-3"></div>
    ));
    const divHorizontalElements = Array.from({ length: 4 }).map((_, index) => (
        <hr key={index} className={index === 0 ? 'xl:hidden block' : 'block'} />
    ));

    return (
        <div className="bg-fade-white pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
            <section className="flex flex-col sm:flex-row w-full bg-accent-blue p-3 rounded-lg md:rounded-xl relative overflow-hidden">
                <div className="absolute left-0 top-28 sm:top-[118px] lg:top-20 xl:top-[135px] 2xl:top-[167px] 3xl:top-43.5 flex flex-col gap-11 md:gap-[44px] lg:gap-[52px] xl:gap-[68px] 2xl:gap-24 w-full border-fade-white opacity-20">
                    {divHorizontalElements}
                </div>
                <div className="absolute top-0 -left-32 sm:-left-6 md:left-7 lg:left-8 xl:left-9 2xl:left-10 flex items-center gap-2 lg:gap-5 xl:gap-6 2xl:gap-7">
                    {divVerticalElements}
                </div>
                <div className="flex flex-col gap-1 xl:items-start py-16 xl:py-24 2xl:py-32 lg:pl-24 2xl:pl-28 lg:pr-10 xl:gap-1 2xl:gap-4 items-center w-full relative">
                    <p className="font-poppins text-white opacity-80 lg:self-start text-start text-sm sm:text-base lg:text-2xl xl:text-2.5xl w-44 sm:w-48 lg:w-72 xl:w-full md:leading-6 lg:leading-8">
                        Have a dream for a better world?
                    </p>
                    <h2 className="flex justify-center lg:justify-start items-start text-4xl lg:text-5xl xl:text-6.5xl 2xl:text-7.5xl font-poppins leading-tight lg:leading-13 xl:leading-18 2xl:leading-24 text-white font-medium w-44 sm:w-48 lg:w-full 2xl:w-137.5">
                        Let us make it real.
                    </h2>
                </div>
                <div className="w-full flex justify-center items-center pt-5 pb-12 sm:pb-5 z-10">
                    <NavLink
                        to="/"
                        className="flex items-center justify-center cursor-pointer gap-8 xs:gap-14 2xl:gap-16 py-1 xl:py-2 pl-5 xl:pl-12 2xl:pl-16 bg-gray-bg-color rounded-full">
                        <h1 className="text-accent-blue text-xs sm:text-sm md:text-base xl:text-xl leading-5 md:leading-6 tracking-wide xl:tracking-widest font-semibold">
                            GET IN TOUCH
                        </h1>
                        <div className="flex items-center justify-center rounded-full p-2.5 sm:p-4 xl:p-6 mr-1 xl:mr-2 bg-brand-blue hover:bg-gradient-to-r hover:from-brand-blue hover:from-5% hover:to-brand-pink">
                            <img src={rightArrow} alt="right arrow icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default GetInTouch;
