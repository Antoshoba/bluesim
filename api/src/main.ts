import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./middlewares/http-exception.filter";
import MorganMiddleware from "./middlewares/MorganMiddleware";
import AppUtils from "./util/AppUtils";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  AppUtils.enbaleCorsAndCsrf(app);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  const { port, env } = AppUtils.getConfigValues(app);
  app.use(MorganMiddleware(env));
  await app.listen(port);
}

void bootstrap();
