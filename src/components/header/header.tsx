import kosmologo from "../../../public/e9357c97e3e5b089e2697e0822c08d46.png"

import { FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";




import { HeaderBox } from './style';

const Header = () => {

    return (
        <HeaderBox>
            <img src={kosmologo} alt="" />

            <p> Lorem ipsum dolor</p>

            <div className="icons">
                <p><FaUser /></p>
                <p><IoIosMenu /></p>
            </div>
           
        </HeaderBox>
    );
};

export default Header;