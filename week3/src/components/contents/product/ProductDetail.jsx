import React from 'react';
import styles from '../../../styles/contents/product/ProductDetail.css';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const {state}  = location;

  return (
    <div className='detailContainer'>
      <div className='detailWrapper'>
      <h1 className='detail_name'>{state.name}</h1>
      <img className='detail_img' alt='화장품 사진' src={state.api_featured_image}/>
      <div className='detail_brand'>brand : <b>{state.brand}</b></div>
      <div className='detail_price'>price : <b>${state.price}</b></div>
      {/* <p className='detail_color'>color : <b>{productColor}</b></p> */}
      <p className='detail_description'>Description : <b>{state.description}</b></p>
    </div>
   </div>
  )
}

export default ProductDetail;
