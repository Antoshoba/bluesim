import { IsDefined, IsPhoneNumber, IsString, MinLength } from "class-validator";

export default class CreateUserDto {
  @IsDefined({ message: "Please provide a name" })
  @IsString({ message: "Please provide a valid name" })
  name: string;

  @IsDefined({ message: "Please provide an phone number" })
  @IsPhoneNumber("IN", { message: "Please provide valid phone number" })
  @MinLength(10, {
    message: "Please provide valid phone number",
  })
  phone: string;

  @IsDefined({ message: "Please provide password" })
  @MinLength(8, {
    message: "Please provide a password with atleast 8 characters",
  })
  password: string;
}
