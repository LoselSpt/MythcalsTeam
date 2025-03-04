import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Schema de validação
const registerSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'Senha deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'Senha deve conter pelo menos um número')
    .regex(/[^A-Za-z0-9]/, 'Senha deve conter pelo menos um caractere especial'),
  confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
  terms: z.literal(true, {
    errorMap: () => ({ message: 'Você deve aceitar os termos e condições' }),
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register: registerUser } = useAuth();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError(null);
      await registerUser(data.name, data.email, data.password);
      // Redirecionamento é feito no AuthContext
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao registrar');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-heading font-bold">Criar uma Conta</h1>
            <p className="text-white/70 mt-2">
              Junte-se ao Projeto X e faça parte desta jornada
            </p>
          </div>

          {/* Mensagem de erro */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Nome */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                className={`input ${errors.name ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                placeholder="Seu nome"
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

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
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                Senha
              </label>
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

            {/* Confirmar Senha */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-1">
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`input pr-10 ${errors.confirmPassword ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                  placeholder="••••••••"
                  {...register('confirmPassword')}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white/80"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Termos e Condições */}
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/50"
                  {...register('terms')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-white/70">
                  Eu concordo com os{' '}
                  <Link to="/termos" className="text-primary hover:text-primary/80">
                    Termos de Serviço
                  </Link>{' '}
                  e{' '}
                  <Link to="/privacidade" className="text-primary hover:text-primary/80">
                    Política de Privacidade
                  </Link>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-400">{errors.terms.message}</p>
                )}
              </div>
            </div>

            {/* Botão de Registro */}
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
                  Registrando...
                </span>
              ) : (
                <span className="flex items-center">
                  <UserPlus size={18} className="mr-2" />
                  Registrar
                </span>
              )}
            </button>
          </form>

          {/* Link para login */}
          <div className="mt-6 text-center">
            <p className="text-white/70">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-primary hover:text-primary/80">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;