

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000/'; 

const validatePhoneNumber = async (phoneNumber) => {
  try {
    const res = await fetch(`${BASE_URL}validate/${phoneNumber}`); 
    if (!res.ok) {
 
      throw new Error(`Failed to validate phone number: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
};

export { validatePhoneNumber };
