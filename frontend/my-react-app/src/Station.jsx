import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Station() {
  const navigate = useNavigate(); // Hook for navigation

    const [station, setStation] = useState([]);
    const [selectedStation, setSelectedStation] = useState('');

    const handleTrain_details = () => {
      navigate('/Train_details');
    };
  

    useEffect(() => {
        // Fetch station names from the server

        axios.get('http://localhost:8081/api/station')
            .then(res => {
              console.log(res.data)

                setStation(res.data);

            })
            .catch(error => {
                console.error("There was an error fetching the station data:", error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Redirect to stationDetail.jsx passing selected station as query parameter
        navigate('/Train_details', { state: { selectedStation:'manglore' } });      }

    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Select Station</title>
                <style>
                    {`
                    body {
                        font-family: Arial, sans-serif;
                    }
        
                    .container {
                        max-width: 600px;
                        margin: 50px auto;
                        padding: 20px;
                        background-color: #f0f0f0;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
        
                    h1 {
                        text-align: center;
                    }
        
                    label {
                        display: block;
                        margin-bottom: 10px;
                    }
        
                    select, button {
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 20px;
                        text-color:black;
                        
                    }
        
                    button {
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
        
                    button:hover {
                        background-color: #0056b3;
                    }
                    `}
                </style>
            </head>
            <body>
                <div className="container">
                    <h1>Select Station</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="stationSelect">Select Station:</label>
                        <select id="stationSelect" name="station" onChange={(e) => setSelectedStation(e.target.value)}>
                            <option value="">Select a station</option>
                            {station.map((station, index) => (
                                <option key={index} value={station}>{station}</option>
                            ))}
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </body>
        </html>
    );
}

export default Station;