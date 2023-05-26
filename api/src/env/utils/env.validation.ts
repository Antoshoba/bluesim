import { ClassConstructor, plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

export function validateEnv<T extends object>(
  config: Record<string, unknown>,
  cls: ClassConstructor<T>
) {
  const validatedConfig = plainToInstance(cls, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length > 0) {
    console.error(errors);
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
