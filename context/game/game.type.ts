type ChoiceType = {
  choice: string;
};

export type GameContextType = {
  toResult: boolean;
  playerChoice: ChoiceType;
  houseChoice: ChoiceType;
  score: number;
};

export enum GAME_ACTION_TYPES {
  TOGGLE_RESULT = "game/play_again",
  SET_PLAYER_CHOICE = "game/set_player_choice",
  SET_HOUSE_CHOICE = "game/set_house_choice",
  UPDATE_SCORE = "game/update_score",
  RESET = "game/reset",
}

export type GameAction = {
  type: GAME_ACTION_TYPES;
  payload: GameContextType;
};
