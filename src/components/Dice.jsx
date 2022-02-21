import { useState } from 'react';
import './Dice.css';
import empty from '../assets/images/dice-empty.png';
import one from '../assets/images/dice1.png';
import two from '../assets/images/dice2.png';
import three from '../assets/images/dice3.png';
import four from '../assets/images/dice4.png';
import five from '../assets/images/dice5.png';
import six from '../assets/images/dice6.png';

function Dice() {
  const [dice, setDice] = useState(three);
  const diceOptions = [one, two, three, four, five, six];

  const randomDiceNum = Math.floor(Math.random() * 6 + 1);
  const randomDice = diceOptions[randomDiceNum];

  const handleRandom = () => {
    return randomDice;
  };

  const changeDice = () => {
    setDice(empty);

    setTimeout(() => {
      setDice(handleRandom());
    }, 1000);
  };

  return (
    <>
      <h2>Dice game</h2>
      <img src={dice} alt="" onClick={changeDice} />
    </>
  );
}

export default Dice;