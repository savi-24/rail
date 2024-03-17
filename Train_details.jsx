import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Train_details(props) {
    const { selectedStation} = props.location.state;
// function Train_details({ selectedStation }) {
    console.log(selectedStation)
    const [trainDetails, setTrainDetails] = useState([]);

    useEffect(() => {
        if (selectedStation) {
            // Fetch train details for the selected station
            axios.get(`http://localhost:8081/api/train_details/${selectedStation}`)
            .then(res => {
                    setTrainDetails(res.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the train details:", error);
                });
        }
    }, [selectedStation]);

    return (
        <div>
            <style>
                {`
                .container {
                    max-width: 800px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .train-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .train-table th, .train-table td {
                    padding: 10px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }

                .train-table th {
                    background-color: #f2f2f2;
                }
                `}
            </style>
            <h1>Train Details for {selectedStation}</h1>
            <table className="train-table">
                <thead>
                    <tr>
                        <th>Train Number</th>
                        <th>Train Name</th>
                        <th>Arrival Time</th>
                        <th>Departure Time</th>
                        <th>Day</th>
                    </tr>
                </thead>
                <tbody>
                    {trainDetails.map((train, index) => (
                        <tr key={index}>
                            <td>{train.train_no}</td>
                            <td>{train.train_name}</td>
                            <td>{train.arrivalTime}</td>
                            <td>{train.departureTime}</td>
                            <td>{train.day}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Train_details;