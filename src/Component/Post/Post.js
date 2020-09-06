import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Post = () => {
  
    let {id}=useParams();
    const[post,setPost]=useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then((data)=>setPost(data));
    },);
    const[comment,setComment] =useState([]);
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res=>res.json())
      .then((data)=>setComment(data));
  });
  
    const classes = useStyles();
    return (
       <div>
             <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}  color="textSecondary" gutterBottom>
        {post.title}
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
         ID No: {post.id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">   
        UserID : {post.userId}
        </Typography>
        <h1>Post Details</h1>
        <Typography >
        {post.body}
         
        </Typography>
        
      </CardContent>
    
    </Card>

<h1 style={{margin:"50px 0"}}>All Comments</h1>
<hr/>

    {
      comment.map((comment)=><Comments  comment={comment} 
      >

      </Comments>)
     
    }
    
    </div> 
    );
};

export default Post;