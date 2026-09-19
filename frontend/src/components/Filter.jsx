import { useState } from 'react';
import './Filter.css';

export default function Filter({ text }) {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!isSelected);
  };

  return (
    <button 
      onClick={handleClick} 
      className={`filter ${isSelected ? 'active' : ''}`}
    >
      {text}
    </button>
  );
}