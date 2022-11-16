import { GAME_ACTION_TYPES } from "./game.type";

export const setPlayerChoiceAction = (input: string) => {
  return {
    type: GAME_ACTION_TYPES.SET_PLAYER_CHOICE,
    payload: {
      playerChoice: {
        choice: input,
      },
    },
  };
};

export const setHouseChoiceAction = (input: string) => {
  return {
    type: GAME_ACTION_TYPES.SET_HOUSE_CHOICE,
    payload: {
      houseChoice: {
        choice: input,
      },
    },
  };
};

export const updateScoreAction = (input: number) => {
  return {
    type: GAME_ACTION_TYPES.UPDATE_SCORE,
    payload: {
      score: input,
    },
  };
};

export const reset = () => {
  return {
    type: GAME_ACTION_TYPES.RESET,
  };
};
