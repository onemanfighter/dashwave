/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useDispatch } from "react-redux";
import { onSignOut } from "store";
import { useEffect } from "react";
import { alreadySignedIn } from "../../service/supabase/supa_auth/AuthApi";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Interface definition for the already login service provider props.
 */
export interface IAlreadyLoginServiceProviderProps {
  children: React.ReactNode;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * The already login service provider component.
 * @param props The props for the already login service provider.
 * @returns The already login service provider component.
 */
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
