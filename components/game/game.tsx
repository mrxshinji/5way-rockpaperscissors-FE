import Image from "next/image";
import styles from "./game.module.css";
import { useContext, MouseEvent } from "react";

import selectionJson from "./selection.json";
import Selection from "./selection";

import { setPlayerChoiceAction } from "../../context/game/game.action";
import { GameContext } from "../../context/game/game.context";
import { GAME_ACTION_TYPES } from "../../context/game/game.type";

const Game = () => {
  const { state, dispatch } = useContext(GameContext);

  const handleChoice = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    dispatch(setPlayerChoiceAction(value));
  };

  return (
    <div className={styles.container}>
      <Image src={"/static/bg-pentagon.svg"} alt='pentagon background' fill sizes="280px, (min-width:450px) 450px" />
      {selectionJson.map((i, idx) => {
        return (
          <Selection
            key={idx}
            name={i.name}
            imgPath={i.imgPath}
            varNo={idx}
            color={i.color}
            noTransform
            handleChoice={handleChoice}
          />
        );
      })}
    </div>
  );
};

export default Game;
