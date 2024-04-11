import { contentSection, datas } from '../../../constants/strategy';
import laptop from '../../../assets/images/laptops.png';

const index = () => (
    <section className=" gap-x-[8%] pb-28 flex-col-reverse md:pt-32 pt-16">
        <div>
            <div className="mb-20">
                <div>
                    <img
                        className="
                    object-cover md:min-w-full h-[700px]  md:h-[850px]"
                        src={laptop}
                        alt="double quote"
                    />
                </div>
                <div>
                    {contentSection.map((item, index) => (
                        <section
                            className="md:flex md:flex-row gap-[12%] md:my-24 py-0 flex flex-col my-10 px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36"
                            key={index}>
                            <div>
                                <h2 className="text-2xl pb-7  max-w-72 font-medium font-poppins">{item?.heading}</h2>
                            </div>
                            <div>
                                {datas.articleContent?.map((item) => (
                                    <p
                                        className="text-lg font-normal text-gray-500 mb-[30px] font-roboto "
                                        key={item.id}>
                                        {item.description}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default index;
