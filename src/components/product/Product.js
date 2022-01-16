import React from "react";

const Product = ({ handleChange, handleSubmit, product }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="m-10">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={product.name}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            placeholder="brand"
            name="brand"
            onChange={handleChange}
            value={product.brand}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={product.description}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            placeholder="category"
            name="category"
            onChange={handleChange}
            value={product.category}
            required
          />
        </div>
        <div className="m-10">
          <input
            type="text"
            name="price"
            placeholder="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-10">
          <input type="file" name="file" onChange={handleChange} />
        </div>
        {product.image && (
          <div>
            <img src={product.image} alt={product.name} />
          </div>
        )}
        <div className="m-10">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Product;
