import {faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/signin.module.css'; 
import { useState } from "react";

function Signin() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSinInForm = () => {

    }

  return (
    <div className={styles.signin}>
          <div className={styles.signinModal}>
                <div className="croix">
                        X
                </div>
                <FontAwesomeIcon   icon={faTwitter}   />
                <p>Connect to Hackatweet</p>
                <div className="inputContainer">
                    <input type="text"  onChange={ e => setUsername(e.target.value)}  />
                    <input type="text"  onChange={ e => setPassword(e.target.value)}  />
                </div>
                <button onClick={ () => handleSinInForm()}>Sign In</button>
          </div>
    </div>
  );
}

export default Signin;
