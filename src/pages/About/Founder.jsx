import { author, linkedin, nabarun, partnergrid, pritamSaha } from '../../assets';
import PropTypes from 'prop-types';

export const Foundersection = () => {
    function Card(props) {
        const { url, paragraph, name, desgination } = props;
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bottom-0 group">
                <div className="bg-[#ddd] py-14 flex justify-center items-center  relative">
                    <img className="h-55 w-55 rounded-full border-2 border-black " src={url} />
                    <p className="absolute h-full px-4 py-4 bg-accent-blue opacity-90 text-white bottom-[-50.75rem] group-hover:bottom-0">
                        {paragraph}
                    </p>
                    <img
                        className="rounded-full absolute bottom-[-2.063rem] right-[1.125rem] cursor-pointer z-1"
                        src={linkedin}
                        alt="linkdin"
                    />
                </div>

                <div className="px-10 py-11 pt-14 bg-white">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-fade-gray text-lg mt-4">{desgination}</p>
                </div>
            </div>
        );
    }

    Card.propTypes = {
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        desgination: PropTypes.string.isRequired
    };
    return (
        <section className="pt-14 ">
            <h3 className="text-4xl px-7 font-poppins font-medium">Founders at Yume Labs</h3>

            <div className="relative">
                <div className="absolute h-0 top-[2.25rem]  left-[-175.875rem] md:left-[-168.75rem] lg:left-[-37.5rem] xl:top-[0.25rem] xl:left-[-2.125rem] 3xl:top-[-2.75rem] z-[-1]">
                    <img
                        src={partnergrid}
                        alt="Grid image"
                        className="object-none xl:object-contain w-full opacity-100"
                    />
                </div>
            </div>

            <div className="px-5 mx-auto max-w-screen-2xl xl:px-64 md:py-40 py-10 ">
                <div className="flex flex-col justify-center items-center gap-24 lg:flex-row md:gap-20">
                    <Card
                        url={nabarun}
                        name="Mr. Nabarun Bhowmick"
                        desgination="Chief Design Officer"
                        paragraph="Nabarun leads Industrial and Marketing Design for our clients. He has worked extensively with Exploration & Innovation teams in large Corporates in the Appliances and Healthcare domains globally and has multiple patents and awards to his name. He is an M.Des (Industrial Design) from IDC - IIT Bombay and B.E. in Electronics and Telecommunications from IIEST, Shibpur."
                    />
                    <Card
                        url={author}
                        name="Abhinav Kr."
                        desgination="Chief Technology Officer"
                        paragraph="Abhinav leads Experience and Interaction Design for our clients. He is a serial technology entrepreneur (ex-IndieBio and Google Accelerator cohorts) and a published researcher and subject matter expert in Computational Neuroscience and Brain-Machine Interfaces. He is an M.Des (Interaction Design) from IDC - IIT Bombay and B.Tech in Mechanical Engineering from IIIT DM, Jabalpur."
                    />
                    <Card
                        url={pritamSaha}
                        name="Pritam Saha"
                        desgination="Chief Executive Officer"
                        paragraph="Pritam leads Marketing and Go-to-Market with a consultative approach to the business aspects of Experience Design. He brings extensive experience in B2B Technology Sales & Marketing, Corporate Development, Strategy, and Consulting in multiple industries globally. He is an MBA from IIM Bangalore and B.E. in Electronics and Telecommunications from IIEST, Shibpur."
                    />
                </div>
            </div>
        </section>
    );
};
