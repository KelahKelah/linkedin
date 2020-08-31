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
            <ul className={styles.headerNav}>
                <li>
                    <div>
                        <AiFillHome className={styles.headerIcon} />
                        Home
                    </div>
                </li>
                <li> 
                    <div>
                        <AiOutlineTeam className={styles.headerIcon} />
                        Network
                    </div>
                </li>
                <li>
                    <div>
                        <AiTwotoneShopping className={styles.headerIcon} />
                        Jobs
                    </div>
                </li>
                <li>
                    <div>
                        <AiFillWechat className={styles.headerIcon} />
                        Messages
                    </div>
                </li>
                <li>
                    <div>
                        <AiOutlineBell className={styles.headerIcon} />
                        Notifications
                    </div>
                </li>
                <li>
                    <div>
                        <AiFillWechat className={styles.headerIcon} />
                        Me     
                    </div>
                </li>
                <li>
                    <div>
                        <AiOutlineTable className={styles.headerIcon} />
                        Work
                    </div>
                </li>

            </ul>

        </div>
        
    </div>
  );

};
export default Header;
