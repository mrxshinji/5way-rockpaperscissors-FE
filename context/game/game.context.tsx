import { createContext, useReducer, ReactNode, Dispatch } from "react";

import { GameContextType, GameAction } from "./game.type";

export const INITIAL_STATE: GameContextType = {
  toResult: false,
  playerChoice: { choice: "" },
  houseChoice: { choice: "" },
  score: 0,
};

const gameReducer = (
  state: GameContextType,
  action: GameAction
): GameContextType => {
  const { type, payload } = action;

  switch (type) {
    case "game/play_again":
      return {
        ...state,
        toResult: false,
        playerChoice: { choice: "" },
        houseChoice: { choice: "" },
      };
    case "game/set_player_choice":
      return {
        ...state,
        toResult: true,
        playerChoice: payload.playerChoice,
      };
    case "game/set_house_choice":
      return {
        ...state,
        houseChoice: payload.houseChoice,
      };
    case "game/update_score":
      return {
        ...state,
        score: payload.score,
      };
    case "game/reset":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const GameContext = createContext<{
  state: GameContextType;
  dispatch: Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

type GameProps = {
  children?: ReactNode;
};

export const GameProvider = ({ children }: GameProps) => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
