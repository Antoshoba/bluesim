import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

// const isWeekend = (date: Dayjs) => {
//   const day = date.day();

//   return day === 0 || day === 6;
// };
const StaticDatePickerStyle = styled(StaticDatePicker)({
  ".MuiPickersDay-dayOutsideMonth": {
    color: "#8F8F8F",
  },
  ".MuiDayPicker-weekDayLabel": {
    color: "#8F8F8F",
    // borderBottom: "1px solid #E8E8E8",
  },
  ".MuiDayPicker-header": {
    borderBottom: "1px solid #E8E8E8",
    // maxWidth: "272px",
    // marginLeft: "24px",
  },
  ".MuiPickersCalendarHeader-switchViewButton": {
    display: "none",
  },
  // maxWidth: "350px",
  border: "1px solid #EFEFEF",
  borderRadius: "8px",

  ".MuiPickerStaticWrapper-content": {
    backgroundColor: "white",

    ".MuiButtonBase-root": {
      // ".MuiPickersDay-root": {
      backgroundColor: "white !important",
      // },
      "&.Mui-selected": {
        backgroundColor: "#BB9F5B !important",
      },
    },
  },

  ".MuiDialogActions-root": {
    display: "none",
  },
});
export default function StaticDatePickerLandscape() {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePickerStyle
        views={["day"]}
        shouldDisableYear={() => true}
        showToolbar={false}
        showDaysOutsideCurrentMonth={true}
        dayOfWeekFormatter={(day) =>
          day.charAt(0).toUpperCase() + day.charAt(1)
        }
        orientation="portrait"
        openTo="day"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
