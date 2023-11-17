import { moves, Move } from "../helpers/MoveHelpers";

type ControlProps = {
  onPlayer1Move: (move: Move) => void;
};

export function Control({ onPlayer1Move }: ControlProps) {
  return (
    <div className="control flex flex-row justify-center items-center rounded-full p-6 my-5 space-x-4 h-full shadow-md">
      {moves.map((move) => (
        <div key={move.value} onClick={() => onPlayer1Move(move)}>
          <move.icon className="w-16 h-16 text-gray-600 hover:text-gray-900" />
        </div>
      ))}
    </div>
  );
}
