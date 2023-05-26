import {
  IconButton,
  LinearProgress,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const UploadProgressbar = styled(LinearProgress)({
  width: "100%",
  maxWidth: "600px",
  flexGrow: 1,
  backgroundColor: Colors.PROGESSBAR_BACKGROUND,
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: Colors.LIGHT_BLUE,
  },
});
const ProgressStack = styled(Stack)({
  background: Colors.MAIN_BACKGROUND,
  borderRadius: "3px",
  padding: "5px",
  height: "fit-content",
  alignItems: "center",
});

const UploadFileName = styled(Typography)({
  marginTop: "10px",
  width: "300px",
});

interface ImageUploadProgressProps {
  file: File;
  progress: number;
}

export default function ImageUploadProgress({
  file,
  progress,
}: ImageUploadProgressProps) {
  return (
    <ProgressStack direction="row" spacing={1}>
      <IconButton>
        <InsertDriveFileIcon />
      </IconButton>
      <UploadFileName variant="body1">{file.name}</UploadFileName>
      <UploadProgressbar variant="determinate" value={progress} />
    </ProgressStack>
  );
}
