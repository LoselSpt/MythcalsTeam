import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, Mail, ArrowRight } from 'lucide-react';

const VerifyEmail: React.FC = () => {
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const email = location.state?.email || 'seu email';

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (token) {
      // Simulação de verificação de token (em produção, isso seria uma chamada real à API)
      const verifyToken = async () => {
        try {
          // Simulação para desenvolvimento
          // await api.post('/auth/verify-email', { token });
          
          // Simulação de sucesso após 2 segundos
          setTimeout(() => {
            setVerificationStatus('success');
          }, 2000);
        } catch (error) {
          console.error('Erro ao verificar email:', error);
          setVerificationStatus('error');
        }
      };
      
      verifyToken();
    }
  }, [searchParams]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-heading font-bold">Verificação de Email</h1>
            {verificationStatus === 'pending' && !searchParams.get('token') && (
              <p className="text-white/70 mt-2">
                Enviamos um email de verificação para <span className="text-white font-medium">{email}</span>
              </p>
            )}
          </div>

          {/* Conteúdo baseado no status */}
          <div className="text-center">
            {verificationStatus === 'pending' && !searchParams.get('token') ? (
              <>
                <div className="flex justify-center mb-6">
                  <Mail size={64} className="text-primary" />
                </div>
                <p className="mb-6">
                  Por favor, verifique sua caixa de entrada e clique no link de verificação que enviamos para ativar sua conta.
                </p>
                <div className="mb-6 p-3 bg-primary/20 border border-primary/30 rounded-md text-white/80">
                  <p>Não recebeu o email? Verifique sua pasta de spam ou solicite um novo email de verificação.</p>
                </div>
                <button className="btn-primary">
                  Reenviar Email de Verificação
                </button>
              </>
            ) : verificationStatus === 'pending' && searchParams.get('token') ? (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-6"></div>
                <p>Verificando seu email...</p>
              </div>
            ) : verificationStatus === 'success' ? (
              <>
                <div className="flex justify-center mb-6">
                  <CheckCircle size={64} className="text-green-500" />
                </div>
                <h2 className="text-xl font-heading font-semibold mb-4">Email Verificado com Sucesso!</h2>
                <p className="mb-6">
                  Sua conta foi ativada e você já pode acessar todos os recursos do Projeto X.
                </p>
                <Link to="/login" className="btn-primary flex items-center justify-center mx-auto w-fit">
                  Fazer Login <ArrowRight size={18} className="ml-2" />
                </Link>
              </>
            ) : (
              <>
                <div className="flex justify-center mb-6">
                  <XCircle size={64} className="text-red-500" />
                </div>
                <h2 className="text-xl font-heading font-semibold mb-4">Falha na Verificação</h2>
                <p className="mb-6">
                  O link de verificação é inválido ou expirou. Por favor, solicite um novo link de verificação.
                </p>
                <button className="btn-primary mb-4">
                  Reenviar Email de Verificação
                </button>
                <div className="mt-2">
                  <Link to="/login" className="text-primary hover:text-primary/80">
                    Voltar para o login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;