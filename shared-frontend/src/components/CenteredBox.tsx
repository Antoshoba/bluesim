import { Box, BoxProps } from "@mui/material";

export default function CenteredBox(props: BoxProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
    ></Box>
  );
}
