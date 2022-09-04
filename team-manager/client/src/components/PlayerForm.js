import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default props => {
    const { initialName, initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    const onSubmitHandler = e => {
        console.log("button clicked")
        e.preventDefault();
        onSubmitProp({name,position});
        // setName(name)
    }
        
    return (
        <div>
            <h2><Link to={"/players/list"}>List</Link> | <Link to={"/players/addPlayer"}>Add Player</Link></h2>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <p>
                <label>Position</label><br />
                <input 
                    type="text" 
                    name="position" value={position} 
                    onChange={(e) => { setPosition(e.target.value) }} />
            </p>
            
            <input type="submit" />
        </form>
        </div>
    )
}