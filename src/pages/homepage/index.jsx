import HeroSection from './HeroSection';
import WorkComponent from '../../components/WorkComponent';
import TheArt from './TheArtSection';
import OurServiceSection from './OurServiceSection';
import Customerlove from './Customerlove';
import ExploreService from './ExploreService';

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <ExploreService />
            <WorkComponent isHomePage={true} />
            <OurServiceSection />
            <Customerlove />
            <TheArt />
        </div>
    );
};
export default Homepage;
