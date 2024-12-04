const BASE_URL = 'http://localhost:3000/api/phone/validate/'; 

/* fix the url above */
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
