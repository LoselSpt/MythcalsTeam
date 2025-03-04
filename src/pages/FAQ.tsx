import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Lista de FAQs
  const faqs: FAQItem[] = [
    {
      question: 'O que é o Projeto X?',
      answer:
        'O Projeto X é um novo jogo em desenvolvimento pela Mythcals Team, que promete uma experiência única combinando narrativa envolvente e mecânicas inovadoras.',
      category: 'geral',
    },
    {
      question: 'Quando será lançado o jogo?',
      answer:
        'O lançamento está previsto para 2035. Atualmente estamos em fase de Criaçao com nossa equipe.',
      category: 'geral',
    },
    {
      question: 'Como posso participar do teste alpha?',
      answer:
        'Para participar do teste alpha, você precisa se registrar em nossa plataforma e aguardar um convite. Os convites serão enviados periodicamente para usuários selecionados quando o periodo de teste alpha começar.',
      category: 'alpha',
    },
    {
      question: 'Quais são os requisitos mínimos?',
      answer:
        'Os requisitos mínimos ainda estão sendo definidos durante a fase de desenvolvimento. Divulgaremos essas informações em breve.',
      category: 'tecnico',
    },
    {
      question: 'O jogo será gratuito?',
      answer:
        'O modelo de monetização ainda está em discussão. Mais informações serão divulgadas próximo ao lançamento.',
      category: 'geral',
    },
    {
      question: 'Como reportar um bug?',
      answer:
        'Bugs podem ser reportados através do nosso servidor Discord ou pela seção de suporte do site.',
      category: 'suporte',
    },
    {
      question: 'O jogo terá suporte para outros idiomas?',
      answer:
        'Sim, planejamos lançar o jogo em múltiplos idiomas, incluindo português, inglês e espanhol.',
      category: 'geral',
    },
    {
      question: 'Oque é Ether?',
      answer: 'Se Você não pode vê-lo, Não Deve Saber. Pelo menos não ainda.',
      category: 'Ether',
    },
  ];

  // Categorias únicas
  const categories = ['all', ...new Set(faqs.map((faq) => faq.category))];

  // Filtrar FAQs
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Toggle item
  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o Projeto X
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Busca */}
          <div className="relative mb-6">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50"
              size={20}
            />
            <input
              type="text"
              className="input pl-12"
              placeholder="Buscar pergunta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categorias */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lista de FAQs */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="card cursor-pointer transition-all"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium pr-8">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} className="text-primary" />
                  ) : (
                    <ChevronDown size={20} className="text-white/50" />
                  )}
                </div>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <p className="text-white/70">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70">Nenhuma pergunta encontrada.</p>
            </div>
          )}
        </motion.div>

        {/* Contato */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/70 mb-4">Não encontrou o que procurava?</p>
          <button className="btn-primary">Entre em Contato</button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
