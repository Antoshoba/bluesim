import avatar from "@j2w/shared-frontend/assets/avatar.svg";
import blueSimLogo from "@j2w/shared-frontend/assets/bluSimLogo.svg";
import footer2 from "@j2w/shared-frontend/assets/footer2.svg";
import footer1 from "@j2w/shared-frontend/assets/footer3.svg";
import CustomSvgIcon from "@j2w/shared-frontend/components/CustomSvgIcon";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { NavigateNext, StarBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "../MenuList";
const DrawerHeader = styled("div")(({ theme }) => ({
  marginTop: 8,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  backgroundColor: Colors.NAV_BACKGROUND,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

interface DrawerProps {
  menus: MenuList[];
  onClose?: () => void;
}

export default function CustomDrawer({ onClose, menus }: DrawerProps) {
  const [opens, setOpens] = useState(false);

  const handleClick = () => {
    setOpens(!opens);
  };
  return (
    <>
      <DrawerHeader>
        <CustomSvgIcon icon={blueSimLogo} width={80} height={80} />
      </DrawerHeader>
      <Divider
        sx={{
          ml: 3,
          mr: 3,
          mt: 1,
          borderColor: Colors.DIVIDER_COLOR,
        }}
      />
      <List>
        {menus.map((menus) => (
          <Link to={menus.url} key={menus.name}>
            <ListItem
              disablePadding
              sx={{ display: "block", marginTop: 1 }}
              onClick={onClose}
            >
              <ListItemButton
                onClick={handleClick}
                sx={{
                  marginLeft: 1,
                  marginRight: 1,
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <ListItemIcon>
                    <CustomSvgIcon icon={menus.icon} />
                  </ListItemIcon>
                  {menus.name}
                </Box>
                {/* {opens ? (
                  <NavigateBefore />
                ) : ( */}
                <Box display={"flex"} alignItems={"right"}>
                  <NavigateNext />
                </Box>
                {/* )} */}
              </ListItemButton>
              <Collapse in={opens} timeout="auto" unmountOnExit>
                {menus.submenu.map((menuList) => (
                  <Link to={menuList.url} key={menuList.title}>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={menuList.title} />
                      </ListItemButton>
                    </List>
                  </Link>
                ))}
              </Collapse>
            </ListItem>
          </Link>
        ))}
        <ListItem
          sx={{
            display: "block",
            bottom: 0,
            paddingBottom: 4,
            position: { xs: "relative", sm: "fixed" },
            maxWidth: "248px",
            alignItems: "center",
            marginTop: { xs: 3, sm: 0 },
          }}
          onClick={onClose}
        >
          <Stack justifyContent="center" alignItems="center" spacing={0}>
            <Avatar
              sx={{
                bgcolor: "#014A62 !important",

                border: "1px solid rgba(245, 250, 255, 0.28)",
                width: "45px",
                height: "45px",
                ".MuiAvatar-root": {},
              }}
            >
              <CustomSvgIcon icon={avatar} width={40} height={40} />
            </Avatar>
            <Typography sx={{ fontSize: "16px", color: "#F4F6F6" }}>
              Chang wang un
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}
            >
              changwanun@gmail.com
            </Typography>
            <Stack direction="row" spacing={1}>
              <CustomSvgIcon icon={footer1} width="32px" height="32px" />
              <CustomSvgIcon icon={footer2} width="32px" height="32px" />
            </Stack>
            {/* </Card> */}
          </Stack>
        </ListItem>
      </List>
    </>
  );
}
