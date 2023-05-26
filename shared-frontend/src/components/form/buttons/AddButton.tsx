import AddIcon from "@mui/icons-material/Add";
import { ButtonProps } from "@mui/material";
import CustomButton from "./CustomButton";

export default function AddButton({ children, ...props }: ButtonProps) {
  return (
    <CustomButton {...props} startIcon={<AddIcon />}>
      {children}
    </CustomButton>
  );
}
