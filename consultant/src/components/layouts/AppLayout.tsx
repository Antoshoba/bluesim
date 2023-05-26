import Layout from "@j2w/shared-frontend/components/layouts/Layout";
import { Box, BoxProps } from "@mui/material";

import routes from "@j2w/consultant/routes/routes";
import dashboard from "@j2w/shared-frontend/assets/dashboard.svg";
import nurse from "@j2w/shared-frontend/assets/nurse.svg";
import residents from "@j2w/shared-frontend/assets/residents.svg";
import AppHeader from "@j2w/shared-frontend/components/layouts/AppHeader";
import { Outlet } from "react-router-dom";

const Menus = [
  {
    name: "Dashboard",
    url: routes.DASHBOARD,
    icon: dashboard,
    submenu: [
      {
        title: "Dashboard1",
        url: routes.DASHBOARD,
      },
      {
        title: "Dashboard2",
        url: routes.WARD,
      },
      {
        title: "Dashboard3",
        url: routes.RESIDENT,
      },
    ],
  },
  { name: "Residents", url: routes.RESIDENSE, icon: residents, submenu: [] },
  { name: "Nurse", url: routes.NURSE, icon: nurse, submenu: [] },
  // { name: "Interview Panel", url: routes.INTERVIEW },
  // { name: "Sparsh", url: routes.SPARSH },
  // { name: "Logout", url: routes.LOGOUT },
];

export default function AppLayout({ children, ...props }: BoxProps) {
  return (
    // <Layout {...props}>
    //   <AppHeader
    //     menus={Menus}
    //     logoutRoute={routes.LOGOUT}
    //     userRoute={routes.USER_DETAILS}
    //   />
    //   <Box display="flex" flexDirection="column" width="50%" flexGrow={1}>
    //     <Box display="flex" flexDirection="column" flexGrow={1}>
    //       <Box display="flex" flexDirection="column" flexGrow={1}>
    //         <Outlet />
    //       </Box>
    //       {/* <AppFooter /> */}
    //     </Box>
    //   </Box>
    // </Layout>
    <Layout height="100vh" ml={{ xs: 0, sm: 34 }} {...props}>
      <AppHeader
        menus={Menus}
        logoutRoute={routes.LOGOUT}
        // userRoute={routes.USER_DETAILS}
      />
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        flexGrow={1}
        overflow="hidden"
      >
        {/* <DrawerCategoriesHeader menus={Menus} /> */}
        <Box
          display="flex"
          flexDirection="column"
          flexGrow={1}
          sx={{ overflowY: "auto" }}
        >
          <Outlet />
        </Box>
      </Box>
    </Layout>
  );
}
