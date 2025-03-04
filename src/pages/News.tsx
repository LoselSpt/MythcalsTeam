import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  // Notícias simuladas
  const news = [
    {
      id: 1,
      title: 'Titulo',
      excerpt: 'Resumo',
      date: 'Data',
      category: 'Categoria',
      image: 'imagem',
    },
    {
      id: 2,
      title: 'Titulo',
      excerpt: 'Resumo.',
      date: '00',
      category: 'Categoria',
      image:
        'https://i.pinimg.com/1200x/56/16/ca/5616ca4b2d8a2aeeadab751f665b36d4.jpg',
    },
    {
      id: 3,
      title: 'Titulo',
      excerpt: 'Resumo',
      date: 'Data',
      category: 'Categoria',
      image: 'imagem',
    },
    {
      id: 4,
      title: 'Titulo',
      excerpt: 'Resumo',
      date: 'Data',
      category: 'Categoria',
      image: 'imagem',
    },
  ];

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
            Últimas Notícias
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Fique por dentro das últimas atualizações e novidades do Projeto X
          </p>
        </motion.div>

        {/* Grid de Notícias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-48 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-sm px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-white/50 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {item.date}
                </div>
                <h2 className="text-xl font-heading font-semibold mb-3">
                  {item.title}
                </h2>
                <p className="text-white/70 mb-4">{item.excerpt}</p>
                <button className="text-primary hover:text-primary/80 flex items-center text-sm font-medium">
                  Ler mais <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Paginação */}
        <div className="flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-white/10">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-white/10">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/70 hover:bg-white/10">
              4
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default News;
