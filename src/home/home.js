import React from "react";
import styles from "./home.module.css";
import Img from "../assets/profile.jpeg";
import {BsLink } from 'react-icons/bs';


const Home = () => {
  
  return (
        <div className={`container ${styles.homeContainer}`}>
            <div className={`row ${styles.homeRow}`}>
                <div className={`col-md-3 ${styles.homeCol}`}>
                    <img src={Img} alt="" />
                    <h4>Groovy Ninja</h4>
                    <p>Manager at genesys</p>
                    <p className={styles.subItem}><BsLink />60 mutual connections</p>
                    <button>Connect</button>
                </div>
                <div className={`col-md-3 ${styles.homeCol}`}>
                    <img src={Img} alt="" />
                    <h4>Ochoko Peter</h4>
                    <p>Manager at genesys</p>
                    <p className={styles.subItem}><BsLink />60 mutual connections</p>
                    <button>Connect</button>
                </div>
                <div className={`col-md-3 ${styles.homeCol}`}>
                    <img src={Img} alt="" />
                    <h4>Best Umudioka</h4>
                    <p>Manager at genesys</p>
                    <p className={styles.subItem}><BsLink />60 mutual connections</p>
                    <button>Connect</button>
                </div>
                <div className={`col-md-3 ${styles.homeCol}`}>
                    <img src={Img} alt="" />
                    <h4>Idu Okeke</h4>
                    <p>Manager at genesys</p>
                    <p className={styles.subItem}><BsLink />60 mutual connections</p>
                    <button>Connect</button>
                </div>
            </div>
        </div>
  );
};
export default Home;
