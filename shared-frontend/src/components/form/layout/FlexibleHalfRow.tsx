import { Box, StackProps } from "@mui/material";
import FlexibleFormRow from "./FlexibleFormRow";

export default function FlexibleHalfRow({ children, ...props }: StackProps) {
  return (
    <FlexibleFormRow {...props}>
      {children}
      <Box width="100%" />
    </FlexibleFormRow>
  );
}
