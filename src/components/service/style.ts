import styled from "styled-components";

export const ServiceBox = styled.div`

background-color: #321c5c;
padding: 0;
margin: 0;

height: 100%;
display: flex;
flex-direction: column;
border-bottom: 5px solid #f70bcf;
h1{
    font-size: 80px;
    color: white;
   


    span{
        color: #f70bcf;
}
}

.father{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .children{
        color: white;
        background-color: black;
        margin: 40px;
        padding: 30px;
        border-radius: 20px;

        h2{
            font-size: 30px;
        }

        p{
            font-size: 20px;
            text-align: justify;
        }

    }
}

.uncle{
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 100px;
    h2{

        color: white;
        width: 400px;
        font-size: 30px;
        span{
            color: #f70bcf;
        }
    }

    .nephew{
        display: flex;
        justify-content: space-around;
        color: white;

        .cousin{
            width: 160px;
        }
    }
}

`