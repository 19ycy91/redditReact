import React from 'react';
import moment from 'moment';

const Timery = ({unix, created}) => {
    let timedif;
    if (unix === true) {
        timedif = moment.unix(created).fromNow()
    }
    else {
        timedif = moment(created).fromNow()
    }

    return ( 
        <span>{timedif}</span>  
     

       )
}

export default Timery;