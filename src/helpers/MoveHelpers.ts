import {
  IconType,
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";

export type Move = {
  value: string;
  icon: IconType;
};

export const moves: Move[] = [
  {
    value: "rock",
    icon: FaRegHandRock,
  },
  {
    value: "paper",
    icon: FaRegHandPaper,
  },
  {
    value: "scissor",
    icon: FaRegHandScissors,
  },
];

export type Outcome = {
  [key in Move["value"]]: {
    [key in Move["value"]]: string;
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
  const outcome = outcomes[playerMove.value]?.[computerMove.value];
  return outcome ?? "Invalid move!";
}

export function RandomMove(): Move {
  return moves[Math.floor(Math.random() * moves.length)];
}
