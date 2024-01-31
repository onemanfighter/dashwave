import "./App.css";
import { Outlet } from "react-router-dom";
import ToastProvider from "./provider/toast_provider/ToastProvider";
import ThemeProvider from "./provider/theme_provider/ThemeProvider";
import NotificationProvider from "./provider/notification_provider/NotificationProvider";
import AlreadyLoginServiceProvider from "./provider/already_login/AlreadyLoginServiceProvider";

/**
 * Component definition for the app component.
 * @returns The app component.
 */
function App() {
  return (
    <ThemeProvider>
      <AlreadyLoginServiceProvider>
        <NotificationProvider>
          <ToastProvider>
            <Outlet />
          </ToastProvider>
        </NotificationProvider>
      </AlreadyLoginServiceProvider>
    </ThemeProvider>
  );
}

export default App;
