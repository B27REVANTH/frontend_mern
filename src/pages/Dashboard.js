import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div className="container">
      
      <Link to="/quiz-home" className="Link open-quiz" style={{
          borderRadius: '30px', textDecoration: 'none'
          
        }} >
        <h1>Open Quiz</h1>
      </Link>
     
      <button onClick={handleClick} className="button logout"  style={{
          borderRadius: '15px',
        }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;