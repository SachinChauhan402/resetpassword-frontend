import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from 'react';
import axios from 'axios';



function App() {

  const [email, setEmail] = useState('');

    const handleChange = (event) => {
      setEmail(event.target.value);
    }

    useEffect(() => {
      sendEmail();
    }, []);
  
    const sendEmail = () => {
      axios.post('https://resetpassword-fcsa.onrender.com/forgot-password' , {email})
        .then(response => {
          console.log(response.data);
          
          // Update the email state with the response from the server
          setEmail(response.data.email);
        })
        .catch(error => {
          console.error(error, "User does not exist!!");
        });
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      
    sendEmail()
    
 };

  return (
    <div className="App">
      <p className="headings">Enter the email address associated with your account<br/>and we'll send you a link to reset your password.</p>
       <form className='form' onSubmit={handleSubmit }>
      <input type="email" value={email} onChange={handleChange} className="input" placeholder="Enter Your Email"></input>
      <button className="btn" type='submit'>Continue</button>
      </form>
      <p className='ptag'>Don't have an account?<a style={{color: "white" , cursor: "pointer"}}> Sign up</a></p>

 
    </div>
  );
}

export default App;
