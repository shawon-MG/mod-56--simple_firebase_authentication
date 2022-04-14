import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from "./firebase.init";

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();/* etar jonno pop-up asbe */

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider) /*firebase theke imported etao*/
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error : ', error);
      })
  }
  return (
    <div className="App">

      <button onClick={handleGoogleSignIn} >Google Sign In</button>
      <h2>Name: {user.displayName}</h2>

    </div>
  );
}

export default App;
