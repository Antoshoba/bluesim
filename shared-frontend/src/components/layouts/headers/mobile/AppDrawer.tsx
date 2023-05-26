import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton, styled, Toolbar } from "@mui/material";
import { useState } from "react";
import MenuList from "../MenuList";
import CustomDrawer from "./CustomDrawer";

const StyledDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "248px",
    boxSizing: "border-box",
    backgroundColor: Colors.NAV_BACKGROUND,
    border: `1.5px solid ${Colors.BORDER_COLOR}`,
    borderRadius: "15px",
    color: Colors.MENU_COLOR,
    // "& .MuiListItemButton-root": {
    //   margin: "10px 20px 10px 20px",
    // },
    "& .MuiListItemIcon-root": {
      minWidth: "34px",
    },
    "& .MuiListItemIcon-root:hover": {
      minWidth: "34px",
    },
    "& .MuiListItemButton-root:hover": {
      background: "rgba(187, 159, 91, 0.1)",
      border: "1px solid #BB9F5B",
      borderRadius: "24px",
      color: Colors.WHITE,
      fontSize: "16px",
      fontWeight: "300",

      // filter: "brightness(0) invert(1)",
    },
  },
});

interface AppDrawerProps {
  menus: MenuList[];
  open: boolean;
  onClose?: () => void;
}

export default function AppDrawer({ onClose, menus }: AppDrawerProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      > */}
      <Toolbar
        sx={{
          display: { sm: "none" },
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            // mr: 2,
            display: { sm: "none" },
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
            // ml: { sm: `${drawerWidth}px` },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* </AppBar> */}
      <StyledDrawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <CustomDrawer menus={menus} onClose={onClose} />
      </StyledDrawer>
      <StyledDrawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <CustomDrawer menus={menus} onClose={onClose} />
      </StyledDrawer>
    </>
  );
}
