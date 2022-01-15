import { useState } from "react";

const Login = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    fetch("/api/auth/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(credentials),
    })
      .then(function (res) {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
