import React, { useState } from "react";

import image1 from "../images/dice1.png";
import image2 from "../images/dice2.png";
import image3 from "../images/dice3.png";
import image4 from "../images/dice4.png";
import image5 from "../images/dice5.png";
import image6 from "../images/dice6.png";

function DiceGame(){

    const selectedImage1 = image6;
    const selectedImage2 = image6;

   var randomNumber1 = 0;
   var randomNumber2 = 0;
    
    function playGame() {
         randomNumber1 = Math.floor((Math.random()*6)) + 1;
         randomNumber2 = Math.floor((Math.random()*6)) + 1;        
    }

    const [player, setPlayer] = useState({
        player1: "Player 1",
        player2: "Player 2"
    })

    function handleChange(event) {
        const {value, name} = event.target;

        setPlayer((prevValue) => {
            if (name === "player1") {
                return {
                    player1: value,
                    player2: prevValue.player2
                }
            } else if (name === "player2") {
                return {
                    player1: prevValue.player1,
                    player2: value
                }
            }
        })
    }

    return (
       <div className="container">
        
        <h1 className="text-primary">Test your luck!</h1>
        <div className="row text-center">
            <div className="dice card">
                <input type='text' onChange={handleChange} name="player1" value={player.player1}/>
                <p>{player.player1}</p>
                <img className="img1" src={selectedImage1} />
            </div>

            <div className="dice card">
                <input type='text' onChange={handleChange} name="player2" value={player.player2}/>
                <p>{player.player2}</p>
                <img className="img2" src={selectedImage2} />
            </div>
        </div>
        <button onClick={playGame}>Play Game</button>
        <div>{(randomNumber1 > randomNumber2 && randomNumber1 != randomNumber2 ? <p>{player.player1} Wins!</p> : <p>{player.player1} Wins!</p>)}</div>

    </div>

 );
}

export default DiceGame;