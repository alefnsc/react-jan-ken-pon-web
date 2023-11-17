import { GrInfo } from "react-icons/gr";
import { StyledButton } from "../styles/styledComponents";

type HomeProps = {
  handlePlayGame: () => void;
  handleOpen: () => void;
};

export function Home({ handlePlayGame, handleOpen }: HomeProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-4 p-6 my-5">
        <h1 className="text-9xl font-sans">Jan-Ken-Pon</h1>
        <h2 className="text-4xl">Are you ready to beat the machine?</h2>
        <h3 className="text-3xl">Let's rock!</h3>
        <p className="text-sm">(eer, or maybe paper...)</p>
      </div>
      <div className="flex flex-col  justify-center items-center pt-2">
        <StyledButton onClick={handlePlayGame}>Play!</StyledButton>
        <GrInfo
          onClick={handleOpen}
          className="w-12 h-12  text-gray-600 hover:text-gray-900"
        />
      </div>
    </div>
  );
}
