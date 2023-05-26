import PresignedRequestDto from "@j2w/common/dto/common/PresignedRequestDto";
import axios, { RawAxiosRequestConfig } from "axios";

export type UploadMediaFn = (
  file: File,
  handleProgress?: (progress: number) => void
) => Promise<string>;

export default class UploadApi {
  public static async uploadMedia(
    file: File,
    getPreSignedUrl: (name: string) => Promise<PresignedRequestDto>,
    handleProgress?: (progress: number) => void
  ) {
    handleProgress?.(0.5); // Indicate start of upload
    const presignedRequest = await getPreSignedUrl(file.name);
    const url = await UploadApi.uploadFile(
      presignedRequest,
      file,
      handleProgress
    );
    return url;
  }

  public static async uploadFile(
    presignedRequest: PresignedRequestDto,
    file: File | Blob,
    handleProgress?: (progress: number) => void
  ) {
    const formData = new FormData();
    Object.keys(presignedRequest.body).forEach((key) => {
      formData.append(key, presignedRequest.body[key]);
    });
    formData.append("Content-Type", file.type);
    formData.append("file", file);
    const config: RawAxiosRequestConfig<FormData> = {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = progressEvent.total
          ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
          : 0;
        handleProgress?.(percentCompleted);
      },
    };
    await axios.post(presignedRequest.uploadUrl, formData, config);
    return presignedRequest.publicUrl;
  }
}
