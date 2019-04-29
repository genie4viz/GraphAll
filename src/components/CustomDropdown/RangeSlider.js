import React, {useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const RangeSlider = (props) => {
    const   axisRef = useRef(),
            leftHandlerRef = useRef(),
            rightHandlerRef = useRef(),
            fillbarRef = useRef();

    const   {width, height, index, range} = props,
            margins = {left: 20, top: 10, right: 20, bottom: 10},
            slider_w = width - margins.left - margins.right,            
            RangeBar = <rect rx="5" ry="5" y="0" width={slider_w} height="5" fill="grey"/>,            
            circle = <circle r="5px" fill="#de0730" stroke="black"/>,
            text = <text style={{fontSize: 12, fill: 'grey', fontWeight: '300' }} />,
            tick_w = slider_w / (20);

    let startRange = 0,
        endRange = 100;
    let xScale = d3
        .scaleLinear()
        .domain([startRange, endRange])
        .range([0, slider_w])
        .clamp(true);
    
    const   [overedObj, setOveredObj] = useState(null);
    const   [leftHandlerPos, setLeftHandlerPos] = useState(0);
    const   [rightHandlerPos, setRightHandlerPos] = useState(slider_w);

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
        let trueMouseValue, mouseValue;
        let drag = d3
            .drag()
            .on('start', dragstart)
            .on('drag', draged);

        d3.select('.sliderBar' + index).call(drag);
        function dragstart() {            
            if (overedObj == 'leftHandler' + index || overedObj == 'rightHandler' + index) {
                trueMouseValue = getTrueMouseValue(d3.mouse(this)[0]);
            }
        }
        function draged() {            
            mouseValue = d3.mouse(this)[0];
            trueMouseValue = getTrueMouseValue(mouseValue);            
            if (overedObj == 'rightHandler' + index ) {
                if(Math.floor(mouseValue - leftHandlerPos) < Math.floor(tick_w)){                    
                    return;
                }                
                setRightHandlerPos(xScale(trueMouseValue));
                d3.select(rightHandlerRef.current)
                    .select('text')
                    .attr('text-anchor', 'middle')
                    .attr('dy', 17)
                    .text(trueMouseValue);
            }
            if (overedObj == 'leftHandler' + index ) {
                if(Math.floor(rightHandlerPos - mouseValue) < Math.floor(tick_w)){
                    return;
                }
                setLeftHandlerPos(xScale(trueMouseValue));                
                d3.select(leftHandlerRef.current)
                    .select('text')
                    .attr('text-anchor', 'middle')
                    .attr('dy', 17)
                    .text(trueMouseValue);                
            }
        }
        function getTrueMouseValue(mouseValue) {
            return Math.round(xScale.invert(mouseValue));
        }
    }
    const drawAxis = () => {        
        
        d3.select(axisRef.current)
            .call(
                d3
                .axisBottom()
                .scale(xScale)
                .ticks(100)
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
        <svg className={"rangeSlider" + index} width={width} height={height}>
            <g className={"XAxisArea" + index} ref={axisRef} transform={`translate(${margins.left}, 5)`}/>            
            <g className={"sliderBar" + index} onMouseOver={event => onMouseOver(event)} transform={`translate(${margins.left}, ${margins.top})`}>
                {RangeBar}
                <rect ref={fillbarRef} x={leftHandlerPos} y={0} width={rightHandlerPos - leftHandlerPos} height={5} fill="#de0730"/>                
                <g className={"leftHandler" + index} ref={leftHandlerRef} transform={`translate(${leftHandlerPos}, 2.5)`}>
                    {circle}{text}
                </g>
                <g className={"rightHandler" + index} ref={rightHandlerRef} transform={`translate(${rightHandlerPos}, 2.5)`}>
                    {circle}{text}
                </g>
            </g>
        </svg>
    );
}

export default RangeSlider;