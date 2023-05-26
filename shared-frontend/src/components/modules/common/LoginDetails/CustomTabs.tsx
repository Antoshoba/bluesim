import { Box, Tab, Tabs } from "@mui/material";

import styled from "@emotion/styled";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import React from "react";
import AdminsIcon from "../../../../assets/Images/Crown Star.png";
import HeartIcon from "../../../../assets/Images/Health.png";
import FamilyIcon from "../../../../assets/Images/User Heart.png";
import LoginDetails from "./LoginDetails";

const TabsValue = [
  {
    name: "Nurses",
    value: "Nurses",
    icon: HeartIcon,
  },
  {
    name: "Family members",
    value: "Family members",
    icon: FamilyIcon,
  },
  { name: "Admins", value: "Admins", icon: AdminsIcon },
];

const CustomTab = styled(Tabs)({
  ".css-h0q0iv-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    backgroundColor: "#014A61",
    color: "white",
    height: "40px",
  },
  ".css-heg063-MuiTabs-flexContainer": {
    padding: "10px",
  },
});

export default function CustomTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box p={1} margin="auto" maxWidth={470} mt={3}>
      <Box
        alignItems="center"
        width="100%"
        bgcolor={Colors.TAB_BACKGROUND}
        borderRadius="30px"
      >
        <CustomTab
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
          value={value}
          onChange={handleChange}
        >
          {TabsValue.map((index) => (
            <Tab
              style={{
                textTransform: "capitalize",
                borderRadius: "30px",
                fontSize: "16px",
                minHeight: "40px",
              }}
              key={index.name}
              label={index.name}
              icon={<img src={index.icon} alt="Tab_icon" />}
              iconPosition="start"
            />
          ))}
        </CustomTab>
      </Box>

      <LoginDetails />
    </Box>
  );
}
