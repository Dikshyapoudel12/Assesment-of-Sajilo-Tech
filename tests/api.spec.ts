import axios from 'axios';  

const BASE_URL = 'https://petstore.swagger.io/v2';

interface Pet {
  id: number;
  name: string;
  status: 'available' | 'pending' | 'sold';
}
async function addPet(pet: Pet): Promise<Pet> {
  try {
    const response = await axios.post(`${BASE_URL}/pet`, pet, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('Pet added:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding pet:', error);
    throw error;
  }
}

// Function 2: Check if a pet exists by status
async function checkIfExists(petName: string, status: Pet['status']): Promise<boolean> {
  try {
    const response = await axios.get(`${BASE_URL}/pet/findByStatus`, {
      params: { status },
    });
    const pets: Pet[] = response.data;
    const exists = pets.some(p => p.name === petName);
    console.log(`Pet "${petName}" exists with status "${status}":`, exists);
    return exists;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
}

(async () => {
  const newPet: Pet = {
    id: Math.floor(Math.random() * 1000000), 
    name: 'Fluffy',
    status: 'available',
  };
  
  await addPet(newPet);

  const exists = await checkIfExists(newPet.name, newPet.status);
  console.log('Verification result:', exists);
})();