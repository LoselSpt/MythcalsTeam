import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Save, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Schema de validação
const resetPasswordSchema = z.object({
  password: z.string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'Senha deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'Senha deve conter pelo menos um número')
    .regex(/[^A-Za-z0-9]/, 'Senha deve conter pelo menos um caractere especial'),
  confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromUrl = searchParams.get('token');
    if (!tokenFromUrl) {
      setError('Token de redefinição de senha inválido ou expirado');
      return;
    }
    setToken(tokenFromUrl);
  }, [searchParams]);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!token) {
      setError('Token de redefinição de senha inválido ou expirado');
      return;
    }

    try {
      setError(null);
      await resetPassword(token, data.password);
      // Redirecionamento é feito no AuthContext
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao redefinir sua senha');
    }
  };

  if (!token && !error) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md text-center">
          <div className="card">
            <div className="animate-pulse">Verificando token...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-heading font-bold">Redefinir Senha</h1>
            <p className="text-white/70 mt-2">
              Crie uma nova senha para sua conta
            </p>
          </div>

          {/* Mensagem de erro */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400">
              {error}
              {error.includes('expirado') && (
                <div className="mt-2">
                  <Link to="/forgot-password" className="text-primary hover:text-primary/80">
                    Solicitar um novo link
                  </Link>
                </div>
              )}
            </div>
          )}

          {!error || !error.includes('expirado') ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Nova Senha */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                  Nova Senha
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

              {/* Confirmar Nova Senha */}
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-1">
                  Confirmar Nova Senha
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

              {/* Botão de Salvar */}
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
                    Salvando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Save size={18} className="mr-2" />
                    Salvar Nova Senha
                  </span>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <Link to="/login" className="btn-outline flex items-center justify-center mx-auto w-fit">
                <ArrowLeft size={18} className="mr-2" />
                Voltar para o login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;