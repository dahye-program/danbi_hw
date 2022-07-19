import React, {useState} from 'react';
import styles from '../../styles/Product.css';
import axios from 'axios';

const BRAND_DATA = [{ name: 'alva' }, { name: 'colourpop' }, { name: 'misa' }]

const Product = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [brandList, setBrandList] = useState();

  const getResultData = async function getBrandList(name){
    try {
      const response = await axios.get(`${'https://makeup-api.herokuapp.com/api/v1/products.json?brand='}${name}`);
      setBrandList(response.data);
    }
    catch (error) {
      console.log(error);
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
          <li key={index} className={`${index === currentTab ? 'tab focused' : 'tab'}`}
            onClick={() => selectBrandHandler(index, e.name)}>
          {e.name}
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
