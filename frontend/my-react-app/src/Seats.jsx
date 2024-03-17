import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Seat({ train_no }) {
    const [seatDetails, setSeatDetails] = useState([]);

    useEffect(() => {
        if (train_no) {
            // Fetch seat details for the selected train
            axios.get(`http://localhost:8081/api/seat/${train_no}`)
                .then(res => {
                    setSeatDetails(res.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the seat details:", error);
                });
        }
    }, [train_no]);

    return (
        <div className="container">
            <h1>Seat Details for Train Number {train_no}</h1>
            <table className="seat-table">
                <thead>
                    <tr>
                        <th>Seat Number</th>
                        <th>Seat Type</th>
                        <th>Seat Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {seatDetails.map((seat, index) => (
                        <tr key={index}>
                            <td>{seat.seatNumber}</td>
                            <td>{seat.seatType}</td>
                            <td>{seat.available ? 'Available' : 'Booked'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Seat;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Seats() {
//     const [seats, setSeats] = useState([]);

//     useEffect(() => {
//         // Fetch seat information from the server
//         axios.get('http://localhost:8081/api/seats')
//             .then(res => {
//                 setSeats(res.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the seat data:", error);
//             });
//     }, []);

//     return (
//         <div className="container" style={styles.container}>
//             <h1>Seat Information</h1>
//             <table style={styles.table}>
//                 <thead>
//                     <tr>
//                         <th>Seat Number</th>
//                         <th>Seat Type</th>
//                         <th>Seat Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {seats.map((seat, index) => (
//                         <tr key={index}>
//                             <td>{seat.seat_number}</td>
//                             <td>{seat.seat_type}</td>
//                             <td>{seat.seat_status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         maxWidth: '1000px',
//         margin: '20px auto',
//         padding: '20px',
//         backgroundColor: '#34495e',
//         borderRadius: '10px',
//         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         color: '#fff',
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse',
//         marginTop: '20px',
//         backgroundColor: '#2c3e50',
//         color: '#fff',
//     },
// };

// export default Seats;