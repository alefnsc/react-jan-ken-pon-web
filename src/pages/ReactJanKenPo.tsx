import { useState, useEffect } from "react";

import { Move, Result, RandomMove } from "../helpers/MoveHelpers";

import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Home } from "../components/Home";
import { Score } from "../components/Score";
import { Control } from "../components/Control";
import { Timer } from "../components/Timer";
import { GameBoard } from "../components/GameBoard";
import { Instructions } from "../components/Instructions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReactJanKenPo() {
  const [player1Win, setPlayer1Win] = useState(false);
  const [player2Win, setPlayer2Win] = useState(false);
  const [player1Move, setPlayer1Move] = useState<Move | null>(null);
  const [player2Move, setPlayer2Move] = useState<Move | null>(null);
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [timer, setTimer] = useState(false);
  const [playGame, setPlayGame] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePlayer1Move = (move: Move) => {
    setPlayer1Move(move);
    setTimer(true);
  };

  const handlePlayGame = () => {
    setPlayGame(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (score.player1 === 3) {
      setScore({ player1: 0, player2: 0 });
      toast("Whoowoa, you won the match!", {
        position: "top-center",
        icon: "🏆",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else if (score.player2 === 3) {
      setScore({ player1: 0, player2: 0 });
      toast("Oh no, you lose the match!", {
        position: "top-center",
        icon: "🚫",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  }, [score]);

  useEffect(() => {
    if (player1Move && player1Move.value) {
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
    if (player1Move && player1Move.value && player2Move && player2Move.value) {
      const result = Result(player1Move, player2Move);
      setTimer(true);
      intervalId = setInterval(() => {
        if (result === "You win!") {
          setPlayer1Win(true);
          setPlayer2Win(false);
        } else if (result === "You lose!") {
          setPlayer1Win(false);
          setPlayer2Win(true);
        } else if (result === "Draw!") {
          setPlayer1Win(false);
          setPlayer2Win(false);
        }
        toast.info(result, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
        });
        setTimer(false);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [player1Move, player2Move, setPlayer1Win, setPlayer2Win]);

  useEffect(() => {
    if (!timer) {
      const timerIntervalId: number = setInterval(() => {
        setPlayer1Move(null);
        setPlayer2Move(null);
      }, 2000);
      return () => clearInterval(timerIntervalId);
    }
  }, [timer]);

  let maintsx = null;

  if (playGame) {
    maintsx = (
      <>
        <Header> REACT-JAN-KEN-PON</Header>
        <Main>
          <>
            <div className="flex flex-col justify-center items-center rounded-md p-6 my-5">
              <Score
                player1Score={score.player1}
                player2Score={score.player2}
              />
              <GameBoard
                player1Move={player1Move}
                player2Move={player2Move}
                timer={timer}
              >
                <Timer />
              </GameBoard>
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
          </>
        </Main>
      </>
    );
  }
  if (!playGame) {
    maintsx = (
      <Main>
        <>
          <Home handlePlayGame={handlePlayGame} handleOpen={handleOpen} />
          <Instructions open={open} handleClose={handleClose} />
        </>
      </Main>
    );
  }

  return maintsx;
}
