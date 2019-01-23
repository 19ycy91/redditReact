import React from 'react';
//import PropTypes from 'prop-types';
import {Votery} from './Vote_ry';
import {ThumbnailRy} from './thumbnailRy';
import Timery from './Timery';


// function Story ({a,b,c}) {

// }

// let Story = ({a,b,c}) => {

// }


let Story = ({data,voteup,votedown}) => {
    let title = data.title;
    let url = data.url;
    let domain = data.domain;
    let author = data.author;
    let num_comments = data.num_comments;
    let score = data.score;
    let created = data.created;
    let id = data.id;
    //let imageurl = (data.preview  ? data.preview.images[0].source.url : "");
    let imageurl = data.thumbnail;

    

    // function standby() {
    //     document.getElementById('foo').src = 'https://www.google.com/images/srpr/logo11w.png'
    // }

    return (
        <div className="reddit-post">
            <Votery   voteup={voteup} votedown = {votedown} score = {score} id = {id} />
            
            <ThumbnailRy  imageurl = {imageurl} />
            <div  className = "content" >
                <h3 className = "title">
                    <a href={url}>{title}</a>
                </h3>
                <div className = "domain">{domain}</div>
                <div className="submitted">
                 <span> Submitted <Timery unix={true} created = {created}/> by {author} </span>
                </div>

                <a className = "comments" href={`https://www.reddit.com${data.permalink}`}> {num_comments} comments</a>


                <span className="action">share</span>
                <span className="action">save</span>
                <span className="action">hide</span>
            </div>

        </div>

    )
}


export {Story};


