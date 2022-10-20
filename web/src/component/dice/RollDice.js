import React, { useState } from "react";
import Die from "./Die";
import "./rollDice.css";

const RollDice = ({ sides, finalResult }) => {
  const [diactivate, setDiactivate] = useState(true);
  const [tries, setTries] = useState(0);
  const [scoreText, setScoreText] = useState("")

  const [result, setresult] = useState({
    die1: "one",
    die2: "one",
    die3: "one",
    die4: "one",
    rolling: false,
    totalScore: 0,
  });

  const { die1, die2, die3, die4, rolling, totalScore } = result;
  const handleRoll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    const newDie3 = sides[Math.floor(Math.random() * sides.length)];
    const newDie4 = sides[Math.floor(Math.random() * sides.length)];
    const score1 = Object.values(newDie1);
    const score2 = Object.values(newDie2);
    const score3 = Object.values(newDie3);
    const score4 = Object.values(newDie4);


    setTries((prev) => prev + 1);
    if(tries === 0){
      setScoreText("Te quedan 2 intentos")
    } else if(tries === 1){
      setScoreText("Te queda 1 intento")
    }
    if (tries === 2) {
      setDiactivate(false);
      setScoreText("Resultado final")
    }
    const finalScore = {
      die1: Object.keys(newDie1),
      die2: Object.keys(newDie2),
      die3: Object.keys(newDie3),
      die4: Object.keys(newDie4),
      rolling: true,
      totalScore: score1[0] + score2[0] + score3[0] + score4[0]
    }

    setresult(finalScore);
    finalResult(finalScore.totalScore)
    setTimeout(() => {
      setresult((prevresult) => ({ ...prevresult, rolling: false }));
    }, 1000);
  };
  return (
    <>
      <div className="roll-dice">
        <div className="roll-dice-container">
          <Die face={String(die1)} rolling={rolling} />
          <Die face={String(die2)} rolling={rolling} />
          <Die face={String(die3)} rolling={rolling} />
          <Die face={String(die4)} rolling={rolling} />
        </div>
        <h2 style={{color: "White"}}>{scoreText}: <span className="result-dice">{totalScore}</span> </h2>
        {diactivate && (
          <button onClick={handleRoll} disabled={rolling}>
            {rolling ? <i className="fas fa-spinner fa-spin"></i> : "Tira los dados"}
            
          </button>
        )}

      </div>
    </>
  );
};

RollDice.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};
export default RollDice;
