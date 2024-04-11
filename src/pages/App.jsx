import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../Layout';
import About from './About';
import Contact from './contact';
import CaseStudy from './case-study';
import Insight from './insight';
import InsightDetail from './insight-detail';
import Work from './work';
import Service from './service';
import Homepage from './homepage';
import { ROUTES } from '../constants/app-constant';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<Homepage />} />
                    <Route path={ROUTES.ABOUT} element={<About />} />
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                    <Route path={ROUTES.CASE_STUDY} element={<CaseStudy />} />
                    <Route path={ROUTES.INSIGHT} element={<Insight />} />
                    <Route path={ROUTES.INSIGHT_DETAIL} element={<InsightDetail />} />
                    <Route path={ROUTES.WORK} element={<Work />} />
                    <Route path={ROUTES.SERVICE} element={<Service />} />
                    {/* 404 */}
                    <Route path="*" element={<h1>404 — Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
