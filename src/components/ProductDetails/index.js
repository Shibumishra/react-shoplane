import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../Ultis/Apis';
import axios from 'axios';
import Footer from '../Footer';

const ProductDetails = (props) => {
  const [Product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const [ selectImg, setSelectImg ] = useState();
  const { id } = useParams();

  const {
    brand = "",
    description = "",
    id: productId = null,
    isAccessory = null,
    name = "",
    photos = [],
    preview = "",
    price = null,
    size = [],
  } = Product;
  


  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(`${getProduct}${id}`);
        const data = response.data
        console.log(data);
        setSelectImg(data.preview)      
        setProduct(data)
        setLoader(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, []);

  return (
    <div>
      {loader ? (<h1>Loading...</h1>) : (
        <>
          <h1>Product Details - {id}</h1>
          <div className="product_details" key={id}>
            <div className="preview-card">
              <img className="preview-image" src={selectImg} />
            </div>
            <div className="content-card">
              <h1 className="product_D_name">{name}</h1>
              <h1 className="product_D_brand ">{brand}</h1>
              <h3 className="price_D_prefix">Price: Rs <span className=""> {price} </span> </h3>
              <h3 className="description">Description<p className="description_D_text">{description}</p></h3>
              <h3 className="product-preview">Product Preview</h3>
              <div>
                {photos.length &&
                  photos.map((item) => (
                    <img className="preview_D_photo" 
                    style={{border: selectImg === item ? "3px solid purple" : ""}}
                    src={item}
                    onClick={()=> setSelectImg(item)}
                  />))}
              </div>
              <button className="add-button"
                 onClick={() => {
                  props.history.push("/");
                }}
              >
                Click to Redirect to back
              </button>

            </div>
          </div>
        </>
      )}
      <Footer />
    </div>);
}

export default ProductDetails;