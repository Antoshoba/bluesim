import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import AddIcon from "@mui/icons-material/Add";
import { ButtonProps, styled } from "@mui/material";
import CustomButton from "../../form/buttons/CustomButton";

const StyledButton = styled(CustomButton)(({ theme }) => ({
  padding: theme.spacing(1),
  fontWeight: 500,

  ".MuiTypography-root": {
    borderBottom: `1px solid ${Colors.ADDNEW_COLOR}`,
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontSize: theme.typography.caption.fontSize,
  },
  ".MuiButton-endIcon": {
    // marginLeft: theme.spacing(0.5),
    ".MuiSvgIcon-root": {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}));

interface StartIconButtonProps {
  label: string;
}
export default function StartIconButon(
  { label }: StartIconButtonProps,
  props: ButtonProps
) {
  return (
    <StyledButton
      {...props}
      variant="text"
      color={Colors.ADDNEW_COLOR}
      // startIcon={<AddIcon fontSize="inherit" />}
    >
      <AddIcon fontSize="inherit" />
      {label}
    </StyledButton>
  );
}
