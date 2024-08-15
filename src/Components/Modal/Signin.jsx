import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './Signin.css'
import axios from 'axios'


const Signin = ({signinsetModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    axios.post('http://127.0.0.1:8000/signin', { email, password })
      .then(response => {
        console.log(response.data);
        alert("Sign in done")
      })
      .catch(error => {
        console.error(error);
        alert("Sign in error")
      });
  }

  return (
    <>
    <div className = "CrossSignIn">
    <RiCloseLine
            color="#fff"
            size={40}
            // onClick={() => setToggleMenu(false)}
            onClick = {()=>signinsetModal(false)}
          />
    </div>
    <div className="SignIn-Container">
        <div className="SignIn-title">
            <h1>Sign In</h1>
        </div>
        <div className = "SignIn-paragraph">
            <p>Please enter your login and password</p>
        </div>
        <div className = "SignIn-inputs">
            <input type="Email" placeholder="Email " value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className = "SignIn-Button" placeholder="Password:">
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    </div>
    </>
  )
}

export default Signin
