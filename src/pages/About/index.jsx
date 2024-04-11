import BrandAndValues from './BrandAndValues';
import { Foundersection } from './Founder';
import HeroSection from './HeroSection';
import Partnersection from './Partner';

const About = () => {
    return (
        <div>
            <HeroSection />
            <BrandAndValues />
            <Foundersection />
            {/* <Partnersection /> */}
        </div>
    );
};

export default About;
