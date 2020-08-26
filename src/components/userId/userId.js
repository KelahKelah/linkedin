import React, { useEffect, useState } from "react";
import styles from "./userId.module.css";
import Img from '../../assets/profile.jpeg';
import Axios from "axios";
import {useParams} from 'react-router-dom';


const appId = "5f463d5fdc92550002496c7c"

const UserId = () => {
  const [userId, setUserId] = useState();
  const params = useParams();

  console.log('params is ',params)

  useEffect(()=> {
    Axios.get("https://dummyapi.io/data/api/user/{params.id}", {
        headers: {
            'app-id': `${appId}`
        }
    })
    .then(res => {
        if(res.status === 200) {
          console.log('the response is ',res)
            setUserId(res.data.data)  

        }
    });

}, [])  
  return (
        <div className={`"card" ${styles.cardContent}`}>
            <img src={Img} className="card-img" alt="" />
            <div className={"card-body"}>
              <h5 className={"card-title"}>Card title</h5>
              <p className={"card-text"}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <p className={"card-text"}><small className={"text-muted"}>Last updated 3 mins ago</small></p>
            </div>
        </div> 
  );
};
export default UserId;
