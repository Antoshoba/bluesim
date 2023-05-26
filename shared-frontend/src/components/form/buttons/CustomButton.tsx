import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { Button, ButtonProps, styled, Typography } from "@mui/material";

interface StyledButtonProps {
  textColor?: string;
  bgColor?: string;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "bgColor" && prop !== "textColor",
})<StyledButtonProps>(({ bgColor, textColor }) => ({
  boxShadow: `0px 2px 5px ${Colors.SHADOW}`,
  borderRadius: "6px",
  color: textColor,
  "&, &:hover": {
    background: bgColor,
    border: "none",
  },
  "&.MuiButton-outlinedPrimary": {
    border: `1px solid ${textColor ?? Colors.PRIMARY_DARK}`,
    boxShadow: "none",
  },
  "&.MuiButton-sizeLarge": {
    padding: "14px 28px",
  },
}));

interface CustomButtonProps {
  color?: string;
  bgColor?: string;
}
export default function CustomButton({
  color,
  bgColor,
  ...props
}: Omit<ButtonProps, "color"> & CustomButtonProps) {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={color}
      variant="outlined"
      {...props}
    >
      <Typography fontStyle="normal" fontWeight="400" fontSize="inherit">
        {props.children}
      </Typography>
    </StyledButton>
  );
}
