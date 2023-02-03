/*
 * Thermometer React App
 * Selector component JavaScript source code
 *
 * Author: Jarvis Ly
 * Version: 1.0
 */

import './Selector.css';
import React, {Fragment} from "react";
import { TextField, Select, InputLabel, MenuItem, NativeSelect } from '@mui/material';

class Selector extends React.Component {
    render() {
        // Renders the four input options:
        // an input for the current temperature,
        // a selector for the scale,
        // and two inputs for the range (min/max)
        return(
            <div>
                <TextField 
                    id={this.props.id + "currentTemp"} 
                    label="Current Temperature" 
                    variant="filled" 
                    defaultValue={this.props.text}
                    disabled={!this.props.editable}
                    onChange={this.props.handleChange}
                    color="secondary"
                />
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Scale
                </InputLabel>
                <NativeSelect
                    value={this.props.value}
                    onChange={this.props.handleChange}
                    id={this.props.id + "Scale"}
                >
                    <option class="opt" value="0">Celsius</option>
                    <option class="opt" value="1">Fahrenheit</option>
                    <option class="opt" value="2">Kelvin</option>
                </NativeSelect>
                <InputLabel color="secondary" id="label">Temperature Range</InputLabel>
                <TextField 
                    id={this.props.id + "Min"}
                    label="Min" 
                    variant="filled" 
                    defaultValue={this.props.text}
                    disabled={!this.props.editable}
                    onChange={this.props.handleChange}
                />
                <TextField 
                    id={this.props.id + "Max"}
                    label="Max" 
                    variant="filled" 
                    defaultValue={this.props.text}
                    disabled={!this.props.editable}
                    onChange={this.props.handleChange}
                    color="secondary"
                />
            </div>
        );
    }
};

export default Selector;