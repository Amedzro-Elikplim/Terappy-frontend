import Nav from "../../components/Navbar/Nav";
import Hero from "../../components/Home/Hero";
import Footer from "../../components/Home/Footer";
import Services from "../../components/Home/Services";
import AboutUs from "../../components/Home/AboutUs";
import Products from "../../components/Home/Products";
import Booking from "../../components/Home/Booking";


const Home = () => {

    return(
        <div className="container">
             <Nav />
             <Hero />
             <Services />
             <Booking />
             <Products />
             <AboutUs />
             <Footer />
        </div>
    )
}

export default Home;