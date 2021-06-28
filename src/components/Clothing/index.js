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
  imgs: {
    width: "100%",
    margin: "20px",
    height: "600px",
    maxWidth: "22%",
    marginLeft: "2%",
    marginRight: "0.9%",
  },
});

const Clothing = ({ brand, preview, name, price, id, addProduct }) => {
  const classes = useStyles();
  return (<>
    <Card className={classes.root} className={classes.imgs} key={id}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt={brand}
          image={preview}
          title={brand}
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h2">
            {brand}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rs: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
           Remove
        </Button> */}
        <Button size="small" color="primary" onClick={addProduct} style={{color: "#009688"}}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>

  </>);
}

export default Clothing;