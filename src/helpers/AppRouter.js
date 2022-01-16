import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/add/AddProduct";
import UpdateProduct from "../pages/products/update/UpdateProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/update/:id" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
