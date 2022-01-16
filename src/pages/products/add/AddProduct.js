import { useState } from "react";
import { postApi } from "../../../helpers/functions.js/api";

const AddProduct = () => {
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
    const response = await postApi("/api/products/add", product);
    response.status === 200
      ? console.log("Added Successfully!")
      : console.log("Error:", response.message);
  };

  return (
    <div className="centerize">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="m-10">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            placeholder="brand"
            name="brand"
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            placeholder="category"
            name="category"
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-10">
          <button type="submit">Add Products</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
