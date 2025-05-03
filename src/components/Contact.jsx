import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
    const [ loadItems, setLoadItems ] = useState("Submit");
    
    const sendMail = (event) => {
        event.preventDefault();
        setLoadItems(
            <div className='flex gap-2 items-center'>
                <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20"><path d="m11 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm-6.25876055-3c1.38071188 0 2.5 1.1192881 2.5 2.5s-1.11928812 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm11.57808915.5c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm2.1806714-4.18145901c.8284271 0 1.5.67157288 1.5 1.50000001 0 .8284271-.6715729 1.5-1.5 1.5s-1.5-.6715729-1.5-1.5c0-.82842713.6715729-1.50000001 1.5-1.50000001zm-16-3.31854099c1.38071187 0 2.5 1.11928813 2.5 2.5s-1.11928813 2.5-2.5 2.5-2.5-1.11928813-2.5-2.5 1.11928813-2.5 2.5-2.5zm15.2857894-.79275266c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-.5522848 0-1-.44771525-1-1s.4477152-1 1-1zm-9.7857894-5.20724734c1.65685425 0 3 1.34314575 3 3s-1.34314575 3-3 3-3-1.34314575-3-3 1.34314575-3 3-3zm7.5 3c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5-.5-.22385763-.5-.5.2238576-.5.5-.5z" fill="#fff" fillRule="evenodd"/></svg>
                Loading..
            </div>
        );

        const form = new FormData(event.target);
        axios({
            url: 'https://api.emailjs.com/api/v1.0/email/send',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
                "lib_version": "4.3.3",
                "user_id": "YUZ3pCNRloGoPly9q",
                "service_id": "service_u3uirfe",
                "template_id": "template_glim8gl",
                "template_params": {
                    "name": form.get('name'),
                    "email": form.get('email'),
                    "message": form.get('message'),
                    "reply_to": ""
                }
            }
        }).then((result) => {
            setLoadItems('Submit');
            location.reload();
        }).catch((err) => {
            setLoadItems('Submit');
            location.reload();
        });
    }
    return(
        <section className="bg-[#000606] text-white md:h-screen h-fit flex justify-center items-center flex-col md:px-24 px-10 md:py-10 py-20 md:gap-16 gap-12" id="contact">
            <div className="relative w-fit">
                <h3 className="text-4xl font-semibold relative z-10">Contact Me</h3>
                <div className="absolute w-[90%] h-[12px] bg-gossamer-500 bottom-0 left-0"></div>
            </div>
            <div className="flex w-full gap-16 md:flex-row flex-col">
                <form className="flex flex-col md:w-[50%] w-full gap-4" onSubmit={ sendMail }>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name :</label>
                        <input className="outline-none rounded-md bg-[#1A1F1E] py-3 px-4" id="name" name="name" type="text" placeholder="Your Name" autoComplete="off" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email :</label>
                        <input className="outline-none rounded-md bg-[#1A1F1E] py-3 px-4" id="email" name="email" type="email" placeholder="Your Email" autoComplete="off" required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message">Message :</label>
                        <textarea className="outline-none rounded-md bg-[#1A1F1E] py-3 px-4 h-[150px]" name="message" id="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button className="bg-gossamer-600 px-4 py-4 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md">{ loadItems }</button>
                </form>
                <div className="flex flex-col gap-6 md:w-[50%] w-full md:pt-[30px] pt-0">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <p>+62859106528587</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" fill="#fff"/></svg>
                            <p>ziids1933@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <p>Kp. Siluman RT.004/RW.004 Tambun, Kab. Bekasi</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <a className="bg-gossamer-600 px-3 py-2 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md" href="https://dsc.gg/DrelezTM">
                            <svg height="24" viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h16v16h-16z" fill="none"/><path clipRule="evenodd" d="m7.999 0c-4.417 0-7.999 3.582-7.999 8 0 3.534 2.292 6.533 5.471 7.591.4.073.546-.174.546-.386 0-.19-.007-.693-.011-1.361-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.888-1.17-.888-1.17-.726-.496.055-.486.055-.486.803.057 1.225.824 1.225.824.714 1.223 1.872.87 2.328.665.073-.517.279-.87.508-1.069-1.776-.202-3.644-.888-3.644-3.954 0-.873.312-1.587.823-2.147-.081-.202-.356-1.016.08-2.117 0 0 .672-.215 2.2.82.638-.177 1.322-.266 2.002-.269.679.003 1.364.092 2.003.269 1.527-1.035 2.198-.82 2.198-.82.436 1.101.162 1.915.08 2.117.513.559.822 1.273.822 2.147 0 3.073-1.87 3.75-3.653 3.948.287.247.543.735.543 1.481 0 1.069-.01 1.932-.01 2.195 0 .214.144.463.55.385 3.177-1.061 5.467-4.057 5.467-7.591 0-4.418-3.582-8-8.001-8z" fill="#fff"/></svg>
                        </a>
                        <a className="bg-gossamer-600 px-3 py-2 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md" href="mailto:ziids1933@gmail.com">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" fill="#fff"/></svg>
                        </a>
                        <a className="bg-gossamer-600 px-3 py-2 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md" href="https://www.instagram.com/ziids">
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m7.46494 1.066c1.17334-.05378 1.54734-.066 4.53506-.066 2.9883 0 3.3617.01283 4.5344.066 1.1715.05317 1.9715.23956 2.6712.5115.7339.27631 1.3987.70924 1.9482 1.26867.5595.54943.9925 1.21429 1.2687 1.94822.2719.69972.4577 1.49967.5115 2.67055.0538 1.17334.066 1.54734.066 4.53506 0 2.9877-.0128 3.3617-.066 4.5351-.0532 1.1708-.2396 1.9708-.5115 2.6705-.2811.723-.6576 1.3371-1.2687 1.9482-.5494.5595-1.2143.9925-1.9482 1.2687-.6997.2719-1.4997.4577-2.6705.5115-1.1734.0538-1.5474.066-4.5351.066-2.98772 0-3.36172-.0128-4.53506-.066-1.17088-.0532-1.97083-.2396-2.67055-.5115-.72295-.2811-1.33711-.6576-1.94822-1.2687-.55953-.5494-.99249-1.2143-1.26867-1.9482-.27194-.6997-.45772-1.4997-.5115-2.6705-.05378-1.1734-.066-1.5468-.066-4.5351 0-2.98833.01283-3.36172.066-4.53444.05317-1.1715.23956-1.97145.5115-2.67117.27631-.73388.70924-1.39871 1.26867-1.94822.54942-.55953 1.21428-.99249 1.94822-1.26867.69972-.27194 1.49967-.45772 2.67055-.5115zm8.98026 1.98c-1.1599-.05256-1.5082-.06417-4.4452-.06417s-3.28533.01161-4.44522.06417c-1.0725.04889-1.65489.22794-2.04234.37889-.51333.19922-.88.43755-1.265.82255-.38438.385-.62333.75167-.82255 1.265-.15095.38745-.33.96984-.37889 2.04234-.05256 1.15989-.06417 1.50822-.06417 4.44522s.01161 3.2853.06417 4.4452c.04889 1.0725.22794 1.6549.37889 2.0424.17622.4778.4573.91.82255 1.265.3549.3652.78717.6463 1.265.8225.38745.151.96984.33 2.04234.3789 1.15989.0526 1.50761.0642 4.44522.0642 2.9376 0 3.2853-.0116 4.4452-.0642 1.0725-.0489 1.6549-.2279 2.0424-.3789.5133-.1992.88-.4375 1.265-.8225.3652-.3549.6463-.7872.8225-1.265.151-.3875.33-.9699.3789-2.0424.0526-1.1599.0642-1.5082.0642-4.4452s-.0116-3.28533-.0642-4.44522c-.0489-1.0725-.2279-1.65489-.3789-2.04234-.1992-.51333-.4375-.88-.8225-1.265-.385-.38438-.7517-.62333-1.265-.82255-.3875-.15095-.9699-.33-2.0424-.37889zm-5.8497 12.3449c.4453.1845.9225.2794 1.4045.2794.9735 0 1.907-.3867 2.5953-1.075.6884-.6883 1.0751-1.6219 1.0751-2.5953s-.3867-1.907-1.0751-2.59532c-.6883-.68832-1.6218-1.07502-2.5953-1.07502-.482 0-.9592.09494-1.4045.27939-.4454.18445-.84997.4548-1.19079.79563-.34082.34082-.61118.74542-.79563 1.19072s-.27938.9226-.27938 1.4046.09493.9593.27938 1.4046.45481.8499.79563 1.1907.74539.6112 1.19079.7956zm-2.59345-7.38889c1.06033-1.06033 2.49845-1.65602 3.99795-1.65602 1.4996 0 2.9377.59569 3.998 1.65602s1.656 2.49849 1.656 3.99799-.5957 2.9376-1.656 3.998c-1.0603 1.0603-2.4984 1.656-3.998 1.656-1.4995 0-2.93762-.5957-3.99795-1.656-1.06033-1.0604-1.65602-2.4985-1.65602-3.998s.59569-2.93766 1.65602-3.99799zm10.90565-.81363c.2506-.25065.3914-.59059.3914-.94505 0-.35447-.1408-.69441-.3914-.94505-.2507-.25064-.5906-.39145-.9451-.39145-.3544 0-.6944.14081-.945.39145-.2507.25064-.3915.59058-.3915.94505 0 .35446.1408.6944.3915.94505.2506.25064.5906.39145.945.39145.3545 0 .6944-.14081.9451-.39145z" fill="#fff" fillRule="evenodd"/></svg>
                        </a>
                        <a className="bg-gossamer-600 px-3 py-2 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md" href="https://dsc.gg/DrelezTM">
                            <svg height="28" viewBox="0 0 192 192" fill="none" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056 8.588-3.048 14.418-5.404 24.402-7.068l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><g fill="#fff"><ellipse cx="71" cy="101" rx="13" ry="15"/><ellipse cx="121" cy="101" rx="13" ry="15"/></g></svg>
                        </a>
                        <a className="bg-gossamer-600 px-3 py-2 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md" href="https://www.youtube.com/@DrelezTM">
                            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 12L10.5 14V10L14 12Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z" stroke="currentColor" strokeWidth="1.5"/></svg>
                        </a>
                        <a className="bg-gossamer-600 px-3 py-2 flex justify-center items-center rounded-md hover:bg-gossamer-700 transition-all duration-200 ease-in-out shadow-md" href="https://www.linkedin.com/in/yazid-yusuf">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
