import { Typography, TypographyProps } from "@mui/material";

export default function CustomLabel({ children, ...props }: TypographyProps) {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  );
}
