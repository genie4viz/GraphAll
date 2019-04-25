import React, { useContext, useEffect, useRef, useState } from 'react';
import RangeSlider from './RangeSlider';

const DropdownItem = (props) => {
    const [check, setCheck] = useState(false);

    const changeCheck = () => {
        setCheck(!check);
    }
    return (
        <div className="dropdown-item columns">
            <div class="column">
                <p>{props.name}</p>
            </div>
            <div class="column is-right">
                <div class="field">
                    {check ? <input class="is-checkradio is-rtl has-background-color is-danger" id={"checkbox" + props.name + props.index} type="checkbox" onChange={changeCheck} checked={check} />
                    : <input class="is-checkradio is-rtl has-background-color" id={"checkbox" + props.name + props.index} type="checkbox" onChange={changeCheck} checked={check} />}                    
                    <label for={"checkbox" + props.name + props.index}></label>
                </div>
            </div>
        </div>
    );
}

const range = [
    5, 10, 50, 15, 30, 20
];
const CustomDropdown = (props) => {
    const {title, items, hasSlider} = props;
    const [dropped, setDropped] = useState(false);
    const [checked, setChecked] = useState(false);

    const dropButtonRef = useRef();
    const dropDownRef = useRef();

    const showDropList = () => {
        dropDownRef.current.classList.toggle('is-active');
    }
    return (
        <div className="dropdown" ref={dropDownRef}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={showDropList} ref={dropButtonRef}>
                    <span>{title}</span>                
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {items.map((el, i) => <DropdownItem key={i} index={i} name={el} />)}
                    {hasSlider && 
                        <div className="dropdown-item columns">
                            <RangeSlider width={200} height={40} range={range}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default CustomDropdown;