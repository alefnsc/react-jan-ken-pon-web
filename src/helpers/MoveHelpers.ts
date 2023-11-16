export type Move = "rock" | "paper" | "scissor";

export const options: Move[] = ["rock", "paper", "scissor"];

export type Outcome = {
  [key in Move]: {
    [key in Move]: string;
  };
};

export const outcomes: Outcome = {
  rock: {
    rock: "Draw!",
    paper: "You lose!",
    scissor: "You win!",
  },
  paper: {
    rock: "You win!",
    paper: "Draw!",
    scissor: "You lose!",
  },
  scissor: {
    rock: "You lose!",
    paper: "You win!",
    scissor: "Draw!",
  },
};

export function Result(playerMove: Move, computerMove: Move): string {
  const outcome = outcomes[playerMove]?.[computerMove];
  return outcome ?? "Invalid move!";
}
