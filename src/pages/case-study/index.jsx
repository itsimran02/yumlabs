import Strategy from '../../pages/case-study/Strategy/index';
import HeroSection from './HeroSection';
import StatementSection from './StatementSection';
import Unbiased from './Unbiased';
import Project from '../../pages/case-study/Project/index';
import Branding from './Branding';

const CaseStudy = () => {
    return (
        <>
            <HeroSection />
            <StatementSection />
            <Strategy />
            <Branding />
            <Unbiased />
            <Project />
        </>
    );
};

export default CaseStudy;
