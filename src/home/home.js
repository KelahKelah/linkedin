import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import { BsLink } from "react-icons/bs";
import Axios from "axios";
import UserId from "../components/userId/userId";
import Loader from "../components/loader/loader";

const url = "https://dummyapi.io/data/api/user?";
const appId = "5f463d5fdc92550002496c7c";

const Home = (props) => {
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    Axios.get("https://dummyapi.io/data/api/user?", {
      headers: {
        "app-id": `${appId}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        setUserData(res.data.data);
        console.log("user data is", userData);
        setLoader(true);
      }
    });
  }, []);

  const handleClick = (userId) => {
    props.history.push(`/user/${userId}`);
  };

  return !loader ? (
    <Loader />
  ) : (
    <div className={`container ${styles.homeContainer}`}>
      <h6>People you may know</h6>
      <div className={`row ${styles.homeRow}`}>
        {userData.length > 0 &&
          userData.map((user, index) => {
            return (
              <div className={"col-md-3"}>
                <div className={styles.homeCol}>
                  <span
                    aria-hidden="true"
                    className={`close ${styles.homeClose}`}
                  >
                    &times;
                  </span>
                  <img src={user.picture} alt="" />
                  <h4
                    className={styles.name}  alt={`${user.firstName} ${user.lastName}`}
                  >{`${user.firstName} ${user.lastName}`}</h4>
                  <p className={`${styles.email}`}>{user.email}</p>
                  <p className={styles.subItem}>
                    <BsLink />
                    60 mutual connections
                  </p>
                  <button
                    onClick={() => {
                      handleClick(user.id);
                    }}
                  >
                    Connect
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

};
export default Home;
