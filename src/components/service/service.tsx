




import { ServiceBox } from './style';

const Service = () => {

    return (
        <ServiceBox>


            <h1>O que oferecemos em <br></br> <span>nossos serviços</span></h1>

            <div className='father'>
                <div className='children'>
                    <h2>Banco de dados</h2>
                    <p>
                        Banco de dados com 7 TB, que funciona 24h por dia,
                        e que são constantemente atualizada, para lhe manter
                        conectado.
                    </p>
                </div>
                <div className='children'>
                    <h2>Cruzamento de dados</h2>
                    <p>
                        No cruzamento de dados, temos uma extrema precisão, e assertividade
                        para o melhor cliente ideal para seu empreendimento.
                    </p>
                </div>
                <div className='children'>
                    <h2>Metodologias</h2>
                    <p>
                        Com a nossa metodologia, temos resultados e tecnologias que são superiores
                        as demais que estão no mercado atual.
                    </p>
                </div>
            </div>
            <div className='uncle'>
            <h1>Nosso Clube</h1>
            <h2>Participe do nosso clube e venha <span>fazer parte de diversas vantagens:</span></h2>
            <div className='nephew'>
                <div className='cousin'><p>+900 sites de grandes marcas</p></div>
                <div className='cousin'><p>+800 resgate de produtos market place</p></div>
                <div className='cousin'><p>3000 locais de experência em produtos</p></div>
                <div className='cousin'><p>promoções e recargas exclusivas</p></div>
            </div>
            </div>
        </ServiceBox>
    );
};

export default Service;