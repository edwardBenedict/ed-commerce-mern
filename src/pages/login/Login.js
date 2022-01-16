import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../helpers/functions.js/api";

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postApi("/api/auth/login", credentials);
    response.status === 200
      ? navigate("/")
      : console.log("Error:", response.message);
  };

  return (
    <div className="centerize">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
