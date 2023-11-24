import { faTwitter, faUber } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"; 
import styles from "../styles/home.module.css"  

function Home() {
  return (
    <div className={styles.home}>
     <div className="leftBlock">
      <div>
      <FontAwesomeIcon  icon={faTwitter}  className={styles.icon} />
      </div>
      <div>
       <img src="./user-avatar.jpeg" alt="" srcset="" className={styles.avatar}/>
       <span className={styles.username}>John</span>
      </div>
       </div>
     <div className="middleBlock">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eos consectetur ad accusamus assumenda tempore quos repellendus doloribus. Quas deleniti iure omnis quos animi dolore atque provident asperiores voluptates similique!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laborum. Magnam, illo incidunt dignissimos eos dolorem, animi, consequuntur nulla cupiditate cum repudiandae minima provident totam laborum quo facere consequatur non.
      </div>
     <div className="rightBlock">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, ut aperiam vero nostrum non voluptatibus nemo doloribus saepe sit libero aut dolore accusamus ad ullam ratione deleniti, eaque a recusandae.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minima distinctio doloremque voluptatem itaque fugit. Quidem illum, rem corrupti recusandae nam debitis, quod nemo, qui optio cupiditate dolorem iusto deleniti?
      </div>
    </div>
  );
}

export default Home;
