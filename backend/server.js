const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"DBMS@savi07",
    database:"rail"
});

  

app.post('/login',(req,res)=>{
    const {passenger_name,passenger_id}=req.body
    console.log(passenger_name,passenger_id)
    const sql=`SELECT * FROM passenger WHERE passenger_name = '${passenger_name}' AND passenger_id= '${passenger_id}';`;
    console.log("SQL Query:", sql);

    db.query(sql, [req.body.passenger_name],(err ,data)=>{
        console.log(err)
      try{ 
        if(err) return res.json("Error");
        if(data.length > 0){
            return res.json("Login Successfull")
        }else{
            return res.json("Invalid username ")
        }}
        catch{
            console.log("err")
        }
    }) 
})




app.post("/signin", (req, res) => {
    const { passenger_name, passenger_id, age, gender, phone_no } = req.body;
    console.log(passenger_name, passenger_id, age, gender, phone_no);
  
    const sql = `INSERT INTO passenger (passenger_name, passenger_id, age, gender, phone_no) 
    VALUES 
    ('${passenger_name}', '${passenger_id}', '${age}', '${gender}', ${phone_no});`;
    console.log("SQL Query:", sql);
  
    db.query(sql, [req.body.passenger_name], (err, data) => {
      console.log(err);
      try {
        if (err) return res.json("Error");
        if (data) {
          return res.json("Signin Successfull");
        } else {
          return res.json("Invalid details ");
        }
      } catch {
        console.log("err");
      }
    });
  });

  db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.get('/api/train', (req, res) => {
  const sql = 'SELECT * FROM train';
  
  // Execute the query
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    };
    // Send the query result as JSON response
    res.json(result);
  });
});


app.get('/api/station', (req, res) => {
  // SQL query to select all station names from the station table
  const sql = 'SELECT * FROM station';
  // Execute the SQL query
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error fetching station names:', err);
          res.status(500).json({ error: 'An error occurred while fetching station names' });
          return;
      }
      // Extract station names from the query result
      const station = result.map(row => row.station_name);
      // Send station names as JSON response
      res.json(station);
      console.log(station)
  });
});



app.get('/api/train_details', (req, res) => {
  const sql = 'SELECT * FROM train_details';
  
  // Execute the query
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Server error');
      return;
    };

    // Send the query result as JSON response
    res.json(result);
  });
});

// app.get('/api/station/:stationName', (req, res) => {
//     const stationName = req.params.stationName;
//     // SQL query to select train details for the specified station
//     const sql = 'SELECT * FROM train_details WHERE station = ?';
//     // Execute the SQL query with stationName as parameter
//     db.query(sql, [stationName], (err, result) => {
//         if (err) {
//             console.error('Error fetching train details:', err);
//             res.status(500).json({ error: 'An error occurred while fetching train details' });
//             return;
//         }
//         res.json(result);
//     });
// });




app.get('/api/seats/:train_no', (req, res) => {
  const train_no = req.params.train_no;
  const sql = 'SELECT * FROM seats WHERE train_no = ?';

  db.query(sql, train_no, (err, result) => {
      if (err) {
          console.error("Error fetching seat details:", err);
          res.status(500).json([]);
      } else {
          res.json(result);
      }
  });
});



// app.get('/api/passenger', (req, res) => {
//   const sql = SELECT * FROM passenger WHERE passenger_id = '${loggedInPassengerId}'; // Replace loggedInPassengerId with the actual logged-in passenger ID
//   db.query(sql, (err, result) => {
//       if (err) {
//           console.error("Error fetching passenger details:", err);
//           res.status(500).json({ error: "An error occurred while fetching passenger details" });
//       } else {
//           if (result.length > 0) {
//               res.json(result[0]); // Assuming there's only one passenger with the provided ID
//           } else {
//               res.status(404).json({ error: "Passenger not found" });
//           }
//       }
//   });
// });

// // server.js for passenger ticket
// app.get('/api/passenger-ticket', (req, res) => {
//   const passenger_id = req.query.passengerID; // Assuming you're passing passengerID as a query parameter
//   const sql = SELECT * FROM ticket WHERE passenger_id = ?;
//   db.query(sql, [passenger-id], (err, result) => {
//       if (err) {
//           res.status(500).send('An error occurred');
//       } else {
//           res.json(result[0]); // Assuming there's only one ticket associated with the passenger
//       }
//   });
// });

      
  

  
app.listen(8081,()=>{
    console.log("Listening...")
})