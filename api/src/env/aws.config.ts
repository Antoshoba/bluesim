import { registerAs } from "@nestjs/config";
import { IsString, IsUrl } from "class-validator";
import EnvPath from "./types/EnvPath";
import { validateEnv } from "./utils/env.validation";

class AwsConfigEnvDto {
  @IsString({ message: "Please provide a valid aws access key id in env file" })
  AWS_ACCESS_KEY_ID: string;

  @IsString({ message: "Please provide a valid aws access secret in env file" })
  AWS_SECRET_ACCESS_KEY: string;

  @IsString({ message: "Please provide a valid aws bucket region in env file" })
  AWS_ASSET_BUCKET_REGION: string;

  @IsString({ message: "Please provide a valid aws bucket name in env file" })
  AWS_ASSET_BUCKET_NAME: string;

  @IsUrl({}, { message: "Please provide a valid aws public url in env file" })
  ASSET_PUBLIC_URL: string;
}

export interface AwsConfigDto {
  bucketName: string;
  bucketRegion: string;
  publicUrl: string;
}

export default registerAs(EnvPath.AWS, (): AwsConfigDto => {
  const env = validateEnv(process.env, AwsConfigEnvDto);
  return {
    bucketName: env.AWS_ASSET_BUCKET_NAME,
    bucketRegion: env.AWS_ASSET_BUCKET_REGION,
    publicUrl: env.ASSET_PUBLIC_URL,
  };
});
