import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import {
  ChangeEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";

interface InternalCustomTextFieldProps {
  onChange?: (value: string) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type CustomTextFieldProps = InternalCustomTextFieldProps &
  Omit<TextFieldProps, "onChange">;

export default function CustomTextField({
  onChange,
  startIcon,
  endIcon,
  autoFocus,
  ...props
}: CustomTextFieldProps) {
  const inputRef = useRef<HTMLDivElement>(null);

  // Workaround due to https://github.com/mui/material-ui/issues/33004
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [autoFocus, inputRef]);

  const onTextChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  const InputProps = useMemo(
    () => ({
      ...props.InputProps,
      startAdornment: startIcon ? (
        <InputAdornment position="start">{startIcon}</InputAdornment>
      ) : (
        props.InputProps?.startAdornment
      ),
      endAdornment: endIcon ? (
        <InputAdornment position="end">{endIcon}</InputAdornment>
      ) : (
        props.InputProps?.endAdornment
      ),
    }),
    [startIcon, endIcon, props.InputProps]
  );

  return (
    <TextField
      fullWidth
      required
      {...props}
      inputRef={inputRef}
      value={props.value ?? ""}
      type={props.type ?? "text"}
      InputProps={InputProps}
      sx={{
        borderRadius: 3,
        minWidth: 175,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: Colors.PRIMARY,
        },
        ...props.sx,
      }}
      onChange={onTextChange}
    />
  );
}
