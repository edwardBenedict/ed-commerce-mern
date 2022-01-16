import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../../components/product/Product";
import { api } from "../../../helpers/functions/api";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
  };

  useEffect(async () => {
    const response = await api(`/api/products/${id}`, "GET");
    response.status === 200
      ? setProduct(response.data)
      : console.log("Error:", response.message);
  }, []);

  return (
    <div className="centerize">
      <h2>Update Product</h2>
      <div>
        <Product
          product={product}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
