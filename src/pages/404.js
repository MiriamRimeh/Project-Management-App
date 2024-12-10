import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/home');
    }, 10000); // 10000 ms = 10 sec -> maybe change to 5 sec?

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
      <h2>404 Page</h2>
      <p>Redirecting to Home Page in 10 seconds...</p>
    </div>
  );
};

export default NoMatch;