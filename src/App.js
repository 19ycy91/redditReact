import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {reactjsPosts} from './static-data';

import StoryG from './StoryG';

class App extends React.Component {
  
  state= {
    posts : {}

  }


  componentDidMount = () => {

    console.log("compmount")
    //for static
    this.parsedata(reactjsPosts.data.children)

    //for live data 
   // fetch('http://www.reddit.com/r/reactjs.json')
   // .then(res => res.json())
   // .then(json => this.parsedata(json.data.children))
    //.catch(err => console.log(err));

    
  }

  parsedata = (rawdata) => {
    
    // assign id to data
    //create an object where id is assigned to data for all the children
    //child.data[id]: child.data
    //all the children are in an array

    let formatData = {}
    rawdata.forEach( function(e){
      formatData[e.data.id]= e.data; 
      
    } )
    
    //or

    // let formatData = rawdata.reduce(function(hash, post){
    //   hash[post.data.id] = post.data;
    //   return hash;
    // }, {} )
    // console.log("parsed")

    this.setState({
      posts: formatData
    })
    
    
  }

  upvote = (storyID) => {
    console.log("upvote")
    this.setState({
      posts: {
        ...this.state.posts, [storyID] : {...this.state.posts[storyID], 
          score: this.state.posts[storyID].score +1 
        }
      }
    });
  }
  downvote = (storyID) => {
    console.log("downvote")
    console.log(storyID);
    console.log(this.state.posts)
    console.log(this.state.posts[storyID])
    console.log(this.state.posts[storyID].score)
    this.setState({
      posts : { 
        ...this.state.posts, [storyID]: {...this.state.posts[storyID], 
        score: this.state.posts[storyID].score -1 }

      }
    });
    // console.log("after down vote")
    // console.log(this.state.posts)
  }

  objsort = (a,b) => b.score-a.score
  

  render() {
    // const posts = Object.keys(this.state.posts)
    // .map(id => this.state.posts[id]);
    console.log("render")
    console.log(this.state.posts)
    const postslist = Object.values(this.state.posts);
    const orderedPosts = postslist.sort(this.objsort)

    console.log(postslist)
    console.log(orderedPosts)
    //console.log(posts)
    //  console.log(reactjsPosts.data.children)
    //console.log(reactjsPosts.data.children)

    return (
      
   
      <StoryG
      // data = {this.state.posts}
      // storyid = {this.state.posts.keys[0]} 
      data = {orderedPosts}
      voteup = {this.upvote}
      votedown = {this.downvote}
      />
   
      
      // create something that will take the data and functions to create
      // entire content of reddit page - this will probs have map
      // function in it's render and return 
      // that map function will take in raw data and also have a way to create each story
      // feel like i could just do map here

    );

  }
}

export default App;
