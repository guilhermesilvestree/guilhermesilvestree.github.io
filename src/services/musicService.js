import { ref } from 'vue';
import apiService from './apiService';

export const nowPlaying = ref(null);
export const fetchFailed = ref(false);

let pollingInterval = null;

const fetchNowPlaying = async () => {
  try {
    const response = await apiService.getNowPlaying();
    nowPlaying.value = response.data;
    fetchFailed.value = false;
    console.log('🎵 Música atualizada via polling:', response.data);
  } catch (error) {
    console.error('❌ Erro ao buscar música via polling:', error);
    nowPlaying.value = null;
    fetchFailed.value = true;
  }
};

export const startMusicPolling = () => {
  if (pollingInterval) {
    clearInterval(pollingInterval);
  }
  fetchNowPlaying();
  pollingInterval = setInterval(fetchNowPlaying, 12000);
};

export const stopMusicPolling = () => {
  if (pollingInterval) {
    clearInterval(pollingInterval);
    pollingInterval = null;
    console.log('🛑 Polling de música interrompido.');
  }
};