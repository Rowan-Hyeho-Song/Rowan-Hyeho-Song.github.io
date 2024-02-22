import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
font-family: 'Noto Sans KR';
cursor: grab;
`;

const CardWrapper = styled.ul.attrs((props) => {
    const { $position, $innerRadius, $rotate } = props;
    const [x, y] = $position.split(" ");
    const pos = ["0px", "0px"];
    switch(x) {
        case "left": pos[0] = `calc(-50vw - ${$innerRadius})`; break;
        case "right": pos[0] = `calc(50vw + ${$innerRadius})`; break;
        default: break;
    };
    switch(y) {
        case "top": pos[1] = `calc(-50vh - ${$innerRadius})`; break;
        case "bottom": pos[1] = `calc(50vh + ${$innerRadius})`; break;
        default: break;
    };

    return { 
        style: {
            transform: `translate(${pos.join(",")}) rotate(${$rotate}deg)`
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

const Card = styled.li.attrs((props) => {
    const { rotate, translate, backgroundColor, index } = props.$style;
    return {
        style: {
            zIndex: index,
            transform: `rotate(${rotate}deg) translateY(${translate})`,
            backgroundColor: backgroundColor
        }
    }
})`
position: absolute;
display: flex;
justify-content: center;
--card-width: 25vh;
--card-height: 34vh;
width: var(--card-width);
height: var(--card-height);
padding: 10px;

font-weight: 500;

cursor: pointer;
transform-origin: center bottom;
color: white;

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

&.focus {
    transition: .3s transform;
    transform: ${props => {
        const { rotate, translate } = props.$style;
        return `rotate(${rotate}deg) translateY(${translate}) scale(1.03) !important`;
    }};
    z-index: 20 !important;
}
&:hover { 
    transition: .3s transform;
    transform: ${props => {
        const { rotate, translate } = props.$style;
        return `rotate(${rotate}deg) translateY(${translate}) scale(1.03) !important`;
    }};
    z-index: 21 !important; 
}

> div.card-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 5px;
}
> div.dummy-card {
    font-size: 4em;
    line-height: calc(var(--card-height) - 20px);
    vertical-align: middle;
    color: #303030;
    cursor: auto;
}
> div.description{
    position: absolute;
    display: flex;
    flex-direction: column;
    --des-width: calc(var(--card-width) - 20px);
    width: var(--des-width);
    transform-origin: center left;
    transform: translate(calc(var(--des-width) / 2), -50px) rotate(-90deg);
    pointer-events: none;

    .des-title {
        color: #B6B6B6;
        font-weight: 700;
    }
    .des-date {
        color: #CFCFCF;
        font-weight: 400;
        font-size: 0.6em;
    }
}

.card-header { display: flex; flex-direction: column; }
.date { font-size: 0.2em; font-weight: 400; text-align: right; }
.title { font-size: 2em; }
.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.number { font-size: 2.3em; }
.copyright { font-size: 0.2em; width: 25%; font-weight: 400; }
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

    const itemSize = items.length;
    
    // set item order
    useEffect(() => {
        const point = itemSize / 2;

        const angle = 13;
        const translate = `calc(-${innerRadius} - ${floatViewport})`;
        
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
        setCardList(cards);
    }, [curFocus, floatViewport, innerRadius, itemSize, items]);


    // set current focused card
    useEffect(() => {
        cardList.some((card) => {
            if (Math.abs(card.rotate + curArc) % 360 < 5) {
                setCurFocus(card.key);
                return true;
            }
            return false;
        });
    }, [curArc, cardList]);

    // rotate card wrapper
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
            // target.addEventListener("touchmove", moveHandler);
            // target.addEventListener("touchend", upHandler, { once: true });
        };
        // mouse event
        target.addEventListener("mousedown", bindRotateCardEvent);
        // touch event
        // target.addEventListener("touchstart", bindRotateCardEvent);

        return () => {
            target.removeEventListener("mousedown", bindRotateCardEvent);
            // target.removeEventListener("touchstart", bindRotateCardEvent);
        };
    }, [curArc]);

    return (
        <Container id="slider-container">
            <CardWrapper 
                id="card-wrapper" 
                $rotate={curArc} 
                $position={"center bottom"}
                $innerRadius={innerRadius}
            >
                { cardList && cardList.map((card) => {
                    if (card.title !== "dummy") {
                        return (
                            <Card
                                key={card.key} 
                                className={card.order === 0 && "focus"}
                                $style={{
                                    rotate: card.rotate,
                                    translate: card.translate,
                                    backgroundColor: card.color,
                                    index: card.order
                                }}
                            >
                                <div className="description">
                                    <div className="des-title">{card.title}</div>
                                    <div className="des-date">{card.date.join(", ")}</div>
                                </div>
                                <div className="card-contents">
                                    <div className="card-header">
                                        <div className="date">{card.date[0]}<br />{card.date[1]}</div>
                                        <div className="title">{card.title}</div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="number">{`${card.key + 1}`.padStart(2, "0")}</div>
                                        <div className="copyright">
                                            ⓒ 2012<br />Form<br />Follows<br />function
                                            <br /><br />
                                            <span style={{fontWeight: 200}}>Jongmin Kim</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        );
                    } else {
                        return (
                            <Card 
                                key={card.key} 
                                className={card.order === 0 && "focus"}
                                $style={{
                                    rotate: card.rotate,
                                    translate: card.translate,
                                    backgroundColor: card.color,
                                    index: card.order
                                }}
                            >
                                <div className="dummy-card">•••</div>
                            </Card>
                        )
                    }
                })}
            </CardWrapper>
        </Container>
    );
}

export default CardSlider;