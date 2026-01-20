import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/home.css";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
     
      <nav className="navbar">

        <h2 className="logo">Notes App</h2>

        <div className="nav-links">
          {user ? (
            <Link to="/dashboard">Dashboard</Link>
          ) : 
          (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>

      
      <section className="hero">
        <h1>Organize Your Notes Easily</h1>
        <p>
          A simple, secure, and fast notes application to manage your thoughts anytime, anywhere.
Built using React, Node.js, MySQL, and JWT authentication.
        </p>

        {user ? (
          <Link to="/dashboard" className="primary-btn">
            Go to Dashboard
          </Link>
        ) : (
          <Link to="/register" className="primary-btn">
            Get Started
          </Link>
          
        )}
    
      </section>

      {/* Content Section */}
      <section className="features">
        <div className="feature-card">
          <h3> Secure</h3>
          <p>JWT-based authentication ensures your notes are private and accessible only to you.
Your data is protected with industry-standard security practices.
</p>
        </div>

        <div className="feature-card">
          <h3> Notes</h3>
          <p>Built with React and REST APIs for a smooth and responsive user experience.
Optimized for speed and performance.
</p>
        </div>

        <div className="feature-card">
          <h3>Fast</h3>
          <p>Built with React and REST APIs for a smooth and responsive user experience.
Optimized for speed and performance.
</p>
        </div>
      </section> 
    </div>
  );
};

export default Home;
