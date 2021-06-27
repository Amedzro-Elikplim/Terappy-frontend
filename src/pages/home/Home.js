import Nav from "../../components/Navbar/Nav";
import Hero from "../../components/HomePageSections/Hero";
import Footer from "../../components/HomePageSections/Footer";
import Services from "../../components/HomePageSections/Services";
import AboutUs from "../../components/HomePageSections/AboutUs";
import Products from "../../components/HomePageSections/Products";
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