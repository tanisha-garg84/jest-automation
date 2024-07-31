import React from 'react';

const ButtonWithClick = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonWithClick;
