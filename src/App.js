import './App.css';
/*
 * Thermometer React App
 * App component JavaScript source code
 *
 * Author: Jarvis Ly
 * Version: 1.0
 */

import React from "react";
import Selector from "./Selector";
import Display from "./Display";
import Button from "@mui/material/Button"
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@emotion/react';
import { FormLabel } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',
    },
    secondary: {
      main: '#800000',
    },
  },
});


class App extends React.Component {
    // Constructor containing properties and states
    constructor(props) {
       super(props);
       this.state= {currentTemp: "20", Scale: "0", Min: "0" , Max: "100",
        displayMin: "0 C", displayMax: "100 C", displayTemp: "20 C"};
       this.handleClick = this.handleClick.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return(
            <ThemeProvider theme={theme}>
                <div className="App">
                    <FormLabel class="title">Thermometer:</FormLabel>
                    <Selector
                        editable
                        handleChange={this.handleChange}
                        id=""
                        scale="0"
                    />
                    <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={this.handleClick} >
                        Submit</Button>
                    <Display 
                    text={String(this.state.toValue)}
                    />
                    <FormLabel class="max">{this.state.displayMax}</FormLabel>
                    <FormLabel class="temp">{this.state.displayTemp}</FormLabel>
                    <FormLabel class="min">{this.state.displayMin}</FormLabel>
                </div>
            </ThemeProvider>
        );
    }

    // Handles input from text fields and menu in Selector.
    handleChange(e) {
        switch(e.target.id) {
            case "currentTemp":
                this.setState({currentTemp: e.target.value !== '' ? Number(e.target.value) : NaN})
                break;
            case "Scale":
                this.setState({Scale: e.target.value})
                break;
            case "Min":
                this.setState({Min: e.target.value !== '' ? Number(e.target.value) : NaN})
                break;
            case "Max":
                this.setState({Max: e.target.value !== '' ? Number(e.target.value) : NaN})
                break; 
            default:
                break;
        }
    }

    // Displays up-to-date temperatures
    handleClick(e) {
        let scale = "C";
        switch(this.state.Scale) {
            case "0":
                break;
            case "1":
                scale = "F";
                break;
            case "2":
                scale = "K";
                break;
            default:
                break;
        }
        this.setState({displayMin: this.state.Min + " " + scale});
        this.setState({displayMax: this.state.Max + " " + scale});
        this.setState({displayTemp: this.state.currentTemp + " " + scale});

        var total = parseInt(this.state.Max) - parseInt(this.state.Min);
        var percentage = (parseInt(this.state.currentTemp) - parseInt(this.state.Min))/total;
        var endPlace = 90.5*percentage;
        // Moves red tick according to current temperature
        // to provide a visual display
        var redTick = document.getElementById("tickCurrent");
        redTick.style.marginLeft = (94 - endPlace).toString() + "%";
    }
}

export default App;
