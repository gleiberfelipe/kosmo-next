
import logo from "../../../public/2ab1e5a9cd055268711b8f35b3a0ee23.png"
import banner from "../../../public/fa93148c43452dca55ff4aa2aaa739ed.jpg"



import { AboutBox } from './style';

const About = () => {

    return (
        <AboutBox>
            <img className="logo" src={logo} alt="" />

           <div className="circlebox">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <img src={banner} alt="" />
           </div>
                
           <hr />
            <h1>LOREM IPSUM</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Atque molestiae fuga non tempore nostrum recusandae ratione,
                est animi harum ducimus iure quas explicabo minus tempora quos
                minima consequuntur sapiente libero!
            </p>
        </AboutBox>
    );
};

export default About;