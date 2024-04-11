import gridImage from '../../../assets/images/bg-grid-lines.png';
import Articleimage from '../../../assets/images/article-header-image.png';

const InsightDetailsHeader = () => {
    const data = {
        heading: 'Why do we need a design system',
        date: '26 Feb 2024',
        headingImage: Articleimage
    };

    return (
        <div>
            <section className=" mt-12 px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                <div className="h-0 relative -top-16 md:-top-24 -left-32 md:left-56">
                    <img
                        className="h-80 scale-x-[.91] scale-y-110 max-w-none md:scale-x-[1.8] md:scale-y-[1.8] relative -z-10"
                        src={`${gridImage}`}
                        alt="hero grid image"
                        loading="lazy"
                    />
                </div>
                <div>
                    <span className="max-w-52 md:block bg-brand-blue text-white text-center italic text-2xl font-normal -mt-3 mb-4 font-serif hidden">
                        Article
                    </span>
                    <span className="max-w-52 block bg-brand-blue text-white text-center italic text-2xl font-normal -mt-3 mb-20 font-serif md:hidden relative top-20 ">
                        Our Services
                    </span>
                    <h1
                        className="text-6xl font-normal tracking-[1px] leading-20 max-w-[65%] mb-5 font-serif md:max-w-full -ml-0.5 
}">
                        {data.heading}
                    </h1>
                </div>
                <div>
                    <p className="text-2xl text-[gray] font-normal mb-7 font-roboto ">{data.date}</p>
                </div>
            </section>

            <section className="pt-0 pb-8  px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                <img
                    className="w-full  object-cover h-[540px] rounded-[4px]"
                    src={data.headingImage}
                    width={1024}
                    height={540}
                    alt="the art image"
                />
            </section>
        </div>
    );
};

export default InsightDetailsHeader;
