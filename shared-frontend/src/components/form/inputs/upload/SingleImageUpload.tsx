import { UploadMediaFn } from "@j2w/shared-frontend/api/UploadApi";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { Box } from "@mui/material";
import { useCallback } from "react";
import CustomLabel from "../CustomLabel";
import ImageUploadForm from "./ImageUploadForm";
import UploadImagePreview from "./UploadImagePreview";

interface SingleImageUploadProps {
  label: string;
  url: string;
  setUrl: (url: string) => void;
  uploadApi: UploadMediaFn;
}

export default function SingleImageUpload({
  label,
  url,
  setUrl,
  uploadApi,
}: SingleImageUploadProps) {
  const onRemoveImage = useCallback(() => setUrl(""), [setUrl]);

  const onAddFiles = useCallback(
    (files: string[]) => {
      if (files.length < 1) {
        return;
      }
      setUrl(files[0]);
    },
    [setUrl]
  );

  return (
    <Box>
      <CustomLabel mb={0.5} color={Colors.PRIMARY_LIGHT}>
        {label}
      </CustomLabel>
      {url ? (
        <UploadImagePreview image={url} index={0} onRemove={onRemoveImage} />
      ) : (
        <ImageUploadForm
          multiple={false}
          uploadApi={uploadApi}
          onAddFiles={onAddFiles}
        />
      )}
    </Box>
  );
}
