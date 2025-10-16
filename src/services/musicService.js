import { ref } from 'vue';

// A URL agora é dinâmica e será lida do seu arquivo .env apropriado
const WS_URL = import.meta.env.VITE_WS_URL;

export const nowPlaying = ref(null);

let socket = null;

export const connectMusicSocket = () => {
  if (!WS_URL) {
    console.error('URL do WebSocket não definida. Verifique seu arquivo .env (VITE_WS_URL).');
    return;
  }
  
  if (socket && socket.readyState === WebSocket.OPEN) {
    console.log('✅ Conexão WebSocket já está ativa.');
    return;
  }

  socket = new WebSocket(WS_URL);

  socket.onopen = () => {
    console.log('✅ Conectado ao serviço de música em tempo real!');
  };

  socket.onmessage = (event) => {
    try {
      const track = JSON.parse(event.data);
      nowPlaying.value = track;
      console.log('🎵 Música atualizada:', track);
    } catch (error) {
      console.error('Erro ao processar a mensagem do WebSocket:', error);
    }
  };

  socket.onclose = () => {
    console.warn('🔌 Conexão com o WebSocket foi fechada.');
  };

  socket.onerror = (error) => {
    console.error('❌ Erro no WebSocket:', error);
    nowPlaying.value = null;
  };
};

export const disconnectMusicSocket = () => {
  if (socket) {
    socket.close();
  }
};