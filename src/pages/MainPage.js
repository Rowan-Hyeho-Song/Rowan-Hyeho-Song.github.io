import CardSlider from 'components/CardSlider';
import PortfolioList from 'constants/PortfolioList';

function MainPage() {
    return (
        <>
            <CardSlider items={PortfolioList} innerRadius={"30vw"} floatViewport={"60%"}></CardSlider>
        </>
    );
}

export default MainPage;