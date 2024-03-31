import Features from "./components/features";
import FeaturesBlocks from "./components/features-blocks";
import Hero from "./components/hero";
// import Newsletter from "./components/newsletter";
import Testimonials from "./components/testimonials";
import SpeedDialComponent from "./components/utils/speedDial";
import VedioHome from "./components/vedioHome";

function Home() {
    return ( 
        <>
            <Hero />
            <VedioHome />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
            {/* <Newsletter /> */}
            <SpeedDialComponent />
        </>
     );
}

export default Home;