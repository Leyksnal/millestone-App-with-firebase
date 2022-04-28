import React, { useState } from 'react'
import styled from 'styled-components'
import {FiEdit} from 'react-icons/fi'
import {BsImageAlt} from 'react-icons/bs'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { database, storage } from './Base'
import { Link } from 'react-router-dom'

export default function Post() {
    const [avatar, setAvatar] = useState("")
    const [textarea, setTextArea] = useState("")
    const [userName, setUserName] = useState("")
    const [location, setLocation] = useState("")
    const [occupation, setOccupation] = useState("")

    const imgLoad = async (e) =>{
        const file = e.target.files[0]
        const refFile = ref(storage, "/img", +file.name)
        const refStorage = uploadBytesResumable(refFile, file)
        getDownloadURL(refStorage.snapshot.ref).then((url) =>{
            setAvatar(url)
        })
    }

    const postData = async () =>{
        addDoc(collection(database, "millestone"),{
            avatar: await avatar,
            textarea,
            userName,
            location,
            occupation
        })
        setAvatar("")
        setTextArea("")
        setUserName("")
        setLocation("")
        setOccupation("")
    }

  return (
    <Container>
        <Wrapper>
            <Head><FiEdit size={'2.5rem'}/> <span> Share your goals and Millestone</span></Head>
            <Put>
                <label>
                    <BsImageAlt size={'3rem'}/>
                    <input type="file" onChange={imgLoad}/>
                </label>
            </Put>
            <Info>
                <textarea value={textarea} type="text" placeholder='Your goals and millestone' onChange={(e) =>{
                    setTextArea(e.target.value)
                }}/>
                <input value={userName} type="text" placeholder='Username' onChange={(e) =>{
                    setUserName(e.target.value)
                }}/>
                <input value={location} type="text" placeholder='Location' onChange={(e) =>{
                    setLocation(e.target.value)
                }}/>
                <input value={occupation} type="text" placeholder='Occupation' onChange={(e) =>{
                    setOccupation(e.target.value)
                }}/>
            </Info>
            <Action to={'/views'}><Button onClick={postData}>Send</Button></Action>
        </Wrapper>
    </Container>
  )
}


const Action = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: calc(100vh - 70px);
    align-items: center;
    width: 100%;

    @media screen and (max-width: 500px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    width: 50%;
    height: 90%;

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-size: 1.5rem;

        @media screen and (max-width: 500px){
            width: 90%;
            font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 500px){
        width: 100%;
    }
`;
const Put = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: green;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input{
        display: none;
    }
`;
const Button = styled.button`
    width: 425px;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px;
    background-color: #ec7d69;
    color: #fff;
    transition: all 350ms;
    margin-top: 8px;

    :hover{
        cursor: pointer;
        background-color: transparent;
        transform: scale(1.04);
        border: 3px solid #fff;
        color: #ec7d69;
    }

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;
const Info = styled.button`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    background-color: transparent;
    align-items: center;
    border: none;
    

    textarea{
        resize: none;
        width: 400px;
        height: 100px;
        border-radius: 10px;
        padding: 10px;
        font-size: 1rem;
        outline: none;
        margin-bottom: 8px;
        font-family: 'poppins';

        @media screen and (max-width: 500px){
            width: 90%;
        }
    }

    input{
        border: none;
        outline: none;
        margin: 8px;
        padding: 10px;
        font-size: 1rem;
        border-radius: 8px;
        font-weight: 500;
        width: 95%;
        font-family: 'poppins';
    }

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;