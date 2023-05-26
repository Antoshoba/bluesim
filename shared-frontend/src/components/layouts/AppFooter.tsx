import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Link, LinkProps } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AppContainer from "./AppContainer";

const FooterSocialLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link color="inherit" target="_blank" {...props}>
      <IconButton color="inherit">{children}</IconButton>
    </Link>
  );
};

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Box width="100%" bgcolor={Colors.CHIP_TEXT}>
      <AppContainer paddingY={4} color={Colors.WHITE}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Typography>
            Copyright © {currentYear} Joulestowatts Business Solutions Pvt. Ltd.
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography marginRight={2}>Follow Us On :</Typography>
            <FooterSocialLink href="https://www.facebook.com/login/">
              <FacebookIcon />
            </FooterSocialLink>
            <FooterSocialLink href="https://twitter.com/home?lang=en">
              <TwitterIcon />
            </FooterSocialLink>
            <FooterSocialLink href="https://www.instagram.com/accounts/login/">
              <InstagramIcon />
            </FooterSocialLink>
          </Stack>
        </Stack>
      </AppContainer>
    </Box>
  );
}
