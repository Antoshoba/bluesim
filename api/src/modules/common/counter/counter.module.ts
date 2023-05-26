import Counter, {
  CounterSchema,
} from "@j2w/common/schemas/common/counter.schema";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import CounterService from "./counter.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Counter.name, schema: CounterSchema }]),
  ],
  providers: [CounterService],
  exports: [CounterService],
})
export default class CounterModule {}
