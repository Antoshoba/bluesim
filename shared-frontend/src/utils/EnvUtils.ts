export default class EnvUtils {
  static apiUrl = process.env.REACT_APP_API_URL ?? "";
  static csrfCookieName =
    process.env.REACT_APP_CSRF_COOKIE_NAME ?? "CSRF-Token";
}
