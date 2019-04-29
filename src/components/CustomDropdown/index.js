import React, { useContext, useEffect, useRef, useState } from 'react';
import {useGlobal} from 'reactn';
import RangeSlider from './RangeSlider';
const DropdownItem = (props) => {    
    const {name, index, onChangeHandler, checkValue} = props;
    const [check, setCheck] = useState(checkValue);

    const changeCheck = () => {
        setCheck(!check);
        onChangeHandler(index.split("_")[0],index.split("_")[1], !check);
    }

    useEffect(() => {
        setCheck(checkValue);
    }, [checkValue])

    return (
        <div className="dropdown-item columns" style={{width:'150px', height: '40px', padding: '0.2rem', margin: '0px'}}>
            <div class="column is-9">
                <p>{name}</p>
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
const CustomDropdown = (props) => {
    const {title, items, idx, handleCheckBoxStates, hasSlider} = props;    
    
    const [checkStates, setCheckStates] = useState([{id: 0,value:false}, {id: 1,value:true}, {id: 2,value:false}, {id: 3, value:false}, {id: 4,value:false}]);    
    const dropDownRef = useRef();
    
    const showDropList = () => {
        dropDownRef.current.classList.toggle('is-active');
    }
    const onChangeHandler = (index, sub_index, checked) => {
        let replaces = [];
        if(sub_index == 0){// all selected
            if(checked == true){
                for(let i = 0; i < checkStates.length; i++){
                    replaces.push({
                        id: i,
                        value: true
                    })
                }            
            }else{
                for(let i = 0; i < checkStates.length; i++){
                    replaces.push({
                        id: i,
                        value: false
                    })
                }
            }            
            
        }else{
            replaces = [];
            for(let i = 0; i < checkStates.length; i++){
                if(sub_index == i){
                    replaces.push({
                        id: i,
                        value: checked
                    })
                }else{
                    replaces.push({
                        id: i,
                        value: checkStates[i].value
                    })
                }
            }            
        }
        handleCheckBoxStates(index, replaces);
        setCheckStates(replaces);
    }
    
    return (
        <div className={"dropdown "} ref={dropDownRef}>{console.log(checkStates, 'render')}
            <div class="box navbar-item has-dropdown" style={{width:'170px', margin:'1px'}}>
             <a href="#!" class="navbar-link has-text-centered has-text-weight-bold has-text-grey" onClick={showDropList} style={{width:'170px'}}>{title}</a></div>
             <div className="dropdown-menu" id="dropdown-menu" role="menu" style={{paddingTop:'0px'}}>
                <div className="dropdown-content" style={{width:'170px'}}>
                    {items.map((el, i) => <DropdownItem key={i} name={el} index={idx + "_" + i} onChangeHandler={onChangeHandler} checkValue={checkStates[i].value}/>)}
                    {hasSlider && 
                        <div className="dropdown-item" style={{ padding: '0', paddingTop: '1.2em'}}>
                            <RangeSlider width={170} height={40} index={idx}/>
                        </div>
                    }                    
                </div>
            </div>
        </div>
    );
}
export default CustomDropdown;