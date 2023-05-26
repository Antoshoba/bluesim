import { Box, BoxProps, Stack } from "@mui/material";
import { FormEvent, useCallback } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../buttons/CustomButton";
import FormRowHeader from "./FormRowHeader";
import SpacedForm from "./SpacedForm";

interface CommonFormLayoutProps {
  label: string;
  onSave?: () => void;
  isEdit: boolean;
}

export default function CommonFormLayout({
  label,
  onSave,
  isEdit,
  children,
  ...props
}: CommonFormLayoutProps & BoxProps) {
  const title = (isEdit ? "Update " : "Add ") + label;
  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onSave?.();
    },
    [onSave]
  );

  return (
    <Box padding={3} width="100%" maxWidth={1000} margin="auto" {...props}>
      <FormRowHeader mb={2} label={title} />
      <SpacedForm spacing={3} onSubmit={onSubmit}>
        {children}
        <Stack direction="row" spacing={2}>
          <CustomButton type="submit">{title}</CustomButton>
          <Link to={-1 as any}>
            <CustomButton variant="contained">Back</CustomButton>
          </Link>
        </Stack>
      </SpacedForm>
    </Box>
  );
}
