import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import SocialEmbed from '../components/SocialEmbed';

// Variáveis de ambiente simuladas para as URLs das redes sociais
const TWITTER_URL = 'https://twitter.com/MythcalsTeam';
const DISCORD_URL = 'https://discord.gg/mythcalsteam';
const YOUTUBE_URL = 'https://www.youtube.com/@MythcalsTeam';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1506747958701-808cb3805b0f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
              Bem-vindo ao <span className="text-primary">Projeto X</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Um novo universo está prestes a ser revelado. Prepare-se
              para uma experiência única criada pela Mythcals Team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="btn-primary">
                Registrar-se
              </Link>
              <Link to="/sobre" className="btn-outline flex items-center">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Por que fazer parte do{' '}
              <span className="text-primary">Projeto X</span>?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Estamos criando uma experiência única que combina narrativa
              imersiva, jogabilidade inovadora e uma comunidade vibrante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 p-3 rounded-full w-fit mb-6">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Experiência Única
              </h3>
              <p className="text-white/70">
                Um mundo vasto e detalhado com histórias envolventes e
                personagens memoráveis que evoluem com suas escolhas.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-secondary/20 p-3 rounded-full w-fit mb-6">
                <Shield className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Acesso Exclusivo
              </h3>
              <p className="text-white/70">
                Seja um dos primeiros a explorar nosso universo com acesso
                antecipado a conteúdos exclusivos e atualizações sobre o Projeto
                X.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 p-3 rounded-full w-fit mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Comunidade Vibrante
              </h3>
              <p className="text-white/70">
                Junte-se a uma comunidade apaixonada de jogadores e contribua
                para o desenvolvimento do jogo com seu feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/95">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Conecte-se Conosco
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Acompanhe as últimas novidades e interaja com nossa comunidade
              através das redes sociais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* YouTube */}
            <div className="card h-80">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <a 
                  href={YOUTUBE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  YouTube
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </h3>
              <SocialEmbed type="youtube" className="h-64" />
            </div>

            {/* Twitter */}
            <div className="card h-80">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <a 
                  href={TWITTER_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Twitter
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </h3>
              <SocialEmbed type="twitter" className="h-64" />
            </div>

            {/* Discord */}
            <div className="card h-80">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <a 
                  href={DISCORD_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Discord
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </h3>
              <SocialEmbed type="discord" className="h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Pronto para fazer parte desta jornada?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Registre-se agora para garantir seu lugar no universo do Projeto X
              e receber atualizações exclusivas sobre o Alfa Fechado.
            </p>
            <Link to="/register" className="btn-primary text-lg px-8 py-3">
              Registrar-se Agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
