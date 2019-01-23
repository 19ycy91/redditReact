import React from 'react';

const Votery = ({voteup, votedown, score, id}) =>{

    return(
    <div className = "voting">
         <i className="fas fa-caret-up" onClick = {voteup.bind(this,id)} ></i> 
        <div className="score" >{score}</div>
        <i onClick = {() => votedown(id)} className="fas fa-caret-down"></i> 
        
    </div>
    )
}


export {Votery};