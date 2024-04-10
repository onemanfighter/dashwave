/**
 * Author: Amit raikwar
 * Last updated: 04 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignUpCred } from "../../../service/supabase/supa_auth/actions/AuthSignUp";
import { signUp } from "../../../service/supabase/supa_auth/AuthApi";
import { showAlertWithTimeout } from "../../../data_store";
import { useDispatch } from "react-redux";
import { getSuccessAlertData } from "../../../provider";
import { LandingIntro, InputText, ErrorText } from "../../../components";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Prop types for the update form value function.
 */
interface UpdateProps {
  updateType: string;
  value: string;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * Component definition for the register screen.
 *
 * @returns The Register component.
 */
function Register() {
  const INITIAL_REGISTER_OBJ: SignUpCred = {
    fName: "",
    lName: "",
    password: "",
    email: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const signUpHandler = () => {
    showAlertWithTimeout(
      dispatch,
      getSuccessAlertData(
        "Sign up successfull! Please verify the email to login."
      ),
      3000
    );
    navigate("login");
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setErrorMessage("");

    if (registerObj.fName.trim() === "")
      return setErrorMessage("First name is required! (use any value)");
    if (registerObj.lName.trim() === "")
      return setErrorMessage("Last name is required! (use any value)");
    if (registerObj.email.trim() === "")
      return setErrorMessage("Email Id is required! (use any value)");
    if (registerObj.password.trim() === "")
      return setErrorMessage("Password is required! (use any value)");
    else {
      setLoading(true);
      // Show alert
      signUp(registerObj, signUpHandler, (error: string) => {
        setErrorMessage(error);
      });
      setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }: UpdateProps) => {
    setErrorMessage("");
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div
      className="h-screen bg-base-200 flex items-center"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundSize: "cover",
      }}
    >
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="glass rounded-l-2xl">
            <LandingIntro />
          </div>
          <div className="py-12 px-10 bg-primary-content">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Register
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="">
                <InputText
                  defaultValue={registerObj.fName}
                  updateType="fName"
                  containerStyle="mt-4"
                  labelTitle="First name"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={registerObj.lName}
                  updateType="lName"
                  containerStyle="mt-2"
                  labelTitle="Last name"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.email}
                  updateType="email"
                  containerStyle="mt-2"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={registerObj.password}
                  updateType="password"
                  containerStyle="mt-2"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>

              <ErrorText styleClass="mt-2">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
                }
              >
                Register
              </button>

              <div className="text-center mt-2">
                Already have an account?{" "}
                <NavLink to="/login">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Login
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
// Export the Register component.
export default Register;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
