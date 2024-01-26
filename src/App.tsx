import { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { alreadySignedIn } from "./service/auth/AuthApi";
import { AuthData, onLogin, onSignOut } from "./data_store/slice/AuthSlice";
import { Theme } from "./data_store/slice/ThemeSlice";
import { NotificationData } from "./data_store/slice/NotificationSlice";

function App() {
  const dispatch = useDispatch();
  const theme: Theme = useSelector((state: any) => state.theme.theme);
  const notification: NotificationData = useSelector(
    (state: any) => state.notification
  );

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
    <div>
      <Outlet />
    </div>
  );
}

export default App;
