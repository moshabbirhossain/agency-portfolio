import "./App.css";
// import Build from "./components/Build/Build";
import BuildRunScale from "./components/BuildRunScale/BuildRunScale";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolios from "./components/Portfolios/Portfolios";

function App() {

    return (
        <>
            <div className="px-3 sm:px-10 bg-gray-700 sm:bg-black">
                <Navbar/>
                <Hero />
                <div>
                    <BuildRunScale/>
                    {/* <Build/> */}
                    <Portfolios/>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default App;
