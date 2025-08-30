import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * TRouter
 * A simple router manager for wrapping pages.
 *
 * @param {Object} props
 * @param {Array} props.routes - Array of { path, element }
 */
export default function TRouter({ routes }) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
