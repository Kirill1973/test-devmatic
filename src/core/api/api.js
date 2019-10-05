import { constants } from './constant';

export const api = {
  getUsersData: () => fetch(`${constants.apiUrl}/users`),
  addNewUser: data => fetch(`${constants.apiUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  getUserData: id => fetch(`${constants.apiUrl}/users/${id}`),
  updateHobbies: (data, id) => fetch(`${constants.apiUrl}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
};
