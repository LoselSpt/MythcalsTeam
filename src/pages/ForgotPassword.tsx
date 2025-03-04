import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Send } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Schema de validação
const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const { forgotPassword } = useAuth();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setError(null);
      await forgotPassword(data.email);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao processar sua solicitação');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-heading font-bold">Recuperar Senha</h1>
            <p className="text-white/70 mt-2">
              Enviaremos um link para redefinir sua senha
            </p>
          </div>

          {/* Mensagem de erro */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400">
              {error}
            </div>
          )}

          {/* Mensagem de sucesso */}
          {success ? (
            <div className="text-center">
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-md text-green-400">
                Enviamos um email com instruções para redefinir sua senha. Por favor, verifique sua caixa de entrada.
              </div>
              <Link to="/login" className="btn-outline flex items-center justify-center mx-auto w-fit">
                <ArrowLeft size={18} className="mr-2" />
                Voltar para o login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="mb-6">
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

              {/* Botão de Enviar */}
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
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Enviar Link
                  </span>
                )}
              </button>

              {/* Link para login */}
              <div className="mt-6 text-center">
                <Link to="/login" className="text-primary hover:text-primary/80 flex items-center justify-center">
                  <ArrowLeft size={16} className="mr-1" />
                  Voltar para o login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;