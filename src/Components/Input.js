import React from "react";

const Input = ({placeholder,updateNum}) =>{

    return(
        <input
        type="text"
        placeholder={placeholder}
        onChange={e => updateNum(e.target.value)}
        />
    )
};

export default Input;