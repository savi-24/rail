import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Train() {
    const [train, setTrain] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/train')
            .then(res => {
                setTrain(res.data);
            })
            .catch(error => {
                console.error("There was an error fetching the train data:", error);
            });
    }, []);

    return (
        <div className="container" style={styles.container}>
            <h1>Train</h1>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Booking</th>
                        <th>Train Number</th>
                        <th>Train Name</th>
                        <th>Source Station</th>
                        <th>Destination Station</th>
                        <th>No of Seats</th>
                        <th>Available Seats</th>
                    </tr>
                </thead>
                <tbody>
                    {train.map((train, index) => (
                        <tr key={index}>
                            <td><button className="seat-button" style={styles.seatButton} onClick={() => window.location.href='seats.html'}>Seat</button></td>
                            <td>{train.train_no}</td>
                            <td>{train.train_name}</td>
                            <td>{train.scr_station}</td>
                            <td>{train.dest_station}</td>
                            <td>{train.no_of_seats}</td>
                            <td>{train.avail_seats}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1000px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#34495e',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: '#fff',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        backgroundColor: '#2c3e50',
        color: '#fff',
    },
    seatButton: {
        padding: '8px 15px',
        backgroundColor: 'slategray',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default Train;