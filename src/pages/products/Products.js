import { useState, useEffect } from "react";
import { api } from "../../helpers/functions/api";

const Products = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const response = await api("/api/products", "GET");
    if (response.status === 200) {
      setProducts(response.data);
    } else {
      console.log("Error:", response.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    const response = await api(`/api/products/${id}`, "DELETE");
    if (response.status === 200) {
      getProducts();
    } else {
      console.log("Error:", response.message);
    }
  };

  return (
    <div className="m-10">
      <h2>Product</h2>
      <a href="/products/add">Add Product</a>
      {products &&
        products?.map((product) => (
          <div
            key={product._id}
            className="border-1-black mt-10 p-10 bor-rad-3"
          >
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>description: {product.description}</p>
            <p>category: {product.category}</p>
            <p>
              Created At:{" "}
              {new Date(product.createdAt)
                .toString()
                ?.replace("GMT+0100 (Central European Standard Time)", "CET")}
            </p>
            <p>
              Updated At:{" "}
              {new Date(product.updatedAt)
                .toString()
                ?.replace("GMT+0100 (Central European Standard Time)", "CET")}
            </p>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Products;
