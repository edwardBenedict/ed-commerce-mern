import { useState } from "react";

const Register = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
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
    fetch("/api/auth/register", {
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            value={credentials.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={credentials.lastName}
            onChange={handleChange}
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
