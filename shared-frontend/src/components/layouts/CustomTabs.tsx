import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs, { TabsProps } from "@mui/material/Tabs";
import { useCallback } from "react";

export interface CustomTabType {
  id: string;
  label: string;
}

interface CustomTabsProps {
  tabs: CustomTabType[];
  value: string;
  setValue: (value: string) => void;
}

const StyledTabs = styled(Tabs)({
  "& .MuiTab-root": {
    minWidth: "0",
    padding: 0,
    margin: "0 20px",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: Colors.CHIP_TEXT,
    height: 3,
  },
  "& .MuiTab-root.Mui-selected": {
    color: Colors.CHIP_TEXT,
    fontWeight: "bold",
  },

  borderBottom: "1px solid Black",
});

const StyledTab = styled(Tab)({
  textTransform: "none",
  color: Colors.PRIMARY,
});

export default function CustomTabs({
  tabs,
  value,
  setValue,
  ...props
}: CustomTabsProps & Omit<TabsProps, "value" | "onChange">) {
  const handleChange = useCallback(
    (_: any, value: string) => setValue(value),
    [setValue]
  );

  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      {...props}
    >
      {tabs.map((tab) => (
        <StyledTab key={tab.id} value={tab.id} label={tab.label} />
      ))}
    </StyledTabs>
  );
}
