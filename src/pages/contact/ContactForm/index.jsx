import doubleQuotes from '../../../assets/icons/double-quotes.svg';
import gradientImage from '../../../assets/icons/ellipse.svg';
import { customerData } from '../../../constants/contact-data';
import ContactForm from '../ContactUs';

const ContactUsBody = () => (
    <section className="md:flex md:flex-row gap-x-[8%] pb-40 flex-col-reverse md:pt-32 pt-16">
        <div className="basis-2/5">
            <div className="md:flex md:gap-y-9  md:mb-14 flex-col gap-y-14 mx-0 mb-14">
                <div>
                    <img className="w-14 h-12" src={doubleQuotes} alt="double quote" />
                </div>
                <div>
                    <h3 className="w-full text-2xl  max-w-[928px] md:text-3xl italic font-light text-[#0b1226] opacity-60  mt-0">
                        {customerData[0].quote}
                    </h3>
                </div>
            </div>

            <div className="flex md:gap-10  gap-5 p-2.5">
                <img
                    className="w-28 h-32  md:w-40 md:h-40 absolute -mt-4 mr-2.5 rounded-[50%]"
                    src={gradientImage}
                    alt="gradient image"
                />
                <div className="md:w-44 md:h-32 relative w-32 h-24">
                    <img
                        className="w-4/5 h-24 -top-5 -right-1 rounded-[50%] md:w-[116px] md:h-28 absolute md:-top-4  md:-right-2.5 mt-5"
                        src={customerData[0].image.icon}
                        alt={customerData[0].image.alt}
                    />
                </div>
                <div>
                    <span className="text-base md:-text-5 text-[black] font-medium">{customerData[0].name}</span> <br />
                    <span className="text-base mt-3 block max-w-53 md:text-lg text-[gray] md:mt-5">
                        {customerData[0].designation}
                    </span>
                    <span className="text-base block max-w-52 md:text-lg text-[gray]">{customerData[0].company}</span>
                </div>
            </div>
        </div>
        <div>
            <ContactForm />
        </div>
    </section>
);

export default ContactUsBody;
