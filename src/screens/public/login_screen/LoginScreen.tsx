/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ErrorText,
  InputText,
  InputType,
  LandingIntro,
} from "../../../components";

import { LoginCred } from "../../../service/supabase/supa_auth/actions/AuthSignIn";
import { signIn } from "../../../service/supabase/supa_auth/AuthApi";
import { AuthData, onLogin } from "../../../data_store/slice/AuthSlice";
import { useDispatch } from "react-redux";
import { validatePassword } from "../../../util/input/Input";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Proptypes for the update form value function.
 */
interface UpdateProps {
  updateType: string;
  value: string;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the login screen.
 *
 * @returns The Login component.
 */
function Login() {
  const INITIAL_LOGIN_OBJ: LoginCred = {
    password: "",
    email: "",
  };

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState<LoginCred>(INITIAL_LOGIN_OBJ);

  const signInHandler = (authData: AuthData) => {
    dispatch(onLogin(authData));
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    if (loginObj.email.trim() === "")
      return setErrorMessage(
        "Email Id is required! Please enter a valid email id"
      );
    if (loginObj.password.trim() === "")
      return setErrorMessage(
        "Password is required! Please enter a valid password"
      );
    else if (!validatePassword(loginObj.password)) {
      return setErrorMessage(
        "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit," +
          "and one special character. The password must be eight characters or longer."
      );
    } else {
      setLoading(true);
      signIn(loginObj, signInHandler, (error: string) => {
        console.log("error", error);
        setErrorMessage(error);
      });
      setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }: UpdateProps) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div
      className="h-screen bg-base-200 flex items-center"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundSize: "cover",
      }}
    >
      <div className="card mx-auto w-full max-w-5xl shadow-xl ">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="glass rounded-l-2xl">
            <LandingIntro />
          </div>
          <div className="py-24 px-10 bg-primary-content">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  type={InputType.EMAIL}
                  defaultValue={loginObj.email}
                  updateType="email"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                  errorState={errorMessage !== ""}
                />

                <InputText
                  defaultValue={loginObj.password}
                  type={InputType.PASSWORD}
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                  errorState={errorMessage !== ""}
                />
              </div>

              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={`btn mt-2 w-full btn-primary + ${
                  loading ? " loading" : ""
                }`}
              >
                Login
              </button>

              <div className="text-center mt-4">
                Don't have an account yet?{" "}
                <NavLink to="/signup">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the Login component.
export default Login;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
