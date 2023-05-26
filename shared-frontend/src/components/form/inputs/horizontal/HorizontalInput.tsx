import { Stack, StackProps, TypographyProps } from "@mui/material";

import CustomLabel from "../CustomLabel";

interface HorizontalInputProps {
  label: string;
  labelProps?: TypographyProps;
}

export default function HorizontalInput({
  label,
  children,
  labelProps,
  ...props
}: HorizontalInputProps & StackProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={3}
      width="100%"
      flexGrow={1}
      maxWidth={450}
      {...props}
    >
      <CustomLabel width={130} flexShrink={0} {...labelProps}>
        {label}
      </CustomLabel>
      {children}
    </Stack>
  );
}
