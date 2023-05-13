import React, { useState } from "react";
import "./style.css"
import Input from "./Components/Input";
import Button from "./Components/Button";

const App = () => {
    let [num1,setNum1] = useState('');
    let [num2,setNum2] = useState('');
    let [result,setResult] = useState('');
    let [error,setError] = useState('');
    let [success,setSuccess] = useState('');

    //function for checking validation of number
    function checkValidation(e){
        //checking if any feild is empty
        if(num1.trim() === '' && num2.trim() === ''){
            setError("Error: Num1 and Num2 cannot be empty");
            setResult('');
            setSuccess('');
            return;
        } else if(num1.trim() === ''){
            setError("Error: Num1 cannot be empty");
            setResult('');
            setSuccess('');
            return;
        }else if(num2.trim() === ''){
            setError("Error: Num2 cannot be empty");
            setResult('');
            setSuccess('');
            return;
        }else{
            setError('');
        }

        //checking if both input is valid number(either integer, floating-point, positive or negative)
        if(isNaN(num1) || isNaN(num2)){
            setError("Error: Please enter a valid number.");
            setResult('');
            setSuccess('');
            return;
        }

        //calling calculate function and setting success message
        setSuccess("Success : Your result is shown above!")
        calculate(e);
    }

    //function for performing calculation's on number's
    function calculate(e){
       let operator = e.target.innerText;
       let calculatedRes = 0;

       switch(operator){
            case '+':
                calculatedRes = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                calculatedRes = num1 - num2;
                break;
            case '*':
                calculatedRes = num1 * num2;
                break;
            case '/':
                calculatedRes = num1 / num2;
                if(isNaN(calculatedRes)){
                    calculatedRes = "Undefined : can't divide 0 / 0"
                };
                break;
            default:
                break;
       }
       //setting result
       setResult(calculatedRes);
    }

    return (
        <div className="main-container">
            <p>React Calculator</p>
            <Input placeholder="Num 1" updateNum={setNum1}/>
            <Input placeholder="Num 2" updateNum={setNum2}/>
            <div className="btn">
                <Button opr="+" onClick={checkValidation}/>
                <Button opr="-" onClick={checkValidation}/>
                <Button opr="*" onClick={checkValidation}/>
                <Button opr="/" onClick={checkValidation}/>
            </div>
            <div className="res-div">{(result || result===0) && <p>Result = {result}</p>}</div>
            <div className="message">
                <p className="err">{error}</p>
                <p className="success">{success}</p>
            </div>
        </div>
    )
}

export default App;