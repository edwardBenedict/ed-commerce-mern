import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../../components/product/Product";
import { formDataApi } from "../../../helpers/functions/api";

const AddProduct = () => {
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await formDataApi("/api/products/add", "POST", product);
    response.status === 200
      ? navigate("/products")
      : console.log("Error:", response.message);
  };

  return (
    <div className="centerize">
      <h2>Add Product</h2>
      <Product
        product={product}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
};

export default AddProduct;
