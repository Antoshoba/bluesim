import { Document, Types } from "mongoose";

export default class TimeStampDocument extends Document<Types.ObjectId> {
  updatedAt: Date;
  createdAt: Date;
}
