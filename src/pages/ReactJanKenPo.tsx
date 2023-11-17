import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Score } from "../components/Score";
import Control from "../components/Control";
import { Move, Result, RandomMove } from "../helpers/MoveHelpers";
import Timer from "../components/Timer";

export default function ReactJanKenPo() {
  const [player1Win, setPlayer1Win] = useState(false);
  const [player2Win, setPlayer2Win] = useState(false);
  const [player1Move, setPlayer1Move] = useState<Move | null>(null);
  const [player2Move, setPlayer2Move] = useState<Move | null>(null);
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [timer, setTimer] = useState(false);
  function handlePlayer1Move(move: Move) {
    setPlayer1Move(move);
    setTimer(true);
  }

  useEffect(() => {
    if (player1Move) {
      const computerMove = RandomMove();
      setPlayer2Move(computerMove);
    }
  }, [player1Move, player2Move]);

  useEffect(() => {
    if (player1Win === true) {
      setScore((prevScore) => ({
        ...prevScore,
        player1: prevScore.player1 + 1,
      }));
      setPlayer1Win(false);
    }
    if (player2Win === true) {
      setScore((prevScore) => ({
        ...prevScore,
        player2: prevScore.player2 + 1,
      }));
      setPlayer2Win(false);
    }
  }, [player1Win, player2Win, setScore]);

  useEffect(() => {
    let intervalId: number;
    if (player1Move && player2Move) {
      const result = Result(player1Move, player2Move);
      setTimer(true);
      intervalId = setInterval(() => {
        if (result === "You win!") {
          setPlayer1Win(true);
          setPlayer2Win(false);
          setPlayer1Move(null);
          setPlayer2Move(null);
        } else if (result === "You lose!") {
          setPlayer1Win(false);
          setPlayer2Win(true);
          setPlayer1Move(null);
          setPlayer2Move(null);
        } else if (result === "Draw!") {
          setPlayer1Win(false);
          setPlayer2Win(false);
          setPlayer1Move(null);
          setPlayer2Move(null);
        }
        toast.info(result, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: false,
          theme: "light",
        });
        setTimer(false);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [player1Move, player2Move, setPlayer1Win, setPlayer2Win]);
  const newTimer = timer ? <Timer /> : null;
  return (
    <>
      <Header> REACT-JAN-KEN-PON</Header>

      <Main>
        <div className="flex flex-col justify-center items-center rounded-md p-6 my-5 space-x-4">
          <Score player1Score={score.player1} player2Score={score.player2} />
          {/* Game table - There will be a game table to delay computer move and display the result*/}
          <div className="container game-table border flex flex-row justify-center items-center rounded-md p-6 my-5 space-x-2">
            {newTimer}
          </div>
          <Control onPlayer1Move={handlePlayer1Move} />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </Main>
    </>
  );
}
