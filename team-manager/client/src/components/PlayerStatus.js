import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
const PlayerStatus = (props) => {

    //  const { playerId, game } = props;
    const { number } = useParams()
    const [useEffectDatd, setUseEffectDatd] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/team')
            .then(res => {
                console.log("players from api")
                console.log(res.data.players)
                setUseEffectDatd(res.data.players)
                // setPlayers(players.filter(player => player.game.game_name == game.name))
            })
            .catch((err) => console.log(err))
    }, [update])

    async function hundelOnClick(id,e){
        console.log("button clicked")
        axios.get('http://localhost:8000/api/player/'+id)
        .then(res=>{
            console.log("data")
            console.log(res.data)
            const newGames=res.data.games;
            console.log("newGames")
            console.log(newGames)

            newGames[number-1]=e.target.value;
            
            const updatePlayer={...res.data.players,games:newGames}
            console.log("updatePlayer")
            console.log(updatePlayer)
            axios.put('http://localhost:8000/api/player/'+id,{...updatePlayer})
            .then(res=>{
                console.log(res);
                setUpdate(!update);
            })
            .catch(err=>console.log(err));

        })
        .catch((error)=>console.log("error"+error))

    }

    // const addPlayerToGame = playerID => {
    //     setButtons(buttons.playing = true)
    //     // player.games.game_name=game.name

    // }
    // const removePlayerFromGame = playerID => {
    //     setButtons(buttons.notPlaying = true)
    //     // player.games.game_name=game.name

    // }
    // const undicided = playerID => {
    //     setButtons(buttons.undicided = false)
    //     // player.games.game_name=game.name

    // }
    return (
        <div>
            <h2><Link to={"/status/game/1"}>Game1</Link> | <Link to={"/status/game/2"}>Game2</Link> | <Link to={"/status/game/3"}>Game3</Link></h2>
            {(useEffectDatd.length==0)?null:
            (<table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Team Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {useEffectDatd.map((player, i) =>

                    <tr key={i}>
                        <td>{player.name}</td>
                         {(number==undefined || (number>3 || number<0))?(<td></td>):
                          player.games[number-1]=="Playing"?
                          (<td>
                            <input type="submit" value="Playing" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-success"/>
                            <input type="submit" value="Not Playing" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-secondary"/>
                            <input type="submit" value="Undecided" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-secondary"/>
                          </td>)
                          :(player.games[number-1]=="Not Playing")?
                          (<td>
                            <input type="submit" value="Playing" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-secondary"/>
                            <input type="submit" value="Not Playing" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-danger"/>
                            <input type="submit" value="Undecided" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-secondary"/>
                          </td>)
                          :
                          (<td>
                            <input type="submit" value="Playing" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-secondary"/>
                            <input type="submit" value="Not Playing" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-secondary"/>
                            <input type="submit" value="Undecided" onClick={(e)=>hundelOnClick(player._id,e)} className="me-2 btn btn-warning"/>
                          </td>)
                         }
                        
                    </tr>


                )}
            </tbody>
        </table>)
            }
            
        </div>
    )
}

export default PlayerStatus;