import React from "react";

const MySelect = ({onChange, sort, defaultValue, options}) => {

    return (
      <select
              value = { sort }
              onChange={(el) => onChange(el.target.value)}>
        <option disabled >{defaultValue}</option>
        { options.map( option => 
            <option 
                    value={option.value}
                    key={option.value} >{ option.name }</option>
        )

        }
      </select>   
     )
}

export default MySelect;