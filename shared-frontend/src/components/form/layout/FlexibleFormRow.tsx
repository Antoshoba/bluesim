import { Stack, StackProps } from "@mui/material";

export default function FlexibleFormRow(props: StackProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="flex-start"
      spacing={3}
      marginY={3}
      width="100%"
      {...props}
    >
      {props.children}
    </Stack>
  );
}
