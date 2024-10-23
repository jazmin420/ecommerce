import React from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div>
      <nav className="breadcrumb">
        <ul className="flex space-x-2">
          <li><Link to="/">Home</Link></li>
          <li>{'>'}</li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>
      <h1>Shop Page</h1>
      <div>
        <h2>Categories</h2>
        <Link to="/shop/men">Men</Link>
      </div>
    </div>
  );
}

export default Shop;
