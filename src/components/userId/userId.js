import React, { useEffect, useState } from "react";
import styles from "./userId.module.css";
import Img from "../../assets/profile.jpeg";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {
  BsEnvelopeFill,
  BsFillPersonFill,
  BsCalendarFill,
} from "react-icons/bs";
import Loader from "../loader/loader";

const appId = "5f463d5fdc92550002496c7c";

const UserId = () => {
  const [userId, setUserId] = useState({ userData: "" });
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(false);
  const params = useParams();

  console.log("params is ", params);

  useEffect(() => {
    // Axios call to get user id
    Axios.get(`https://dummyapi.io/data/api/user/${params.id}`, {
      headers: {
        "app-id": `${appId}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("the user id response is ", res.data);
        setUserId({ userData: res.data });
        setLoader(true);
      }
    });
    // Axios call to fetch all comments
    Axios.get(
      "https://dummyapi.io/data/api/post/SFAt3mJK0qu4QOd9LgSX/comment?limit=10",
      {
        headers: {
          "app-id": `${appId}`,
        },
      }
    ).then((res) => {
      console.log("checking comment response", res);
      if (res.status === 200) {
        setComments(res.data.data);
      }
    });
  }, []);
  console.log("comments outside useffect", comments);
  return !loader ? (
    <Loader />
  ) : (
    <div>
      <div className={`"card" ${styles.cardContent}`}>
        <img
          src={userId.userData.picture}
          className={`card-img ${styles.userIdImg}`}
          alt=""
        />
        <div className={`card-body ${styles.userIdBody}`}>
          <h5
            className={"card-title"}
          >{`${userId.userData.firstName} ${userId.userData.lastName}`}</h5>
          <p className={`card-text ${styles.text}`}>
            <BsEnvelopeFill className={styles.icons} /> {userId.userData.email}
          </p>
          <p className={"card-text"}>
            <BsFillPersonFill className={styles.icons} />{" "}
            {userId.userData.gender}
          </p>
          <p className={`card-text ${styles.text}`}>
            <i>
              <BsCalendarFill className={styles.icons} />{" "}
              {userId.userData.dateOfBirth.toLocaleString()}
            </i>
          </p>
          <p className={`card-text ${styles.text}`}>
            <i>
              <BsCalendarFill className={styles.icons} />
              {userId.userData.registerDate}
            </i>
          </p>
          <p className={`card-text ${styles.text}`}>
            <small className={"text-muted"}>Last updated 3 mins ago</small>
          </p>
          <div>
            <button href className={` ${styles.userButton}`}>
              Like
            </button>
          </div>
        </div>
      </div>
      {comments.length > 0 &&
        comments.map((comment, index) => {
          return (
            <div className={`card ${styles.cardContents}`}>
              {/* <div classNameName={'card-header'}>Comments
          </div> */}
              <div className="card-body">
                <h5 className="card-title">{comment.publishDate}</h5>
                <p className="card-text">{comment.message}</p>
                <p className={"card-text"}>
                  <small className={"text-muted"}>Commented 20 mins ago</small>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default UserId;
