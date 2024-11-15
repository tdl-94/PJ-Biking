import React, { useEffect, useState } from "react";
import CardProduct from "../../../Global/CardProduct/CardProduct";
import axios from "axios";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        "https://671646c833bc2bfe40bd38b4.mockapi.io/products?page=1&limit=9"
      );
      setProducts(response.data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <p>cac</p>
        </div>
        <div className=" col-8">
          <div className="row">
            {products.map((item) => (
              <div className="col-4">
                <CardProduct
                  key={item.id}
                  title={item.title}
                  type={item.type}
                  colors={item.colors}
                  image={item.img}
                  price={item.price}
                  sale={item.priceSale}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
