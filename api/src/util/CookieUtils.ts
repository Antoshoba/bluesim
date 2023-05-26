import { CookieOptions } from "express";
import Environment from "../env/types/Environment";

export default class CookieUtils {
  static defaultOptions(env: Environment): CookieOptions {
    return {
      sameSite: "strict",
      maxAge: 34560000000, // 13 months as per Chrome spec - https://chromestatus.com/feature/4887741241229312
      secure: env !== Environment.LOCAL,
    };
  }
}
