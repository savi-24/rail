import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    newUserId: '',
    confirmUserId: '',
    age: '',
    gender: '',
    phone_no: '', // Default gender
  });

  const formItems = [
    { name: "passenger_name", title: "Passenger Name" },
    { name: "passenger_id", title: "Passenger ID", type: "passenger_id" },
    { name: "re_enter_passenger_id", title: "Re-Enter Passenger ID", type: "passenger_id" },
    { name: "age", title: "Age", type: "number" },
    { name: "gender", title: "Gender" },
    { name: "phone_no", title: "Phone Number" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log form data
    console.log(formData);
    const { passenger_id, re_enter_passenger_id } = formData;
    if (passenger_id !== re_enter_passenger_id) {
      alert("Password does not match");
    } else {
      axios.post("http://localhost:8081/signin", formData).then((res) => {
        console.log(res);
        if (res.data == "Signin Successfull") navigate("/");
      });
    }
    // You can perform further actions here, like sending the data to a server using AJAX
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-center items-center w-screen h-100vh bg-cover" style={{backgroundImage: `url('.jpg')`}}>
      <div className="flex bg-white rounded-lg shadow-md p-8 max-w-lg">
        <div className="w-1/2 mr-8">
          <h2 className="text-3xl mb-6 text-gray-800 text-center">Enter Your Details</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {formItems.map(({ name, title, type }) => (
              <div key={name}>
                <label className="text-gray-800" htmlFor={name}>{title}</label>
                <input
                  type={type ? type : "text"}
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 self-start"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img src="train.jpg" alt="Side Image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
