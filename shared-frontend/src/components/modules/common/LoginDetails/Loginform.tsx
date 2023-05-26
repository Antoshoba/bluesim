import { Box, Grid, Stack } from "@mui/material";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import Gold from "../../../../assets/Images/Background.png";
import LoginImage from "../../../../assets/Images/Login.png";
import CustomLabel from "./CustomLabel";
import CustomTabs from "./CustomTabs";

export default function LoginForm() {
  return (
    <Box position="relative" bgcolor={Colors.WHITE}>
      <Grid height="100vh" container>
        <Grid item xs={12} sm={6} bgcolor={Colors.LOGIN_BACKGROUND}>
          <Box marginTop={5} textAlign="center">
            <Box
              style={{
                width: " 100%",
                backgroundSize: "cover",

                backgroundImage: `url(${Gold})`,
              }}
            >
              <img
                style={{ width: "100%", height: "auto", maxWidth: "570px" }}
                src={LoginImage}
                alt="LoginImage"
              />
            </Box>

            <CustomLabel
              lineHeight="30px"
              color={Colors.WHITE}
              fontSize="30px"
              mt={4}
              letterSpacing={2}
            >
              Track the patients vitals regularly
            </CustomLabel>
            <CustomLabel
              mt={1}
              p={1}
              fontFamily="Gilroy"
              fontWeight={400}
              color={Colors.LOGIN_PAGE_SLIDER}
              fontSize="16px"
              lineHeight="22px"
            >
              With our dashboard you can have a full time monitor on the
              patients helath
            </CustomLabel>
          </Box>
        </Grid>
        <Grid
          margin="auto"
          textAlign="center"
          item
          xs={12}
          sm={6}
          // paddingLeft={{ sm: 7 }}
        >
          <Stack maxWidth="100%" margin="auto">
            <CustomLabel
              fontWeight={700}
              mt={4}
              lineHeight="19px"
              fontSize="30px"
            >
              Welcome back !!
            </CustomLabel>
            <CustomLabel
              color={Colors.LOGIN_PAGE_TYPO}
              fontWeight={400}
              fontSize="16px"
            >
              Enter your credentials and login to your account
            </CustomLabel>
          </Stack>

          <Stack>
            <CustomTabs />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
