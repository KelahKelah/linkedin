import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Img from '../../assets/profile.jpeg';
import Axios from "axios";
import { useParams } from "react-router-dom";
import {
  BsEnvelopeFill,
  BsFillPersonFill,
  BsCalendarFill,
} from "react-icons/bs";
import Loader from "../loader/loader";

const appId = "5f463d5fdc92550002496c7c";

const SingleCardUser = () => {

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


    const IdContainer = styled.section`
    width: 40%;
    background-color: #fff;
    margin: 4% auto;
    text-align: center;
    padding-bottom: 3%;
    `
    const IdContainers = styled.section`
    width: 40%;
    background-color: #fff;
    margin: 1% auto;
    justify-self: center;
    padding: 2%;
    `

    const IdPhoto = styled.img`
    background-color: brown;
    height: 150px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    `
    const IdTitle = styled.h5`
    font-weight: 600;
    `
    const IdParagraph = styled.p`
    `
    const IdButton = styled.button`
    border: 1px solid #0073b1;
    color: #0073b1;
    font-weight: 600;
    font-size: 1.4em;
    background-color: #fff;
    width: 45%;
    padding: 2.3%;
    `
    const BsEnvelopeFill = styled.p`
    color: blue
    `

    return !loader? <Loader /> : (
        <div>
        <IdContainer>
            <IdPhoto src={userId.userData.picture} alt={'profile'}></IdPhoto>
            <IdTitle>{`${userId.userData.firstName} ${userId.userData.lastName}`}</IdTitle>
                <IdParagraph><BsEnvelopeFill></BsEnvelopeFill>{userId.userData.email}</IdParagraph>
                <IdParagraph><BsFillPersonFill />{userId.userData.gender}</IdParagraph>
                <IdParagraph><BsCalendarFill />{userId.userData.dateOfBirth}</IdParagraph>
                <IdParagraph><BsCalendarFill />{userId.userData.dateOfBirth}</IdParagraph>
            <IdButton>Like</IdButton>
        </IdContainer>
        {comments.length > 0 && comments.map((comment, index) => {
            return(
                <IdContainers>
                    <IdTitle>{comment.publishDate}</IdTitle>
                    <IdParagraph>{comment.message}</IdParagraph>
                    <IdParagraph><small>Comment 20mins ago</small></IdParagraph>
                </IdContainers>
            )

        })}
        </div>
    )
}
export default SingleCardUser;