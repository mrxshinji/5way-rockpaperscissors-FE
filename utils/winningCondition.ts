export const determineWinner = (
  playerChoice: string,
  houseChoice: string
): number => {
  switch (playerChoice) {
    case "scissors":
      if (houseChoice === "paper" || houseChoice === "lizard") {
        return 1;
      } else if (houseChoice === "rock" || houseChoice === "spock") {
        return -1;
      } else return 0;

    case "paper":
      if (houseChoice === "rock" || houseChoice === "spock") {
        return 1;
      } else if (houseChoice === "scissors" || houseChoice === "lizard") {
        return -1;
      } else return 0;

    case "rock":
      if (houseChoice === "scissors" || houseChoice === "lizard") {
        return 1;
      } else if (houseChoice === "paper" || houseChoice === "spock") {
        return -1;
      } else return 0;

    case "lizard":
      if (houseChoice === "paper" || houseChoice === "spock") {
        return 1;
      } else if (houseChoice === "rock" || houseChoice === "scissors") {
        return -1;
      } else return 0;

    case "spock":
      if (houseChoice === "rock" || houseChoice === "scissors") {
        return 1;
      } else if (houseChoice === "lizard" || houseChoice === "paper") {
        return -1;
      } else return 0;
    default:
      return 0;
  }
};
