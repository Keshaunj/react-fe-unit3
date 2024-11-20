import React from "react";
import { useState } from "react";
import { validatePhoneNumber } from "./phoneNumberServices";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleValidate = async () => {
    setIsLoading(true);
    setErrorMessage('');
    setResponseMessage(null);
    try {
      const data = await validatePhoneNumber(phoneNumber);
      setResponseMessage(data);
    } catch (error) {
      setErrorMessage('Error validating this phone number!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <h1>Spam Call Detector</h1>
      <input
        type="tel"
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="Enter phone number (ex. +1234567890)"
      />
      <button onClick={handleValidate}>
        {isLoading ? 'Validating...' : 'Search Phone Number'}
      </button>
      {errorMessage && <p>{errorMessage}</p>}
      {responseMessage && (
        <div>
          <p><strong>Valid:</strong> {responseMessage.valid ? 'Yes' : 'No'}</p>
          <p><strong>Number:</strong> {responseMessage.number}</p>
          <p><strong>Location:</strong> {responseMessage.location}</p>
          <p><strong>Carrier:</strong> {responseMessage.carrier}</p>
          <p><strong>Line Type:</strong> {responseMessage.line_type}</p>
          <p><strong>Country Name: </strong>{responseMessage.country_name}</p>
          <p><strong>Country Code: </strong>{responseMessage.country_code}</p>
        </div>
      )}
    </main>
  );
};

export default App;
