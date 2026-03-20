import { faker } from '@faker-js/faker';

export const createUserData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}${Date.now()}@test.com`, 
    password: 'password123',
    firstName,
    lastName,
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile: faker.string.numeric(10)
  };
};