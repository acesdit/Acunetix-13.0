import React, { useEffect } from 'react';
import './Chatbot.css';

const BotpressChat = () => {
  useEffect(() => {
    const injectSrc = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
    const botSrc = 'https://files.bpcontent.cloud/2026/03/02/17/20260302171104-QSWM51L5.js';
    const logoUrl = '/src/assets/acunetix-logo.svg';

    const initBotpress = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: 'your-bot-id',
          botName: 'Acunetix Bot',
          botAvatarUrl: logoUrl,
          avatarUrl: logoUrl,
          introMessage: 'Welcome to Acunetix! How can I help you today?',
        });
      }
    };

    const appendBotScript = () => {
      if (!document.querySelector(`script[src="${botSrc}"]`)) {
        const botScript = document.createElement('script');
        botScript.src = botSrc;
        botScript.onload = initBotpress;
        document.body.appendChild(botScript);
      } else {
        initBotpress();
      }
    };

    const injectTag = document.querySelector(`script[src="${injectSrc}"]`);
    if (window.botpress || window.botpressWebChat) {
      appendBotScript();
    } else if (injectTag) {
      const waitForInject = setInterval(() => {
        if (window.botpress || window.botpressWebChat) {
          clearInterval(waitForInject);
          appendBotScript();
        }
      }, 100);
      setTimeout(() => {
        clearInterval(waitForInject);
        appendBotScript();
      }, 5000);
    } else {
      const injectScriptTag = document.createElement('script');
      injectScriptTag.src = injectSrc;
      injectScriptTag.onload = appendBotScript;
      document.body.appendChild(injectScriptTag);
    }

    return () => {
      // Scripts remain loaded across route changes.
    };
  }, []);

  return null;
};

export default BotpressChat;