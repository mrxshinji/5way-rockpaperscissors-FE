import styles from "./result.module.css";

import Selection from "../game/selection";

import { setHouseChoiceAction, updateScoreAction  } from "../../context/game/game.action";
import { GameContext } from "../../context/game/game.context";
import { GAME_ACTION_TYPES } from "../../context/game/game.type";
import { useContext, useEffect, useState } from "react";

import { houseChoice } from "../../utils/houseChoice";
import { determineWinner } from "../../utils/winningCondition";

const Result = () => {
  const { state, dispatch } = useContext(GameContext);

  const [toggleResult, setToggleResult] = useState(false);
  const [resultText, setResultText] = useState("");

  const playerChoose = state.playerChoice?.choice;
  const houseChoose = state.houseChoice.choice;
  const score = state.score

  const handlePlayAgain = () => {
    dispatch({
      type: GAME_ACTION_TYPES.TOGGLE_RESULT,
    });
  };

  useEffect(() => {
    const getHouseChoice = () => {
      const generatedChoice = houseChoice()
      dispatch(setHouseChoiceAction(generatedChoice));
    };
    setTimeout(getHouseChoice, 2000);
  }, [dispatch]);

  useEffect(() => {
    if (houseChoose) {
      const result = determineWinner(playerChoose, houseChoose);
      setToggleResult(true);
      if (result > 0) {
        setResultText("YOU WIN");
        dispatch(updateScoreAction((score + 1)))
      } else if (result < 0) {
        setResultText(" YOU LOSE");
        dispatch(updateScoreAction((score - 1)))
      } else {
        setResultText(" TIE ");
      }
    }
  }, [houseChoose]);

  return (
    <div className={styles.scoreBoard}>
      <div className={styles.choiceWrapper}>
        <div className={styles.pick}>
          <Selection
            name={playerChoose}
            imgPath={`/static/icon-${playerChoose}.svg`}
            varNo={0}
            color={playerChoose}
            noTransform={false}
          />
          <h3>YOU PICKED</h3>
        </div>
        <div className={styles.pick}>
          {houseChoose ? (
            <Selection
              name={houseChoose}
              imgPath={`/static/icon-${houseChoose}.svg`}
              varNo={0}
              color={houseChoose}
              noTransform={false}
            />
          ) : (
            <div className={styles.emptyCircle}></div>
          )}
          <h3>HOUSE PICKED</h3>
        </div>
      </div>
      {toggleResult && (
        <div className={styles.resultWrapper}>
          <h2>{resultText}</h2>
          <button onClick={handlePlayAgain}>PLAY AGAIN</button>
        </div>
      )}
    </div>
  );
};

export default Result;
