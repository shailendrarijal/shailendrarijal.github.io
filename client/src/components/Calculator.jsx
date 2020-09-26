import React, {useState} from "react";
import '../App.css';

function Calculator(){
    const [values, setValues] = useState({
        heightValue: "",
        weightValue: ""
    });
   
    let [bmiValue, setBmiValue] = useState();

    function handleClick(event){
       setBmiValue(Math.round(values.weightValue/(values.heightValue * values.heightValue)));
       event.preventDefault();
    }

    function handleChange(event){
       const {value, name} = event.target;

       setValues((prevValue) => {
           if (name === "height") {
               return {
                   heightValue: value,
                   weightValue: prevValue.weightValue
               }
           } else if (name === "weight") {
               return {
                   heightValue: prevValue.height,
                   weightValue: value
               }
           }
       })
    }




    return (
        <div class="container-fluid jumbotron text-center">
            <h1>BMI Calculator</h1>
            <form>
                <input 
                onChange={handleChange}
                class="form-control-sm" type="text" value = {values.weightValue} name="weight" placeholder="Enter your weight" /><code class="code">in Kg</code><br />
                <input 
                onChange={handleChange}
                class="form-control-sm" type="text" value = {values.heightValue} name="height" placeholder="Enter your height" /><code class="code">in m</code><br />

                <button class="btn-lg btn-primary" onClick={handleClick}>Calculate</button>
            </form>
            <p class="resultDisplay">Your BMI is {bmiValue}</p>
        </div>

 );
}

export default Calculator;