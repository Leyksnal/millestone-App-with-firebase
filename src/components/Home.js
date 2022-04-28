import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
        <Wrapper>
            <Content>
                <h2>Welcome to Millestone !</h2>
                <span>Tell us your Goal for this year and let us know your Millestone</span>
                <Btn>
                    <Action to={'/post'}><Button>Post Now</Button></Action>
                    <Action to={'/views'}><Button>Feeds</Button></Action>
                </Btn>
            </Content>
            <Illustration>
                <img src="/goal.svg" alt="illustration" />
            </Illustration>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px);
    width: 100%;

    @media screen and (max-width: 500px){
        height: 100%;
        height: calc(100vh - 70px);
    }
`;
const Wrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;

    @media screen and (max-width: 500px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`;
const Illustration = styled.div`
    width: 600px;
    height: 400px;
    border: solid 4px #fff;
    border-radius: 10px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 500px){
        width: 100%;
        height: 250px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        font-size: 3rem;
        width: 60%;

        @media screen and (max-width: 500px){
            font-size: 2.5rem;
            width: 100%;
        }
    }

    span{
        font-size: 1.2rem;
        text-decoration: underline;
        margin-top: -20px;

        @media screen and (max-width: 500px){
           margin-top: -20px;
        }
    }

    @media screen and (max-width: 500px){
        width: 100%;
    }
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
    margin-top: 20px;

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

const Btn = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;

    @media screen and (max-width: 500px){
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;