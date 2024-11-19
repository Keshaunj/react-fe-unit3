import React from "react";
import { useState } from "react";
import { validatePhoneNumber } from "./phoneNumberServices";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleValidate = async () => {
    try {
      const data = await validatePhoneNumber(phoneNumber);
      setResponseMessage(JSON.stringify(data)); // my api object data being used as my response
    } catch (error) {
      setResponseMessage('Error validating this phone number!');
    }
  };

  return (
    <main>
      <h1>Spam Call Detector</h1>
      <input
        type="text"
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="Enter phone number"
      />
      <button onClick={handleValidate}>Search Phone Number</button>
      <p>Response: {responseMessage}</p>
    </main>
  );
};

export default App;