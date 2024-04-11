import { useGSAP } from '@gsap/react';
import ourServices from '/images/png/services-background.png';
import { gsap } from 'gsap/all';
import { useRef } from 'react';

const OurServiceSection = () => {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            scrollContainerRef.current,
            {
                translateX: 0
            },
            {
                translateX: '-190vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 15%',
                    end: '2000 bottom',
                    scrub: 1,
                    pin: true
                }
            }
        );
    }, []);

    const arrayOfObjects = Array.from({ length: 18 }, (_, index) => ({ id: index + 1 }));

    const rawText =
        'Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail proof design innovation.';

    const divVerticalElements = Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="h-[80vh] bg-black opacity-5 w-px mr-3"></div>
    ));

    const divHorizontalElements = Array.from({ length: 4 }).map((_, index) => (
        <hr key={index} className="border-black opacity-10" />
    ));

    return (
        <div className="">
            <section className="bg-fade-white ">
                <div className="px-5 py-12 md:pt-24 xl:pt-36 mx-auto max-w-screen-2xl relative overflow-hidden">
                    <div className="absolute left-0 top-[72px] sm:top-[72px] md:top-[124px] xl:top-[172px] 2xl:top-[176px] 3xl:top-43.5 flex flex-col gap-10 lg:gap-[47px] xl:gap-12 2xl:gap-[64px] w-full">
                        {divHorizontalElements}
                    </div>
                    <div className="absolute top-0 w-full flex items-center gap-2 lg:gap-5 xl:gap-6 2xl:gap-7">
                        {divVerticalElements}
                    </div>
                    <h3 className="italic font-serif font-light text-center mb-2 2xl:mb-3 text-white w-28 md:w-32 lg:w-36 2xl:w-44 text-base md:text-lg 2xl:text-2xl bg-accent-blue">
                        Our Services
                    </h3>
                    <p className="text-section-box-heading-color text-4xl font-poppins font-medium 2xl:text-6xl sm:w-11/12 xl:w-5/6 leading-10 lg:leading-snug 2xl:leading-tighter">
                        High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                        trust, and higher media love.
                    </p>
                </div>
            </section>
            <section className="bg-fade-white py-12">
                <div ref={containerRef} className="overflow-x-scroll scrollbar-hide overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                        <div className="sm:w-full">
                            <div className="lg:flex flex-row-reverse w-89 sm:w-95 md:w-100 lg:w-225 lg:h-112.25 xl:w-300 xl:h-150 2xl:w-375 2xl:h-187.5 bg-white p-6 md:p-10 lg:p-12 xl:p-14 2xl:p-20 mb-24 sm:mb-28 rounded-lg md:rounded-xl">
                                <div className="pb-6 md:pb-6 lg:pb-0 aspect-[5/4] lg:w-1/2 md:aspect-square overflow-hidden">
                                    <img
                                        className="object-cover w-full h-full rounded-lg"
                                        src={ourServices}
                                        alt="Background grid lines"
                                    />
                                </div>
                                <div className="flex flex-col justify-end p-2 md:p-4 lg:p-6 xl:p-8 lg:w-1/2">
                                    <h3 className="text-2.5xl md:text-3xl lg:text-4xl leading-8 sm:text-3xl font-medium font-poppins w-1/2 md:w-full lg:w-1/2">
                                        Deeper Insight
                                    </h3>
                                    <p className="text-our-service-paragraph pt-3 overflow-hidden line-clamp-4 sm:line-clamp-none lg:line-clamp-5 leading-5 w-3/4 sm:text-xl xl:text-2xl md:leading-8 md:w-full sm:w-4/5">
                                        {rawText}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-full">
                            <div className="lg:flex flex-row-reverse w-89 sm:w-95 md:w-100 lg:w-225 lg:h-112.25 xl:w-300 xl:h-150 2xl:w-375 2xl:h-187.5 bg-white p-6 md:p-10 lg:p-12 xl:p-14 2xl:p-20 mb-24 sm:mb-28 rounded-lg md:rounded-xl">
                                <div className="pb-6 md:pb-6 lg:pb-0 aspect-[5/4] lg:w-1/2 md:aspect-square overflow-hidden">
                                    <img
                                        className="object-cover w-full h-full rounded-lg"
                                        src={ourServices}
                                        alt="Background grid lines"
                                    />
                                </div>
                                <div className="flex flex-col justify-end p-2 md:p-4 lg:p-6 xl:p-8 lg:w-1/2">
                                    <h3 className="text-2.5xl md:text-3xl lg:text-4xl leading-8 sm:text-3xl font-medium font-poppins w-1/2 md:w-full lg:w-1/2">
                                        Deeper Insight
                                    </h3>
                                    <p className="text-our-service-paragraph pt-3 overflow-hidden line-clamp-4 sm:line-clamp-none lg:line-clamp-5 leading-5 w-3/4 sm:text-xl xl:text-2xl md:leading-8 md:w-full sm:w-4/5">
                                        {rawText}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-full ">
                            <div className="lg:flex flex-row-reverse w-89 sm:w-95 md:w-100 lg:w-225 lg:h-112.25 xl:w-300 xl:h-150 2xl:w-375 2xl:h-187.5 bg-white p-6 md:p-10 lg:p-12 xl:p-14 2xl:p-20 mb-24 sm:mb-28 rounded-lg md:rounded-xl">
                                <div className="pb-6 md:pb-6 lg:pb-0 aspect-[5/4] lg:w-1/2 md:aspect-square overflow-hidden">
                                    <img
                                        className="object-cover w-full h-full rounded-lg"
                                        src={ourServices}
                                        alt="Background grid lines"
                                    />
                                </div>
                                <div className="flex flex-col justify-end p-2 md:p-4 lg:p-6 xl:p-8 lg:w-1/2">
                                    <h3 className="text-2.5xl md:text-3xl lg:text-4xl leading-8 sm:text-3xl font-medium font-poppins w-1/2 md:w-full lg:w-1/2">
                                        Deeper Insight
                                    </h3>
                                    <p className="text-our-service-paragraph pt-3 overflow-hidden line-clamp-4 sm:line-clamp-none lg:line-clamp-5 leading-5 w-3/4 sm:text-xl xl:text-2xl md:leading-8 md:w-full sm:w-4/5">
                                        {rawText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="px-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 pmx-auto max-w-screen-2xl mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32">
                {arrayOfObjects.map((obj) => (
                    <div
                        key={obj.id}
                        className={`bg-fade-white aspect-[2/1] rounded-lg ${obj.id >= 16 ? 'hidden lg:block' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurServiceSection;
