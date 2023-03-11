import React, { useState } from 'react';
import AreaCalculator from './AreaCalculator';
import VolumeCalculator from './VolumeCalculator';
import WeightCalculator from './WeightCalculator';

export default function Calculator() {

    const [calculatorType, setCalculatorType] = useState("");

    function setCalculator(props) {
        setCalculatorType(props);

    };

    function showCalculator() {
        if (calculatorType === "WeightCalculator") {
            return <WeightCalculator />
        } else if (calculatorType === "VolumeCalculator") {
            return <VolumeCalculator />
        } else {
            return <AreaCalculator />
        }
    }

    return (
        <div>
            <div className="jumbotron">
                <h1>Nepali Units Converter</h1>
                <p>Use our simple to use online converter tool to convert units from Nepali measurement system to English measurement system. Select land area or volume, enter the value and hit the button to convert to Nepali units or to english units</p>
                <button className="btn-primary button-sm mx-auto rounded" onClick={() => setCalculator("AreaCalculator")}>Land Area</button>
                <span>&nbsp;</span>
                <button className="btn-primary button-sm mx-auto rounded" onClick={() => setCalculator("VolumeCalculator")}>Volume</button>
            </div>
            <div className="jumbotron">
                {showCalculator()}
                <div>
                    <p>Before the inroduction of English measurement systems, Nepal had its own measurement system. Some of them such as ropani and aana in land measurement are still widely used while some have integrated with english measurement system like pau and dhaarni with kilo. Here, we aim to develop a tool to convert those units of measurement to English. As of now, the units of land area and volume is present in our website          </p>
                </div>

            </div>


            <style jsx>{`
          .english-unit-button-container{
            width: 100%;
            padding: 1rem;
          }
          .nepali-unit-button-container{
            width: 30%;
            float: left;
            padding: 1rem;
          }
          .calculator-container{
            width: 30%;
            float: left;
          }

        `}</style>

        </div>

    )
}
