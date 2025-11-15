import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
