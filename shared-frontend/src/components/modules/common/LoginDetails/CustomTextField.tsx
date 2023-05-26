import {
  Box,
  BoxProps,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import {
  ChangeEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import CustomLabel from "./CustomLabel";

interface InternalCustomTextFieldProps {
  onChange?: (value: string) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  containerProps?: BoxProps;
  label?: string;
}

export type CustomTextFieldProps = InternalCustomTextFieldProps &
  Omit<TextFieldProps, "onChange">;

export default function CustomTextField({
  label,
  onChange,
  startIcon,
  endIcon,
  autoFocus,
  required = true,
  containerProps,
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
    <Box width="100%" {...containerProps}>
      <CustomLabel label={label} required />
      <TextField
        fullWidth
        required={required}
        {...props}
        inputRef={inputRef}
        value={props.value ?? ""}
        type={props.type ?? "text"}
        InputProps={InputProps}
        sx={{
          borderRadius: "38px",
          minWidth: 175,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: Colors.LOGIN_BUTTON,
          },
          "& .MuiFormHelperText-root": {
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0.75,
          },
          ...props.sx,
        }}
        onChange={onTextChange}
      />
    </Box>
  );
}
