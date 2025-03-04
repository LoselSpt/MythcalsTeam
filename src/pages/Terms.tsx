import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
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
            Termos de Serviço
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
                1. Termos
              </h2>
              <p className="text-white/70">
                Ao acessar o site Projeto X, você concorda em cumprir estes
                termos de serviço, todas as leis e regulamentos aplicáveis e
                concorda que é responsável pelo cumprimento de todas as leis
                locais aplicáveis. Se você não concordar com algum desses
                termos, está proibido de usar ou acessar este site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                2. Uso da Licença
              </h2>
              <p className="text-white/70 mb-4">
                É concedida permissão para baixar temporariamente uma cópia dos
                materiais (informações ou software) no site Projeto X, apenas
                para visualização transitória pessoal e não comercial. Esta é a
                concessão de uma licença, não uma transferência de título e, sob
                esta licença, você não pode:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Modificar ou copiar os materiais;</li>
                <li>Usar os materiais para qualquer finalidade comercial;</li>
                <li>
                  Tentar descompilar ou fazer engenharia reversa de qualquer
                  software;
                </li>
                <li>
                  Remover quaisquer direitos autorais ou outras notações de
                  propriedade;
                </li>
                <li>Transferir os materiais para outra pessoa.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                3. Isenção de Responsabilidade
              </h2>
              <p className="text-white/70">
                Os materiais no site da Projeto X são fornecidos 'como estão'. A
                Mythcals Team não oferece garantias, expressas ou implícitas, e,
                por este meio, isenta e nega todas as outras garantias,
                incluindo, sem limitação, garantias implícitas ou condições de
                comercialização, adequação a um fim específico ou não violação
                de propriedade intelectual ou outra violação de direitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                4. Limitações
              </h2>
              <p className="text-white/70">
                Em nenhum caso a Mythcals Team ou seus fornecedores serão
                responsáveis por quaisquer danos (incluindo, sem limitação,
                danos por perda de dados ou lucro ou devido a interrupção dos
                negócios) decorrentes do uso ou da incapacidade de usar os
                materiais em Projeto X, mesmo que a Mythcals Team ou um
                representante autorizado tenha sido notificado oralmente ou por
                escrito da possibilidade de tais danos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                5. Precisão dos Materiais
              </h2>
              <p className="text-white/70">
                Os materiais exibidos no site da Projeto X podem incluir erros
                técnicos, tipográficos ou fotográficos. A Mythcals Team não
                garante que qualquer material em seu site seja preciso, completo
                ou atual. A Mythcals Team pode fazer alterações nos materiais
                contidos em seu site a qualquer momento, sem aviso prévio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                6. Links
              </h2>
              <p className="text-white/70">
                A Mythcals Team não analisou todos os sites vinculados ao seu
                site e não é responsável pelo conteúdo de nenhum site vinculado.
                A inclusão de qualquer link não implica endosso por parte da
                Mythcals Team do site. O uso de qualquer site vinculado é por
                conta e risco do usuário.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                7. Modificações
              </h2>
              <p className="text-white/70">
                A Mythcals Team pode revisar estes termos de serviço do site a
                qualquer momento, sem aviso prévio. Ao usar este site, você
                concorda em ficar vinculado à versão atual desses termos de
                serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                8. Lei Aplicável
              </h2>
              <p className="text-white/70">
                Estes termos e condições são regidos e interpretados de acordo
                com as leis do Brasil e você se submete irrevogavelmente à
                jurisdição exclusiva dos tribunais naquele estado ou localidade.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
