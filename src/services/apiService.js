import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  console.error('URL da API não definida. Verifique seu arquivo .env (VITE_API_URL).');
}

const apiClient = axios.create({
  baseURL: apiUrl,
});

export default {
  getNowPlaying() {
    return apiClient.get('/now-playing');
  },
  getFavorites() {
    return apiClient.get('/favorites');
  },
};