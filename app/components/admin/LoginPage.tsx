import { Login, LoginForm } from "react-admin";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase/compat/app";
import { firebaseApp } from "@/firebaseConfig";
import * as auth from 'firebase/auth'
import ForgotPasswordButton from './CustomForgotPassword'

const authorization = auth.getAuth(firebaseApp)
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
    auth.FacebookAuthProvider.PROVIDER_ID
  ],
  // Optional callbacks in order to get Access Token from Google,Facebook,... etc
  /* callbacks: {
    signInSuccessWithAuthResult: (result: any) => {
      const credential = result.credential;
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const accessToken = credential.accessToken;
      console.log({result, user, accessToken});
      return true
    }
  } */
};

const SignInScreen = () => <StyledFirebaseAuth 
  firebaseAuth={authorization}
  uiConfig={uiConfig}
/>;

const CustomLoginForm = (props:any) => (
  <div>
    <LoginForm {...props} />
    <SignInScreen />
    <ForgotPasswordButton {...props} />
  </div>
);

const LoginPage = (props:any) => (
  <Login {...props}>
    <CustomLoginForm {...props}/>
  </Login>
);

export default LoginPage;