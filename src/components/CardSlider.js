import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
border: 1px solid red;
`;

const CardWrapper = styled.ul.attrs((props) => {
    const { position, innerRadius, rotate } = props;
    const [x, y] = position.split(" ");
    const pos = ["0px", "0px"];
    switch(x) {
        case "left": pos[0] = `calc(-50vw - ${innerRadius})`; break;
        case "right": pos[0] = `calc(50vw + ${innerRadius})`; break;
        default: break;
    };
    switch(y) {
        case "top": pos[1] = `calc(-50vh - ${innerRadius})`; break;
        case "bottom": pos[1] = `calc(50vh + ${innerRadius})`; break;
        default: break;
    };

    return { 
        style: {
            transform: `translate(${pos.join(",")}) rotate(${rotate}deg)`
        }
    }
})`
list-style-type: none;
transition: transform .1s;

display: flex;
justify-content: center;
align-items: flex-end;

transform-origin: center center;
margin: 0;
padding: 0;
`;

const Card = styled.li.attrs((props) => ({
    backgroundColor: props.color
}))`
position: absolute;
width: 20vh;
height: 27vh;

text-align: center;
font-weight: 600;
z-index: 0;

cursor: pointer;
transform-origin: center bottom;
color: white;

-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;

&.focus, &:hover {
    z-index: 2;
}
`;

function CardSlider (props) {
    const { 
        items, 
        innerRadius = "0px",
        floatViewport = "50%" // Card 크기 기준
    } = props;

    const [curArc, setCurArc] = useState(0);
    const [curFocus, setCurFocus] = useState(0);
    const [cardList, setCardList] = useState([]);

    const itemSize = items.length
    const translate = `calc(-${innerRadius} - ${floatViewport})`;
    
    useEffect(() => {
        const point = itemSize / 2;
        const angle = 8;
        
        const cards = items.map((item) => {
            const order = item.key - curFocus;
            const preOrder = item.order;
            const newOrder = order > point ? order - itemSize : 
                            order < -point ? order + itemSize : order;
            item.order = newOrder;
            item.translate  = translate;
            if (item.rotate === undefined) {
                item.rotate = item.order * angle;
            } else{
                if ((preOrder !== 0 && newOrder !== 0) && preOrder + newOrder === 0) {
                    const rotates = items.map((item) => item.rotate);
                    if ( newOrder >= 0 ) {
                        item.rotate = Math.max(...rotates) + angle;
                    } else {
                        item.rotate = Math.min(...rotates) - angle;
                    }
                }
            }
            return item;
        });
        cards.sort((a, b) => a.order - b.order);
        setCardList(cards);
    }, [curFocus, itemSize, items, translate]);

    useEffect(() => {
        cardList.some((card) => {
            if (Math.abs(card.rotate + curArc) % 360 < 5) {
                setCurFocus(card.key);
                return true;
            }
            return false;
        });
    }, [curArc, cardList]);

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
                setCurArc((curArc) => curArc + deg);
                startX = endX;
                startY = endY;
            };
            const upHandler = (e) => {
                target.removeEventListener("mousemove", moveHandler);
            };
            // mouse event
            target.addEventListener("mousemove", moveHandler);
            target.addEventListener("mouseup", upHandler, { once: true });
            // touch event
            target.addEventListener("touchmove", moveHandler);
            target.addEventListener("touchend", upHandler, { once: true });
        };
        // mouse event
        target.addEventListener("mousedown", bindRotateCardEvent);
        // touch event
        target.addEventListener("touchstart", bindRotateCardEvent);

        return () => {
            target.removeEventListener("mousedown", bindRotateCardEvent);
            target.removeEventListener("touchstart", bindRotateCardEvent);
        };
    }, [curArc]);

    return (
        <Container id="slider-container">
            <CardWrapper 
                id="card-wrapper" 
                rotate={curArc} 
                position={"center bottom"}
                innerRadius={innerRadius}
            >
                { cardList && cardList.map((card) => {
                    return (
                        <Card 
                            key={card.key} 
                            className={card.order === 0 ? "focus": ""}
                            style={{
                                transform: `rotate(${card.rotate}deg) translateY(${translate})`,
                                backgroundColor: card.color
                            }}
                        >{card.title}</Card>
                    );
                })}
            </CardWrapper>
        </Container>
    );
}

export default CardSlider;