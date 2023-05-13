import React from "react";

const Button = ({opr,onClick}) =>{

    return(
        <button onClick={onClick}>{opr}</button>
    )
};


export default Button;