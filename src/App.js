import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import app from "./firebase.init";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const auth = getAuth(app);

function App() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  }

  const handleRegistration = event => {
    setRegister(event.target.checked);
  }

  const handleSubmit = (event) => {
    if (register) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.error(error);
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          emailVarification();
        })
        .catch(error => {
          console.error(error);
        })
    }
    console.log('SUBMITTED: ', email, password);
    event.preventDefault();
  }

  const emailVarification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Varification Sent');
      })
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Email Sent');
      })
  }

  return (
    <div>
      <div className="registration w-50 mx-auto">
        <h2 className='text-primary  mt-4'> Please {register ? 'Log-In' : 'Register'}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegistration} type="checkbox" label="Registered Already ?" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {register ? 'Log-In' : 'Register'}
          </Button>
          <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

/*--------- Module: 57------- */