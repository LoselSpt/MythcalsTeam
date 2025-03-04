import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Schema de validação
const loginSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mensagem de sucesso (ex: após redefinição de senha)
  const successMessage = location.state?.message;

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao fazer login');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-heading font-bold">Entrar no Projeto X</h1>
            <p className="text-white/70 mt-2">
              Entre com suas credenciais para acessar sua conta
            </p>
          </div>

          {/* Mensagem de sucesso */}
          {successMessage && (
            <div className="mb-6 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400">
              {successMessage}
            </div>
          )}

          {/* Mensagem de erro */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`input ${errors.email ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                placeholder="seu@email.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Senha */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-white/80">
                  Senha
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={`input pr-10 ${errors.password ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                  placeholder="••••••••"
                  {...register('password')}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white/80"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Lembrar-me */}
            <div className="flex items-center mb-6">
              <input
                id="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/50"
                {...register('rememberMe')}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-white/70">
                Lembrar-me
              </label>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Entrando...
                </span>
              ) : (
                <span className="flex items-center">
                  <LogIn size={18} className="mr-2" />
                  Entrar
                </span>
              )}
            </button>
          </form>

          {/* Link para registro */}
          <div className="mt-6 text-center">
            <p className="text-white/70">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-primary hover:text-primary/80">
                Registre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;