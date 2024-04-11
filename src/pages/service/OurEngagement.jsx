import PropTypes from 'prop-types';

const EngagementItem = (props) => {
    const { title1, title2, description } = props;
    return (
        <div className="bg-fade-white lg:h-96 h-80 w-full rounded-lg mb-4 lg:px-16 px-4 lg:pt-36 md:pt-24 pt-20">
            <h2 className="text-fade-black font-poppins font-bold text-3xl">
                <span className="block">{title1}</span>
                <span className="block">{title2}</span>
            </h2>
            <p className="pt-6 text-header-gray font-roboto opacity-80 lg:pr-12 pr-0">{description}</p>
        </div>
    );
};

EngagementItem.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const OurEngagement = () => {
    return (
        <div className="py-6 px-5 px-5 mx-auto max-w-screen-2xl">
            <h2 className="lg:text-4xl text-3xl text-dark-gray font-poppins">
                <span className="block">Our Engagement</span>
                <span className="block">Modals</span>
            </h2>
            <div className="lg:flex md:flex justify-center items-center gap-8 pt-10 pb-20">
                <EngagementItem
                    title1="Monthly"
                    title2="Retainer"
                    description="Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems."
                />
                <EngagementItem
                    title1="Fixed"
                    title2="Price"
                    description="Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale through fail-proof design innovation systems."
                />
            </div>
        </div>
    );
};
export default OurEngagement;
