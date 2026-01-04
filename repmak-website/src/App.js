import NavigationBar from "./NavigationBar/NavigationBar";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import BackgroundGradient from "./BackgroundGradient/BackgroundGradient";
import LiquidGlass from "./LiquidGlass/LiquidGlass";
import Glow from "./Glow/Glow";
import './App.css';


export default function App() {
    return (
        <>
            {/*<Glow/>*/}
            <main>
                <LiquidGlass>
                    <NavigationBar />
                </LiquidGlass>
                {/*<BackgroundGradient BLrad='6px' BRrad='6px'>*/}
                {/*    <NavigationBar />*/}
                {/*</BackgroundGradient>*/}

                <div className="content">
                    {/*<BackgroundGradient TLrad='6px' TRrad='6px'>*/}
                    {/*    <AboutMe />*/}
                    {/*</BackgroundGradient>*/}
                    {/*<BackgroundGradient TLrad='6px' TRrad='6px'>*/}
                    {/*    <Projects />*/}
                    {/*</BackgroundGradient>*/}
                </div>
            </main>
        </>
    );
}
