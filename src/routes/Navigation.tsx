import React, { Suspense } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Logo from "../assets/react.svg";
import { LazyPage2, LazyPage1, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";
import { Component } from "react";
export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo}></img>
            <ul>
              {routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
              {/* <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy3
              </NavLink>
            </li> */}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            {/* <Route path="lazy1" element={<LazyPage1 />}></Route>
          <Route path="lazy2" element={<LazyPage2 />}></Route>
          <Route path="lazy3" element={<LazyPage3 />}></Route>
          */}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
