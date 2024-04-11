import { useEffect } from 'react';

import { GroupWorkingImage } from '../../assets';

const HeroSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const divVerticalElements = Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="h-[50vh] sm:h-[70vh] 2xl:h-[90vh] bg-black opacity-10 w-px pr-px"></div>
    ));

    const divHorizontalElements = Array.from({ length: 5 }).map((_, index) => (
        <hr key={index} className="border-black opacity-10" />
    ));
    return (
        <section>
            <div>
                <div className="px-5 mx-auto max-w-screen-2xl py-12 md:pt-16 lg:pt-24 xl:pt-30 relative overflow-hidden">
                    <div className="absolute left-0 top-[72px] sm:top-[72px] md:top-[88px] lg:top-[124px] 2xl:top-[130px] 3xl:top-43.5 flex flex-col gap-10 lg:gap-[47px] xl:gap-16 2xl:gap-[100px] w-full md:w-2/3 lg:w-3/5 sm:selection:hidden">
                        {divHorizontalElements}
                    </div>
                    <div className="absolute top-0 w-full md:w-3/4 flex items-center gap-5 sm:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
                        {divVerticalElements}
                    </div>
                    <h3 className="italic font-serif font-light text-center mb-2 xl:mb-3 2xl:mb-6 text-white w-28 md:w-32 lg:w-36 2xl:w-44 text-base lg:text-lg 2xl:text-2xl bg-accent-blue">
                        About Us
                    </h3>
                    <p className="text-section-box-heading-color text-4xl font-poppins font-medium lg:text-5xl xl:text-6xl 2xl:text-7.5xl sm:w-11/12 xl:w-full leading-10 lg:leading-12 2xl:leading-tight">
                        Stay ahead and stand apart with your extended innovation and design team.
                    </p>
                    <p className="text-our-service-paragraph text-lg xl:text-2xl leading-6 pt-9 md:pt-8 w-5/6 xl:w-3/4">
                        We are a small founder-led team passionate about co-creating a regenerative and sustainable
                        future that delivers long-term prosperity to users, and investors.
                    </p>
                </div>
            </div>
            <div className="h-159 xl:h-auto md:aspect-[2/1] px-5 mx-auto max-w-screen-2xl overflow-hidden py-16">
                <img
                    src={GroupWorkingImage}
                    alt="discussion in group with their laptop sitting on chairs"
                    className="object-cover w-full h-full rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden"
                />
            </div>
        </section>
    );
};

export default HeroSection;
