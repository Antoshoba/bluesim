import { useCallback, useEffect, useState } from "react";
import CustomTextField, { CustomTextFieldProps } from "./CustomTextField";

interface InternalCustomNumberFieldProps {
  optional?: false;
  value: number;
  onChange?: (value: number) => void;
}

interface InternalOptionalCustomNumberFieldProps {
  optional: true;
  value?: number;
  onChange?: (value?: number) => void;
}

export type CustomNumberFieldProps = (
  | InternalCustomNumberFieldProps
  | InternalOptionalCustomNumberFieldProps
) &
  Omit<CustomTextFieldProps, "value" | "onChange">;

export default function CustomNumberField({
  value,
  onChange,
  optional,
  ...props
}: CustomNumberFieldProps) {
  const [internalValue, setInternalValue] = useState("");

  useEffect(() => setInternalValue(value?.toString() ?? ""), [value]);

  const onCustomChange = useCallback(
    (value: string) => {
      setInternalValue(value);
      if (value !== "") {
        onChange?.(+value);
      } else if (optional) {
        onChange?.(undefined);
      }
    },
    [onChange]
  );

  return (
    <CustomTextField
      type="number"
      value={internalValue}
      onChange={onCustomChange}
      {...props}
      inputProps={{ step: "0.01", ...props.inputProps }}
    />
  );
}
