import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    imgs:{
        width: "20%",
        margin: "30px",
    },
  });
  

const Accessories = ({brand, preview, name, price}) => {
    const classes = useStyles();
    return ( <> 
       <Card className={classes.root} className={classes.imgs} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={brand}
          image={preview}
          title={brand}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Rs: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
           Remove
        </Button>
        <Button size="small" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
    
    </> );
}
 
export default Accessories;