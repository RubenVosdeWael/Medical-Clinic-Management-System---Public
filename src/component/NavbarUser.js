import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarUser.css';

function NavbarUser() {
  const navigate = useNavigate();

  return (
    <div className="navbar-user">
      <h2 onClick={() => navigate(-1)}>Back</h2>
      <h2 onClick={() => navigate("/")}>Logout</h2>
    </div>
  );
}

export default NavbarUser;
