import PresignedRequestDto from "@j2w/common/dto/common/PresignedRequestDto";
import CreateUserDto from "@j2w/common/dto/user/CreateUserDto";
import LoginRequestDto from "@j2w/common/dto/user/LoginRequestDto";
import UserDto from "@j2w/common/dto/user/UserDto";
import { handleApiError } from "@j2w/shared-frontend/utils/ApiUtils";
import StoreInstance from "../store/StoreInstance";
import UploadApi, { UploadMediaFn } from "./UploadApi";

export default class UserApi {
  public static me = async () => {
    try {
      const user = await StoreInstance.api().get<UserDto>("/auth/me");
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to get logged in user");
    }
  };

  public static createAdminUser = async (request: CreateUserDto) => {
    try {
      const user = await StoreInstance.api().post<UserDto>("/user", request);
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create new user");
    }
  };

  public static loginUser = async (request: LoginRequestDto) => {
    try {
      const user = await StoreInstance.api().post<UserDto>(
        "/auth/login",
        request
      );
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to login user");
    }
  };

  public static logoutUser = async () => {
    try {
      const user = await StoreInstance.api().post("/auth/logout");
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to logout user");
    }
  };

  public static uploadProfilePicture: UploadMediaFn = async (
    file,
    handleProgress
  ) => {
    return UploadApi.uploadMedia(
      file,
      UserApi.getPresignedUrlForNewMedia,
      handleProgress
    );
  };

  private static async getPresignedUrlForNewMedia(name: string) {
    try {
      const products = await StoreInstance.api().get<PresignedRequestDto>(
        `/user/media/presigned-url?name=${name}`
      );
      return products.data;
    } catch (e) {
      throw handleApiError(e, "Failed to get valid url for uploading file");
    }
  }
}
