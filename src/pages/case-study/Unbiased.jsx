import { DummyImage, MainAnalysisPortrait, UnbiasedImage3, custimage1, custloveicon } from '../../assets';
import { unbiasedAnalysisContent } from '../../constants/data';
const Unbiased = () => {
    const divVerticalElements = Array.from({ length: 11 }).map((_, index) => (
        <div key={index} className="h-[90vh] bg-black opacity-10 w-px pr-px"></div>
    ));

    const divHorizontalElements = Array.from({ length: 7 }).map((_, index) => (
        <hr key={index} className="border-black opacity-10" />
    ));
    return (
        <div>
            <section className="w-full mx-auto max-w-screen-2xl px-5 pt-20">
                {unbiasedAnalysisContent.map((item) => (
                    <div key={item.id}>
                        <div className="flex items-center gap-3 lg:gap-4 md:pb-6 lg:pb-8 xl:pb-10">
                            <h2 className="text-2.5xl lg:text-4xl leading-10 font-medium font-poppins">
                                {item.heading}
                            </h2>
                            <div className="w-full h-px bg-slate-300"></div>
                        </div>
                        <h3 className="text-2.5xl lg:text-4xl leading-8 lg:leading-10 font-medium font-poppins py-5 md:py-6 lg:py-10 md:w-89 lg:w-1/2 xl:w-150">
                            {item.subHeading}
                        </h3>
                        <p className="text-section-box-paragraph-color text-lg lg:text-2xl leading-6 lg:leading-7 w-5/6 md:w-89 lg:w-1/2 xl:w-150">
                            {item.paragraph}
                        </p>
                        <div className="md:flex gap-2 lg:gap-4 pt-12 w-full h-full overflow-hidden ">
                            {item.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full md:w-1/2 h-full object-cover aspect-[4/3] rounded-lg xl:rounded-2xl bg-inherit"
                                />
                            ))}
                        </div>
                        <div className="w-full h-full aspect-[7/12] sm:aspect-square pt-2 lg:pt-4 md:aspect-[5/3] rounded-lg mb-18 bg-inherit">
                            <img
                                src={UnbiasedImage3}
                                alt="unbiasewd image 3"
                                className="object-fit w-full h-full bg-left rounded-lg xl:rounded-2xl"
                            />
                        </div>
                    </div>
                ))}
            </section>
            <section className="relative overflow-hidden my-24 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                <div className="absolute -z-10 left-4 top-[88px] sm:top-[72px] md:top-[88px] xl:top-[126px] 2xl:top-[130px] 3xl:top-43.5 flex flex-col gap-[86px] md:gap-[82px] xl:gap-[120px] w-full sm:selection:hidden">
                    {divHorizontalElements}
                </div>
                <div className="absolute -z-10 top-0 w-full left-3 md:left-16 lg:left-20 xl:left-28 2xl:left-36 md:w-3/4 flex items-center gap-[39px] sm:gap-10">
                    {divVerticalElements} {divVerticalElements} {divVerticalElements} {divVerticalElements}
                </div>
                <div className="flex flex-col px-12 md:flex-row gap-12 md:px-16 xl:pr-96 lg:pl-14 xl:pl-24 2xl:pl-36 my-22 xl:mt-32 2xl:mb-32">
                    <img src={custloveicon} alt="coustomer love icon" className="w-fit md:w-fit md:h-fit" />
                    <h3 className="italic text-our-service-paragraph text-2xl leading-7 md:text-4xl font-extralight">
                        “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale
                        through fail-proof design innovation systems. “
                    </h3>
                </div>
                <div className="flex justify-start items-center gap-9 pb-28 px-12 md:pl-36 xl:pl-44 2xl:pl-56">
                    <div className="relative">
                        <img src={custimage1} alt="linear gradiant" className="w-20 h-20 xl:w-32 xl:h-32" />
                        <img
                            src={DummyImage}
                            className="w-17.5 h-17.5 xl:w-24 xl:h-24 rounded-full object-cover absolute left-8 top-2 md:left-10"
                            alt="CTO image"
                        />
                    </div>
                    <div className="font-poppins">
                        <h3 className="text-fade-black text-lg font-medium leading-7 pb-1">Mr. Regina Christry</h3>
                        <h3 className="text-our-service-paragraph leading-5">Chief Digital Officer</h3>
                        <h3 className="text-our-service-paragraph leading-5">ApproLabs</h3>
                    </div>
                </div>
            </section>
            <section className="w-full aspect-[4/9] md:aspect-[12/7] pb-20 md:pb-24 lg:pb-28">
                <img src={MainAnalysisPortrait} alt="fullscreen imagew" className="object-cover h-full w-full" />
            </section>
        </div>
    );
};

export default Unbiased;
