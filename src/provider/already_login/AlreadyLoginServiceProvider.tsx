import { useDispatch } from "react-redux";
import { onSignOut } from "../../data_store/slice/AuthSlice";
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

  useEffect(() => {
    alreadySignedIn(signOutHandler);
  });
  return <div>{props.children}</div>;
}
