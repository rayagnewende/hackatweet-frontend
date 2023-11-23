import styles from "../styles/login.module.css"
import Signup from "./signup";
import Signin from "./signin";

function Login() {
  return (
    <div className={styles.login}>
     <div className={styles.leftImage}>
         <img  src="/login.jpeg" className={styles.image}/>
     </div>
     <div className={styles.rightBlock}>
         <h3>See what's happening</h3>
         <button className="signup">Sign up</button>
         <p>Already have an account?</p>
         <button>Sign In</button>
     </div>
     <Signup />
     <Signin />
    </div>
  );
}

export default Login;
