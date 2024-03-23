import styled from "styled-components";




export const AboutBox = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
font-family: Roboto, sans-serif;
padding:0;
margin: 0;

h1{
    font-size: 80px;
    color: white;
    text-align: start;
    padding-left: 100px;
}

p{
    color: white;
    text-align: start;
    padding-left: 100px;
    font-size: 23px;
    
    text-align: justify;
    width: 300px;

    span{
        color: #f70bcf;
    }
}

button{
    background-color: purple;
    box-shadow: none;
    color: white;
    border-radius: 15px;
    padding: 10px 25px;
    width: 300px;
    align-self: start;
    margin-left: 100px;
    margin-top: 50px;
    font-family: Roboto, sans-serif;
    font-size: 20px;
}


background-image: url("../../../public/2287961-ai-brush-removebg-lniaqzes.png");
background-repeat: no-repeat;
background-size: 100%;
background-attachment: fixed;
background-position: relative;
background-position-y: -150px;
background-position-x: 0px;
background-color: black;

`