import React, { useState } from 'react';
import NaatiApp from './NaatiApp.jsx';

export function Naati() {

    const [displayBox, setDisplayBoxes] = useState(true);
    function changeDisplay() {
        setDisplayBoxes(!displayBox);
    }

    return (
        <div>
            <div>

                {displayBox ?
                    <div>
                        <div className="jumbotron">
                            <h1>Get ready for your Naati CCL Nepali Test</h1>
                            <p>Use our free NAATI CCL Nepali test resources to practice for your upcoming NAATI CCL Nepali test. Go to our NAATI app to get section-wise information for format, vocabulary, and tips for your NAATI CCL Nepali test.</p>
                            <button className="btn-lg btn-primary button mx-auto align-center" onClick={changeDisplay}>Go to NAATI app</button>
                        </div>
                        <div className="row">
                            <div className="card testFormat col-lg-3 col-md-5 col-sm-12">
                                <h4 className="card-header">Test Format</h4>
                                <div className="card-body">Learn about the test format, marking structure, pass marks, and test environment</div>

                            </div>
                            <div className="card vocabulary col-lg-3 col-md-5 col-sm-12">
                                <h4 className="card-header">Vocabulary</h4>
                                <div className="card-body">Build your vocabulary with our vocabulary app and get ready for the test</div>

                            </div>
                            <div className="card tips col-lg-3 col-md-5 col-sm-12">
                                <h4 className="card-header">Tips</h4>
                                <div className="card-body">Have a look at some of the tips that will help you prepare and give your best in your test</div>

                            </div>
                        </div>
                    </div>
                    :
                    <NaatiApp />
                }


            </div>




            <style jsx>{`
            .card{
                margin: 3rem auto;
            }

          .button{
              padding: 0.5rem;
              box-shadow: 0.1rem 0.1rem #ccc;
              border-radius: 10px;
          }
          
        `}</style>

        </div>

    )
}

export default Naati;