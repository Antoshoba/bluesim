import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import { useCallback, useState } from "react";
import CustomTextField, { CustomTextFieldProps } from "./CustomTextField";

export default function CustomPasswordField(props: CustomTextFieldProps) {
  const [visible, setVisible] = useState(false);

  const showPassword = useCallback(() => setVisible(true), []);
  const hidePassword = useCallback(() => setVisible(false), []);

  return (
    <CustomTextField
      {...props}
      type={visible ? "text" : "password"}
      sx={{
        "& .MuiInputBase-root": {
          paddingRight: 0,
        },
        "& .MuiInputAdornment-positionEnd": {
          position: "absolute",
          right: 0,
        },
      }}
      endIcon={
        <IconButton
          aria-label="toggle password visibility"
          onMouseDown={showPassword}
          onMouseUp={hidePassword}
        >
          {visible ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      }
    />
  );
}
