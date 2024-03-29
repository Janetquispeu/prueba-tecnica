import axios from 'axios';

export const formService = {
  async add(values) {
    try {
      const { data } = await axios.post('https://app-firebase-3bc55.firebaseio.com/usuario.json', values);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async get() {
    try {
      const { data } = await axios.get('https://app-firebase-3bc55.firebaseio.com/usuario.json');
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
