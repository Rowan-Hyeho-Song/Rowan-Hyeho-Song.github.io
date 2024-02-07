import './App.css';
import CardSlider from 'components/CardSlider';
import PortfolioList from 'constants/PortfolioList.js';

function App() {
    return (
        <div className="App">
            <CardSlider items={PortfolioList} innerRadius={"50vw"}></CardSlider>
        </div>
    );
}

export default App;
