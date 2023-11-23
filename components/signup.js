import {faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/signup.module.css'; 
import { useState } from "react";

function Signup() {
    const [firstname, setFirstname] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 


   const  handleSignUpForm = () => {  
    fetch("http://localhost:3000/users/signup",{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            firstname:firstname, 
            username:username, 
            password:password
        })
    })
    .then( res => res.json())
    .then( data => {
        if(data.result)
        {
            window.location.href = "/home"; 
        }
    })
   }

  return (
    <div className={styles.signup}>
          <div className={styles.signupModal}>
                <div className="croix">
                        X
                </div>
                <FontAwesomeIcon   icon={faTwitter}   />
                <p>Create your Hackatweet account</p>
                <div className="inputContainer">
                    <input type="text" placeholder="firstname" onChange={ e => setFirstname(e.target.value)} />
                    <input type="text"  placeholder="username" onChange={ e => setUsername(e.target.value)}  />
                    <input type="text"  placeholder="password" onChange={ e => setPassword(e.target.value)}  />
                </div>
                <button onClick={() => handleSignUpForm()}>Sign Up</button>
          </div>
    </div>
  );
}

export default Signup;
