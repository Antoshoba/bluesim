import { Stack, StackProps, Typography } from "@mui/material";

interface FormRowHeaderProps {
  label?: string;
}

export default function FormRowHeader({
  label,
  children,
  ...props
}: FormRowHeaderProps & StackProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      paddingY={1.25}
      spacing={2}
      {...props}
    >
      {label && <Typography variant="h5">{label}</Typography>}
      {children}
    </Stack>
  );
}
