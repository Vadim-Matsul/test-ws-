import React from "react";

const MySelect = ({ onChange, sort, defaultValue, options }) => {

    return (
      <select
              onChange={(el) => onChange(el.target.value)}
              value = { sort }
              >
        <option disabled >{ defaultValue }</option>
      { options.map( option => 
            <option 
                    value={ option.value }
                    key = { option.value } >{ option.name }</option>
        )
      }
      </select>   
     )
}

export default MySelect;