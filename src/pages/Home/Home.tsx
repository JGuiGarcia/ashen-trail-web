
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import About from "../../components/About/About";
import styles from "../Home/Home.module.css";

function Home(){
    return(
     <>
     <div className={styles.content}>  
        <Navbar/>
        <Hero/>
        <Features/>
        <About/>
    </div>
    </>
    );
}

export default Home;