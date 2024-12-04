import axios from 'axios';

export const validatePhoneNumber = async (phoneNumber) => {
  const BASE_URL = 'http://localhost:3000/api/phone/validate/'; 
  const url = `${BASE_URL}${phoneNumber}`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    throw new Error('Error validating phone number with external API');
  }
};
