import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Img from "../assets/profile.jpeg";
import {BsLink } from 'react-icons/bs';
import Axios from "axios";


const url = "https://dummyapi.io/data/api/user?"
const appId = "5f463d5fdc92550002496c7c"

const Home = () => {
    const [userData, setUserData] = useState([])

    useEffect(()=> {
        Axios.get("https://dummyapi.io/data/api/user?", {
            headers: {
                'app-id': `${appId}`
            }
        })
        .then(res => {
            console.log('The response is',res)
            if(res.status === 200) {
                setUserData(res.data.data)
            }
        })
    }, [])
  
  return (
      <div className={`container ${styles.homeContainer}`}>
                        <div className={`row ${styles.homeRow}`}>

          {userData.length > 0 && userData.map((user)=> {
              return(
                  <div className={"col-md-3"}>
                      <div className={styles.homeCol}>
                        {/* <button type="button"  aria-label="Close"> */}
                            <span aria-hidden="true" className={`close ${styles.homeClose}`}>&times;</span>
                        {/* </button> */}
                        <img src={user.photo} alt="" />
                        <h4>{user.firstName}</h4>
                        <p>{user.email}</p>
                        <p className={styles.subItem}><BsLink />60 mutual connections</p>
                        <button>View</button>
                      </div>
                 </div>
          )})}
          </div>
      </div>
      
  );

//   const UserIdModal = () => {
      
//   }

};
export default Home;
