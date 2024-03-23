import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Service from "../../components/service/service";


const Home = () => {


  return (
  
    <div style={{padding:"0", margin: "0", boxSizing: "border-box"}}>
      <Header/>   
      <About/>        
      <Service/>        
      <Footer/>        

   </div>
  );
};

export default Home;
