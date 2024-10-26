import logo_ipsum  from "../../../assets/logoipsum.png";
import company_generic from "../../../assets/company-generic.png";
import trademark from "../../../assets/trademark.png";
import AboutPageCard from "./AboutPageCard.jsx";
import rounded_background_splash from "../../../assets/rounded-backgroud-splash.png";
import {FaPlay} from "react-icons/fa";
import robot from "../../../assets/robot.png";

function AboutPage() {
    return (
        <div>
            <div className="px-48 mt-8 flex flex-col items-center">
                <div className="w-4/6">
                    <p className="font-bold text-[52px] text-center">Make work life <span
                        className="text-[#C10A28]">simpler</span>,
                        more <span className="text-[#C10A28]">pleasant</span> and more <span
                            className="text-[#C10A28]">productive.</span></p>
                </div>
                <div className="mt-8 w-4/6">
                    <p className="text-[#302F2F] text-[20px] text-center">4 Rays is the AI-powered platform for
                        work
                        bringing all of
                        your conversations, Stats, and customers together in one place. Around the world, 4 Rays is
                        helping
                        gaming centers of all sizes grow and send productivity through the roof.</p>
                </div>
            </div>

            <div className="px-48 flex items-center justify-center gap-16 mt-8">
                <div>
                    <p className="font-bold text-[52px]">200K<span className="text-[#C10A28]">+</span></p>
                    <p className="text-[#302F2F] w-4/6">Paid Customers</p>
                </div>
                <div>
                    <p className="font-bold text-[52px]">77<span className="text-[#C10A28]">+</span></p>
                    <p className="text-[#302F2F] w-4/6">Of the Fortune 100 use 4 Rays</p>
                </div>
                <div>
                    <p className="font-bold text-[52px]">150<span className="text-[#C10A28]">+</span></p>
                    <p className="text-[#302F2F] w-4/6">countries hav daily active users in 4 Rays</p>
                </div>
            </div>

            <div className="px-48 mt-24">
                <div className="flex px-32 justify-center">
                    <img src={logo_ipsum} alt="Generic Logo" className="w-[50%]"/>
                    <img src={company_generic} alt="Generic Logo" className="w-[50%]"/>
                    <img src={company_generic} alt="Generic Logo" className="w-[50%]"/>
                    <img src={company_generic} alt="Generic Logo" className="w-[50%]"/>
                </div>
                <div className="flex px-[200px] justify-center">
                    <img src={logo_ipsum} alt="Generic Logo" className="w-[50%]"/>
                    <img src={company_generic} alt="Generic Logo" className="w-[50%]"/>
                    <img src={company_generic} alt="Generic Logo" className="w-[50%]"/>
                    <img src={company_generic} alt="Generic Logo" className="w-[50%]"/>
                </div>
            </div>


            <div className="relative px-48 mt-32 flex justify-between gap-12 ">
                <img src={robot} className="absolute right-[20px] top-[200px]"  alt="Generic Logo" />
                <div className="basis-2/4">
                    <p className="leading-10 text-black text-[45px] font-semibold">Building the digital-first ecosystem for
                        work</p>
                    <p className="text-lg mt-8">Connect your conversations with the tools and services that you use to
                        get the job done. With over 2,500+ apps and a robust API, the Slack platform team works with
                        partners and developers globally to build apps and integrations that streamline your work,
                        automate mundane tasks and bring context into your conversations in Slack.</p>
                    <p className="text-lg mt-8"><span
                        className="text-[#C10A28] text-lg font-bold">Our Partners</span> include the worlds largest SaaS
                        companies and 1000+ products that are shaping the future of work.</p>
                    <p className="text-lg mt-8"><span
                        className="text-[#C10A28] text-lg font-bold">The Slack Marketplace</span> gives you access to
                        thousands of apps that can extend the capabilities of your Slack team.</p>
                    <p className="text-lg mt-8"><span
                        className="text-[#C10A28] text-lg font-bold">The Slack Fund</span> is a venture capital fund
                        that invests in and collaborates with entrepreneurs creating the next great software companies.
                    </p>
                </div>
                <div>
                    <img src={trademark} alt="Generic Logo"/>
                </div>
            </div>

            <div className="px-48 mt-32 flex justify-between">
                <div>
                    <img src={trademark} alt="Generic Logo"/>
                </div>
                <div className="basis-2/4">
                    <p className="leading-10 text-black text-[45px] font-semibold">Who we are and how to join us</p>
                    <p className="text-lg mt-8">We live by our mission, and improving people’s working life starts with
                        our own company. We’re building a platform and products we believe in — as well as a strong,
                        diverse team of curious, creative people who want to do the best work of their lives and support
                        each other in the process.</p>
                    <p className="text-lg mt-8"><span
                        className="text-[#C10A28] text-lg font-bold">Careers</span> at Slack offer all kinds of
                        opportunities and a simpler, more pleasant, more productive working life.</p>
                    <p className="text-lg mt-8"><span
                        className="text-[#C10A28] text-lg font-bold">4 Rays for Good</span> aiming to increase the
                        number of historically underrepresented individuals in the technology industry.</p>
                </div>
            </div>

            <div className="mt-32">
                <p className="text-center font-bold text-5xl">News from <span className="text-[#C10A28]">4 Rays</span>
                </p>
                <p className="text-lg mt-4 text-center">For more company news <span
                    className="text-[#C10A28] underline font-semibold italic">please visit our Newsroom</span></p>
                <div className="mt-12 flex justify-around">
                    <AboutPageCard/>
                    <AboutPageCard/>
                    <AboutPageCard/>
                </div>
            </div>

            <div className="relative mt-32">
                <img src={rounded_background_splash} alt="Generic Logo" className="w-full"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-center text-white text-[54px] font-bold max-w-[600px]">Whatever work you do, you
                        can
                        do it in <span className="text-[#C10A28]">4 Rays</span></p>
                    <div className="flex gap-6 items-center justify-center">
                        <button className="mt-8 px-24 py-4 rounded-2xl border border-[#C10A28] bg-[#C10A28]"><p
                            className="text-white font-bold">Get Started</p></button>
                        <button className="mt-8 px-12 py-4 rounded-2xl border border-white"><p
                            className="text-white font-bold">Talk to Sales</p></button>
                    </div>
                </div>
            </div>

            <div className="mt-32 flex items-center justify-between px-48">
                <div className="flex flex-col">
                    <p className="text-red-600 italic text-2xl">Try on the touch</p>
                    <h2 className="text-5xl font-extrabold">
                        Watch <span className="text-red-600">Video</span> Presentation
                    </h2>
                    <p className="text-gray-600 mt-1 text-2xl">App itself is fast, Fluid and loads quickly</p>
                </div>
                <div
                    className="text-red-600 border-4 border-red-600 rounded-full p-4 hover:bg-red-600 hover:text-white transition duration-300">
                    <FaPlay size={24}/>
                </div>
            </div>

        </div>
    );
}

export default AboutPage;