import routes from "@j2w/consultant/routes/routes";
import useLogout from "@j2w/shared-frontend/hooks/useLogout";
import { Box, Typography } from "@mui/material";

export default function LogoutPage() {
  useLogout(routes.LOGIN);

  return (
    <Box>
      <Typography variant="h6">Logging Out..</Typography>
    </Box>
  );
}
