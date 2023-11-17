import { useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer() {
  const RenderTime = ({ remainingTime }: { remainingTime: number }) => {
    const currentTime = useRef<number>(remainingTime);
    const prevTime = useRef(0);
    const isNewTimeFirstTick = useRef(false);

    if (currentTime.current !== remainingTime) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = remainingTime;
    } else {
      isNewTimeFirstTick.current = false;
    }

    const isTimeUp = isNewTimeFirstTick.current;

    return (
      <div className="time-wrapper">
        <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
          {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? "down" : ""}`}
          >
            {prevTime.current}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`timer-wrapper`}>
      <CountdownCircleTimer
        isPlaying // use isPlaying variable
        duration={3} // use duration variable
        colors={["#A30000", "#F7B801", "#A30000"]}
        colorsTime={[3, 2, 1]}
      >
        {RenderTime}
      </CountdownCircleTimer>
    </div>
  );
}
