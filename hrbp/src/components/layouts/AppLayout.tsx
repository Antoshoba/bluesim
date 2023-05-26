import { Box, BoxProps } from "@mui/material";

import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Layout from "./Layout";

export default function AppLayout({ children, ...props }: BoxProps) {
  return (
    <Layout height="100vh" {...props}>
      <Header />
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        flexGrow={1}
        overflow="hidden"
      >
        <Box
          display="flex"
          flexDirection="column"
          flexGrow={1}
          marginTop={8}
          sx={{ overflowY: "auto" }}
        >
          <Outlet />
        </Box>
      </Box>
    </Layout>
  );
}
