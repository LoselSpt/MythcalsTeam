import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
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
            Política de Privacidade
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Última atualização: 4 De Março, 2025
          </p>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                1. Introdução
              </h2>
              <p className="text-white/70">
                A Mythcals Team está comprometida em proteger sua privacidade.
                Esta Política de Privacidade explica como coletamos, usamos e
                protegemos suas informações pessoais quando você usa nosso site
                e serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="text-white/70 mb-4">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Nome e informações de contato</li>
                <li>Endereço de email</li>
                <li>Informações de perfil</li>
                <li>Dados de uso e preferências</li>
                <li>Informações técnicas do dispositivo</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="text-white/70 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar sua experiência</li>
                <li>Comunicar-nos com você</li>
                <li>Processar transações</li>
                <li>Garantir a segurança da conta</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-white/70">
                Não vendemos, alugamos ou compartilhamos suas informações
                pessoais com terceiros, exceto conforme descrito nesta política.
                Podemos compartilhar suas informações com prestadores de
                serviços que nos ajudam a operar nosso site e fornecer nossos
                serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                5. Segurança
              </h2>
              <p className="text-white/70">
                Implementamos medidas de segurança técnicas e organizacionais
                adequadas para proteger suas informações pessoais contra acesso
                não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                6. Seus Direitos
              </h2>
              <p className="text-white/70 mb-4">
                Você tem os seguintes direitos em relação às suas informações
                pessoais:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Acessar suas informações</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Opor-se ao processamento de suas informações</li>
                <li>Retirar seu consentimento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                7. Cookies
              </h2>
              <p className="text-white/70">
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência em nosso site. Você pode controlar o uso de cookies
                através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                8. Alterações nesta Política
              </h2>
              <p className="text-white/70">
                Podemos atualizar esta política periodicamente. Quando fizermos
                alterações significativas, notificaremos você através de um
                aviso em nosso site ou por email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                9. Contato
              </h2>
              <p className="text-white/70">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre
                em contato conosco através do email: privacy@mythcalsteam.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
