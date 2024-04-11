import Research from './ResearchToggle';

const ResearchSection = () => {
    return (
        <div className="py-6 px-5 mx-auto max-w-screen-2xl">
            <Research />
            <hr className="mb-10 hidden md:block pb-10" />
            <Research />
            <hr className="mb-10  hidden md:block pb-10" />
            <Research />
        </div>
    );
};

export default ResearchSection;
