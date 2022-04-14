import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from "./firebase.init";

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();/* etar jonno pop-up asbe */
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider) /*firebase theke imported etao*/
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error : ', error);
      })
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.error(error);
      })
  };

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
        console.log("error")
      })
  }
  return (
    <div className="App">

      <button onClick={handleGoogleSignIn} >Google Sign In</button>
      <button onClick={handleGoogleSignOut}>Google Sign Out</button> <br />
      <button onClick={handleGithubSignIn}>GitHub Sign In</button>
      <h2>Name: {user.displayName}</h2>
      <h4>Email: {user.email}</h4>
      <h4>UniqueID: {user.uid}</h4>

    </div>
  );
}

export default App;
