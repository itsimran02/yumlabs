import { bgGridLines } from '../../assets';

const HeroSection = () => {
    return (
        <section className="py-24 px-5 overflow-x-clip mx-auto max-w-screen-2xl">
            <div className="h-0 relative -top-20 md:-top-6 -left-32 md:left-36">
                <img
                    className="h-80 scale-x-[.91] scale-y-[1.2] max-w-none md:scale-x-[1.6] md:scale-y-[2] relative -z-10"
                    src={bgGridLines}
                    alt="hero grid image"
                    loading="lazy"
                />
            </div>

            <div className="flex-col flex items-start gap-8 md:gap-6 ">
                <div className="flex-1">
                    <h3 className="font-serif italic md:text-4xl text-lg bg-accent-blue inline px-4 text-white">
                        Our Services
                    </h3>
                    <h2 className="md:text-7.5xl text-4.5xl leading-15 md:leading-24.5 font-[500] tracking-wide md:mt-7 mt-3.5">
                        Simplifying <br />
                        the Next.
                    </h2>
                </div>
                <div className="flex-1 ">
                    <p className="md:text-2xl text-lg max-w-3xl">
                        Yumelabs is a global UI UX Design and Industrial Design agency that helps your business scale
                        through fail-proof design innovation systems.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
