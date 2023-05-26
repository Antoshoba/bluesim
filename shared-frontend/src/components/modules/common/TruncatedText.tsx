import { styled, Typography } from "@mui/material";

interface TruncatedTextProps {
  lines: number;
}

const TruncatedText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "lines",
})<TruncatedTextProps>(({ lines }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: lines,
  WebkitBoxOrient: "vertical",
}));

export default TruncatedText;
