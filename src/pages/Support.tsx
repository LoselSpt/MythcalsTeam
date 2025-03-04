import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Central de Ajuda
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Como podemos ajudar você hoje?
          </p>
        </motion.div>

        {/* Opções de Contato */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card text-center">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Email</h3>
            <p className="text-white/70 mb-6">
              Entre em contato através do nosso email de suporte
            </p>
            <a href="mailto:mythcalsteam@gmail.com" className="btn-primary">
              Enviar Email
            </a>
          </div>

          <div className="card text-center">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Discord</h3>
            <p className="text-white/70 mb-6">
              Participe do nosso servidor Discord para suporte em tempo real
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Entrar no Discord
            </a>
          </div>

          <div className="card text-center">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">FAQ</h3>
            <p className="text-white/70 mb-6">
              Encontre respostas para as perguntas mais frequentes
            </p>
            <Link to="/faq" className="btn-primary">
              Ver FAQ
            </Link>
          </div>
        </motion.div>

        {/* Documentação */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Documentação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold">
                    Guia de Início Rápido
                  </h3>
                  <p className="text-white/70">Primeiros passos no Projeto X</p>
                </div>
              </div>
              <button className="btn-outline w-full">Acessar Guia</button>
            </div>

            <div className="card">
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold">
                    Manual do Usuário
                  </h3>
                  <p className="text-white/70">
                    Documentação completa do projeto
                  </p>
                </div>
              </div>
              <button className="btn-outline w-full">Acessar Manual</button>
            </div>
          </div>
        </motion.div>

        {/* Formulário de Contato */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="card">
            <h2 className="text-2xl font-heading font-semibold mb-6">
              Envie sua Mensagem
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Seu nome"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Ass unto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="input resize-none"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
