import { FaRegUser } from "react-icons/fa";

type ScoreProps = {
  player1Score: number;
  player2Score: number;
};

export const Score = ({ player1Score, player2Score }: ScoreProps) => {
  return (
    <div className=" control p-4 flex-col justify-between items-center rounded-md shadow-md overflow-x: auto space-x-2">
      <div className="flex justify-center items-center flex-nowrap mb-2">
        <h2 className="text-2xl font-bold ">Score</h2>
      </div>
      <div className="flex justify-between items-center w-full flex-wrap">
        <div className="flex justify-center items-center flex-nowrap">
          <FaRegUser className="h-6 w-6 text-blue-500" />
          <p className="mx-2 font-bold">Player 1:</p>
          <span> {player1Score}</span>
        </div>
        <div className="flex justify-center items-center flex-nowrap">
          <FaRegUser className="h-6 w-6 text-red-500" />
          <p className="mx-2 font-bold">Computer:</p>
          <span> {player2Score}</span>
        </div>
      </div>
    </div>
  );
};
