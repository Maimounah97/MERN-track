import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import DeleteButton from './DeleteButton';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
const PlayersList = (props) => {
    const [players, setPlayers] = useState([]);
    // const { authors, removeFromDom } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/team')
            .then(res => {
                console.log("players from api")
                console.log(res.data.players)
                setPlayers(res.data.players)
            });
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId))
    }
    return (
        <div>
            <h2><Link to={"/players/list"}>List</Link> | <Link to={"/players/addPlayer"}>Add Player</Link></h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Team Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, i) =>

                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><DeleteButton playerId={player._id} successCallback={() => removeFromDom(player._id)} /></td>
                        </tr>


                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PlayersList;