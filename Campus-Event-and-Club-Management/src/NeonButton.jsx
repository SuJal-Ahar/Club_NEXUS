// src/NeonButton.jsx

import React from 'react';
import './NeonButton.css'; // We'll create this CSS file next

// Define the component, accepting 'text' and 'onClick' props
const NeonButton = ({ text, onClick }) => {
  return (
    <button className="neon-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default NeonButton;