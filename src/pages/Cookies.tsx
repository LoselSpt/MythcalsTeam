import React from 'react';
import { motion } from 'framer-motion';

const Cookies: React.FC = () => {
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
            Política de Cookies
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Última atualização: 15 de Junho de 2025
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
                1. O que são Cookies?
              </h2>
              <p className="text-white/70">
                Cookies são pequenos arquivos de texto que são armazenados em seu 
                dispositivo quando você visita um site. Eles são amplamente utilizados 
                para fazer os sites funcionarem de maneira mais eficiente e fornecer 
                informações aos proprietários do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                2. Como Usamos os Cookies
              </h2>
              <p className="text-white/70 mb-4">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Manter você conectado durante sua visita</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Melhorar o desempenho do site</li>
                <li>Analisar como nosso site é usado</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Fornecer recursos de mídia social</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                3. Tipos de Cookies que Usamos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Cookies Essenciais</h3>
                  <p className="text-white/70">
                    Necessários para o funcionamento básico do site. O site não pode 
                    funcionar adequadamente sem estes cookies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Cookies de Preferências</h3>
                  <p className="text-white/70">
                    Permitem que o site lembre suas escolhas e personalize sua experiência.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Cookies Estatísticos</h3>
                  <p className="text-white/70">
                    Ajudam a entender como os visitantes interagem com o site, coletando 
                    e relatando informações anonimamente.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Cookies de Marketing</h3>
                  <p className="text-white/70">
                    Usados para rastrear visitantes em diferentes sites para exibir 
                    anúncios relevantes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                4. Controle de Cookies
              </h2>
              <p className="text-white/70 mb-4">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Excluir todos os cookies já presentes em seu dispositivo</li>
                <li>Configurar seu navegador para impedir cookies</li>
                <li>Aceitar ou recusar cookies individualmente</li>
              </ul>
              <p className="text-white/70 mt-4">
                Note que impedir completamente o uso de cookies pode afetar a 
                funcionalidade deste e de muitos outros sites que você visita.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                5. Cookies de Terceiros
              </h2>
              <p className="text-white/70">
                Em alguns casos especiais, também usamos cookies fornecidos por terceiros 
                confiáveis. Por exemplo, este site usa o Google Analytics, que é uma das 
                soluções de análise mais difundidas e confiáveis da Web, para nos ajudar 
                a entender como você usa o site e como podemos melhorar sua experiência.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                6. Atualizações na Política
              </h2>
              <p className="text-white/70">
                Podemos atualizar esta política de cookies periodicamente. Recomendamos 
                que você verifique esta página regularmente para se manter informado 
                sobre quaisquer alterações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                7. Mais Informações
              </h2>
              <p className="text-white/70">
                Se você precisar de mais informações ou tiver alguma dúvida sobre nossa 
                política de cookies, entre em contato conosco através do email: 
                privacy@mythcalsteam.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;