import { RouterProvider } from "react-router-dom";
import privateRouter from "./routes/PrivateRoutes";
import publicRouter from "./routes/PublicRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../data_store/Store";

/**
 * Router declaration for the demo app.
 */
export default function RouterProviderComponent() {
  const state = useSelector((state: RootState) => state.auth.authToken);

  return (
    <RouterProvider router={state !== "" ? privateRouter : publicRouter} />
  );
}