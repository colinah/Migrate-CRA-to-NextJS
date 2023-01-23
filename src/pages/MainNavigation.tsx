import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Nested } from "./Nested/Nested";

export const MainNavigation = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/stocks"
          element={
            <div>
              This is the Stocks page<Link to="/">Home</Link>
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div>
              This is the Settings Pape<Link to="/">Home</Link>
            </div>
          }
        />
        <Route path="/nested/*" element={<Nested />} />
        <Route
          path="/"
          element={
            <div>
              This is the Home Page
              <div
                style={{
                  display: "flex",
                  columnGap: "20px",
                  justifyContent: "center",
                }}
              >
                <Link to="/stocks">Stocks</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/nested">Nested</Link>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};
