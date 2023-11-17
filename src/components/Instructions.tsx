import { Modal, Typography } from "@mui/material";
import { StyledBox, StyledButton } from "../styles/styledComponents";

type InstructionsProps = {
  open: boolean;
  handleClose: () => void;
};

export function Instructions({ open, handleClose }: InstructionsProps) {
  return (
    <Modal
      open={open}
      aria-labelledby="instructions-title"
      aria-describedby="instructions-description"
    >
      <StyledBox
        className="flex flex-col space-y-4"
        id="instructions-description"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#000000",
        }}
      >
        <Typography id="instructions-title" variant="h6">
          Instructions
        </Typography>
        <Typography className="space-y-4">
          <li>Rock beats Scissors.</li>
          <li>Scissors beats Paper.</li>
          <li>Paper beats Rock.</li>
          <li>Win three rounds to win the match.</li>
        </Typography>

        <StyledButton onClick={handleClose}>Understood!</StyledButton>
      </StyledBox>
    </Modal>
  );
}
