import { useState } from 'react';
import rightArrow from '../../../assets/icons/right.svg';
import leftArrow from '../../../assets/icons/left.svg';
import { NavLink } from 'react-router-dom';
import { latestArticles } from '../../../constants/project-data';

const Project = () => {
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
        <section className="mx-auto max-w-screen-2xl px-5">
            <h2 className="text-black text-6xl font-poppins mb-16 max-w-64 pt-7 font-medium">Selected Projects</h2>
            <section className="flex mt-8 gap-4 overflow-x-scroll scrollbar-hide flex-nowrap">
                {displayedArticles?.map((item) => (
                    <div key={item.id}>
                        <NavLink href={item.link}>
                            <div key={item.id} className="cursor-pointer">
                                <div className="min-w-64 rounded-[10px] ">
                                    <img
                                        className="md:w-full md:h-fit bg-transparent rounded-[10px] h-64 w-60 2xl:h-[32.5rem] 2xl:w-[947px]"
                                        src={item.articleImage}
                                        width={380}
                                        height={310}
                                        alt="Author image"
                                    />
                                </div>
                                <div className="mt-6 mb-5">
                                    <span className=" text-[blue] font-poppins">{item.UI}</span>
                                    <span className=" text-[blue] font-poppins ml-4">{item.UX}</span>

                                    <h3 className="text-[black] text-3xl font-poppins max-w-[80%] mt-2.5">
                                        {item.contentHeading > 25
                                            ? item.contentHeading > 50
                                                ? `${item.contentHeading.substring(0, 50)}.....`
                                                : `${item.contentHeading.substring(0, 50)}`
                                            : item.contentHeading}
                                    </h3>

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

export default Project;
