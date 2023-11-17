import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";

import { Move } from "../helpers/MoveHelpers";

type ControlProps = {
  onPlayer1Move: (move: Move) => void;
};

export default function Control({ onPlayer1Move }: ControlProps) {
  return (
    <div className="border flex flex-row justify-center items-center rounded-md p-6 my-5 space-x-4 h-full">
      <div onClick={() => onPlayer1Move("rock")}>
        <FaRegHandRock className="w-16 h-16 text-gray-900 hover:text-gray-600" />
      </div>
      <div onClick={() => onPlayer1Move("paper")} className="">
        <FaRegHandPaper className="w-16 h-16 text-gray-900  hover:text-gray-600" />
      </div>
      <div onClick={() => onPlayer1Move("scissor")} className="">
        <FaRegHandScissors className="w-16 h-16 text-gray-900  hover:text-gray-600" />
      </div>
    </div>
  );
}
