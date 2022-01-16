import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../../components/product/Product";
import { formDataApi, api } from "../../../helpers/functions/api";

const UpdateProduct = () => {
  const { id } = useParams();
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
    const response = await formDataApi(`/api/products/${id}`, "PUT", product);
    response.status === 200
      ? navigate("/products")
      : console.log("Error:", response.message);
  };

  const getProduct = async () => {
    const response = await api(`/api/products/${id}`, "GET");
    response.status === 200
      ? setProduct(response.data)
      : console.log("Error:", response.message);
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
