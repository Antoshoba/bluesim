import Counter from "@j2w/common/schemas/common/counter.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export default class CounterService {
  constructor(
    @InjectModel(Counter.name) private counterModal: Model<Counter>
  ) {}

  async increament(field: string): Promise<number> {
    const counter = await this.counterModal.findOneAndUpdate(
      { field },
      { $inc: { sequence_value: 1 } },
      { new: true, upsert: true }
    );

    return counter.sequence_value;
  }
}
