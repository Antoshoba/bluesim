import UserUtils from "@j2w/common/utils/UserUtils";
import logo from "@j2w/shared-frontend/assets/logo/J2W_logo.svg";
import { AuthContext } from "@j2w/shared-frontend/providers/AuthProvider";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import { useContext } from "react";
import OptionalLink from "../OptionalLink";
import CustomButton from "../form/buttons/CustomButton";
interface props {
  userRoute?: string;
}

export default function HeaderContent({ userRoute }: props) {
  const { user } = useContext(AuthContext);
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      flexWrap="wrap"
    >
      <img width={90} src={logo} alt="Joules2Watts" />
      <OptionalLink to={userRoute}>
        <CustomButton
          variant="text"
          sx={{ textTransform: "capitalize" }}
          startIcon={
            <AccountCircleIcon
              htmlColor={Colors.CHIP_TEXT}
              style={{ fontSize: 32 }}
            />
          }
        >
          {UserUtils.getUserName(user)}
        </CustomButton>
      </OptionalLink>
    </Stack>
  );
}
