import React from 'react';


const ThumbnailRy = ({imageurl}) => {
    function checkURL(url) {
        if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
            return (url)
        }
        return("https://www.freeiconspng.com/uploads/no-image-icon-7.gif");
    }

    let imageurl2 = checkURL(imageurl);
    return(
      
        <img   className="thumbnail" src={imageurl2} height="60" width="90" alt ="thumbnail" />
       
    )
}


export {ThumbnailRy}; 