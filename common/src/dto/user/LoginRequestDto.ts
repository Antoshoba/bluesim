import { IsDefined, IsPhoneNumber, MinLength } from "class-validator";

export default class LoginRequestDto {
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
