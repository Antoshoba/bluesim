import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { PropsWithChildren } from "react";
import enLocale from "date-fns/locale/en-GB";

export default function CustomLocalizationProvider({
  children,
}: PropsWithChildren<{}>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enLocale}>
      {children}
    </LocalizationProvider>
  );
}
