import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ButtonProps, styled } from "@mui/material";
import CustomButton from "../../form/buttons/CustomButton";

const StyledButton = styled(CustomButton)(({ theme }) => ({
  padding: theme.spacing(1),
  ".MuiTypography-root": {
    borderBottom: `1px solid ${Colors.SECONDARY}`,
    lineHeight: 1,
    whiteSpace: "nowrap",
    fontSize: theme.typography.caption.fontSize,
  },
  ".MuiButton-endIcon": {
    marginLeft: theme.spacing(0.5),
    ".MuiSvgIcon-root": {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}));

export default function MoreDetailsButon(props: ButtonProps) {
  return (
    <StyledButton
      {...props}
      variant="text"
      color={Colors.SECONDARY}
      endIcon={<ArrowForwardIcon fontSize="inherit" />}
    >
      More Details
    </StyledButton>
  );
}
