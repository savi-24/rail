//ticket.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Ticket() {
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8081/api/passenger-ticket')
            .then(res => {
                setTicketDetails(res.data);
            })
            .catch(error => {
                console.error("There was an error fetching the ticket data:", error);
            });
    }, []);

    if (!ticket) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>Ticket Details</h1>
            <div className="ticket-info">
                <div className="ticket-item"><strong>Ticket Number:</strong> {ticket.ticketNumber}</div>
                <div className="ticket-item"><strong>Train Number:</strong> {ticket.train_no}</div>
                <div className="ticket-item"><strong>Source Station:</strong> {ticket.scr_station}</div>
                <div className="ticket-item"><strong>Destination Station:</strong> {ticket.dest_station}</div>
                <div className="ticket-item"><strong>Seat Number:</strong> {ticket.seat_no}</div>
                <div className="ticket-item"><strong>Seat Type:</strong> {ticket.seat_type}</div>
                <div className="ticket-item"><strong>Passenger Name:</strong> {ticket.passenger_name}</div>
                <div className="ticket-item"><strong>Passenger ID:</strong> {ticket.passenger-id}</div>
            </div>
            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #f0f0f0;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h1 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .ticket-info {
                    margin-top: 20px;
                }

                .ticket-item {
                    margin-bottom: 10px;
                }

                .ticket-item strong {
                    margin-right: 5px;
                }
            `}</style>
        </div>
    );
}

export default Ticket;