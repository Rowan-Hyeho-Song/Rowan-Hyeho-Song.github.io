import { useState, useEffect } from "react";
import Layout from "components/Layout";
import CardSlider from 'components/CardSlider';
import getPortfolioList from 'constants/PortfolioList';

function MainPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(getPortfolioList());
    }, [])
    return (
        <Layout>
            <CardSlider items={list} innerRadius={"30vw"} floatViewport={"60%"}></CardSlider>
        </Layout>
    );
}

export default MainPage;