import React, { useState } from 'react';
import './Reg.css'; // Import your CSS file
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log(formData);
          try {
            const response = await axios.post('http://localhost:7000/user1',formData);
            console.log(response);
          } catch (msg) {
            console.log("msg"); 
          }
      };
  return (
 <>
 <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
   

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );


 </>
    )
}

export default Login