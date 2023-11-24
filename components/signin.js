import {faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/signin.module.css'; 
import { useState } from "react";

function Signin(props) {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSinInForm = () => {
        fetch("http://localhost:3000/users/signin",{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
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
        setPassword(""); 
        setUsername("")
    })
    }

  return (
    <div className={styles.signin}>
          <div className={styles.signinModal}>
                <div className={styles.close} onClick={() => props.closeSignInModal()}>
                        x
                </div>
                <FontAwesomeIcon   icon={faTwitter}  style={{ width:'50px', height:'60px', marginTop:'10px', marginLeft:'100px'}}  />
                <p className={styles.title} >Connect to Hackatweet</p>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="username" className={styles.inputfield}  onChange={ e => setUsername(e.target.value)}  />
                    <input type="text" placeholder="password" className={styles.inputfield} onChange={ e => setPassword(e.target.value)}  />
                    <button  className={styles.signinBtn} onClick={ () => handleSinInForm()}>Sign In</button>
                </div>
                
          </div>
    </div>
  );
}

export default Signin;
