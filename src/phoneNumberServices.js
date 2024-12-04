const BASE_URL = 'https://spam-detector-backend-4b422dd56792.herokuapp.com/api/phone/validate/'; 


const validatePhoneNumber = async (phoneNumber) => {
  try {
    const res = await fetch(`${BASE_URL}${phoneNumber}`);
    if (!res.ok) {
      throw new Error('Failed to validate phone number');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { validatePhoneNumber };
