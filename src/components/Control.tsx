import {
  ScissorsIcon,
  DocumentIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

import { Move } from "../helpers/MoveHelpers";

type ControlProps = {
  onPlayer1Move: (move: Move) => void;
};

export default function Control({ onPlayer1Move }: ControlProps) {
  return (
    <div className="border flex flex-row justify-center items-center rounded-md p-6 my-5">
      <div onClick={() => onPlayer1Move("rock")}>
        <LifebuoyIcon className="h-10 w-10 text-gray-900 hover:text-gray-600" />
      </div>
      <div onClick={() => onPlayer1Move("paper")} className="">
        <DocumentIcon className="h-10 w-10 text-gray-900  hover:text-gray-600" />
      </div>
      <div onClick={() => onPlayer1Move("scissor")} className="">
        <ScissorsIcon className="h-10 w-10 text-gray-900  hover:text-gray-600" />
      </div>
    </div>
  );
}
