import CustomButton from "@j2w/shared-frontend/components/form/buttons/CustomButton";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import AppContainer from "../../AppContainer";
import MenuList from "../MenuList";

import CategoriesHeader from "./CategoriesHeader";

interface AppMainHeaderProps {
  menus: MenuList[];
  logoutRoute: string;
}

export default function AppMainHeader({
  menus,
  logoutRoute,
}: AppMainHeaderProps) {
  return (
    <AppContainer
      display={{ xs: "none", md: "block" }}
      justifyContent="space-between"
      paddingY={0}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <CategoriesHeader MenuList={menus} />
        <Link to={logoutRoute}>
          <CustomButton
            bgColor={Colors.CHIP_TEXT}
            color={Colors.WHITE}
            variant="contained"
          >
            Logout
          </CustomButton>
        </Link>
      </Stack>
    </AppContainer>
  );
}
