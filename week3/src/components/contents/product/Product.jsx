import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import styles from '../../../styles/contents/product/Product.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BRAND_DATA = [{ name: 'anna sui' }, { name: 'benefit' }, { name: 'colourpop' }, { name: 'dior'}]

const Product = forwardRef((props, ref) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [brandList, setBrandList] = useState();
  const [searchList, setSearchList] = useState('');

  const getResultData = async function getBrandList(name){
    try {
      const response = await axios.get(`${'https://makeup-api.herokuapp.com/api/v1/products.json?brand='}${name}`);
      setBrandList(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  const selectBrandHandler = (index, name) => {
    setCurrentTab(index);
    getResultData(name);
  };

  useEffect(()=> {
    getResultData(BRAND_DATA[0].name);
  },[])

  useImperativeHandle(
    ref, ()=>({
      search(input){
        const response = (brandList.filter((e) => {
          return e.name.toLowerCase().includes(input.toLowerCase());
        }))
        setSearchList(response)
      }
    }),
  )
  
  return(
    <div className='productContainer'>
      <div className='tabMenu'>
      {BRAND_DATA.map((e, index)=>{
        return(
          <li key={index} className={index === currentTab ? 'tab focused' : 'tab'}
            onClick={() => selectBrandHandler(index, e.name)}>
          {e.name}
          </li>)})}
      </div>
      <div className='productWrapper'>
      {searchList === '' ? brandList&&brandList.map((e, index)=>{
        return(
          <Link key={index} to="product_detail" state={e}>
            <div className='productItem'>
              <div className='itemWrap'>
              <div className='item_brand'>{e.brand}</div>
              <img className='item_img' src={e.api_featured_image} alt='화장품 이미지'/>
              <div className='item_name'>{e.name}</div>
              <div className='item_category'>{e.category}</div>
              <div className='item_price'>Price: ${e.price}</div>
            </div>
            </div>
            </Link>
          )}) : searchList && searchList.map((e, index)=>{
            return(
              <Link key={index} to="product_detail" state={e}>
                <div className='productItem'>
                  <div className='itemWrap'>
                  <div className='item_brand'>{e.brand}</div>
                  <img className='item_img' src={e.api_featured_image} alt='화장품 이미지'/>
                  <div className='item_name'>{e.name}</div>
                  <div className='item_category'>{e.category}</div>
                  <div className='item_price'>Price: ${e.price}</div>
                </div>
                </div>
                </Link>
          )})}
      </div>
    </div>
  )
})

export default Product;
