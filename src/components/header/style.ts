import styled from "styled-components";

export const HeaderBox = styled.div`

display: flex;
flex-direction: row;
justify-content: space-around;
background-color: gray;
padding: 0;
margin: 0;
box-sizing: border-box;
align-items: center;

font-family: Roboto, sans-serif;
color: white;
h1{
    font-size: 20px;
    
}

ul{
    display: flex;
flex-direction: row;
list-style: none;
gap: 70px;
font-family: Roboto, sans-serif;
font-weight: 400;

}

.btn1{
    background-color: white;
    color: #321c5c;
    border-radius: 5px;
    padding: 10px 25px;
    width: 130px;
    margin-right: 20px;
    
  
}
.btnStandart{
    background-color: #321c5c;
    color: white;
    border-radius: 5px;
    padding: 10px 25px;
    width: 130px;
}
`