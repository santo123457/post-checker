import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const PostCart = (props) => {
   
      const{id,title,userId}=props.cart;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}  color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <br/>
        <Typography variant="h5" component="h2">
         ID: {id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        UserID : {userId}
        </Typography>
       
      </CardContent>
      <CardActions style={{textAlign:"center",display:"block"}}>
            <Link to={`/post/${id}`}>
            <Button style={{textDecoration: "none" }} variant="contained" color="primary" size="small" >Learn More</Button>
            </Link>
      </CardActions>
    </Card>
    );
};

export default PostCart;