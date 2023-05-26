import { Stack, StackProps } from "@mui/material";
import { HTMLProps } from "react";

interface StyledFormProps {
  spacing: number;
  stackProps?: StackProps;
}

export default function SpacedForm({
  spacing,
  stackProps,
  children,
  ...props
}: StyledFormProps & HTMLProps<HTMLFormElement>) {
  return (
    <form {...props}>
      <Stack
        width="100%"
        alignItems="flex-start"
        direction="column"
        spacing={spacing}
        {...stackProps}
      >
        {children}
      </Stack>
    </form>
  );
}
