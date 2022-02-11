import { useState } from "react";
/* import empty from '../assets/images/dice-empty.png';
import one from '../assets/images/dice1.png';
import two from '../assets/images/dice2.png';
import three from '../assets/images/dice3.png';
import four from '../assets/images/dice4.png';
import five from '../assets/images/dice5.png';
import six from '../assets/images/dice6.png'; */


function Dice() {
    const initialDice = '../assets/images/dice-empty.png';
    // ojo, initaldice no es empty pero dice3
    const [ dice, setDice ] = useState(initialDice);

    const randomDiceNum = Math.floor(Math.random() * 6 + 1);
    const randomDice = `../assets/images/dice${randomDiceNum}.png`

    /* console.log(initialDice);
    console.log(randomDiceNum);
    console.log(randomDice); */

    const handleRandom = () => {
        return (randomDice);
    }



    const changeDice = () => {
        // TODO set to empty dice first, then some random dice


        setTimeout(() => {
            setDice(handleRandom());
        }, 1000);
    };


    return (
        <img src={dice} alt='' onClick={changeDice} />
    );
}

export default Dice;