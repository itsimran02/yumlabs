import PropTypes from 'prop-types';

import { percentIcon } from '../../assets';
import { brandAndValues } from '../../assets';

const Paragraph = (props) => {
    const { children } = props;
    return <p className="flex-1 text-lg md:text-2xl text-neutral-500 font-roboto">{children}</p>;
};

Paragraph.propTypes = {
    children: PropTypes.node.isRequired
};

const PercentIcon = (props) => {
    const { src } = props;
    return (
        <div className="w-12 h-12 md:w-20 md:h-20">
            <img className="w-full h-full" src={src} alt="brand and values icon" />
        </div>
    );
};

PercentIcon.propTypes = {
    src: PropTypes.string.isRequired
};

const BrandAndValues = () => {
    return (
        <section>
            <div className="px-5 mx-auto max-w-screen-2xl py-16">
                <div>
                    <h2 className="w-10/12 md:w-full lg:text-7.5xl text-4.5xl lg:leading-22.5 leading-15 font-poppins text-fade-black font-medium py-6">
                        Give your brand the “Yume <br /> Labs Edge”
                    </h2>
                    <div className="flex flex-col py-24 w-10/12 md:w-full 2xl:w-10/12 gap-32 md:flex-row">
                        <Paragraph>
                            <span className="md:text-black md:font-medium"> We innovate </span> at the intersection of
                            business, design, and engineering so your brand can deliver on its unique promise.
                        </Paragraph>
                        <Paragraph>
                            <span className="md:text-black md:font-medium"> We invest </span> in continuous R&D to bring
                            you the latest and the best in Product Innovation, UX/UI Design, and Industrial Design.
                        </Paragraph>
                        <Paragraph>
                            <span className="md:text-black md:font-medium"> We proactively </span> manage delivery risk
                            through a structured project management process to ensure you stay within time and budget.
                        </Paragraph>
                    </div>
                </div>
                <div>
                    <h3 className="text-4xl md:text-5.5xl leading-22.5 font-poppins text-fade-black font-medium mb-6">
                        Our Values
                    </h3>
                    <Paragraph>
                        Our values guide our choices and actions <br /> daily, built on the three pillars of:
                    </Paragraph>
                    <div className="flex py-24 w-10/12 md:w-auto 2xl:w-10/12  gap-32 flex-wrap  flex-col md:flex-row">
                        <div className="flex flex-col gap-12 flex-1">
                            <PercentIcon src={percentIcon} />
                            <span className="md:text-black font-medium text-2xl -mb-6">Excellence</span>
                            <Paragraph>
                                Choose to go beyond “enough” to deliver at the edge of what’s “possible”.
                            </Paragraph>
                        </div>
                        <div className="flex flex-col gap-12 flex-1">
                            <PercentIcon src={percentIcon} />
                            <span className="md:text-black font-medium text-2xl -mb-6">Simplification</span>
                            <Paragraph>Embrace first-principles thinking to reduce non-essential complexity.</Paragraph>
                        </div>
                        <div className="flex flex-col gap-12 flex-1">
                            <PercentIcon src={percentIcon} />
                            <span className="md:text-black font-medium text-2xl -mb-6">Co-creation</span>
                            <Paragraph>Create together through diligence, communication, and transparency.</Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="w-full h-150 md:h-full object-cover bg-left"
                src={brandAndValues}
                alt="brand and values"
                loading="lazy"
            />
        </section>
    );
};

export default BrandAndValues;
