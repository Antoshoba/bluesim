import { ThemeProvider } from "@emotion/react";
import setReactApi from "@j2w/shared-frontend/components/ReactApi";
import ReactToastComponent, {
  setReactToast,
} from "@j2w/shared-frontend/components/ReactToastComponent";
import CustomLocalizationProvider from "@j2w/shared-frontend/providers/CustomLocalizationProvider";
import ModalProvider from "@j2w/shared-frontend/providers/ModalProvider";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import HrbpAuthProvier from "./providers/HrbpAuthProvider";
import AppRouter from "./routes/AppRouter";
import { store } from "./store";
import DefaultTheme from "./utils/styles/DefaultTheme";

setReactApi();
setReactToast();

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Provider store={store}>
        <HrbpAuthProvier>
          <ModalProvider>
            <CustomLocalizationProvider>
              <AppRouter />
              <ReactToastComponent />
            </CustomLocalizationProvider>
          </ModalProvider>
        </HrbpAuthProvier>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
