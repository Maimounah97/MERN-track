import React, { useEffect, useState } from 'react'
import PlayersList from '../components/PlayersList'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default () => {
    
    return (
        <div className="container">
            
            <h2><Link to={"/players/list"}>Manage Players</Link> | <Link to={"/status/game"}>Manage Player Status</Link></h2>
            <div style={{backgroundColor:'white', marginTop:'20px', padding:'10px'}}>
                
            <PlayersList />
            </div>
           
        </div>
    )
}