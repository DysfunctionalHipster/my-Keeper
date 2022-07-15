import React from 'react';
import {getDay, getFullDate, getTime} from '../date.js';

function Heading() {
    return <header>
    <h1>Keeper App</h1>
    <h4>{getTime}</h4>
    <h1>{getDay() + ' ' + getFullDate()}</h1>
    </header>
}

export default Heading;