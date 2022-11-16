import Image from "next/image";
import styles from "./selection.module.css";

import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  noTransform: boolean;
  imgPath: string;
  varNo: number;
  color: string;
  handleChoice?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Selection = ({
  name,
  noTransform,
  imgPath,
  varNo,
  color,
  handleChoice,
}: Props) => {
  const deg = -90 + (360 / 5) * varNo;
  const [bigScreen, setBigScreen] = useState(false);

  useEffect(() => {
    const getMediaWidth = () => {
      if (typeof window !== "undefined") {
        const mediaMatch = window && window.matchMedia("(min-width: 450px)");
        return mediaMatch.matches;
      }
      return false;
    };
    setBigScreen(getMediaWidth());
  }, []);

  const style = {
    "--clr": `var(--${color})`,
    transform:
      noTransform &&
      `rotate(${deg}deg) ${
        bigScreen ? "translateX(220px)" : "translateX(140px)"
      } rotate(${deg * -1}deg)`,
    position: noTransform ? "absolute" : "relative",
    scale: noTransform ? "1" : "1.2",
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <button
        type='submit'
        className={styles.button}
        value={name}
        onClick={(e) => handleChoice && handleChoice(e)}
      >
        <Image
          className={styles.image}
          src={imgPath}
          alt='scissors'
          width={50}
          height={50}
        />
      </button>
    </div>
  );
};

export default Selection;
