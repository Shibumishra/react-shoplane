import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../actions';
import { Redirect } from 'react-router-dom';
import Footer from '../Footer';

const Cart = (props) => {
    const [home, setHome] = useState(false)
    return (<div>
        {home && <Redirect to="/order" />}
        <div className="checkout_content">
            <h1>Checkout</h1>
            <p style={{ fontSize: "20px" }}>Total items: {props.cart.length + 0}</p>
            <div className="content_C_wrapper">
                <div className="left_section">
                    <div >
                        {props.cart && props.cart.map((item) => (<>
                            <div className="checkout_card_wrapper">
                                <img className="checkout_card_image" src={item.preview} />
                                <div>
                                    <p className="checkout_card_header">{item.name}</p>
                                    <p className="checkout_item_count">X{item.id}</p>
                                    <p className="checkout_item_amount">price: Rs {item.price}</p>
                                </div>
                            </div>
                        </>))}
                    </div>

                </div>
                <div className="right_section">
                    <div className="place_order_card">
                        <h2>Total amount</h2>
                        <p>Amount: Rs {" "}
                            {props.cart &&
                                props.cart.reduce((acc, item) => acc + item.price, 0)}</p>

                                
                        <button
                            className="place_order_button"
                            onClick={() => {
                                localStorage.setItem('myData', JSON.stringify(props.cart));
                                props.clearAll()
                                setHome(true)
                            }}>Place Order </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>);
}



const mapStateToProps = (state) => ({
    cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
    clearAll: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
