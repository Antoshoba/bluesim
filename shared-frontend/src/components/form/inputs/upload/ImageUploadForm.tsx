import { Stack, styled, Typography } from "@mui/material";

import ImageUploadProgress from "./ImageUploadProgress";

import { UploadMediaFn } from "@j2w/shared-frontend/api/UploadApi";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import PublishIcon from "@mui/icons-material/Publish";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import CustomButton from "../../buttons/CustomButton";

const ImageUploadContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(5, 3),
  border: `1px dashed ${Colors.PRIMARY_DARK}`,
  alignItems: "center",
  "&:hover": {
    borderStyle: "solid",
  },
}));

interface ImageUploadFormProps {
  onAddFiles: (files: string[]) => void;
  uploadApi: UploadMediaFn;
  multiple?: boolean;
}

export default function ImageUploadForm({
  onAddFiles,
  uploadApi,
  multiple = false,
}: ImageUploadFormProps) {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const [listOfProgress, setListOfProgress] = useState<number>(20);

  const updateProgress = (progressvalue: number) => {
    setListOfProgress(progressvalue);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (!multiple) {
        acceptedFiles = acceptedFiles.slice(0, 1);
      }
      setDroppedFiles(acceptedFiles);
      Promise.all(acceptedFiles.map((file) => uploadApi(file, updateProgress)))
        .then(onAddFiles)
        .finally(() => setDroppedFiles([]));
    },
  });

  return (
    <Stack direction="row" flexWrap="wrap" spacing={2}>
      <ImageUploadContainer
        direction="row"
        spacing={1}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <CustomButton variant="outlined" startIcon={<PublishIcon />}>
          UPLOAD FILE
        </CustomButton>
        &nbsp;&nbsp;
        <Typography variant="body2">Or drag & drop your files here</Typography>
      </ImageUploadContainer>
      {droppedFiles.map((file) => (
        <ImageUploadProgress
          key={file.name}
          file={file}
          progress={listOfProgress}
        />
      ))}
    </Stack>
  );
}
