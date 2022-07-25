import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import styles from "../../../styles/contents/product/Product.css";
import axios from "axios";
import { Link } from "react-router-dom";

const BRAND_DATA = [
  { name: "anna sui" },
  { name: "benefit" },
  { name: "colourpop" },
  { name: "dior" },
];

const Product = forwardRef((props, ref) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [brandList, setBrandList] = useState();
  const [searchList, setSearchList] = useState(brandList);

  const onBrandList = async function handleBrandList(name) {
    try {
      const response = await axios.get(
        `${"https://makeup-api.herokuapp.com/api/v1/products.json?brand="}${name}`
      );
      setBrandList(response.data);
      setSearchList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const selectBrandHandler = (index, name) => {
    setCurrentTab(index);
    onBrandList(name);
  };

  useEffect(() => {
    onBrandList(BRAND_DATA[0].name);
  }, []);

  useImperativeHandle(ref, () => ({
    handleSearch(input) {
      const response = brandList.filter((e) => {
        if (input === "") return searchList;
        else {
          return e.name.toLowerCase().includes(input.toLowerCase());
        }
      });
      input === "" ? setBrandList(searchList) : setBrandList(response);
    },
  }));

  return (
    <div className="productContainer">
      <div className="tabMenu">
        {BRAND_DATA.map((e, index) => {
          return (
            <li
              key={index}
              className={`tab ${index === currentTab ? "focused" : ""}`}
              onClick={() => selectBrandHandler(index, e.name)}
            >
              {e.name}
            </li>
          );
        })}
      </div>
      <div className="productWrapper">
        {brandList &&
          brandList.map((e, index) => {
            return (
              <Link key={index} to="product_detail" state={e}>
                <div className="productItem">
                  <div className="itemWrap">
                    <div className="item_brand">{e.brand}</div>
                    <img
                      className="item_img"
                      src={e.api_featured_image}
                      alt="화장품 이미지"
                    />
                    <div className="item_name">{e.name}</div>
                    <div className="item_category">{e.category}</div>
                    <div className="item_price">Price: ${e.price}</div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
});

export default Product;
