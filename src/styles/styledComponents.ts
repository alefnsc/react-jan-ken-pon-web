import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)({
  background: "linear-gradient(135deg, #fff, #ccc);",
  border: "2px solid #333",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  padding: "20px",
  width: "80%",
  maxWidth: "350px",
  color: "#333",
  borderRadius: "10px",
  "& h6": {
    marginBottom: "20px",
  },
});

export const StyledButton = styled(Button)({
  background: "#525B61",
  color: "white",
  paddingTop: "0.5rem",
  margin: "2rem",
  fontSize: "1.3rem",
  padding: "0.3rem 7rem",
  "&:hover": {
    background: "#525B71",
  },
});
