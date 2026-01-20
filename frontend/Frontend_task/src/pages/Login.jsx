import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import "../styles/auth.css";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token, res.data.user);

      window.location.href = "/dashboard";
    } 
    catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
     <nav className="navbar">
            <h2 className="logo">Notes App</h2>
          </nav>
    
    
    <div className="auth-container">

      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          No account? <a href="/register">Register</a>
        </p>

      </form>
    </div>
    </>
  );
};

export default Login;
