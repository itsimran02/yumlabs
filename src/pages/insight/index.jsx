import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { theArtPosterImage, NewsTechImage } from '../../assets';
const Insights = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const InsightBox = () => (
        <div className="flex flex-col lg:flex-row items-center justify-between px-5 mx-auto max-w-screen-2xl pt-12 md:pt-6 lg:pb-6 border-b-2">
            <div className="w-full lg:w-1/3">
                <img src={NewsTechImage} alt="news tech image" className="object-cover w-full rounded-lg" />
            </div>
            <div className="lg:w-3/5">
                <p className="text-section-box-paragraph-color xl:text-xl font-poppins lg:font-semibold leading-5 py-6 lg:py-2 md:pb-3 lg:pb-4 2xl:pb-6">
                    /01 / News Technology / 03 March 2022
                </p>
                <p className="text-[1.75rem] leading-8 lg:text-xl xl:text-3xl 2xl:text-4xl pb-10 lg:pb-5">
                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                </p>
            </div>
        </div>
    );

    const numberOfInsights = 7;
    const insightBoxes = Array.from({ length: numberOfInsights }).map((_, index) => <InsightBox key={index} />);

    const divVerticalElements = Array.from({ length: 14 }).map((_, index) => (
        <div key={index} className="h-[50vh] sm:h-[70vh] 2xl:h-[90vh] bg-black opacity-10 w-px pr-px"></div>
    ));

    const divHorizontalElements = Array.from({ length: 3 }).map((_, index) => (
        <hr key={index} className="border-black opacity-10" />
    ));

    return (
        <div>
            <section>
                <div className="px-5 mx-auto max-w-screen-2xl py-12 md:py-24 relative overflow-hidden">
                    <div className="absolute left-0 top-[72px] sm:top-[72px] md:top-[88px] lg:top-[124px] 2xl:top-[130px] 3xl:top-43.5 flex flex-col gap-10 lg:gap-[47px] xl:gap-16 2xl:gap-[100px] w-full md:w-2/3 lg:w-3/5 sm:selection:hidden">
                        {divHorizontalElements}
                    </div>
                    <div className="absolute top-0 w-full md:w-3/4 flex items-center gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
                        {divVerticalElements}
                    </div>
                    <h3 className="italic font-serif font-light text-center mb-2 xl:mb-3 2xl:mb-6 text-white w-28 md:w-32 lg:w-36 2xl:w-44 text-base lg:text-lg 2xl:text-2xl bg-accent-blue">
                        Insight
                    </h3>
                    <p className="text-fade-black text-4xl font-poppins font-medium lg:text-5xl xl:text-6xl 2xl:text-7.5xl sm:w-11/12 leading-10 lg:leading-12 2xl:leading-tight">
                        Feel at home among brave dreamers and curious rebels.
                    </p>
                    <p className="text-our-service-paragraph text-lg xl:text-2xl leading-6 pt-9 md:pt-8 w-5/6 md:w-7/12">
                        Here in “the pond” we`re driven by creativity, curiosity and a passion for challenging the
                        status quo in everything we do
                    </p>
                </div>
                <div className="px-5 mx-auto max-w-screen-2xl md:pb-16 lg:pb-20 xl:pb-28 2xl:pb-32">
                    <div
                        style={{ backgroundImage: `url(${theArtPosterImage})` }}
                        className="aspect-square sm:aspect-[3/2] sm:rounded-lg lg:rounded-xl 2xl:rounded-2xl md:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[3/1] bg-cover object-fit bg-center bg-no-repeat">
                        <div className="flex flex-col justify-center gap-6 sm:gap-4 w-11/12 sm:w-2/3 lg:w-180 h-full items-start p-12 md:pl-20 lg:pl-28 xl:pl-36 font-poppins">
                            <span className="text-white text-lg lg:text-2xl font-semibold">
                                /01 /News Technology / 03 March 2022
                            </span>
                            <p className="text-slate-200 text-lg lg:text-2xl leading-6">
                                Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">{insightBoxes}</section>
            <div className="flex justify-center pt-8 pb-24 md:pt-10 md:pb-32 xl:pt-12 xl:pb-48">
                <NavLink
                    to="/load-more"
                    className="flex items-center w- justify-center cursor-pointer gap-8 sm:gap-14 2xl:gap-20 py-3 md:py-4 xl:py-6 px-6 sm:px-8 xl:px-12 2xl:px-14 bg-gray-bg-color rounded-full hover:bg-gradient-to-r hover:from-gray-50 hover:from-35% hover:to-pink-bg-color">
                    <h1 className="text-accent-blue text-xs sm:text-sm md:text-base xl:text-xl leading-5 md:leading-6 tracking-wide xs:tracking-wider xl:tracking-widest font-semibold">
                        LOAD MORE
                    </h1>
                </NavLink>
            </div>
        </div>
    );
};

export default Insights;
