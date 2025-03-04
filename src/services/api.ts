import axios from 'axios';

// Criar instância do axios com configurações padrão
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('@MythcalsProjetoX:token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Tratamento de erros específicos
    if (error.response) {
      // Erro de autenticação
      if (error.response.status === 401) {
        localStorage.removeItem('@MythcalsProjetoX:token');
        window.location.href = '/login';
      }
      
      // Erro de validação
      if (error.response.status === 422) {
        return Promise.reject({
          message: 'Dados inválidos. Verifique os campos e tente novamente.',
          errors: error.response.data.errors,
        });
      }
    }
    
    // Erro de conexão
    if (error.code === 'ECONNABORTED') {
      return Promise.reject({
        message: 'Tempo de conexão esgotado. Verifique sua internet e tente novamente.',
      });
    }
    
    // Erro de rede
    if (!error.response) {
      return Promise.reject({
        message: 'Não foi possível conectar ao servidor. Verifique sua internet e tente novamente.',
      });
    }
    
    return Promise.reject(error);
  }
);