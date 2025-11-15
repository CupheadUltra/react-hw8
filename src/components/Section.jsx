import React from "react";

export const Section = ({ title, children }) => {
  return (
    <section style={{ marginBottom: 30 }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
