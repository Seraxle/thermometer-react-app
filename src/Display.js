/*
 * Thermometer React App
 * Display component JavaScript source code
 *
 * Author: Jarvis Ly
 * Version: 1.0
 */

import './Display.css';
import React, {Fragment} from "react";

class Display extends React.Component {
    // Renders the thermometer icon and
    // the ticks for the range and current temperature
    render() {
        return (
            <div className="Display">
                <div class="meter">
                    <div class="prog"></div>
                    <div class="botTherm">
                        <div class="fillMet"></div>
                    </div>
                </div>
                <div class="tickMin" />
                <div id="tickCurrent" class="tickCurrent" />
                <div class="tickMax" />
                <br />
            </div>
        );
    }
}

export default Display;