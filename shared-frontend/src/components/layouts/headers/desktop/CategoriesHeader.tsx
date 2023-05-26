import CustomButton from "@j2w/shared-frontend/components/form/buttons/CustomButton";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { Stack, styled } from "@mui/material";
import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import MenuList from "../MenuList";

const StyledButton = styled(CustomButton)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(0, 3),
  fontWeight: "inherit",
  color: "inherit",
  minWidth: "unset",
}));

interface MenuProps {
  MenuList: MenuList[];
}

const activeStyle: CSSProperties = {
  fontWeight: "bold",
  color: Colors.CHIP_TEXT,
};

const defaultStyle: CSSProperties = {
  fontWeight: 500,
};

export default function CategoriesHaeder({ MenuList }: MenuProps) {
  return (
    <Stack direction="row" marginX={-4} alignItems="center" flexWrap="wrap">
      {MenuList.map((item) => (
        <NavLink
          key={item.name}
          to={item.url}
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
        >
          {item.name !== "Logout" && (
            <StyledButton variant="text">{item.name}</StyledButton>
          )}
        </NavLink>
      ))}
    </Stack>
  );
}
