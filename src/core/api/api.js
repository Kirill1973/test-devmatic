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
  getUserData: id => fetch(`${constants.apiUrl}/users/${id}?_embed=hobbies`),
  addHobby: data => fetch(`${constants.apiUrl}/hobbies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }),
  deleteHobby: id => fetch(`${constants.apiUrl}/hobbies/${id}`, { method: 'delete' }),
};
