import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/api/v1';

const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080/api/v1'
  },
  timeout: 1000
});

export default {
  getAll: () => instance.get('person', {
    transformResponse: [function (data) {
      return data ? JSON.parse(data) : data;
    }]
  }),
  insertPerson: (personName) => instance.post('person', { name: personName }),
  getById: (personId) => instance.get('person/' + personId),
  deletePersonById: (personId) => instance.delete('person/' + personId)
}