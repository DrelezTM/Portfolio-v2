import { useEffect, useState } from "react";

const Navbar = () => {
    const [ navbarCondition, setNavbarCondition ] = useState(true);
    const [ navbarBlur, setNavbarBlur ] = useState(false);
    const [ scrollPercent, setScrollPercent ] = useState(0);

    const openNavbar = () => {
        setNavbarCondition(false);
    }

    const closeNavbar = () => {
        setNavbarCondition(true);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeNavbar();
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
      
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setScrollPercent(scrolled);

            if (window.scrollY >= 150) {
                setNavbarBlur(true);
            } else if (window.scrollY < 150) {
                setNavbarBlur(false);
            }
        });
    }, [ window.scrollY ]);

    return(
        <nav className="z-20 fixed">
            <div className="w-full h-[2px] fixed z-20 bg-[#1A1F1E]">
                <div className=" bg-gossamer-600 h-full" style={{ width: `${scrollPercent}%` }}></div>
            </div>
            <div className={ `transition-all ease-in-out duration-1000 flex py-8 md:px-24 px-10 items-center justify-between fixed w-full top-0 ${navbarBlur ? 'backdrop-blur-sm' : ''}` }>
                <a className="text-2xl text-white font-semibold" href="#">Yazid Yusuf</a>
                <div className="hidden md:flex gap-10 items-center">
                    <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#home">HOME</a>
                    <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#about">ABOUT</a>
                    <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#experience">EXPERIENCE</a>
                    <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#technologies">TECHNOLOGIES</a>
                    <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#projects">PROJECTS</a>
                </div>
                <div className="hidden md:flex">
                    <a className="ease-in-out duration-200 text-white bg-gossamer-600 hover:bg-gossamer-700 transition-all px-6 py-2 rounded-md shadow-md" href="#contact">CONTACT</a>
                </div>
                <div className="flex md:hidden justify-center items-center">
                    <button onClick={ openNavbar } className={ `text-white  ${navbarCondition ? '' : 'hidden'}` }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    <button className={ `text-white ${navbarCondition ? 'hidden' : ''}` } onClick={ closeNavbar }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>

            <div className={ `backdrop-blur-sm transform transition-transform duration-300 ease-in-out h-screen shadow-md flex flex-col fixed px-8 py-24 top-0 gap-5 w-[70%] ${ navbarCondition ? 'translate-x-[-100%]' : '' }` }>
                <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#home">HOME</a>
                <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#about">ABOUT</a>
                <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#experience">EXPERIENCE</a>
                <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#technologies">TECHNOLOGIES</a>
                <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#projects">PROJECTS</a>
                <a className="ease-in-out duration-300 text-white hover:text-gossamer-400" href="#contact">CONTACT</a>
            </div>
        </nav>
    )
}

export default Navbar;
