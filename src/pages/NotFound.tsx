import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-heading font-bold text-primary">404</h1>
          <h2 className="text-2xl font-heading font-semibold mt-4">
            Página Não Encontrada
          </h2>
          <p className="text-white/70 mt-2">
            A página que você está procurando se perdeu no caminho para o ether.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center">
            <Home size={18} className="mr-2" />
            Voltar para o Início
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
