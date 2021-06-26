import Nav from "../../components/Navbar/Nav";
import Hero from "../../components/sections/home-sections/Hero";
import Footer from "../../components/sections/home-sections/Footer";
import Services from "../../components/sections/home-sections/Services";
import AboutUs from "../../components/sections/home-sections/AboutUs";
import Products from "../../components/sections/home-sections/Products";
const Home = () => {
    return(
        <div className="container">
             <Nav />
             <Hero />
             <Services />
             <Products />
             <AboutUs />
             <Footer />
        </div>
    )
}

export default Home;