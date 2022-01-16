import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../helpers/functions/api";

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
    const response = await api("/api/auth/login", "POST", credentials);
    response.status === 200
      ? navigate("/")
      : console.log("Error:", response.data.message);
  };

  return (
    <div className="centerize">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className={styles.input}
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className={styles.input}
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
