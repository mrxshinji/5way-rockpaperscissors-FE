import styles from "./footer.module.css";

import { useContext } from 'react'
import { reset } from "../../context/game/game.action";
import { GameContext } from "../../context/game/game.context";
import Game from "../game/game";


type FooterProps = {
  handleToggleRule: () => void;
}

const Footer = ({handleToggleRule}: FooterProps) => {

  const { dispatch } = useContext(GameContext)

  return <div className={styles.container}>
    <div className={styles.wrapper} onClick={handleToggleRule} >
        <p>Rules</p>
    </div>
    <div className={styles.wrapper} onClick={() => dispatch(reset())}>
        <p>Reset</p>
    </div>
  </div>;
};

export default Footer;
