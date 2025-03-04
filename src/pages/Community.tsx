import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Star, Trophy } from 'lucide-react';
import SocialEmbed from '../components/SocialEmbed';

const Community: React.FC = () => {
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
            Nossa Comunidade
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Junte-se aos jogadores nessa nossa jornada
          </p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card text-center">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary" size={24} />
            </div>
            <div className="text-3xl font-bold mb-2">
              Todos aqueles que pertecem ao ether
            </div>
            <p className="text-white/70">Membros Ativos</p>
          </div>
          <div className="card text-center">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="text-primary" size={24} />
            </div>
            <div className="text-3xl font-bold mb-2">0+</div>
            <p className="text-white/70">Mensagens</p>
          </div>
          <div className="card text-center">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Star className="text-primary" size={24} />
            </div>
            <div className="text-3xl font-bold mb-2">R$0</div>
            <p className="text-white/70">Contribuições</p>
          </div>
          <div className="card text-center">
            <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Trophy className="text-primary" size={24} />
            </div>
            <div className="text-3xl font-bold mb-2">0</div>
            <p className="text-white/70">Eventos</p>
          </div>
        </motion.div>

        {/* Redes Sociais */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Conecte-se Conosco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card h-[400px]">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Discord
              </h3>
              <SocialEmbed type="discord" className="h-[340px]" />
            </div>
            <div className="card h-[400px]">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Twitter
              </h3>
              <SocialEmbed type="twitter" className="h-[340px]" />
            </div>
            <div className="card h-[400px]">
              <h3 className="text-xl font-heading font-semibold mb-4">
                YouTube
              </h3>
              <SocialEmbed type="youtube" className="h-[340px]" />
            </div>
          </div>
        </motion.div>

        {/* Eventos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-12">
            Próximos Eventos
          </h2>
          <div className="bg-white/5 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-white/70 mb-6">
              Fique ligado! Em breve teremos eventos especiais para nossa
              comunidade.
            </p>
            <button className="btn-primary">
              Inscrever-se para Notificações
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
