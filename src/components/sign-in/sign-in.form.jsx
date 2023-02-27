import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import "./sing-in.style.scss";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserElementFromAuth,
  singInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const singInGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await singInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("user doesn't exist");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className="sing-in-container">
      <h2>Login with your account</h2>
      <span className="title-singup">Login with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="btn-container">
          <Button type="submit">Login</Button>
          <Button type="button" buttonType="google" onClick={singInGoogleUser}>
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;