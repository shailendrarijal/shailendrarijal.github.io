import React, { useState } from "react";

import image1 from "../images/dice1.png";
import image2 from "../images/dice2.png";
import image3 from "../images/dice3.png";
import image4 from "../images/dice4.png";
import image5 from "../images/dice5.png";
import image6 from "../images/dice6.png";



function DiceGame(){

    const [player, setPlayer] = useState({
        player1: "Player 1",
        player2: "Player 2"
    })

    const [result, setResult] = useState(false);
    const [winner, setWinner] = useState("");
    const [selectedImage1, setSelectedImage1] = useState(image6);
    const [selectedImage2, setSelectedImage2] = useState(image6);


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

    function playGame() {
        setResult(true);
        const randomNumber1 = Math.floor(Math.random()*6 +1);
        const randomNumber2 = Math.floor(Math.random()*6 +1);

        if (randomNumber1>randomNumber2) {
            setWinner(player.player1 + " Wins!") ;
        } else if (randomNumber2>randomNumber1) {
            setWinner(player.player2 + " Wins!") ;        
        } else if (randomNumber2 === randomNumber1) {
            setWinner("Draw") ;
        }

        if (randomNumber1 === 1) {
            setSelectedImage1(image1);
          } else if (randomNumber1 === 2) {
            setSelectedImage1(image2);
          } else if (randomNumber1 === 3) {
            setSelectedImage1(image3);
          } else if (randomNumber1 === 4) {
            setSelectedImage1(image4);
          } else if (randomNumber1 === 5) {
            setSelectedImage1(image5);
          } else if (randomNumber1 === 6) {
            setSelectedImage1(image6);
          }

          if (randomNumber2 === 1) {
            setSelectedImage2(image1);
          } else if (randomNumber2 === 2) {
            setSelectedImage2(image2);
          } else if (randomNumber2 === 3) {
            setSelectedImage2(image3);
          } else if (randomNumber2 === 4) {
            setSelectedImage2(image4);
          } else if (randomNumber2 === 5) {
            setSelectedImage2(image5);
          } else if (randomNumber2 === 6) {
            setSelectedImage2(image6);
          }
        
    }

    return (
       <div className="container">
        
        <h1 className="text-primary">Test your luck!</h1>
        <p>Type in the boxes to change your name!</p>
        <div className="row text-center">
            <div className="dice card">
                <input type='text' onChange={handleChange} name="player1" value={player.player1}/>
                <p>{player.player1}</p>
                <img className="img1" src={selectedImage1} alt="diceImage"/>
            </div>

            <div className="dice card">
                <input type='text' onChange={handleChange} name="player2" value={player.player2}/>
                <p>{player.player2}</p>
                <img className="img2" src={selectedImage2} alt="diceImage"/>
            </div>
        </div>
        <button onClick={playGame}>Play Game</button>

        <div>{result? (<p>{winner}</p>): null}</div>

    </div>

 );
}

export default DiceGame;