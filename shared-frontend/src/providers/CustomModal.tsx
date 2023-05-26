import { Backdrop, Fade, Modal, ModalProps, styled } from "@mui/material";
import {
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  PropsWithChildren,
  useState,
} from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContainer = styled("div")({
  outline: "none",
  zIndex: 1,
});

const ModalComponent = forwardRef(
  (props: HTMLAttributes<HTMLDivElement>, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <ModalContainer ref={ref} {...props}>
        {props.children}
      </ModalContainer>
    );
  }
);
ModalComponent.displayName = "ModalComponent";

type ModifiedModalProps = Omit<ModalProps, "sx" | "open" | "children">;

interface CustomModalProps {
  modalProps?: ModifiedModalProps;
}

export default function CustomModal({
  modalProps,
  children,
}: PropsWithChildren<CustomModalProps>) {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      {...modalProps}
    >
      <Fade in={open}>
        <ModalComponent>{children}</ModalComponent>
      </Fade>
    </StyledModal>
  );
}
