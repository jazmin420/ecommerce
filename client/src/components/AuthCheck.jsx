import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'


function AuthCheck({ isAuthenticated, user, children}) {

  const location = useLocation();

   if (
    !isAuthenticated &&
    (
      // location.pathname.includes("/shop/cart") || 
    location.pathname.includes("/shop/wishlist"))
  ) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  if (isAuthenticated) {
    if (location.pathname === "/") {
      if (user?.role === "admin") {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/shop/home" />;
      }
    }

    if (user?.role !== "admin" && location.pathname.includes("admin")) {
      return <Navigate to="/unauth" />;
    }

    if (user?.role === "admin" && location.pathname.includes("shop")) {
      return <Navigate to="/admin/dashboard" />;
    }
  }

  return <>{children}</>;
}

export default AuthCheck