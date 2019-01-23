import React from 'react';
//import PropTypes from 'prop-types';
import {Story} from './Story';
// function Story ({a,b,c}) {

// }

// let Story = ({a,b,c}) => {

// }


let StoryG = ({data,voteup,votedown}) => {
    console.log("storyG");
    console.log(data);




    return (
        <ul className="reddit-listing">
            {data.map(e => <Story key = {e.id} data={e} voteup = {voteup} votedown = {votedown} />)}
        </ul>

    )
}


export default StoryG;


