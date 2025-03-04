import React, { useEffect } from 'react';

interface SocialEmbedProps {
  type: 'youtube' | 'twitter' | 'discord';
  id?: string;
  className?: string;
}

const SocialEmbed: React.FC<SocialEmbedProps> = ({
  type,
  id,
  className = '',
}) => {
  // Variáveis de ambiente simuladas para as URLs das redes sociais
  const YOUTUBE_URL =
    'https://www.youtube.com/embed/PLH0CiPjpxuD3iqfDk-LALxqqj6bLmkWqO';
  const TWITTER_URL = 'https://x.com/mythcalsteam';
  const DISCORD_URL = 'https://discord.gg/mythcalsteam';

  useEffect(() => {
    if (type === 'twitter' && typeof window !== 'undefined') {
      // Verifica se o script já foi carregado antes
      if (
        !document.querySelector(
          'script[src="https://platform.twitter.com/widgets.js"]'
        )
      ) {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);
      } else {
        // Recarrega os widgets se o script já estiver no DOM
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      }
    }
  }, [type]);

  const renderEmbed = () => {
    switch (type) {
      case 'youtube':
        return (
          <iframe
            src={id ? `https://www.youtube.com/embed/${id}` : YOUTUBE_URL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        );

      case 'twitter':
        return (
          <div className="w-full h-full overflow-y-auto bg-white/5 rounded-lg p-4">
            <a
              className="twitter-timeline"
              href={TWITTER_URL}
              data-theme="dark"
              data-chrome="noheader nofooter noborders transparent"
            >
              Carregando tweets...
            </a>
          </div>
        );

      case 'discord':
        return (
          <iframe
            src={`https://discord.com/widget?id=${
              id || '1234567890123456789'
            }&theme=dark`}
            title="Discord Server Widget"
            allowTransparency={true}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center">
            Widget não disponível
          </div>
        );
    }
  };

  return <div className={`overflow-hidden ${className}`}>{renderEmbed()}</div>;
};

export default SocialEmbed;
