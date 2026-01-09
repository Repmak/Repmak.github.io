import React, {useState} from 'react';
import './App.css';
import './Text.css';
import NavigationBar from "./NavigationBar/NavigationBar";
import Widget from "./Widgets/Widget";
import ButtonsWidget from "./Widgets/ButtonsWidget/ButtonsWidget";


export default function App() {

    const [brightness, setBrightness] = useState(1);

    return (
        <main>
            {/*<NavigationBar />*/}

            {/*<div className="content ">*/}

                <Widget sizing={"wide"} positioning={"centered"} color={"color-set-1"}
                        header={"hello"} content={"frfr"} />

                <Widget sizing={""} positioning={"centered"} color={"color-set-2"}
                        header={"hello"} content={"frfr"}/>

                <ButtonsWidget brightness={brightness} setBrightness={setBrightness} />

                <Widget sizing={""} positioning={"centered"} color={"color-set-1"}
                        header={"hello"} content={"frfr"}/>

                <Widget sizing={"tall"} positioning={"centered"} color={"color-set-1"}
                        header={"hello"} content={"frfr"} />

                <Widget sizing={"big"} positioning={"centered"} color={"liquid-glass"}
                        header={"hello"} content={"frfr"} />

            {/*</div>*/}
        </main>
    );
}
