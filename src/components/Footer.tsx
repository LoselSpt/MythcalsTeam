import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Youtube, Bot as Discord, Mail, Heart, Github } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark/95 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-heading font-bold">
                Projeto X
              </span>
            </div>
            <p className="mt-4 text-white/70 max-w-md">
              Um novo universo está prestes a ser revelado. Prepare-se para uma
              experiência única criada pela Mythcals Team.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://twitter.com/mythcalsteam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.youtube.com/@MythcalsTeam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://discord.gg/mythcalsteam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <Discord size={20} />
              </a>
              <a
                href="mailto:Mythcalsteam@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link
                  to="/noticias"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/suporte"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidade"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Mythcals Team. Todos os direitos
            reservados.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0 flex items-center">
            Feito com <Heart size={14} className="mx-1 text-secondary" /> 
            <a 
              href="https://github.com/LoselSpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              Losel <Github size={14} className="ml-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;