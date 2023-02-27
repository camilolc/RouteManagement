import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import Logo from "../assets/react.svg";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo}></img>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>about</h1>}></Route>
          <Route path="users" element={<h1>Users</h1>}></Route>
          <Route path="/" element={<ShoppingPage />}></Route>
          {/* <Route path="/*" element={<Navigate to="/home" replace />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
