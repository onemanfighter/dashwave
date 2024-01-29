import { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { alreadySignedIn } from "./service/supabase/supa_auth/AuthApi";
import { AuthData, onLogin, onSignOut } from "./data_store/slice/AuthSlice";
import { Theme } from "./data_store/slice/ThemeSlice";
import ToastComponent from "./components/toast/ToastComponent";
import { RootState } from "./data_store/Store";

function App() {
  const dispatch = useDispatch();
  const theme: Theme = useSelector((state: any) => state.theme.theme);
  const toastAlert = useSelector((state: RootState) => state.toastAlert);

  const signOutHandler = () => {
    dispatch(onSignOut());
  };

  const signInHandler = (authData: AuthData) => {
    dispatch(onLogin(authData));
  };

  useEffect(() => {
    alreadySignedIn(signInHandler, signOutHandler);
  });
  return (
    <div data-theme={theme}>
      <ToastComponent
        children={toastAlert.children}
        xposition={toastAlert.xPosition}
        yposition={toastAlert.yPosition}
      />
      <Outlet />
    </div>
  );
}

export default App;
