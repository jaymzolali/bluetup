import React from 'react'
import { useEffect, useState } from "react";
import Select, { components } from "react-select";

const Placeholder = props => {
    //   return <components.Placeholder {...props} />;
};

function TransNumSelect({opt,icon,state,setState,reset,setReset,setShowing,showing}) {
    let [selectedOption, setSelectedOption] = useState(opt[0]);
    
    const CaretDownIcon = () => {
      return icon;
    };
    const DropdownIndicator = props => {
      return (
        <components.DropdownIndicator {...props}>
          <CaretDownIcon />
        </components.DropdownIndicator>
      );
    };
    function handleDate(e) {
      let currency = ['anyCurrency', 'naira', 'dollar'];
      let status = ['AnyStatus', 'none', 'pending', 'confirmed', 'failed'];
      let type = ['AnyType', 'deposit', 'withdraws'];
      let method = ['AnyMethod', 'deposit', 'card' ];
      let show = ['10', '20', '30'];
          let upt;
          let upd = opt.map(sele=> {
              if(sele.value === e.value) {
                  upt=sele;
              }
          })
        setSelectedOption(upt);
        // console.log(upt);
        if (currency.includes(upt.value)) {
              setState(Object.assign(state, { role: e.value }));
            }
            if (status.includes(upt.value)) {
              setState(Object.assign(state, { status: e.value }));
            }
            if (type.includes(upt.value)) {
              setState(Object.assign(state, { status: e.value }));
            }
            if (method.includes(upt.value)) {
              setState(Object.assign(state, { status: e.value }));
            }
            if (show.includes(upt.value)) {
              // console.log('first');
                    setShowing({val: upt.value});
            } 
      
          //get data from server using axios
        }
        // console.log(showing);
    useEffect(() => {
      if (reset) {
        setSelectedOption(opt[0]);
      }
    }, [reset,]);
    return (
      <div  className='dash-select'>
        <Select
          closeMenuOnSelect={true}
          components={{ Placeholder, DropdownIndicator }}
          onChange={(e) => {
            handleDate(e);
            // console.log(e.value);
            
          }}
          value={selectedOption}
          options={opt}
        />
      </div>
    );
  }
  
  export default TransNumSelect