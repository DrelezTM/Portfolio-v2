import { useEffect, useState } from "react";

const Jumbotron = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 18);
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return(
        <section className="h-screen relative bg-jumbotron bg-cover flex justify-center items-center" id="home">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="text-white relative z-10 text-center flex flex-col gap-6 items-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h3 className="text-4xl md:text-6xl font-semibold">Yazid Yusuf</h3>
                    <div className="text-xl md:text-2xl flex gap-1">
                        <div>
                            <span className={activeIndex === 0 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>F</span>
                            <span className={activeIndex === 1 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>u</span>
                            <span className={activeIndex === 2 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>l</span>
                            <span className={activeIndex === 3 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>l</span>
                        </div>
                        <div>
                            <span className={activeIndex === 4 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>S</span>
                            <span className={activeIndex === 5 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>t</span>
                            <span className={activeIndex === 6 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>a</span>
                            <span className={activeIndex === 7 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>c</span>
                            <span className={activeIndex === 8 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>k</span>
                        </div>
                        <div>
                            <span className={activeIndex === 9 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>D</span>
                            <span className={activeIndex === 10 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>e</span>
                            <span className={activeIndex === 11 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>v</span>
                            <span className={activeIndex === 12 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>e</span>
                            <span className={activeIndex === 13 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>l</span>
                            <span className={activeIndex === 14 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>o</span>
                            <span className={activeIndex === 15 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>p</span>
                            <span className={activeIndex === 16 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>e</span>
                            <span className={activeIndex === 17 ? 'text-gossamer-600 transition-all ease-in-out duration-200' : ''}>r</span>
                        </div>
                    </div>
                </div>
                <a className="cursor-pointer bg-gossamer-600 hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md px-8 w-fit py-3 rounded-md md:text-xl text-lg" href="/curriculum-vitae.pdf">Open CV</a>
            </div>
        </section>
    )
}

export default Jumbotron;
