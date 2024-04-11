import { caseStudyBgGrid, bgGridLines } from '../../assets';
import useWindowResize from '../../utils/windowResizeUtils';
import { SCREEN_SIZE } from '../../constants/app-constant';

const HeadingPrimary = () => {
    const ACTIVE_SCREEN = useWindowResize();
    const heading =
        ACTIVE_SCREEN >= SCREEN_SIZE.MD
            ? 'Simplifying the Next.'
            : 'Feel at home among brave dreamers and curious rebels.';
    return (
        <h1 className="md:text-7.5xl md:leading-24.5 font-[500] md:mt-7 mt-2 text-4.5xl leading-14 tracking-wide">
            {heading}
        </h1>
    );
};

const HeadingSecondary = () => {
    const ACTIVE_SCREEN = useWindowResize();
    const heading = ACTIVE_SCREEN >= SCREEN_SIZE.MD ? 'Minits' : 'Our Services';

    return (
        <h2 className="font-serif italic text-lg md:text-4xl bg-accent-blue inline px-4 text-white md:px-8">
            {heading}
        </h2>
    );
};

const Paragraph = () => {
    const ACTIVE_SCREEN = useWindowResize();
    const text =
        ACTIVE_SCREEN >= SCREEN_SIZE.MD
            ? 'Maiven is a cutting-edge AI-powered software designed to assist companies by analyzing audience engagement through a combination of eye tracking and facial recognition technologies. This software aims to provide insights into where the audience’s attention is focused the most and their emotional reactions to the content.'
            : 'High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love.';

    return <p className="md:text-2xl text-lg text-neutral-600">{text}</p>;
};

const BgGrid = () => {
    const ACTIVE_SCREEN = useWindowResize();
    const gridImage = ACTIVE_SCREEN >= SCREEN_SIZE.MD ? bgGridLines : caseStudyBgGrid;

    return (
        <img
            className="h-80 max-w-none md:scale-x-[1.6] md:scale-y-[2] relative -z-10 scale-x-[1.5] scale-y-[1.7]"
            src={gridImage}
            alt="hero grid image"
            loading="lazy"
        />
    );
};

const HeroSection = () => {
    return (
        <section className="py-24 mx-auto max-w-screen-2xl px-5 overflow-x-clip">
            <div className="h-0 relative top-2 md:-top-6 -left-46 md:left-36">
                <BgGrid />
            </div>

            <div className="flex-col flex items-start gap-8 md:gap-6 ">
                <div className="flex-1">
                    <HeadingSecondary />
                    <HeadingPrimary />
                </div>
                <div className="flex-1 ">
                    <Paragraph />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
