import React, {useState} from 'react';
import styles from '../../../styles/contents/product/Product.css';
import axios from 'axios';

const BRAND_DATA = [{ name: 'anna sui' }, { name: 'benefit' }, { name: 'colourpop' }, { name: 'dior'}]

const Product = () => {
  const [currentTab, setCurrentTab] = useState('');
  const [brandList, setBrandList] = useState();

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
      {brandList&&brandList.map((e, index)=>{
        return(
            <div key={index} className='productItem'>
              <div className='itemWrap'>
              <div className='item_brand'>{e.brand}</div>
              <img className='item_img' src={e.api_featured_image} alt='화장품 이미지'/>
              <div className='item_name'>{e.name}</div>
              <div className='item_category'>{e.category}</div>
              <div className='item_price'>Price: ${e.price}</div>
            </div>
            </div>
          )
      })}
      </div>
    </div>
  )
}

export default Product;
