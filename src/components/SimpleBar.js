import * as d3 from "d3";
import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const Wrapper = styled.svg`
.bar-rect {
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
}
.bar-text {
    font-size: 1.2em;
    font-weight: 600;
    text-anchor: end;
    alignment-baseline: middle;
    fill: white;
    pointer-events: none;
}
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
    const svgRef = useRef();

    const maxValue = d3.max(datas, (d) => d.value);

    useEffect(() => {
        const filtered = datas.filter((d) => d.enable);
        const max = maxValue < 10 ? 10 : maxValue;
        const x = d3.scaleLinear()
            .domain([0, max])
            .range([marginLeft, width - marginRight]);
        const y = d3.scaleBand()
            .domain([...filtered.map(d => d.key)])
            .range([marginTop, height - marginBottom])
            .padding(0);

        const svg = d3.select(svgRef.current);
        // create data group
        svg.selectAll("g")
            .data(filtered, (d) => d.key)
            .join(
                (enter) => {
                    // group
                    const g = enter.append("g")
                    .attr("key", (d) => d.key)
                    .attr("transform", (d) => `translate(0, ${y(d.key)})`);

                    // bar
                    g.append("rect")
                    .attr("class", "bar-rect")
                    .attr("height", y.bandwidth())
                    .attr("fill", (d) => d.color)
                        .transition()
                        .duration(500)
                    .attr("width", (d) => x(d.value) - x(0));

                    // text
                    g.append("text")
                    .attr("class", "bar-text no-drag")
                    .text(d => `${d.key} (${d.value}/${max})`)
                    .attr("y", y.bandwidth() / 2)
                        .transition()
                        .duration(500)
                    .attr("x", (d) => x(d.value) - x(0) - 20);

                    return g;
                },
                (update) => {
                    update
                    .attr("key", (d) => d.key)
                        .transition()
                        .duration(500)
                    .attr("transform", (d) => `translate(0, ${y(d.key)})`);

                    update.select("rect")
                        .transition()
                        .duration(500)
                    .attr("width", (d) => x(d.value) - x(0))
                    .attr("height", y.bandwidth());

                    update.select("text")
                        .transition()
                        .duration(500)
                    .attr("y", y.bandwidth() / 2)
                    .attr("x", (d) => x(d.value) - x(0) - 20);

                    return update;
                },
                (exit) => {
                    exit
                        .transition()
                        .duration(500)
                    .attr("transform", `translate(0, 0)`)
                    .style("opacity", 0)
                    .remove();
                }
        );
    }, [datas, height, marginBottom, marginLeft, marginRight, marginTop, maxValue, width]);

    return (
        <Wrapper width={width} height={height} ref={svgRef}>
        </Wrapper>
    );
}

export default SimpleBar;