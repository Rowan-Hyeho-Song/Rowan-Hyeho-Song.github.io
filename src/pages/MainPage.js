import Layout from "components/Layout";
import CardSlider from 'components/CardSlider';
import PortfolioList from 'constants/PortfolioList';

function MainPage() {
    return (
        <Layout>
            <CardSlider items={PortfolioList} innerRadius={"30vw"} floatViewport={"60%"}></CardSlider>
        </Layout>
    );
}

export default MainPage;