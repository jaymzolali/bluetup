import React, { useState } from "react";
import { useEffect } from "react";
import Select, { components } from "react-select";
import { svgs } from "../nav/svgIcons";


const Placeholder = props => {
//   return <components.Placeholder {...props} />;
};



function ShowingVeri({opt,icon,setShowing,}) {
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
  function handleSelect(e) {
    let show = ['10', '20', '30'];
        let upt;
        let upd = opt.map(sele=> {
            if(sele.value === e.value) {
                upt=sele;
            }
        })
      setSelectedOption(upt);
    
          if (show.includes(upt.value)) {
            // console.log('first');
                  setShowing({val: upt.value});
          } 
    
        //get data from server using axios
      }
      // console.log(showing);

  return (
    <div  className='dash-select'>
      <Select
        closeMenuOnSelect={true}
        components={{ Placeholder, DropdownIndicator }}
        onChange={(e) => {
          handleSelect(e);
          // console.log(e.value);
          
        }}
        value={selectedOption}
        options={opt}
      />
    </div>
  );
}

export default ShowingVeri


