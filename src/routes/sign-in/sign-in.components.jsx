import {useEffect} from "react";
import {getRedirectResult} from "firebase/auth";
import SingUp from "../../components/sign-up/sign-up.component";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserElementFromAuth,
} from "../../utils/firebase/firebase.utils";

const SingIn = () => {
  useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserElementFromAuth(response.user);
      }
    },
    []
  );

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserElementFromAuth(user);
  };

  return (
    <div>
      <h1>Sing In site</h1>
      <button onClick={logGoogleUser}>Sing in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sing in with google redirect
      </button>
      <SingUp />
    </div>
  );
};
export default SingIn;
