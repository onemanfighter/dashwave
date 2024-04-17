/**
 * Author: Amit raikwar
 * Last updated: 06 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RouterProviderComponent from "./router/RouterProvider";
import { AlreadyLoginServiceProvider } from "./provider";
import {
  AlertToastProvider,
  ImagePreviewModalProvider,
  NotificationProvider,
  ReduxServiceProvider,
  ThemeProvider,
} from "provider";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxServiceProvider>
      <ThemeProvider>
        <ImagePreviewModalProvider>
          <AlreadyLoginServiceProvider>
            <NotificationProvider>
              <AlertToastProvider>
                <RouterProviderComponent />
              </AlertToastProvider>
            </NotificationProvider>
          </AlreadyLoginServiceProvider>
        </ImagePreviewModalProvider>
      </ThemeProvider>
    </ReduxServiceProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
