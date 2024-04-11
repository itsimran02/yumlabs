import { useState } from 'react';
import rightArrow from '../../../assets/icons/right.svg';
import leftArrow from '../../../assets/icons/left.svg';
import { NavLink } from 'react-router-dom';
import { data, latestArticles } from '../../../constants/insight';

const AuthorDetail = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const reversedLatestArticles = latestArticles.slice().reverse();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedArticles = reversedLatestArticles.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(latestArticles.length / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <section className=" px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36 ">
            <div className="bg-fade-gray flex-1 h-px opacity-70" />
            <div className="flex items-center md:gap-5 gap-2">
                <div className="bg-fade-gray flex-1 h-px opacity-70" />
            </div>
            <h2 className="text-4xl font-medium md:mt-20 md:mb-12 mt-10 -mb-10 mx-0">Authors</h2>

            <div className="flex flex-col justify-between gap-4 md:flex-row pt-12">
                {data?.map((item) => (
                    <div className="flex max-w-[600px] flex-col gap-7" key={item.id}>
                        <div className="flex md:flex-row gap-7 flex-col">
                            <img
                                className="h-36 w-36"
                                src={item.authorImage}
                                width={150}
                                height={150}
                                alt="Author image"
                                style={{ borderRadius: '50%' }}
                            />
                            <div className="flex flex-col justify-end">
                                <h4 className="text-[black] text-2xl font-medium font-poppins">{item.authorName}</h4>
                                <p className="text-fade-gray text-lg font-normal font-roboto pb-5">
                                    {item.designation}
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <p className="text-fade-gray text-2xl font-normal opacity-80 pr-10 font-roboto ">
                                {item.about}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-fade-gray flex-1 h-px opacity-70" />
            <h2 className="text-black text-4xl font-poppins mb-16 max-w-64 pt-7">Latest Articles</h2>
            <section className="flex gap-4 mt-8 overflow-x-scroll scrollbar-hide flex-nowrap">
                {displayedArticles?.map((item) => (
                    <div key={item.id}>
                        <NavLink href={item.link}>
                            <div key={item.id} className="cursor-pointer">
                                <div className="min-w-64 rounded-[10px] w-[30vh]">
                                    <img
                                        className="md:w-full md:h-80 bg-transparent rounded-[10px] h-52 w-60"
                                        src={item.articleImage}
                                        width={380}
                                        height={310}
                                        alt="Author image"
                                        style={{ borderRadius: '50%' }}
                                    />
                                </div>
                                <div className="mt-6 mb-5">
                                    <span className="font-bold text-xl text-[black] font-poppins">
                                        /{item.id < 9 ? `0${item.id}` : item.id} / {item.contentHeading} / {item.date}
                                    </span>
                                    <p className="text-[gray] text-xl font-normal max-w-[80%] mt-2.5">
                                        {item.articleDescription > 25
                                            ? item.articleDescription > 50
                                                ? `${item.articleDescription.substring(0, 50)}.....`
                                                : `${item.articleDescription.substring(0, 50)}`
                                            : item.articleDescription}
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </section>

            <div className="flex items-center md:gap-5  gap-2">
                <div className="md:bg-fade-gray flex-1 h-px opacity-70" />
                <button
                    className="flex justify-center items-center  cursor-pointer rounded-[50%] border-[none] bg-fade-white w-9 h-9"
                    onClick={handlePrevPage}
                    type="button">
                    <img src={leftArrow} alt="Left Arrow" />
                </button>
                <button className=" w-9 h-9 rounded-[50%] border-[none]" onClick={handleNextPage} type="button">
                    <img src={rightArrow} alt="Left Arrow" />
                </button>
            </div>
        </section>
    );
};

export default AuthorDetail;
