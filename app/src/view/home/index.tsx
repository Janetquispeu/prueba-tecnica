import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handlePath = (path) => {
    navigate(path);
  }

  return (
    <div>
      <p>Links:</p>
      <div onClick={() => handlePath('form')} style={{display: 'block'}}>Form Client</div>
      <div onClick={() => handlePath('average')} style={{display: 'block'}}>Average Client</div>
      <div onClick={() => handlePath('list')}>List Clients</div>
    </div>
  )
}
