import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWidowSize';
import { throttle, debounce } from 'lodash';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid red;
`;

const CardWrapper = styled.ul`
    list-style-type: none;
    transition: transform .1s;
    
    display: flex;
    justify-content: center;
    align-items: center;

    transform-origin: center center;
    transform: translateY(1300px) rotate(${({ rotate }) => rotate}deg);
    background-color: red;
    width: 100px;
    height: 100px;
    margin: 0;
    padding: 0;
`;

const Card = styled.li`
    position: absolute;
    width: 30vh;
    height: 40vh;
    background-color: #00000022;
    border: 1px solid #333333;

    text-align: center;
    font-weight: 600;
    z-index: 0;

    cursor: pointer;
    transform-origin: center center;

    &:hover {
        background-color: #FF555522;
        z-index: 2;
    }
`;

function CardSlider (props) {
    const { items } = props;

    const windowSize = useWindowSize();
    const [currentArc, setCurrentArc] = useState(0);

    useEffect(() => {
        const target = document.getElementById("slider-container");
        const wrapper = document.getElementById("card-wrapper");
        const rect = wrapper.getBoundingClientRect();
        const center = {
            x: rect.top + 50,
            y: rect.left + 50
        };
        
        const bindRotateCardEvent = (e) => {
            let { pageX: startX, pageY: startY } = e;

            const moveHandler = (e) => {
                const { pageX: endX, pageY: endY } = e;
                const { x: centerX, y: centerY } = center;
                const vectorSCX = startX - centerX;
                const vectorSCY = startY - centerY;

                const vectorECX = endX - centerX;
                const vectorECY = endY - centerY;

                const rad = Math.atan2(vectorECY, vectorECX) - Math.atan2(vectorSCY, vectorSCX);
                const deg = rad * (180 / Math.PI);

                setCurrentArc((currentArc) => currentArc + deg);
                startX = endX;
                startY = endY;
            };
            const upHandler = (e) => {
                target.removeEventListener("mousemove", moveHandler);
            };
            target.addEventListener("mousemove", moveHandler);
            target.addEventListener("mouseup", upHandler, { once: true });
        };
        target.addEventListener("mousedown", bindRotateCardEvent);

        return () => {
            target.removeEventListener("mousedown", bindRotateCardEvent);
        };
    }, [currentArc])

    const CardList = () => {
        const cards = Array.from({ length: items }, (_, i) => i + 1);
        const point = items / 2;
        const angle = 13;
        const list = cards.map((card, i) => {
            // const translate = '-300px';
            const translate = 'calc(-75vw + 20vh)';
            const rotate = i < point ? i * angle : (items - i) * -angle;
            return (<Card className="no-drag" style={{ transform: `rotate(${rotate}deg) translateY(${translate})`}}>{card}</Card>);
        });
        return <>{list}</>;
    }

    return (
        <Container id="slider-container">
            <CardWrapper id="card-wrapper" rotate={currentArc}>
                <CardList />
            </CardWrapper>
        </Container>
    );
}

export default CardSlider;