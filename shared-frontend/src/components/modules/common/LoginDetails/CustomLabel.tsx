import { Typography, TypographyProps } from "@mui/material";

interface CustomLabelProps {
  label?: string;
  required?: boolean;
}

export default function CustomLabel({
  label,
  required,
  children,
  ...props
}: CustomLabelProps & TypographyProps) {
  if (!label && !children) {
    return null;
  }
  return (
    <Typography variant="body1" mb={0.5} {...props}>
      {label}
      {required && (
        <Typography component="span" color="black">
          *
        </Typography>
      )}
      {children}
    </Typography>
  );
}
