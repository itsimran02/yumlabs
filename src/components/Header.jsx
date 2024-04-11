import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import useWindowResize from '../utils/windowResizeUtils';
import { SCREEN_SIZE, NAV_ITEMS } from '../constants/app-constant';
import { ROUTES } from '../constants/app-constant';

import { brandLogo } from '../assets';

const NAV_ITEMS_EXCLUDING_LAST = NAV_ITEMS.slice(0, -1);

const Header = () => {
    const windowWidth = useWindowResize();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (windowWidth >= SCREEN_SIZE.MD) {
            setMenuOpen(false);
        }
    }, [windowWidth]);

    return (
        <header className="w-full sticky top-0 z-50 bg-white bg-opacity-50 backdrop-blur-md">
            <div className="flex justify-between p-6 md:py-5 mx-auto max-w-screen-2xl items-center">
                <Link to={ROUTES.HOME}>
                    <img src={`${brandLogo}`} alt="Brand logo" className="object-cover h-5 lg:h-6" />
                </Link>

                <div className="flex justify-end items-center text-center md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
                    <button
                        onClick={toggleMenu}
                        className={`flex md:hidden flex-col gap-1 cursor-pointer 
                                ${isMenuOpen ? 'rotate-45' : ''}`}>
                        <span
                            className={`w-6 h-[3px] bg-accent-blue transition duration-300 opacity
                            ${isMenuOpen ? '-rotate-90 translate-y-1.5 ' : 'translate-y-0'}`}></span>
                        <span
                            className={`w-6 h-[3px] bg-accent-blue transition duration-300 
                            ${isMenuOpen ? 'opacity-0' : 'translate-y-[5px]'}`}></span>
                        <span
                            className={`w-6 h-[3px] bg-accent-blue transition duration-300 -translate-y-2
                            ${isMenuOpen ? '' : '-translate-y-0'}`}></span>
                    </button>
                    <nav className="hidden md:flex  2xl:gap-4">
                        {NAV_ITEMS_EXCLUDING_LAST.map((nav, index) => (
                            <NavLink
                                to={nav.link}
                                key={`header-${index}`}
                                className="md:text-xs lg:text-sm xl:text-base uppercase hover:font-semibold cursor-pointer md:w-16 lg:w-20 xl:w-24 2xl:w-28 text-header-gray font-normal">
                                {nav.title}
                            </NavLink>
                        ))}
                    </nav>
                    <Link
                        to={ROUTES.CONTACT}
                        className="hidden md:flex md:rounded-3xl xl:rounded-5xl bg-brand-blue transition duration-500 ease-in-out font-base transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-xs xl:text-sm text-white px-6 py-3.5
                        ">
                        CONTACT US
                    </Link>
                </div>
            </div>

            {isMenuOpen && (
                <nav
                    className="flex flex-col -z-10 bg-white transition-all duration-400 bg-opacity-50 backdrop-blur-md
                        px-9 pt-24 text-center text-3xl text-fade-gray tracking-tight leading-10 gap-6 font-light items-start md:hidden h-screen
                        ">
                    {NAV_ITEMS_EXCLUDING_LAST.map((nav, index) => (
                        <NavLink
                            to={nav.link}
                            key={`menu-${index}`}
                            className="uppercase hover:font-semibold cursor-pointer font-extralight"
                            onClick={toggleMenu}>
                            {nav.title}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
