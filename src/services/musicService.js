import { ref } from 'vue';
import apiService from './apiService'; // Usando o serviço de API REST novamente

// A referência reativa que seu componente utiliza.
export const nowPlaying = ref(null);

// Variável para guardar a referência do nosso temporizador
let pollingInterval = null;

/**
 * Busca a música atual na API e atualiza o estado reativo.
 */
const fetchNowPlaying = async () => {
  try {
    const response = await apiService.getNowPlaying();
    nowPlaying.value = response.data;
    console.log('🎵 Música atualizada via polling:', response.data);
  } catch (error) {
    console.error('❌ Erro ao buscar música via polling:', error);
  }
};

/**
 * Inicia o processo de polling.
 * Faz uma chamada imediata e depois a cada 1 minuto.
 */
export const startMusicPolling = () => {
  if (pollingInterval) {
    clearInterval(pollingInterval);
  }

  fetchNowPlaying();

  pollingInterval = setInterval(fetchNowPlaying, 60000);
};

/**
 * Para o processo de polling para economizar recursos quando o componente não está visível.
 */
export const stopMusicPolling = () => {
  if (pollingInterval) {
    clearInterval(pollingInterval);
    pollingInterval = null; // Limpa a referência
    console.log('🛑 Polling de música interrompido.');
  }
};