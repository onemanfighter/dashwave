import { useState } from "react";
import { NavLink } from "react-router-dom";
import ErrorText from "../../../components/text/ErrorText";
import InputText, { InputType } from "../../../components/text/InputText";
import LandingIntro from "../../../components/landing_intro/LandingIntro";
import { forgotPassword } from "../../../service/supabase/supa_auth/AuthApi";
import { validateEmail } from "../../../util/input/Input";

interface UpdateProps {
  updateType: string;
  value: string;
}

interface RegisterObjType {
  emailId: string;
}

function ForgotPassword() {
  const INITIAL_USER_OBJ: RegisterObjType = {
    emailId: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [userObj, setUserObj] = useState(INITIAL_USER_OBJ);

  const forgotPasswordHandler = () => {
    setLoading(false);
    setLinkSent(true);
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setErrorMessage("");

    if (userObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required! (use any value)");
    else if (!validateEmail(userObj.emailId)) {
      return setErrorMessage("Email Id is not valid!");
    } else {
      setLoading(true);
      forgotPassword(
        userObj.emailId,
        forgotPasswordHandler,
        (error: string) => {
          setErrorMessage(error);
        }
      );
      // Call API to send password reset link
    }
  };

  const updateFormValue = ({ updateType, value }: UpdateProps) => {
    setErrorMessage("");
    setUserObj({ ...userObj, [updateType]: value });
  };

  return (
    <div
      className="min-h-screen bg-base-200 flex items-center"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundSize: "cover",
      }}
    >
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1 rounded-xl">
          <div className=" bg-base-content">
            <LandingIntro />
          </div>
          <div className="py-24 px-10 bg-primary-content">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Forgot Password
            </h2>

            {linkSent && (
              <>
                <p className="my-4 text-xl font-bold text-center">Link Sent</p>
                <p className="mt-4 mb-8 font-semibold text-center">
                  Check your email to reset password
                </p>
                <div className="text-center mt-4">
                  <NavLink to="/login">
                    <button className="btn btn-block btn-primary ">
                      Login
                    </button>
                  </NavLink>
                </div>
              </>
            )}

            {!linkSent && (
              <>
                <p className="my-8 font-semibold text-center">
                  We will send password reset link on your email Id
                </p>
                <form onSubmit={(e) => submitForm(e)}>
                  <div className="mb-4">
                    <InputText
                      type={InputType.EMAIL}
                      defaultValue={userObj.emailId}
                      updateType="emailId"
                      containerStyle="mt-4"
                      labelTitle="Email Id"
                      updateFormValue={updateFormValue}
                    />
                  </div>

                  <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                  <button
                    type="submit"
                    className={
                      "btn mt-2 w-full btn-primary" +
                      (loading ? " loading" : "")
                    }
                  >
                    Send Reset Link
                  </button>

                  <div className="text-center mt-4">
                    Don't have an account yet?{" "}
                    <NavLink to="/register">
                      <button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                        Register
                      </button>
                    </NavLink>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
