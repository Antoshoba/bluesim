import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";

import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useCallback } from "react";

const ImageName = styled(Typography)({
  border: `1px solid ${Colors.LIGHT_BLUE}`,
  borderRadius: `0px 0px 3px 3px`,
  color: Colors.WHITE,
  alignItems: "center",
  padding: "10px",
  height: "50px",
  margin: "0px",
  textOverflow: "ellipsis",
  overflow: "clip",
});

const IconBox = styled(Box)({
  fill: "rgba(112, 144, 176, 1)",
  margin: "5",
  position: "absolute",
  top: "10px",
  left: "10px",
});

const CardContentNoPadding = styled(CardContent)({
  padding: 0,
  "&:last-child": {
    paddingBottom: 0,
  },
});

interface UploadImagePreviewProps {
  index: number;
  image: string;
  onRemove?: (index: number) => void;
}

export default function UploadImagePreview({
  index,
  image,
  onRemove,
}: UploadImagePreviewProps) {
  const fileName = image.split("/").pop();

  const handleRemove = useCallback(() => onRemove?.(index), [index, onRemove]);

  return (
    <Box width={200} height={210} position="relative" marginBottom="20px">
      <Card sx={{ boxShadow: "none" }}>
        <CardActionArea>
          <IconBox onClick={handleRemove}>
            <DeleteForeverIcon />
          </IconBox>
          <CardMedia
            component="img"
            height="160"
            image={image}
            alt="uploaded pic"
          />
          <CardContentNoPadding>
            <ImageName
              variant="h6"
              bgcolor={Colors.SECONDARY_BACKGROUND}
              color={Colors.WHITE}
            >
              {fileName}
            </ImageName>
          </CardContentNoPadding>
        </CardActionArea>
      </Card>
    </Box>
  );
}
