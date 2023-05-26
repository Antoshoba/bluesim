import { Button, ButtonProps } from "@mui/material";

export default function SubmitButton(props: ButtonProps) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      {...props}
      sx={{ alignSelf: "center", minWidth: 421, paddingY: 1.5, ...props.sx }}
    >
      {props.children}
    </Button>
  );
}
