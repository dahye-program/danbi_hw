import React, {useState} from 'react';
import styles from './Product.css';
// import api from '../../api/api';
// import { productBrand } from '../../api/Product';
import axios from 'axios';
import { useEffect } from 'react';

const testdata = [
  {
    id: 0,
    title: '브랜드1' 
  },
  {
    id: 1,
    title: '브랜드2' 
  },
  {
    id: 2,
    title: '브랜드3' 
  }
]

const Product = () => {
  async function test(){
    try {
      const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=alva");
      console.log(response)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    test();
  })
  

  console.log(fetch);
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return(
    <div className='productContainer'>
      <div className='tabMenu'>
      {testdata.map((e, index)=>{
        return(
          <li key={index} className={`${index === currentTab ? 'tab focused' : 'tab'}`}
            onClick={() => selectMenuHandler(index)}>
          {e.title}
          </li>)})}
      </div>
      <div className='productWrapper'>
        <div className='productItem'>
          
        </div>
      </div>
    </div>
  )
}

export default Product;
