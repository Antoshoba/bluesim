import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useReducer,
} from "react";

import { ModalProps } from "@mui/material";
import CustomModal from "./CustomModal";

let popupId = 1;

type StyledModalProps = Omit<ModalProps, "sx" | "open" | "children">;

type PopupIdentifier = {
  [key: number]: ReactNode;
};

export interface ModalContextProps {
  open: (component: JSX.Element, modalProps?: StyledModalProps) => number;
  close: (id?: number) => void;
  popup: ReactNode;
}

export const ModalContext = createContext<ModalContextProps>({
  open: () => 0,
  close: () => null,
  popup: <></>,
});

let popups: PopupIdentifier = {};

export default function ModalProvider({ children }: PropsWithChildren<{}>) {
  const [, rerender] = useReducer((x) => x + 1, 0);

  const onClose = useCallback(() => {
    popups = {};
    rerender();
  }, []);

  const onOpen = useCallback(
    (comp: JSX.Element, modalProps?: StyledModalProps) => {
      popupId++;
      const popup = (
        <CustomModal modalProps={modalProps} key={popupId}>
          {comp}
        </CustomModal>
      );
      popups[popupId] = popup;
      rerender();
      return popupId;
    },
    []
  );

  return (
    <ModalContext.Provider
      value={{
        open: onOpen,
        close: onClose,
        popup: <>{Object.values(popups)}</>,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
