import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Shield, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Seção Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Sobre o <span className="text-primary">Projeto X</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Uma nova experiência de jogo está prestes a ser revelada. Conheça
            mais sobre nosso projeto.
          </p>
        </motion.div>

        {/* Seção Visão */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Nossa Visão
            </h2>
            <p className="text-white/70 mb-4">
              O Projeto X nasceu da nossa paixão por RPGs e mundos ricos em
              histórias. Com uma equipe pequena, mas repleta de dedicação,
              estamos construindo um universo cheio de detalhes e riquezas para
              que nossos jogadores possam vivenciar grandes aventuras..
            </p>
            <p className="text-white/70">
              Acreditamos que cada jogador deve ser parte ativa na construção
              deste universo, contribuindo com suas próprias histórias e
              experiências.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2035</div>
                <p className="text-white/50">Ano de Lançamento</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-white/50">Estimativa De Jogadores Alpha</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <p className="text-white/50">Anos em Desenvolvimento</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-white/50">Feito no Brasil</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seção Valores */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Comunidade
              </h3>
              <p className="text-white/70">
                Valorizamos cada membro da nossa comunidade e suas contribuições
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Qualidade
              </h3>
              <p className="text-white/70">
                Comprometidos com a excelência em cada detalhe
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Ether</h3>
              <p className="text-white/70">
                Samos abençados pela força do ether
              </p>
            </div>
            <div className="card text-center">
              <div className="bg-primary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Preguiça
              </h3>
              <p className="text-white/70">
                Sempre buscando novas formas de nao fazer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Seção Time */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold mb-12">
            Conheça a Mythcals Team
          </h2>
          <div className="bg-white/5 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-white/70 mb-6">
              Somos um time apaixonado por jogos e tecnologia, com muita pouca
              experiência no desenvolvimento de experiências digitais . Nossa
              equipe reúne "talentos" de diversas áreas, desde desenvolvimento
              até design e narrativa.
            </p>
            <p className="text-white/70">
              Juntos, estamos construindo não apenas um jogo, mas um universo
              inteiro de possibilidades.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
