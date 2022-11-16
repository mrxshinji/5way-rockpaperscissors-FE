import selections from "../components/game/selection.json";

export const houseChoice = (): string => {
  const randomNum = Math.floor(Math.random() * (5 - 0)) + 0;
  return selections[randomNum].name
};
