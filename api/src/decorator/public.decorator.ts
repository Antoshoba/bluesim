import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "isPublic";

const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);

export default IsPublic;
