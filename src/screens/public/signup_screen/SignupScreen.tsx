import { useState } from "react";
import { NavLink } from "react-router-dom";
import LandingIntro from "../../../components/landing_intro/LandingIntro";
import InputText from "../../../components/text/InputText";
import ErrorText from "../../../components/text/ErrorText";
import { SignUpCred } from "../../../service/firebase/fireauth/actions/AuthSignUp";
import { useDispatch } from "react-redux";
import { signUp } from "../../../service/firebase/fireauth/AuthApi";
import { AuthData, onSignUp } from "../../../data_store/slice/AuthSlice";

interface UpdateProps {
  updateType: string;
  value: string;
}

function Register() {
  const INITIAL_REGISTER_OBJ: SignUpCred = {
    fName: "",
    lName: "",
    password: "",
    email: "",
  };

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const signUpHandler = (authData: AuthData) => {
    dispatch(onSignUp(authData));
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
      signUp(registerObj, signUpHandler, (error: string) => {
        setErrorMessage(error);
      });
      // Call API to check user credentials and save token in localstorage
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
      <div className="card mx-auto w-full max-w-5xl  shadow-xl ">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className=" bg-base-content">
            <LandingIntro />
          </div>
          <div className="py-24 px-10 bg-primary-content">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Register
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
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
                  containerStyle="mt-4"
                  labelTitle="Last name"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.email}
                  updateType="email"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={registerObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
                }
              >
                Register
              </button>

              <div className="text-center mt-4">
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

export default Register;
