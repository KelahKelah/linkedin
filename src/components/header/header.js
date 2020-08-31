import React from "react";
import styles from "./header.module.css";
import {AiFillLinkedin, AiFillHome, AiOutlineBell, AiOutlineCaretDown ,AiOutlineTeam 
    , AiTwotoneShopping , AiFillWechat, AiOutlineTable} from 'react-icons/ai';

       
const Header = () => {

  return(
    <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <div className={styles.brand}>
                {/* <div> */}
                    <AiFillLinkedin className={styles.logo} />
                {/* </div> */}
                {/* <form > */}
                    <input type='search' placeholder='Search' className={styles.search} />
                {/* </form> */}
            </div>
            <ul>
                <li>
                    <div>
                        <AiFillHome className={styles.headerIcon} />
                        Home
                    </div>
                </li>
                <li> 
                    <div>
                        
                    </div>
                    <AiOutlineTeam className={styles.headerIcon} />
                     Network
                </li>
                <li>
                    <AiTwotoneShopping className={styles.headerIcon} />
                    Jobs
                </li>
                <li>
                    <AiFillWechat className={styles.headerIcon} />
                    Messages</li>
                <li>
                    <AiOutlineBell className={styles.headerIcon} />
                    Notifications
                </li>
                <li>
                    <AiFillWechat className={styles.headerIcon} />
                    Me
                </li>
                <li>
                    <AiOutlineTable className={styles.headerIcon} />
                    Work
                </li>

            </ul>

        </div>
        
    </div>
  );

};
export default Header;
