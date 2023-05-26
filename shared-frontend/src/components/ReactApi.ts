import Cookies from "js-cookie";
import StoreInstance from "../store/StoreInstance";
import Api from "../utils/Api";
import EnvUtils from "../utils/EnvUtils";

const setReactApi = () =>
  StoreInstance.setApi(
    Api(
      EnvUtils.apiUrl,
      EnvUtils.csrfCookieName,
      async () => Cookies.get(EnvUtils.csrfCookieName) ?? ""
    )
  );

export default setReactApi;
