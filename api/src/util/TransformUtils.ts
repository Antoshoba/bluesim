import { TransformFnParams } from "class-transformer";

export default class TransformUtils {
  static toStringArray = ({ value }: TransformFnParams) =>
    (value as string).split(",").map((item) => item.trim());
}
