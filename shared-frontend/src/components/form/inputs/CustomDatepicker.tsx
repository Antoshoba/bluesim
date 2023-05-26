import { Paper, styled, TextField, TextFieldProps } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { DatePickerSlotsComponent } from "@mui/x-date-pickers/DatePicker/DatePicker";
import { useCallback } from "react";

const StyledDatePickerPopup = styled(Paper)({
  "&.MuiPaper-root": {
    background: Colors.WHITE,
    border: `1px solid ${Colors.SECONDARY_BACKGROUND}`,
    boxShadow: `0px 2px 4px ${Colors.SECONDARY_BACKGROUND}`,
    borderRadius: 3,
  },
  ".MuiPickersCalendarHeader-root": {
    background: Colors.MAIN_BACKGROUND,
    color: Colors.WHITE,
    marginTop: 0,
    marginBottom: 3,
    "& .MuiIconButton-root": {
      color: Colors.WHITE,
    },
  },
  ".MuiDayPicker-header": {
    background: Colors.MAIN_BACKGROUND,
    "& .MuiDayPicker-weekDayLabel": {
      height: "unset",
    },
  },
  ".MuiPickersDay-root": {
    background: Colors.WHITE,
    "&.Mui-selected": {
      background: Colors.MAIN_BACKGROUND,
    },
  },
});

const InputComponent = (params: TextFieldProps) => (
  <TextField
    {...params}
    inputProps={{
      ...params.inputProps,
      placeholder: "Date",
    }}
  />
);

const components: Partial<DatePickerSlotsComponent> = {
  OpenPickerIcon: CalendarMonthOutlinedIcon,
  PaperContent: StyledDatePickerPopup,
};

const dayOfWeekFormatter = (day: string) => day.toUpperCase();

interface CustomDatePickerProps {
  value?: Date;
  onChange?: (value?: Date) => void;
}

export default function CustomDatePicker({
  value,
  onChange,
  ...props
}: CustomDatePickerProps &
  Omit<DatePickerProps<Date, Date>, "value" | "onChange" | "renderInput">) {
  const onChangeDate = useCallback(
    (value: Date | null) => onChange?.(value ? value : undefined),
    [onChange]
  );

  return (
    <DatePicker
      {...props}
      value={value ?? null}
      onChange={onChangeDate}
      dayOfWeekFormatter={dayOfWeekFormatter}
      components={components}
      renderInput={InputComponent}
    />
  );
}
