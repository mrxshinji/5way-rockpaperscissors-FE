import styles from "./header.module.css";

import { GameContext } from "../../context/game/game.context";
import { useContext } from "react";

const Header = () => {
  const { state } = useContext(GameContext);
  const score = state.score;
  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <h1>ROCK</h1>
        <h1>LIZARD</h1>
        <h1>SCISSORS</h1>
        <h1>LIZARD</h1>
        <h1>SPOCK</h1>
      </div>
      <div className={styles.score}>
        <p>SCORE</p>
        {/* score to change to dynamic later */}
        <h2>{score}</h2>
      </div>
    </div>
  );
};

export default Header;
