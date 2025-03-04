import React from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Dados simulados para o dashboard
  const notifications = [
    {
      id: 1,
      title: 'Atualização do sistema',
      message: 'Nova versão disponível',
      time: '2 horas atrás',
    },
    {
      id: 2,
      title: 'Novo evento',
      message: 'Participe do nosso próximo evento online',
      time: '1 dia atrás',
    },
    {
      id: 3,
      title: 'Mensagem do administrador',
      message: 'Bem-vindo ao Projeto X!',
      time: '3 dias atrás',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: '⭐',
      date: 'Aguardando Registros Do Ether',
      time: '66:66',
    },
    {
      id: 2,
      title: '⭐',
      date: 'Aguardando Registros Do Ether',
      time: '66:66',
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Dashboard</h1>
          <p className="text-white/70">
            Bem-vindo de volta,{' '}
            <span className="text-white font-medium">{user?.name}</span>
          </p>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/70 text-sm">Nível de Acesso</p>
                <h3 className="text-2xl font-semibold mt-1">Alpha</h3>
              </div>
              <div className="bg-primary/20 p-3 rounded-full">
                <Users className="text-primary" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: '25%' }}
                ></div>
              </div>
              <p className="text-white/50 text-xs mt-2">
                25% para o próximo nível
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/70 text-sm">Notificações</p>
                <h3 className="text-2xl font-semibold mt-1">3 novas</h3>
              </div>
              <div className="bg-secondary/20 p-3 rounded-full">
                <Bell className="text-secondary" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-white/50 text-xs">
                Aguardando Informaçoes Da anomalia
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/70 text-sm">Próximo Evento</p>
                <h3 className="text-2xl font-semibold mt-1">
                  Aguardando Registros Do Ether
                </h3>
              </div>
              <div className="bg-primary/20 p-3 rounded-full">
                <Calendar className="text-primary" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-white/50 text-xs">
                Aguardando Registros Do Ether
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/70 text-sm">Mensagens</p>
                <h3 className="text-2xl font-semibold mt-1">0 lidas</h3>
              </div>
              <div className="bg-secondary/20 p-3 rounded-full">
                <MessageSquare className="text-secondary" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-white/50 text-xs">Sem Mensagens Do Ether</p>
            </div>
          </motion.div>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna da esquerda */}
          <div className="lg:col-span-2">
            <motion.div
              className="card mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">
                  Atualizações do Projeto
                </h2>
                <button className="text-primary text-sm hover:text-primary/80">
                  Ver todas
                </button>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-medium">Fase Alpha em Desenvolvimento</h3>
                  <p className="text-white/70 text-sm mt-1">
                    Nossa equipe está trabalhando na fase Alpha do Projeto X.
                    Estamos debatendo sobre historia, jogabilidade e marketing.
                  </p>
                  <p className="text-white/50 text-xs mt-2">
                    Atualizado em 4 de Março, 2025
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Novos Recursos Planejados</h3>
                  <p className="text-white/70 text-sm mt-1">
                    Esperando Respostas do Ether.
                  </p>
                  <p className="text-white/50 text-xs mt-2">
                    Atualizado em 4 de Março, 2025
                  </p>
                </div>

                <div className="border-l-2 border-white/30 pl-4">
                  <h3 className="font-medium">Nenhuma noticia</h3>
                  <p className="text-white/70 text-sm mt-1">Nenhuma noticia.</p>
                  <p className="text-white/50 text-xs mt-2">
                    Aguardando Registros do Ether
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">
                  Documentação
                </h2>
                <button className="text-primary text-sm hover:text-primary/80">
                  Ver todos
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="bg-primary/20 p-2 rounded-md mr-3">
                    <FileText className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">Guia de Introdução</h3>
                    <p className="text-white/50 text-xs">Pendente</p>
                  </div>
                  <button className="ml-auto text-white/70 hover:text-white">
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="bg-secondary/20 p-2 rounded-md mr-3">
                    <FileText className="text-secondary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">FAQ</h3>
                    <p className="text-white/50 text-xs">Ether</p>
                  </div>
                  <button className="ml-auto text-white/70 hover:text-white">
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="bg-primary/20 p-2 rounded-md mr-3">
                    <FileText className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium">Termos de Serviço</h3>
                    <p className="text-white/50 text-xs">Ether</p>
                  </div>
                  <button className="ml-auto text-white/70 hover:text-white">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coluna da direita */}
          <div>
            <motion.div
              className="card mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">
                  Notificações
                </h2>
                <button className="text-primary text-sm hover:text-primary/80">
                  Ver todas
                </button>
              </div>

              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start p-3 bg-white/5 rounded-lg"
                  >
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <Bell className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">
                        {notification.title}
                      </h3>
                      <p className="text-white/70 text-xs mt-1">
                        {notification.message}
                      </p>
                      <p className="text-white/50 text-xs mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">
                  Próximos Eventos
                </h2>
                <button className="text-primary text-sm hover:text-primary/80">
                  Ver todos
                </button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start p-3 bg-white/5 rounded-lg"
                  >
                    <div className="bg-secondary/20 p-2 rounded-full mr-3">
                      <Calendar className="text-secondary" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{event.title}</h3>
                      <p className="text-white/70 text-xs mt-1">{event.date}</p>
                      <p className="text-white/50 text-xs mt-1">{event.time}</p>
                    </div>
                    <button className="ml-auto text-white/70 hover:text-white">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="btn-outline w-full flex items-center justify-center">
                  <Calendar size={16} className="mr-2" />
                  Ver Calendário Completo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
