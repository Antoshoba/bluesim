import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import CloseIcon from "@mui/icons-material/Close";
import { Box, BoxProps, IconButton, styled } from "@mui/material";

const StyledBox = styled(Box)((props) => ({
  background: Colors.MAIN_BACKGROUND,
  padding: props.theme.spacing(3),
  width: "90vw",
  position: "relative",
  ...(!props.maxWidth && { maxWidth: "800px" }),
}));

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});

interface PopupContainerProps {
  onClose?: () => void;
}

export default function PopupContainer({
  onClose,
  children,
  ...props
}: PopupContainerProps & BoxProps) {
  return (
    <StyledBox {...props}>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      {children}
    </StyledBox>
  );
}
