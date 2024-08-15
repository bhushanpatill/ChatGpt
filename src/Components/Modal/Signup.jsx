import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './SignUp.css'
import axios from 'axios';

const Signup = ({signupsetModal}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    axios.post('http://127.0.0.1:8000/signup', { username, email, password })
      .then(response => {
        console.log(response.data);
        alert("Done")
      })
      .catch(error => {
        console.error(error);
        alert("Error")
      });
  };

  return (
    <>
    <div className = "CrossSign">
    <RiCloseLine
            color="#fff"
            size={40}
            // onClick={() => setToggleMenu(false)}
            onClick = {()=>signupsetModal(false)}
          />
    </div>
    <div className="SignUp-Container">
        <div className="SignUp-title">
            <h1>Sign Up</h1>
        </div>
        <div className = "SignUp-paragraph">
            <p>Please enter your login and password</p>
        </div>
        <div className = "SignUp-inputs">
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="Email" placeholder="Email " value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="Password" placeholder = "Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {/* <input type="Password" placeholder = "Retype Password"/> */}
        </div>
        <div className = "SignUp-Button" placeholder="Password:">
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default Signup
