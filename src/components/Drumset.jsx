import React from "react";
import useSound from 'use-sound';

import tom1 from "../sounds/tom-1.mp3";
import tom2 from "../sounds/tom-2.mp3";
import tom3 from "../sounds/tom-3.mp3";
import tom4 from "../sounds/tom-4.mp3";
import kick from "../sounds/kick-bass.mp3";
import snare from "../sounds/snare.mp3";
import crash from "../sounds/crash.mp3";


function Drumset(){

    const [playTom1] = useSound(tom1);
    const [playTom2] = useSound(tom2);
    const [playTom3] = useSound(tom3);
    const [playTom4] = useSound(tom4);
    const [playKickBass] = useSound(kick);
    const [playSnare] = useSound(snare);
    const [playCrash] = useSound(crash);

    return (
       <div className="container">
            <div className="jumbotron text-center">
            <h1>Drum Set</h1>
            <div className="set">
                <button onClick={playTom1} className="w drum"></button>
                <button onClick={playTom2} className="a drum"></button>
                <button onClick={playTom3} className="s drum"></button>
                <button onClick={playTom4} className="d drum"></button>
                <button onClick={playKickBass} className="j drum"></button>
                <button onClick={playSnare} className="k drum"></button>
                <button onClick={playCrash} className="l drum"></button>
            </div>
        </div>
       </div>
 );
}

export default Drumset;