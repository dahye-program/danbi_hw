import React from 'react';
import styles from '../../../styles/contents/product/ProductDetail.css';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const productName = location.state.name;
  const productImg = location.state.img;
  const productBrand = location.state.brand;
  const productPrice = location.state.price;
  // const productColor = location.state.color;
  const productDescription = location.state.description;

  return (
    <div className='detailContainer'>
      <div className='detailWrapper'>
      <h1 className='detail_name'>{productName}</h1>
      <img className='detail_img' alt='화장품 사진' src={productImg}/>
      <div className='detail_brand'>brand : <b>{productBrand}</b></div>
      <div className='detail_price'>price : <b>${productPrice}</b></div>
      {/* <p className='detail_color'>color : <b>{productColor}</b></p> */}
      <p className='detail_description'>Description : <b>{productDescription}</b></p>
    </div>
   </div>
  )
}

export default ProductDetail;
