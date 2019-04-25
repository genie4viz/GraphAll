import React, { useContext, useEffect, useRef, useState } from 'react';
import RangeSlider from './RangeSlider';
const DropdownItem = (props) => {
    const {name, index} = props;
    const [check, setCheck] = useState(false);

    const changeCheck = () => {
        setCheck(!check);
    }

    return (
        <div className={"dropdown-item columns"} style={{width:'150px', height: '40px', padding: '0.2rem', margin: '0px'}}>
            <div class="column is-9">
                <p>{props.name}</p>
            </div>
            <div class="column is-right">
                <div class="field">
                    {check ? <input class={"is-checkradio is-rtl has-background-color is-danger"} id={"checkbox" + index} type="checkbox" onChange={changeCheck} checked={check} />
                    : <input class={"is-checkradio is-rtl has-background-color"} id={"checkbox" + index} type="checkbox" onChange={changeCheck} checked={check} />}                    
                    <label for={"checkbox" + index}></label>
                </div>
            </div>
        </div>
    );
}
const range = [1,2,3,4,5,6,7,8];
const CustomDropdown = (props) => {
    const {title, items, idx, hasSlider} = props;
    const [dropped, setDropped] = useState(false);
    const [checked, setChecked] = useState(false);

    const dropButtonRef = useRef();
    const dropDownRef = useRef();

    const showDropList = () => {
        dropDownRef.current.classList.toggle('is-active');
    }
    return (
        <div className={"dropdown "} ref={dropDownRef}>
            <div class="box navbar-item has-dropdown" style={{width:'170px', margin:'1px'}}><a href="#!" class="navbar-link has-text-centered has-text-weight-bold has-text-grey" onClick={showDropList} ref={dropButtonRef} style={{width:'170px'}}>{title}</a></div>
             <div className="dropdown-menu" id="dropdown-menu" role="menu" style={{paddingTop:'0px'}}>
                <div className="dropdown-content" style={{width:'170px'}}>
                    {items.map((el, i) => <DropdownItem key={i} name={el} index={idx + "_" + i}/>)}
                    {hasSlider && 
                        <div className="dropdown-item" style={{ padding: '0', paddingTop: '1.2em'}}>
                            <RangeSlider width={170} height={40} range={range} index={idx}/>
                        </div>
                    }                    
                </div>
            </div>
        </div>
    );
}
export default CustomDropdown;