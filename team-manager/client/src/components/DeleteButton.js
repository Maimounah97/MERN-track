import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = e => {
        console.log("delete button clicked")
        axios.delete('http://localhost:8000/api/Player/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deletePlayer} type="button" className="btn btn-danger">
            Delete
        </button>
    )
}