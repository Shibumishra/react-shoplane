import React,{useEffect} from 'react';
import SimpleSlider from '../Slider';
import CardDetails from '../Card'
// import Accessories from '../Accessories';
import { homeProductsAPI } from '../../Ultis/Apis';
import axios from 'axios';
import { connect } from 'react-redux'
import { addProduct, getProducts } from '../../actions';
import Footer from '../Footer';
import Features from '../Features';

const Home = (props) => {

    useEffect(() => {
        axios(homeProductsAPI).then(res=> props.sendProducts(res.data))
      }, [])
        
    return ( <>
    <SimpleSlider />
    <Features />
     <div className="mainProducts">
        {props.products?.map((items)=> <CardDetails {...items}  addProduct={()=> props.addProductToCart(items)} />)}
        {/* {product?.slice(5,10).map((items)=> <Accessories {...items} />)} */}
     </div>
     <Footer />
    </> );
}
 
const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>({
  sendProducts: (payload) => dispatch(getProducts(payload)),
  addProductToCart: (payload) => dispatch(addProduct(payload),)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
