import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../Footer';

const OrderConform = () => {
    const [home, setHome] = useState(false)
    return ( <>
    {home && <Redirect to="/" />}
    <div style={{marginTop: "100px"}} className="order-Conform">
         <Link to="order" style={{textDecoration: "none"}}>
         <img style={{height: "300px"}} src="https://shoplane.netlify.app/img/img_confirm.png" />
         <h3 style={{ textAlign: "center", color: "#000"}}>Order Placed Successfully!!</h3>
         <p style={{ textAlign: "center", color: "#000"}}>We have sent you an email with the order details</p>
         <button style={{marginLeft: "80px"}} className="add-button" onClick={() => setHome(true)}>CLick back to home</button>
         </Link>
    </div> 
    <Footer />
    </>
    );
}
 
export default OrderConform;