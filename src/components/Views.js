import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {ImFeed} from 'react-icons/im'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { database } from './Base'

export default function Views() {

    const [render, setRender] = useState("")

    const getAll = async ()=>{
        const user = await collection(database, "millestone")
        onSnapshot(user, (snapshot) =>{
            const r = []
            snapshot.forEach((doc) =>{
                r.push({...doc.data(), id: doc.id})
            })
            setRender(r)
        })
    }

    useEffect(() =>{
        getAll()
    }, [])

  return (
        <Wall>
            <Head><ImFeed size={'2.5rem'}/><span>Explore And Learn</span>
            </Head>
            <Container>
                <Wrapper>
                    <End>
                        <Status>
                            <Pan></Pan>
                            <p>Online</p>
                        </Status>
                    </End>
                    <Avatar>
                        <img src="/goal.svg" alt="" />
                        <span>Username</span>
                    </Avatar>
                    <Info>
                        <span>Location</span>
                        <span>Age</span>
                    </Info>
                    <Text>
                        <p>Many different kinds of people use React Native: from advanced iOS developers to React beginners, to people getting started programming for the first time in their career. These docs were written for all learners, no matter their experience level or background.</p>
                    </Text>
                </Wrapper>
            </Container>
            <Action to={'/post'}><Button>Post</Button></Action>
        </Wall>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Wrapper = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: #0D1117;
    border-radius: 20px;
`;
const Status = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: black; */
    width: 60px;
    height: 22px;
    border-radius: 20px;
    margin: 10px;

    p{
        font-size: 0.7rem;
    }
`;
const Info = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    span{
        font-size: 1rem;
    }
`;
const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        border: solid 3px #ec7d69;
    }

    span{
        margin-top: 10px;
        font-size: 1rem;
    }
`;
const Text = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin: 10px;

    p{
        width: 90%;
        font-size: 1rem;
    }
`;
const End = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
const Pan = styled.div`
    background-color: #00ff2a;
    width: 8px;
    height: 8px;
    border-radius: 50%;
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px;
    background-color: #ec7d69;
    color: #fff;
    transition: all 350ms;
    margin: 20px;

    :hover{
        cursor: pointer;
        background-color: transparent;
        transform: scale(1.04);
        border: 3px solid #fff;
        color: #ec7d69;
    }
`;

const Action = styled(Link)`
    text-decoration: none;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    span{
        font-size: 1.5rem;
    }
`;

const Wall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;