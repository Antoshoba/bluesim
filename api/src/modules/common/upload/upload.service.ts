import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import awsConfig from "@j2w/api/env/aws.config";
import AppConstants from "@j2w/common/constants/AppConstants";
import PresignedRequestDto from "@j2w/common/dto/common/PresignedRequestDto";
import AppError from "@j2w/common/dto/error/app.error";
import AppException from "@j2w/common/dto/error/app.exception";
import RandomUtils from "@j2w/common/utils/RandomUtils";
import StringUtils from "@j2w/common/utils/StringUtils";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";

@Injectable()
export class UploadService {
  private s3Client: S3Client;

  private assetBucketName: string;

  constructor(
    @Inject(awsConfig.KEY)
    private aws: ConfigType<typeof awsConfig>
  ) {
    this.assetBucketName = aws.bucketName;
    this.s3Client = new S3Client({
      region: aws.bucketRegion,
    });
  }

  public async getPresignedUrl(path: string, name: string, type?: string) {
    this.checkBucketName();
    const key = RandomUtils.generateCode();
    const expiresInMinutes = 10;
    const request = await createPresignedPost(this.s3Client, {
      Bucket: this.assetBucketName,
      Key: `${path}/${key}/${StringUtils.encodeAsUri(name)}`,
      Expires: expiresInMinutes * 60,
      Conditions: [
        ["starts-with", "$Content-Type", type ?? ""],
        ["content-length-range", 0, AppConstants.ATTACHMENT_MAX_FILE_SIZE],
      ],
    });

    return new PresignedRequestDto(request, this.aws.publicUrl);
  }

  private checkBucketName() {
    if (!this.assetBucketName) {
      console.error("Please configure S3 asset bucket url in env file");
      throw new AppException(AppError.INTERNAL_ERROR);
    }
    const publicUrl = this.aws.publicUrl;
    if (!publicUrl) {
      console.error("Please configure asset public url in env file");
      throw new AppException(AppError.INTERNAL_ERROR);
    }
  }
}
