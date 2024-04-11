import { datas, contentSection } from '../../../constants/insight';

const ArticleSection = () => {
    return (
        <div>
            <section className="flex flex-row md:gap-[12%] my-[45px] px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                <div className="md:basis-2/5" />
                <div className="md:basis-3/5">
                    {datas.articleContent?.map((item) => (
                        <p className="text-lg font-normal text-gray-500 mb-[30px] font-roboto " key={item.id}>
                            {item.description}
                        </p>
                    ))}
                </div>
            </section>

            {contentSection.map((item, index) => (
                <section
                    className="md:flex md:flex-row gap-[12%] md:my-11 py-0 flex flex-col my-5 px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36"
                    key={index}>
                    <div className="basis-2/5">
                        <h2 className="text-4xl pb-7 max-w-72 font-medium font-poppins">{item?.heading}</h2>
                    </div>

                    <div className="basis-3/5">
                        {item.paragraph?.map((item) => (
                            <>
                                {
                                    <>
                                        <strong>{item.id}.</strong>&nbsp;
                                        <strong>{item.subDescription}</strong>
                                        <p className="text-lg font-normal text-gray-500 mb-8 font-roboto" key={item.id}>
                                            {item.description}
                                        </p>
                                    </>
                                }
                            </>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ArticleSection;
