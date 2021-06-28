import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from  'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  product_title:{
    fontWeight: "600",
    marginTop: "12px",
    fontSize: "14px",
    color: "#686868",
    opacity: "0.8",
  },
    product_brand:{
    fontWeight: "600",
    fontSize: "15px",
    color: "black",
    opacity: "0.8",
  },
  product_price:{
    margin: "0",
    marginTop: "12px",
    fontWeight: "600",
    color: "#009688",
},
});

const CardDetails = ({ brand, preview, name, price, id, addProduct }) => {
  const classes = useStyles();
  return (<>
     <div className="card_cont">
    <Card className={classes.root}>
      <Link to={`/product/${id}`} style={{textDecoration: "none",}} >
      <CardActionArea >
        <CardMedia
          component="img"
          alt={brand}
          image={preview}
          title={brand}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" className={classes.product_brand}>
            {name}
          </Typography>
          <Typography gutterBottom variant="h4" component="h4" className={classes.product_title}>
            {brand}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes. product_price}>
            Rs: {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        {/* <Button size="small" color="primary">
           Remove
        </Button> */}
        <Button size="small" color="primary" onClick={addProduct} style={{color: "#fff",backgroundColor: "#009688"}}>
          Add To Cart
        </Button>
      </CardActions>
    
    </Card>
       </div>  

  </>);
}

export default CardDetails;
