import { PresignedPost } from "@aws-sdk/s3-presigned-post";

export default class PresignedRequestDto {
  uploadUrl: string;
  publicUrl: string;
  body: { [key: string]: string };

  constructor(presignedPost: PresignedPost, publicUrl: string) {
    this.uploadUrl = presignedPost.url;
    this.publicUrl = publicUrl + "/" + presignedPost.fields["key"];
    this.body = presignedPost.fields;
  }
}
