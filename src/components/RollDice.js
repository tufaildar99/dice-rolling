import { React, useState } from "react";
import Die from "./Die";
import "./RollDice.css";

const sides = ["one", "two", "three", "four", "five", "six"];

const RollDice = () => {
  const [rolling, setRolling] = useState(false);
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");

  function handleRoll(e) {
    e.preventDefault();

    setDie1(sides[Math.floor(Math.random() * sides.length)]);
    setDie2(sides[Math.floor(Math.random() * sides.length)]);
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  }

  return (
    <div className="RollDice">
      <div className="RollDiceContainer">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button className="handleBtn" disabled={rolling} onClick={handleRoll}>
        {rolling ? "Rolling" : "Roll Dice"}
      </button>
    </div>
  );
};

export default RollDice;
