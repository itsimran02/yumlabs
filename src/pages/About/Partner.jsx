import { partnergrid, partnerimage1, partnerimage2, partnerimage3, partnerimage4 } from '../../assets';
import PropTypes from 'prop-types';

const Partnersection = () => {
    function Card(props) {
        const { title, content } = props;
        return (
            <div className="rounded w-full overflow-hidden shadow-lg">
                <img className="w-full h-[280px] bg-light-gray" />
                <div className="px-14 md:px-5 xl:px-14 pb-12 pt-14 bg-white">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-fade-gray text-lg mt-4">{content}</p>
                </div>
            </div>
        );
    }
    Card.propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    };
    return (
        <section>
            <h3 className="text-4xl pt-72 px-7 font-poppins font-medium md:text-6xl md:pl-14 md:pr-96 lg:pr-[35rem] lg:pl-[4.5rem] xl:pl-[6.5rem] xl:pr-[49rem] 2xl:pl-32 2xl:pr-[66rem]">
                Partners at Yume Labs
            </h3>
            <div className="relative">
                <div className="absolute h-0 top-[2.25rem]  left-[-2814px] md:left-[-58.188rem] lg:left-[-37.5rem] xl:top-[-2.75rem] xl:left-[-2.125px] 3xl:top-[-2.75rem] z-[-1]">
                    <img
                        src={partnergrid}
                        alt="Grid image"
                        className="object-none xl:object-contain w-full opacity-100"
                    />
                </div>
            </div>
            <div className="px-7 pt-24 md:px-16 md:py:12 lg:px-24 xl:px-64 md:pt-40 ">
                <div className="flex flex-col justify-center items-center gap-24 xl:flex-row md:gap-9">
                    <Card
                        title="Approlabs"
                        content="Our values guide our choices and actions daily, built on the three pillars of:"
                    />
                    <Card
                        title="Approlabs"
                        content="Our values guide our choices and actions daily, built on the three pillars of:"
                    />
                    <Card
                        title="Approlabs"
                        content="Our values guide our choices and actions daily, built on the three pillars of:"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-5 px-7 md:px-16 lg:px-20 xl:px-28 pt-48 md:flex-row md:gap-3 ">
                <div className="md:w-30">
                    <img src={partnerimage2} alt="First Image" className="w-full 2xl:h-full" />
                </div>
                <div className="md:w-70 2xl:w-full object-fill">
                    <img src={partnerimage1} alt="Second Image" className="w-full" />
                </div>
            </div>

            <div className="flex flex-col gap-5 px-7 md:px-16  lg:px-20 xl:px-28 mt-3 md:flex-row md:gap-3 pb-60">
                <div className="md:w-70">
                    <img src={partnerimage3} alt="third Image" className="w-full" />
                </div>
                <div className="md:w-30">
                    <img src={partnerimage4} alt="fourth Image" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Partnersection;
