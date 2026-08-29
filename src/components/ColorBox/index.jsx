import React from 'react';
import './styles.css';

const ColorBox = ({ name, hex, bgClass, customStyle = {} }) => {
  return (
    <div className="color-box-container">
      <div 
        className={`color-swatch ${bgClass || ''}`} 
        style={{ backgroundColor: hex, ...customStyle }}
      />
      <div className="color-info">
        <span className="color-name">{name}</span>
        <span className="color-hex">{hex}</span>
      </div>
    </div>
  );
};

export default ColorBox;
