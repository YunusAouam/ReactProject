import { Link } from "react-router-dom";
import GoalIcon from '../icons/goal.png';
import TouchIcon from '../icons/contact-us.png';
import EarthIcon from '../icons/planet-earth.png';
import MissionIcon from '../icons/flag.png';
import VisionIcon from '../icons/vision.png';
const AboutUs = () => {
    return ( 
        <section className = "relative sm:top-32 lg:top-0 isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 font-family-poppins">
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-blue-400 sm:text-4xl">
                            Who We Are
                        </p>
                        <p className="mt-4 max-w-2xl text-left text-lg text-gray-200 lg:mx-auto">
                            Welcome to Goleador Sport Consulting, your premier partner in sports marketing. With 
                            a blend of expertise in the sports industry and innovative solutions, we specialize in 
                            enhancing brand notoriety and engaging sport fans through strategic campaigns. Our 
                            focus is on maximizing fan engagement, ensuring that your brand shines in the dynamic 
                            realm of sports, placing it at the heart of the biggest sports events.
                        </p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <img src={EarthIcon} alt="middle east" />
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-400">Operating Across Africa and the Middle East</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-200">
                                    Goleador Sport Consulting operates across the vibrant territories of Africa and the 
                                    Middle East. With a deep understanding of the sports landscape in these regions, we 
                                    bring unparalleled expertise and insights to our clients, helping them navigate the 
                                    unique opportunities and challenges of these dynamic markets.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <img src={MissionIcon}  alt="mission" />
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-400">
                                    Our Mission
                                </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-200"> 
                                        Our mission at Goleador Sport Consulting is to connect brands with fans through sports. 
                                    We believe in the power of sports to create meaningful connections between brands and 
                                    their audiences, fostering loyalty and engagement that transcends traditional marketing 
                                    strategies.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <img src={VisionIcon} alt="vision"/>
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-400">
                                    Our Vision
                                </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-200">
                                    At Goleador Sport Consulting, our vision is to make sports a platform for 
                                    communication, engagement, and development. We see sports as more than just a 
                                    game it's a powerful tool for bringing people together, driving social change, and 
                                    inspiring individuals to reach their full potential.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <img src={GoalIcon} alt="objectif"/>
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-400">
                                    Our Objectives
                                </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-200">
                                    Our objectives at Goleador Sport Consulting are clear: to create added value for both 
                                    brands and sports organizations. By leveraging our expertise and industry insights, we 
                                    strive to enhance the visibility and reach of sports properties, while delivering tangible 
                                    results and lasting impact for our clients.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                    <img src={TouchIcon} alt="Get in Touch" />
                                </div>
                                <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-400">
                                    Get in Touch
                                </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-200">
                                    Ready to elevate your brand in the exciting world of sports? <Link to={"/contact"} className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-400">Contact</Link> Goleador Sport 
                                    Consulting today to learn more about how we can help you achieve your goals and 
                                    connect with your audience in meaningful ways through sports.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
        </section>

     );
}
 
export default AboutUs;