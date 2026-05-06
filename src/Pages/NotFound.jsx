import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" style={styles.btn}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff",
    textAlign: "center",
  },
  code: {
    fontSize: "120px",
    margin: "0",
    color: "#7C3AED",
  },
  title: {
    fontSize: "32px",
    margin: "10px 0",
  },
  text: {
    fontSize: "16px",
    maxWidth: "400px",
    marginBottom: "20px",
    color: "#cbd5f5",
  },
  btn: {
    padding: "10px 20px",
    background: "#7C3AED",
    color: "#000",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
};

export default NotFound;