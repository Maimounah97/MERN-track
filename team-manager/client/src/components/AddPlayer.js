import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerForm from './PlayerForm';
export default () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [nameError, setNameError] = useState("");
   
    // const removeFromDom = authorId => {
    //     setPlayers(authors.filter(author => author._id != authorId));
    // }
    const createPlayer = player => {
        axios.post('http://localhost:8000/api/player/new', player)
            .then(res=>{
               
                console.log("data from create api")
                console.log(res.data)
                setPlayers([...players, res.data]);
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div>
            {errors.map((err, index) => <p key={index}>{err}</p>)}

           <PlayerForm onSubmitProp={createPlayer} initialName="" initialPosition=""/>
           {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }

           <hr/>
        </div>
    )
}