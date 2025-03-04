import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  avatar?: string;
}

interface ProfileUpdateData {
  name: string;
  email: string;
  bio?: string;
  notifications?: boolean;
  newsletter?: boolean;
  twoFactorAuth?: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  updateProfile: (data: ProfileUpdateData, avatarFile?: File | null) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('@MythcalsProjetoX:token');
      
      if (token) {
        try {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Simular verificação de token (em produção, isso seria uma chamada real à API)
          // const response = await api.get('/auth/me');
          // setUser(response.data.user);
          
          // Simulação para desenvolvimento
          setUser({
            id: '1',
            name: 'Usuário Teste',
            email: 'usuario@teste.com',
            emailVerified: true
          });
        } catch (error) {
          console.error('Erro ao verificar autenticação:', error);
          localStorage.removeItem('@MythcalsProjetoX:token');
          api.defaults.headers.common['Authorization'] = '';
        }
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulação de login (em produção, isso seria uma chamada real à API)
      // const response = await api.post('/auth/login', { email, password });
      
      // Simulação para desenvolvimento
      const response = {
        data: {
          user: {
            id: '1',
            name: 'Usuário Teste',
            email,
            emailVerified: true
          },
          token: 'fake-jwt-token'
        }
      };
      
      const { user, token } = response.data;
      
      localStorage.setItem('@MythcalsProjetoX:token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(user);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw new Error('Credenciais inválidas. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulação de registro (em produção, isso seria uma chamada real à API)
      // await api.post('/auth/register', { name, email, password });
      
      // Simulação para desenvolvimento
      console.log('Registro simulado:', { name, email, password });
      
      navigate('/verify-email', { state: { email } });
    } catch (error) {
      console.error('Erro ao registrar:', error);
      throw new Error('Não foi possível completar o registro. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('@MythcalsProjetoX:token');
    api.defaults.headers.common['Authorization'] = '';
    setUser(null);
    navigate('/login');
  };

  const forgotPassword = async (email: string) => {
    try {
      setIsLoading(true);
      
      // Simulação de recuperação de senha (em produção, isso seria uma chamada real à API)
      // await api.post('/auth/forgot-password', { email });
      
      // Simulação para desenvolvimento
      console.log('Recuperação de senha solicitada para:', email);
    } catch (error) {
      console.error('Erro ao solicitar recuperação de senha:', error);
      throw new Error('Não foi possível processar sua solicitação. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Simulação de redefinição de senha (em produção, isso seria uma chamada real à API)
      // await api.post('/auth/reset-password', { token, password });
      
      // Simulação para desenvolvimento
      console.log('Redefinição de senha com token:', token);
      
      navigate('/login', { state: { message: 'Senha redefinida com sucesso!' } });
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      throw new Error('Não foi possível redefinir sua senha. O link pode ter expirado.');
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: ProfileUpdateData, avatarFile?: File | null) => {
    try {
      setIsLoading(true);
      
      // Simulação de atualização de perfil (em produção, isso seria uma chamada real à API)
      // const formData = new FormData();
      // formData.append('name', data.name);
      // formData.append('email', data.email);
      // if (data.bio) formData.append('bio', data.bio);
      // if (typeof data.notifications === 'boolean') formData.append('notifications', String(data.notifications));
      // if (typeof data.newsletter === 'boolean') formData.append('newsletter', String(data.newsletter));
      // if (typeof data.twoFactorAuth === 'boolean') formData.append('twoFactorAuth', String(data.twoFactorAuth));
      // if (avatarFile) formData.append('avatar', avatarFile);
      
      // const response = await api.put('/auth/profile', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      
      // Simulação para desenvolvimento
      console.log('Atualização de perfil simulada:', data, avatarFile);
      
      // Atualizar o usuário no estado
      setUser(prev => {
        if (!prev) return null;
        return {
          ...prev,
          name: data.name,
          email: data.email,
        };
      });
      
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      throw new Error('Não foi possível atualizar seu perfil. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};