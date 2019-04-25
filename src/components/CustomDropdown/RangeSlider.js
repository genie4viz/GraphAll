import React, {useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const RangeSlider = (props) => {
    const   axisRef = useRef(),
            leftHandlerRef = useRef(),
            rightHandlerRef = useRef(),
            fillbarRef = useRef();

    const   {width, height, range} = props,
            margins = {left: 20, top: 10, right: 20, bottom: 10},
            slider_w = width - margins.left - margins.right,            
            RangeBar = <rect rx="5" ry="5" y="0" width={slider_w} height="5" fill="grey"/>,
            fillBar = <rect ref={fillbarRef} x={0} y="0" width={slider_w} height={5} fill="#de0730"/>,              
            circle = <circle r="5px" fill="#de0730" stroke="black"/>,
            text = <text style={{fontSize: 12, fill: 'grey', fontWeight: '300' }} />;

    let startRange = range[0],
        endRange = range[range.length - 1];
    let xScale = d3
        .scaleLinear()
        .domain([startRange, endRange])
        .range([0, slider_w])
        .clamp(true);
    
    const   [overedObj, setOveredObj] = useState(null);

    const onMouseOver = event => {
        setOveredObj(event.target.parentNode.className.baseVal);
    }

    useEffect(() => {
        drawAxis();
    }, [props]);

    useEffect(() => {
        controlHandlers();
    });

    const controlHandlers = () => {
        let trueMouseValue;
        let drag = d3
            .drag()
            .on('start', dragstart)
            .on('drag', draged);

        d3.select('.sliderBar').call(drag);
        function dragstart() {
            if (overedObj == 'leftHandler' || overedObj == 'rightHandler') {
                trueMouseValue = getTrueMouseValue(d3.mouse(this)[0]);
            }
        }
        function draged() {
            let translateLeft = d3.select(leftHandlerRef.current).attr("transform");
            let translateRight = d3.select(rightHandlerRef.current).attr("transform");
            // console.log(get_x(translateLeft) + ":" + get_x(translateRight), ' left : right ')
            if(get_x(translateLeft) == get_x(translateRight)){
                return;
            }else{
                if (overedObj == 'rightHandler') {
                    trueMouseValue = getTrueMouseValue(d3.mouse(this)[0]);                
                    d3.select(rightHandlerRef.current).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 2.5)');
                    d3.select(rightHandlerRef.current)
                        .select('text')
                        .attr('text-anchor', 'middle')
                        .attr('dy', 17)
                        .text(trueMouseValue);
                }
                if (overedObj == 'leftHandler') {
                    trueMouseValue = getTrueMouseValue(d3.mouse(this)[0]);                
                    d3.select(leftHandlerRef.current).attr('transform', 'translate(' + xScale(trueMouseValue) + ', 2.5)');
                    d3.select(leftHandlerRef.current)
                        .select('text')
                        .attr('text-anchor', 'middle')
                        .attr('dy', 17)
                        .text(trueMouseValue);                
                }
            }
            d3.select(fillbarRef.current)
                .attr('x', get_x(translateLeft))                
                .attr('width', get_x(translateRight) - get_x(translateLeft))
        }
        function getTrueMouseValue(mouseValue) {
            return Math.round(xScale.invert(mouseValue));
        }
        function get_x(translate){
            translate = translate.substr(10, translate.length - 2);
            return translate.split(',')[0];
        }
    }
    const drawAxis = () => {        
        
        d3.select(axisRef.current)
            .call(
                d3
                .axisBottom()
                .scale(xScale)
                .ticks(range.length)
                .tickFormat(d3.format(''))
            )
            .selectAll('text')
            .attr('opacity', 0)
            .select('.domain')
            .remove();
        d3.select(axisRef.current)
            .select('path')
            .style('opacity', '0');
        d3.select(axisRef.current)
            .selectAll('.tick')            
            .style('opacity', '0');
        d3.select(axisRef.current)
            .select('path')
            .style('d', 'none');
    }
    return (
        <svg className="rangeSlider" width={width} height={height}>{console.log('render')}
            <g className="XAxisArea" ref={axisRef} transform={`translate(${margins.left}, 5)`}/>            
            <g className="sliderBar" onMouseOver={event => onMouseOver(event)} transform={`translate(${margins.left}, ${margins.top})`}>
                {RangeBar}
                {fillBar}
                <g className="leftHandler" ref={leftHandlerRef} transform={`translate(0, 2.5)`}>
                    {circle}{text}
                </g>
                <g className="rightHandler" ref={rightHandlerRef} transform={`translate(${slider_w}, 2.5)`}>
                    {circle}{text}
                </g>
            </g>
        </svg>
    );
}

export default RangeSlider;