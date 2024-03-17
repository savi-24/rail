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

// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// API endpoint to get trains data
// app.get('/api/train', (req, res) => {
//     // let sql = `SELECT train_number, train_name, src_station, dest_station, no_of_seats, avail_seats FROM train;`;
//     let sql = `SELECT *from train;
//     db.query(sql, (err, result) => {
//         if (err) {
//             res.status(500).send('Server error');
//             return console.error(err.message);
//         }
//         res.json(result);
//     });


// app.post('/SignIn', (req, res) =>{
//     const { passenger_name, passenger_id, age, gender,phone_no } = req.body;

//     console.log(passenger_name, passenger_id, age, gender,phone_no);

//     const sql = `INSERT INTO passenger (passenger_name, passenger_id, age, gender,phone_no) VALUES ('${passenger_name}', '${passenger_id}', '${age}', '${gender}' ,'${phone_no}');`;
//     console.log("SQL Query:", sql);

//     db.query(sql, (err, result) => {
//         if (err) {
//             console.error("Database error:", err);
//             return res.status(500).json({ success: false, message: "An error occurred" });
//         }
//         console.log("New passenger details inserted:", result);
//         return res.json({ success: true, message: "New passenger details saved successfully" });
//     });
// });




      
  

  
app.listen(8081,()=>{
    console.log("Listening...")
})