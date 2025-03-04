import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from './Logo';

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-dark/90 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
            <span className="ml-2 text-xl font-heading font-bold">Projeto X</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-white/80 hover:text-white transition-colors">
              Sobre
            </Link>
            <Link to="/noticias" className="text-white/80 hover:text-white transition-colors">
              Notícias
            </Link>
            <Link to="/comunidade" className="text-white/80 hover:text-white transition-colors">
              Comunidade
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <span>{user?.name}</span>
                  <ChevronDown size={16} />
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-dark border border-white/10 rounded-md shadow-lg py-1 z-10">
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/perfil" 
                      className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Meu Perfil
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white/80 hover:text-white transition-colors">
                  Entrar
                </Link>
                <Link to="/register" className="btn-primary">
                  Registrar
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/80 hover:text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/noticias" 
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </Link>
              <Link 
                to="/comunidade" 
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Comunidade
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>
                  <Link 
                    to="/perfil" 
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={18} className="mr-2" />
                    Meu Perfil
                  </Link>
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                  >
                    <LogOut size={18} className="mr-2" />
                    Sair
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link 
                    to="/login" 
                    className="btn-outline w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn-primary w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registrar
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;