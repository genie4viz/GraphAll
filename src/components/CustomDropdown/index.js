import React, { useContext, useEffect, useRef, useState } from 'react';
import RangeSlider from './RangeSlider';
const DropdownItem = props => {
  const { label, index, getCheckState, checkValue } = props;
  const [check, setCheck] = useState(checkValue);

  const changeCheck = () => {
    setCheck(!check);
    getCheckState(index, label, !check);
  };

  useEffect(() => {
    setCheck(checkValue);
  }, [checkValue]);

  return (
    <div className="dropdown-item columns" style={{ width: '190px', padding: '0.2rem', margin: '0px' }}>
      <div class="column is-7">
        <p>{label}</p>
      </div>
      <div class="column is-right">
        <div class="field" style={{ paddingTop: '0.5em' }}>
          {check ? (
            <input
              class={'is-checkradio is-rtl has-background-color is-danger'}
              id={'checkbox' + index}
              type="checkbox"
              onChange={changeCheck}
              checked={check}
            />
          ) : (
            <input
              class={'is-checkradio is-rtl has-background-color'}
              id={'checkbox' + index}
              type="checkbox"
              onChange={changeCheck}
              checked={check}
            />
          )}
          <label for={'checkbox' + index} />
        </div>
      </div>
    </div>
  );
};
const CustomDropdown = props => {
  const { title, items, idx, hasSlider, getCustomDropDownState} = props;
  const [checkStates, setCheckStates] = useState(items);
  const dropDownRef = useRef();
  
  const getCheckState = (index, label, checked) => {
    let base_index = index.split('_')[0];
    let selectedValue = index.split('_')[1];
    let replaces = [];

    if (selectedValue == 0) {
        if (checked == true) {
            for (let i = 0; i < checkStates.length; i++) {
                replaces.push({
                    id: i,
                    label: checkStates[i].label,
                    value: true
                });
            }
        } else {
            for (let i = 0; i < checkStates.length; i++) {
                replaces.push({
                    id: i,
                    label: checkStates[i].label,
                    value: false
                });
            }
        }        
    }else{
        replaces = [];
        for (let i = 0; i < checkStates.length; i++) {
            if(selectedValue == i){
                replaces.push({
                    id: i,
                    label: checkStates[i].label,
                    value: !checkStates[i].value
                });
            }else{
                replaces.push({
                    id: i,
                    label: checkStates[i].label,
                    value: checkStates[i].value
                });
            }
        }
    }
    if(base_index == 2)
        getCustomDropDownState(base_index, replaces);
    setCheckStates(replaces);
  };
  
  return (
    <div className={'dropdown'} ref={dropDownRef}>
      <div class="navbar-item has-dropdown is-hoverable" style={{ width: '190px', margin: '1px' }}>
        <a
          href="#!"
          class="box navbar-link has-text-centered has-text-weight-bold has-text-grey"
          style={{ width: '190px', marginBottom:'0.3rem' }}
        >
          {title}
        </a>
        <div
          class="navbar-dropdown is-boxed"
          id="dropdown-menu"
          role="menu"
          style={{ paddingTop: '0px' }}
        >
          <div
            className="dropdown-content"
            style={{ width: '190px', height: '280px', overflowY: 'scroll', overflowX: 'hidden' }}
          >
            {items.map((el, i) => (
              <DropdownItem
                key={i}
                label={el.label}
                index={idx + '_' + i}
                getCheckState={getCheckState}
                checkValue={checkStates[i].value}
              />
            ))}
            {hasSlider && (
              <div className="dropdown-item" style={{ padding: '0', paddingTop: '1.2em' }}>
                <RangeSlider width={170} height={40} index={idx} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomDropdown;
