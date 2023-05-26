import CustomTextField, { CustomTextFieldProps } from "./CustomTextField";

export default function CustomAddressField(props: CustomTextFieldProps) {
  return <CustomTextField {...props} multiline rows={5} />;
}
