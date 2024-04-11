import { statementBgImage } from '../../assets';

const StatementSection = () => {
    return (
        <div className="mx-auto max-w-screen-2xl px-5">
            <div className="lg:flex md:flex justify-between lg:pr-56 md:pr-32">
                <div className="pb-4 font-poppins">
                    <h3 className="text-sm text-accent-blue font-semibold">services</h3>
                    <h2 className="font-medium text-xl">Product</h2>
                </div>
                <div className="pb-4 font-poppins">
                    <h3 className="text-sm text-accent-blue font-semibold">industry</h3>
                    <h2 className="font-medium text-xl">Product</h2>
                </div>
                <div className="font-poppins">
                    <h3 className="text-sm text-accent-blue font-semibold">Location</h3>
                    <h2 className="font-medium text-xl">Product</h2>
                </div>
            </div>
            <div className="pb-12 pt-10">
                <img
                    src={statementBgImage}
                    alt="statement image"
                    className="lg:h-[75vh] md:h-[70vh] h-[90vh] 2xl:w-full w-full rounded-lg object-cover"
                />
            </div>
            <div className="pb-12 lg:flex md:flex justify-center gap-64 lg:gap-60 md:gap-32">
                <div className="font-bold pb-3 lg:pb-0 md:pb-0 font-poppins text-fade-black">
                    <h2 className="text-xl md:text-2xl">Problem</h2>
                    <h2 className="text-xl md:text-2xl">Statement</h2>
                </div>
                <p className="font-roboto text-section-box-paragraph-color">
                    Developing a software solution that streamlines the content analysis process for businesses,
                    enabling accelerated innovation and iterative content refinement. The challenge lies in creating a
                    platform that effectively utilizes AI to swiftly analyze and interpret content, allowing companies
                    to gain valuable insights and thereby enhancing the content creation and iteration workflow.
                </p>
            </div>
            <div className="pb-12 lg:flex md:flex justify-center gap-64 lg:gap-60 md:gap-32">
                <div className="font-bold pb-3 lg:pb-0 md:pb-0 font-poppins text-fade-black">
                    <h2 className="text-xl md:text-2xl">Project</h2>
                    <h2 className="text-xl md:text-2xl">Scope</h2>
                </div>
                <p className="pl-0 md:pl-11 lg:pl-11 font-roboto text-section-box-paragraph-color">
                    By harnessing advanced AI algorithms, this software ensures impartial and efficient evaluation of
                    content, eliminating human biases from the analysis process. A User-friendly interface will
                    facilitate seamless navigation, simplifying complex workflows and making insights easily accessible.
                    As a result, the software will empower businesses to create content that resonates more effectively
                    with their target audience, ultimately driving higher engagement and growth.
                </p>
            </div>
        </div>
    );
};

export default StatementSection;
