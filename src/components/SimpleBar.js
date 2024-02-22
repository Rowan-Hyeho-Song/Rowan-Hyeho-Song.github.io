import * as d3 from "d3";
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Wrapper = styled.svg`
.y-axis {
    text {
        fill: #616161;
    }
}
transition: .3s all;
`;

function SimpleBar(props) {
    const {
        width = 100,
        height = 100,
        marginTop = 10,
        marginBottom = 10,
        marginLeft = 10,
        marginRight = 10,
        datas = []
    } = props;

    const gx = useRef();
    const gy = useRef();
    const svgRef = useRef();

    

    const maxValue = d3.max(datas, (d) => d.value)
    const x = d3.scaleLinear()
        .domain([0, maxValue < 10 ? 10 : maxValue])
        .range([marginLeft, width - marginRight]);

    useEffect(() => {
        const y = d3.scaleBand()
            .domain([...datas.map(d => d.key)])
            .range([marginTop, height - marginBottom])
            .padding(0.1);

        const svg = d3.select(svgRef.current);
        // create data group
        svg.selectAll("rect")
            .data(datas, d => d.enable)
            .join(
                (enter) => enter.append("rect")
                    .attr("width", 0)
                    .attr("height", 20)
                    .attr("x", 0)
                    .attr("y", d => y(d.key))
                    .attr("fill", d => d.color),
                (update) => update.attr("width", d => x(d.value) - x(0)),
                (exit) => exit.remove()
            );
    }, []);
    
    // useEffect(() => void d3.select(gx.current)
    //     .call(d3.axisBottom(x))
    // , [gx, x]);
    // useEffect(() => void d3.select(gy.current)
    //     .call(d3.axisLeft(y).tickSize(0))
    // , [gy, y]);

    return (
        <Wrapper width={width} height={height} ref={svgRef}>
        </Wrapper>
    );
}

export default SimpleBar;