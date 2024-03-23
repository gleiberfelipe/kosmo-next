




import { HeaderBox } from './style';

const Header = () => {

    return (
        <HeaderBox>
            <h1>Kosmo</h1>

            <ul>
                <li>Sobre Nós</li>
                <li>Nossos Serviços</li>
                <li>Nosso Clube</li>
            </ul>

            <div>
                <button className='btn1' >cadastre-se</button>
                <button className='btnStandart'>Login</button>
            </div>
        </HeaderBox>
    );
};

export default Header;