import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { Box, Typography } from "@mui/material";

interface FormSectionRowHeaderProps {
  label: string;
}

export default function FormSectionRowHeader({
  label,
}: FormSectionRowHeaderProps) {
  return (
    <Box
      padding={1}
      marginY={1}
      bgcolor={Colors.SECONDARY_BACKGROUND}
      color={Colors.WHITE}
    >
      <Typography variant="h6">{label}</Typography>
    </Box>
  );
}
