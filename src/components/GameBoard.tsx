import React from "react";
import { Move } from "../helpers/MoveHelpers";
type GameBoardProps = {
  player1Move: Move | null;
  player2Move: Move | null;
  timer: boolean;
  children: React.ReactNode;
};

export function GameBoard({
  player1Move,
  player2Move,
  timer,
  children,
}: GameBoardProps) {
  return (
    <div className="container shadow-xl game-table flex flex-row justify-center items-center rounded-xl p-6 my-5 space-x-2 w-full">
      <div className="flex flex-row space-x-4">
        <div className="flex flex-col">
          {player1Move && !timer && (
            <player1Move.icon className="w-48 h-48 text-gray-900" />
          )}
        </div>
        <div className="flex flex-col">{timer ? children : null}</div>
        <div className="flex flex-col">
          {player2Move && !timer && (
            <player2Move.icon className="w-48 h-48 text-gray-900" />
          )}
        </div>
      </div>
    </div>
  );
}
