import moment, { DurationInputArg1, unitOfTime } from "moment";

export default class DateUtils {
  static formatDate(date: Date, format: string) {
    return moment(date).format(format);
  }

  static formatDateString(date: string, format: string) {
    if (!date) {
      return "";
    }
    return DateUtils.formatDate(new Date(date), format);
  }

  static add(
    date: Date,
    amount: DurationInputArg1,
    value: unitOfTime.DurationConstructor
  ) {
    return moment(date).add(amount, value).toDate();
  }

  static isFutureDate(date: string | Date) {
    return moment(date).isAfter(moment());
  }
}
