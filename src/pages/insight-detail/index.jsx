import InsightDetailsHeader from '../../pages/insight-detail/InsightDetailsHeader';
import AuthorDetail from '../../pages/insight-detail/AuthorDetails';
import ArticleSection from '../../pages/insight-detail/InsightDetailsBlogSection';

const InsightDetail = () => {
    return (
        <div>
            <InsightDetailsHeader />
            <ArticleSection />
            <AuthorDetail />
        </div>
    );
};

export default InsightDetail;
