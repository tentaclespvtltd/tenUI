import React from "react";

export const Button = ({ variant = "primary", children, ...props }) => {
  const base = {
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: 500,
    cursor: "pointer",
  };

  const variants = {
    primary: {
      background: "#2563eb",
      color: "white",
      border: "none",
    },
    secondary: {
      background: "#e5e7eb",
      color: "#111",
      border: "1px solid #ccc",
    },
  };

  const style = { ...base, ...(variants[variant] || variants.primary) };

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
};
