import CustomDropdown, {
  CustomDropdownProps,
  DropdownValue,
} from "../CustomDropdown";
import { StackProps, TypographyProps } from "@mui/material";

import HorizontalInput from "./HorizontalInput";

interface HorizontalDropdownProps {
  label: string;
  containerProps?: StackProps;
  labelProps?: TypographyProps;
}

export default function HorizontalDropdown<T extends DropdownValue>({
  label,
  containerProps,
  labelProps,
  ...props
}: HorizontalDropdownProps & CustomDropdownProps<T>) {
  return (
    <HorizontalInput label={label} labelProps={labelProps} {...containerProps}>
      <CustomDropdown {...props} />
    </HorizontalInput>
  );
}
