import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="section-center ">
        <Link to="/">
          <p className="">
            CRUD -
            <span> REDUX</span>
          </p>
        </Link>
        <Link className="btn request" to="/requests">
          Requests
        </Link>
        <Link to="/new-blog" className="btn ">Agregar Producto</Link>
      </div>
    </header>
  );
}

export default Header;
