import { Box } from "@mui/material";
import AppContainer from "./AppContainer";
import MenuList from "./headers/MenuList";
import DrawerCategoriesHeader from "./headers/mobile/DrawerCategoriesHeader";

interface AppHeaderProps {
  logoutRoute: string;
  menus: MenuList[];
  userRoute?: string;
}

export default function AppHeader({
  // logoutRoute,
  menus,
}: // userRoute,
AppHeaderProps) {
  return (
    <Box
    // borderBottom={`1px solid ${Colors.SHADOW}`}
    // bgcolor={Colors.WHITE}
    // position="sticky"
    // top={0}
    // zIndex={1}
    >
      <AppContainer direction="row" alignItems="center" spacing={1}>
        <DrawerCategoriesHeader menus={menus} />
        {/* <HeaderContent userRoute={userRoute} /> */}
      </AppContainer>
      {/* <Box bgcolor={Colors.LIGHT_WHITE}>
        <AppMainHeader menus={menus} logoutRoute={logoutRoute} />
      </Box> */}
    </Box>
  );
}
