import './App.css';
import CardSlider from 'components/CardSlider';
import PortfolioList from 'constants/PortfolioList.js';

function App() {
    return (
        <div className="App">
            <CardSlider items={PortfolioList} innerRadius={"30vw"} floatViewport={"60%"}></CardSlider>
        </div>
    );
}

export default App;
