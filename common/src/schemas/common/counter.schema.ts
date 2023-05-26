import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

export type CounterDocument = Counter & Document;

@Schema({ timestamps: true })
export default class Counter {
  @Prop({ required: true })
  field: string;

  @Prop({ default: 0 })
  sequence_value: number;
}

const CounterSchema = SchemaFactory.createForClass(Counter);

CounterSchema.loadClass(Counter);

export { CounterSchema };
