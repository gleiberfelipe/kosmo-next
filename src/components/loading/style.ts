import styled from "styled-components";

export const Loadbox = styled.div`

display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
background-color: rgb(17,17,17);
border: none;
padding: 0;
margin: 0;
color: white;

.imgs{

    display: flex;
    flex-direction: row;
    padding: 50px;
    gap: 50px;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
    
    }
    h2{
        font-size: 50px;
    }

    p{
        font-size: 20px;
        width: 300px;
        text-align: justify;  
    }
    img{
     width: 800px;
     height: 400px; 
     border-radius: 60px;
     border-bottom: 15px solid #8e54e9;

    }
}

hr{
    background-image: linear-gradient(to right, #4776e6, #5870e9, #6968eb, #7c5feb, #8e54e9);
    width: 146px;
    height: 5px;
    margin-top: 50px;
    border: none;
}

h1{
    font-size: 50px;
    color: white;
}

.pboxagain{
    width: 600px;
    font-size: 20px;
    color: white;
    text-align: center;;  
}


.screens{
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    height: 1100px;
    
    
    

    .icon p{
                width: 100px;
                font-size: 90px;
                margin-top: 150px;
            }

    .children{
        padding: 0;
        margin: 0;
        width: 600px;
       

        svg{
            position: relative;
            z-index: 2;
            padding: 0;
            margin: 0;
        }
            img{

                width: 382px;
                height: 830px;
                position: relative;
                z-index: 1;
                padding: 0;
                margin: 0;
                bottom: 852px;
            }

          
    }
}

/* .react-flow__node {

 
 width: 150px;  
 height: 150px; 
 border-radius: 50%; 
  background-image: url('../../../public/82b52388d2418b4c76480d7e6fc35ca3.jpg'); 
  background-size: cover; 
  background-position: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
 */


@keyframes levitate
{
  
    0%,100%{
		
		transform:translatey(0)
	}
	50%{
		
		transform:translatey(-20px)
	}   
}
.circleBox{
  
    background-color: rgb(17,17,17);
    margin-top: 100px;

    .circleOne{

        width: 500px;
        height: 500px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        left: 0px;
        z-index: 2;
        background-image: url('../../../public/522b89a6e06ce18044367a842aca9275.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 6s;   
        animation-fill-mode: forwards;
        animation-delay: 0.3s

    }
    .circleTwo{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        top: 0px;
        right: 0px;
        z-index: 2;
        background-image: url('../../../public/31c3a32989fe4fd21bcdade143df7f6b.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 7s;   
        animation-fill-mode: forwards;
        animation-delay: 0.2s

    }
    .circleThree{

        width: 350px;
        height: 350px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 100px;
        left: 300px;
        z-index: 2;
        background-image: url('../../../public/5bb92a1b96831f3c1f7298e4c1e61fa5.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 8s;   
        animation-fill-mode: forwards;
        animation-delay: 0.4s

    }

    .circleFour{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 100px;
        left: 200px;
        z-index: 2;
        background-image: url('../../../public/5a446cc28dd65340810ff8e96cb15c3c.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 9s;   
        animation-fill-mode: forwards;
        animation-delay: 0.5s

    }
    }
    .circleFive{

        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: purple;
        position: relative;
        bottom: 200px;
        left: 600px;
        z-index: 2;
        background-image: url('../../../public/57d3493b65b102b195ab45bae13d31e3.jpg'); 
        background-size: cover; 
        background-position: center; 
        border: 5px solid #8e54e9;
        animation-name: levitate;
        animation: levitate ease-in-out infinite;
        animation-duration: 6s;   
        animation-fill-mode: forwards;
        animation-delay: 0.1s

       
    }
    
    .barOne{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 850px;
        left: 50px;
        transform: rotateZ(110deg) ;
        z-index: 1;
    }
    .barTwo{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 820px;
        left: 300px;
        transform: rotateZ(230deg) ;
        z-index: 1;
    }
    .barThree{
        background-color: white;
        position: relative;
        width: 150px;
        height: 5px;
        bottom: 450px;
        left: 250px;
        transform: rotateZ(110deg) ;
        z-index: 1;
    }
    .barFour{
        background-color: white;
        position: relative;
        width: 250px;
        height: 5px;
        bottom: 400px;
        left: 500px;
        transform: rotateZ(250deg) ;
        z-index: 1;
    }
}


@keyframes rotate
{
  
    0%{
		
		transform: rotate(0)
	}
	100%{
		
		transform: rotate(360deg)
	}   
}
@keyframes rotateInverted
{
  
    0%{
		
		transform: rotateZ(0)
	}
	100%{
		
		transform: rotateZ(-360deg)
	}   
}

.bigball{
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px dotted gray;
    margin: 100px;
    
   


}

.ballBox{

    height: 300px;
    height: 300px;
    transform-origin: center;
    animation-name: rotate;
    animation: rotate  infinite;
    animation-duration: 30s;   
    animation-fill-mode: forwards;

        
}

.ball{
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    background-size: cover; 
    background-position: center; 
    animation-name: rotateInverted;
        animation: rotateInverted infinite;
        animation-duration: 30s;   
 
}
.ball.one{
    background-image: url('../../../public/36ca7c6dd22f1acad34ea31d936cbc5f.jpg'); 
    bottom: 750px;
    left: 350px;    
}
.ball.two{
    background-image: url('../../../public/39532aab00e737c2ccc737f1cec84adb.jpg');
    bottom: 700px;
    left: 600px;     
}
.ball.three{
    background-image: url('../../../public/a303a25e2cf567bfc9f116796f95d73a.jpg');
    bottom: 520px;
    left: 620px; 
}
.ball.four{
    background-image: url('../../../public/f4a453b9dc62fbc5292961c9f5ce7b0f.jpg'); 
    bottom: 450px;
    left: 350px; 
}
.ball.five{
    background-image: url('../../../public/ed081b73cbbdca982d22b2a6774a135a.jpg'); 
    bottom: 720px;
    left: 80px; 
}
.ball.six{
    background-image: url('../../../public/c84a3373e44e1c612d9ab95ec091ce2b.jpg'); 
    bottom: 1100px;
    left: 100px; 
}

@media only screen and (max-width: 768px){

    p{
        width: 400px;
    }
    .pboxagain{
        width: 400px !important;
        display: flex;
        text-align: justify !important;
        padding: 0 10px !important
     
        
    }
    .imgs{
        flex-direction: column !important;
        padding: 0px !important;
        gap: 0px;
        align-items: center;
        
        div{
            padding: 0px;
        }
     

        img{
        width: 400px !important;
        height: 200px !important; 
        }


        .imgs.one{
            flex-direction: column-reverse !important
        }

        .pboxagain{
            width: 380px !important;
            text-align: justify !important;
        }
    }

    .screens{
    display: flex;
    flex-direction: column !important;
    align-items: center;
    width: 100%;
    margin-bottom: 200px !important;
    margin-top: 100px !important;
    height: 1900px !important;
        .icon p{
            width: 400px;
            text-align: center;
            margin-top: 0px;
            position: relative;
            height: 0px;
            z-index: 2;
            bottom: 1000px;

        }

        .children{
width: 414px !important;
align-self: center;
            h1{
                width: 414px;
            }
            max-height: 700px;
            margin-bottom: 100px !important;
            
            svg{
                width: 380px;
            }

            img{
                width: 350px !important;
                height: 735px !important;
                bottom: 804px !important;
                border-radius: 15px;
                        
                }
         }

    

    }

    .circleBox{
    
     
        .circleOne{
        width: 250px !important;
        height: 250px !important;

        }
        .circleTwo{
            width: 75px !important;
            height: 75px !important;
        }
        .circleThree{

        width: 175px !important;
        height: 175px !important;
        left: 120px !important;
        bottom: 50px !important;
        }

        .circleFour{
            width: 75px !important;
            height: 75px !important;
            bottom: 0px !important;
            left: 100px !important;
        }

        .circleFive{
            width: 75px !important;
            height: 75px !important; 
            bottom: 100px !important;
            left: 235px !important;
        }

        .barOne{
            bottom: 450px;
            left: 0px;
        }
        .barTwo{
            bottom: 420px;
            left: 130px;
        }
        .barThree{
            bottom: 250px;
            left: 100px;
        }
        .barFour{
            bottom: 270px;
            left: 120px;
        }
    }

    .ballBox{

height: 600px;


}
    .bigball{
        width: 250px;
        height: 250px;
        
    
    }

    .ball{
    width: 50px;
    height: 50px;
 
}
.ball.one{
    
    bottom: 400px;
    left: 220px;    
}
.ball.two{
 
    bottom: 400px;
    left: 330px;     
}
.ball.three{
 
    bottom: 280px;
    left: 330px; 
}
.ball.four{
 
    bottom: 280px;
    left: 220px; 
}
.ball.five{
 
    bottom: 380px;
    left: 110px; 
}

.ball.six{
    background-image: url('../../../public/c84a3373e44e1c612d9ab95ec091ce2b.jpg'); 
    bottom: 600px;
    left: 110px; 
}
}

`