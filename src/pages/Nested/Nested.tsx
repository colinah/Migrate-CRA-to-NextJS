import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

export const Nested = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Routes>
        <Route
          path="1"
          element={
            <div>
              NEsted Component 1<Link to="/nested/2">Page 2</Link>
            </div>
          }
        />
        <Route
          path="2"
          element={
            <div>
              NEsted Component 2<Link to="/nested/1">Page 1</Link>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/nested/1" />} />
      </Routes>
    </div>
  );
};
