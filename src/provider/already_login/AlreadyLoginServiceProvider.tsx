import { useDispatch } from "react-redux";
import { AuthData, onLogin, onSignOut } from "../../data_store/slice/AuthSlice";
import { useEffect } from "react";
import { alreadySignedIn } from "../../service/supabase/supa_auth/AuthApi";

export interface IAlreadyLoginServiceProviderProps {
  children: React.ReactNode;
}

export default function AlreadyLoginServiceProvider(
  props: IAlreadyLoginServiceProviderProps
) {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(onSignOut());
  };

  const signInHandler = (authData: AuthData) => {
    dispatch(onLogin(authData));
  };

  useEffect(() => {
    alreadySignedIn(signInHandler, signOutHandler);
  });
  return <div>{props.children}</div>;
}
