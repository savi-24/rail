import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate(); // Hook for navigation
  const [train, setTrain] = useState(null); // Define state for train data

  // Function to handle navigation
  const handlePassenger = () => {
    navigate('/Passenger');
  };
  const handleTrain = () => {
    navigate('/Train');
  };
  const handleStation = () => {
    navigate('/Station');
  };

  const [passenger_name, setpassenger_name] = useState('');

  useEffect(() => {
    axios.get('/api/train')
      .then(response => {
        setTrain(response.data); // Update train state with fetched data
      })
      .catch(error => {
        console.error('Error fetching trains:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('/api/station')
      .then(response => {
        setTrain(response.data); // Update train state with fetched data
      })
      .catch(error => {
        console.error('Error fetching trains:', error);
      });
  }, []);

  
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundImage: "url('hometrain.jpg')", backgroundSize: 'flex', color: 'white' ,height:'100vh'
  }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <img src="logo.png" alt="Logo" style={{ width: '100px' }} /> {/* Replace 'logo.png' with the path to your logo */}
          <nav>
            {/* Use buttons for navigation */}
            <button onClick={handlePassenger} style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.3)', border: 'none', borderRadius: '5px', padding: '10px 20px', marginRight: '10px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Passenger</button>
            <button onClick={handleTrain} style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.3)', border: 'none', borderRadius: '5px', padding: '10px 20px', marginRight: '10px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Train</button>
            <button onClick={handleStation} style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.3)', border: 'none', borderRadius: '5px', padding: '10px 20px', marginRight: '10px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Station</button>
          </nav>
        </header>
        <div style={{ fontSize: '24px', marginBottom: '20px' }}>Welcome, {passenger_name}</div>
      </div>
    </div>
  );
}

export default Homepage;
