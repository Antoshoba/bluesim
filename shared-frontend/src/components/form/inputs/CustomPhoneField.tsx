import CustomTextField, { CustomTextFieldProps } from "./CustomTextField";

export default function CustomPhoneField(props: CustomTextFieldProps) {
  return (
    <CustomTextField
      type="tel"
      {...props}
      inputProps={{
        pattern: "[+-]?[0-9]{10}",
        inputMode: "numeric",
        autoComplete: "tel",
        maxLength: "10",
        ...props.inputProps,
        onInvalid: (e) => {
          const target: any = e.target;
          target.setCustomValidity("");
          if (!target.validity.valid) {
            target.setCustomValidity(
              "Please enter a valid 10 digit phone number"
            );
          }
          props.inputProps?.onInvalid?.(e);
        },
        onInput: (e) => {
          const target: any = e.target;
          target.setCustomValidity("");
          props.inputProps?.onInput?.(e);
        },
      }}
    />
  );
}
