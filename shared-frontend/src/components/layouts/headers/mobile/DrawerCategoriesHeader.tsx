import React, { useCallback } from "react";

import MenuList from "../MenuList";
import AppDrawer from "./AppDrawer";

interface DrawerCategoriesHeaderProps {
  menus: MenuList[];
}
export default function DrawerCategoriesHeader({
  menus,
}: DrawerCategoriesHeaderProps) {
  const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = useCallback(() => setOpen(true), []);
  const handleDrawerClose = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* <Box alignItems="center" display={{ xs: "flex", md: "flex" }}>
        <IconButton size="small" onClick={handleDrawerOpen}>
          <MenuIcon color="primary" fontSize="inherit" />
        </IconButton>
      </Box> */}
      <AppDrawer open={open} onClose={handleDrawerClose} menus={menus} />
    </>
  );
}
