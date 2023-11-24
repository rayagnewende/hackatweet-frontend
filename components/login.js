import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/login.module.css"; 
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Signin from "./signin"; 
import Signup from "./signup"; 
import { useState } from "react";

function Login() {
         const [isSignInVisible, setIsSignInVisible] = useState(false); 
         const [isSignUpVisible, setIsSignUpVisible] = useState(false); 


         const displaySigninModal = ()  => {
             setIsSignInVisible(true); 
         }

         const displaySignupModal = ()  => {
          setIsSignUpVisible(true); 
         }

         const closeSignInModal = () => {
            setIsSignInVisible(false); 
         }
         const closeSignUpModal = () => {
          setIsSignUpVisible(false)
       }

  return (
    <div className={styles.login}>
     <div className={styles.leftImage} style={{ backgroundImage:`url(/left.png)`, height:'100vh'}}>
        <FontAwesomeIcon  icon={faTwitter} className={styles.icon} style={{ color:'white'}}/>
     </div>
     <div className={styles.rightBlock}>
        <FontAwesomeIcon  icon={faTwitter} className={styles.icon2} style={{ color:'white'}}/>
         <h3 className={styles.title}>See what's </h3>
         <h3 className={styles.title}>happening</h3>
         <p style={{ fontSize:'30px', marginLeft:'30px'}}>Join Hackatweet today</p>
         <button className={styles.signup} onClick={() => displaySignupModal()}>Sign up</button>
         <p style={{ fontSize:'15px', marginLeft:'30px'}} className={styles.leftMarge}>Already have an account?</p>
         <button className={styles.signin} onClick={() => displaySigninModal()}>Sign In</button>
          
         { isSignInVisible &&   <Signin  closeSignInModal={closeSignInModal}/> }
         { isSignUpVisible &&   <Signup  closeSignUpModal={closeSignUpModal}/> }
     </div>
    </div>
  );
}

export default Login;
