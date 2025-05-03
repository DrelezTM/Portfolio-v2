import axios from 'axios';
import { useEffect, useState } from 'react';

const Projects = () => {
    const [ projectList, setProjectList ] = useState([]);
    const [ visibleItems, setVisibleItems ] = useState(3);
    const [ loadItems, setLoadItems ] = useState("Show More");

    useEffect(() => {
        axios({
            url: 'https://api.github.com/users/DrelezTM/repos',
            method: 'GET'
        }).then((result) => {
            let { data } = result;
            data.sort((a, b) => b.stargazers_count - a.stargazers_count);
            setProjectList(data);
        }).catch((err) => { throw err });
    }, []);

    const handleShowMore = () => {
        setLoadItems(
            <div className='flex gap-2 items-center'>
                <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20"><path d="m11 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm-6.25876055-3c1.38071188 0 2.5 1.1192881 2.5 2.5s-1.11928812 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm11.57808915.5c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm2.1806714-4.18145901c.8284271 0 1.5.67157288 1.5 1.50000001 0 .8284271-.6715729 1.5-1.5 1.5s-1.5-.6715729-1.5-1.5c0-.82842713.6715729-1.50000001 1.5-1.50000001zm-16-3.31854099c1.38071187 0 2.5 1.11928813 2.5 2.5s-1.11928813 2.5-2.5 2.5-2.5-1.11928813-2.5-2.5 1.11928813-2.5 2.5-2.5zm15.2857894-.79275266c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-.5522848 0-1-.44771525-1-1s.4477152-1 1-1zm-9.7857894-5.20724734c1.65685425 0 3 1.34314575 3 3s-1.34314575 3-3 3-3-1.34314575-3-3 1.34314575-3 3-3zm7.5 3c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5-.5-.22385763-.5-.5.2238576-.5.5-.5z" fill="#fff" fillRule="evenodd"/></svg>
                Loading..
            </div>

        );
        setTimeout(() => {
            setLoadItems("Show More");
            setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
        }, 1000);
    }

    return(
        <section className="bg-[#000707] text-white flex flex-col justify-center items-center md:gap-12 gap-10 md:h-screen h-fit md:px-24 px-10 md:py-10 py-20" id="projects">
            <div className="relative w-fit">
                <h3 className="text-4xl font-semibold relative z-10">Projects</h3>
                <div className="absolute w-[90%] h-[12px] bg-gossamer-500 bottom-0 left-0"></div>
            </div>
            <div className="md:grid grid-cols-3 gap-4 flex flex-col">
                {
                    projectList.slice(0, visibleItems).map((list, index) => {
                        const date = new Date(list.created_at);
                        const formattedDate = date.toLocaleString('id-ID', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit'
                        });

                        return <a key={ index } href={ list.html_url } target="_blank" className="bg-[#1A1F1E] rounded-2xl border-4 border-gossamer-600 p-4 flex flex-col gap-2 justify-between">
                            <div className='flex flex-col gap-2'>
                                <h3 className="font-semibold text-xl">{ list.name }</h3>
                                <p>{ list.description }</p>
                            </div>
                            <div className="flex justify-between">
                                <div className='flex gap-4'>
                                    <div className="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        <p>{ list.stargazers_count }</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                                        <p>{ list.forks_count }</p>
                                    </div>
                                </div>
                                <p>{ formattedDate }</p>
                            </div>
                        </a>
                    })
                }
            </div>
            { visibleItems < projectList.length && (
                <button onClick={ handleShowMore } className="bg-gossamer-600 px-6 py-4 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md">{ loadItems }</button>
            )}
        </section>
    )
}

export default Projects;
