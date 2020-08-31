import React, { Component, useState, useEffect } from 'react';
import styled, {css } from 'styled-components';
import Img from '../../assets/profile.jpeg';
import { BsLink } from "react-icons/bs";
import Axios from "axios";
import Loader from '../loader/loader';


const SingleCard = (props) => {

    const url = "https://dummyapi.io/data/api/user?";
    const appId = "5f463d5fdc92550002496c7c";

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
    
    const Container = styled.section`
    background-color: #fff;
    border: 1px solid #f2f2f2;
    width: 70%;
    margin: 3% auto;
    `
    const BigCard = styled.div`
    border: 1px solid #d9d9d9;
    margin-bottom: 12px;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    `
    const Card = styled.div`
    background-image: linear-gradient(0deg, white 80%, #e6f2ff 20% );
    border: 1px solid #d9d9d9;
    margin: 2% auto;
    padding: 4%;
    text-align: center;
    overflow: hidden;
    width: 22%;
    `
    const Close = styled.span`
    border: solid #8c8c8c 1px;    
    border-radius: 50%;
    height: 35px;
    width: 35px;
    color: #fff;
    background-color: #595959;
    opacity: 20px;
    text-align: center;
    cursor: pointer;
    position: relative;
    top: -70px;
    right: -150px;
    padding: 5px;
    fontsize: 1.9em;
    `
    const Photo = styled.img`
    width: 100px;
    height: 100px;
    // border-radius: 50%;
    background-color: green;
    `
    const Title = styled.h1`
    font-weight: 600;
    font-size: 1.2em;
    color: #262626;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    `
    const Paragraph = styled.p`
    color: #999;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    `
    const SubParagraph = styled.p`
    font-size: 0.9em;
    `
    const Button = styled.button`
    border: 1px solid #0073b1;
    color: #0073b1;
    font-weight: 600;
    font-size: 1.2em;
    background-color: #fff;
    width: 100%;
    padding: 1%;
    
    ${props => props.secondary && 
        css`
        background: #fff;
        color: #000;
        `};
    `
    return !loader? <Loader /> : (
            <>
                <Container>
                <h6>People you may know</h6>
                    <BigCard>
                        {userData.length > 0 && userData.map((user, index) => {
                            return(
                                <Card>
                                    <Close>&times;</Close>
                                    <Photo src={user.picture} alt="profile-photo"></Photo>
                                    <Title>{`${user.firstName} ${user.lastName}`}</Title>
                                    <Paragraph>{user.email}</Paragraph>
                                    <SubParagraph><BsLink />12 mutual connection</SubParagraph>
                                    <Button onClick={()=>{handleClick(user.id)}}>View</Button>
                                </Card>
                            )
                        })}
                        
                    </BigCard>
                    {/* <BigCard>
                        <Card>  
                            <Close>&times;</Close>
                            <Photo src={Img} alt="profile-photo"></Photo>
                            <Title>Ochoko Ebuka</Title>
                            <Paragraph>Estate Surveyor</Paragraph>
                            <SubParagraph><BsLink />12 mutual connection</SubParagraph>
                            <Button>View</Button>
                        </Card>
                    </BigCard>
                    <BigCard>
                        <Card>
                            <Close>&times;</Close>
                            <Photo src={Img} alt="profile-photo"></Photo>
                            <Title>Lawal Lawani I still want </Title>
                            <Paragraph>Medical Lab</Paragraph>
                            <SubParagraph><BsLink />12 mutual connection</SubParagraph>
                            <Button>View</Button>
                        </Card>
                    </BigCard>
                    <BigCard>
                        <Card>                            
                            <Close>&times;</Close>
                            <Photo src={Img} alt="profile-photo"></Photo>
                            <Title>Best Groove</Title>
                            <Paragraph>Tv Presenter</Paragraph>
                            <SubParagraph><BsLink />12 mutual connection</SubParagraph>
                            <Button>View</Button>
                        </Card>
                    </BigCard> */}
                </Container>
                {/* <Button secondary>Secondary Button</Button> */}
            </>
    )
}
export default SingleCard;