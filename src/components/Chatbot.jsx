import React, { useEffect, useState, useCallback } from 'react';
import jesterImg from '../assets/jester-logo.svg';
import './Chatbot.css';


const BotpressChat = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Prevent duplicate script injection (React strict mode)
    if (document.querySelector('script[src*="cdn.botpress.cloud/webchat"]')) {
      // Scripts already loaded — just check if API is ready
      const bp = window.botpress || window.botpressWebChat;
      if (bp && typeof bp.toggle === 'function') {
        setReady(true);
      }
      return;
    }

    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
    document.body.appendChild(script1);

    script1.onload = () => {
      if (!document.querySelector('script[src*="bpcontent.cloud"]')) {
        const script2 = document.createElement('script');
        script2.src = 'https://files.bpcontent.cloud/2026/03/02/17/20260302171104-QSWM51L5.js';
        document.body.appendChild(script2);
      }
    };

    // Poll for the botpress API to become available
    const interval = setInterval(() => {
      const bp = window.botpress || window.botpressWebChat;
      if (bp && typeof bp.toggle === 'function') {
        setReady(true);
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleOpen = useCallback(() => {
    const isOpen = document.body.classList.toggle('bp-chat-open');

    const bp = window.botpress || window.botpressWebChat;
    if (bp) {
      if (isOpen) {
        // Start a fresh conversation every time the chat opens
        if (typeof bp.newConversation === 'function') {
          bp.newConversation();
        } else if (typeof bp.resetConversation === 'function') {
          bp.resetConversation();
        }
        if (typeof bp.open === 'function') {
          bp.open();
        }
      } else if (!isOpen && typeof bp.close === 'function') {
        bp.close();
      } else if (typeof bp.toggle === 'function') {
        bp.toggle();
      }
    }
  }, []);

  return (
    <>
      {/* Custom Jester Launch Button */}
      <div className="fixed bottom-6 right-6 z-9999 group">
        {/* Pulsing Cyan Outer Glow */}
        <div className="absolute -inset-2 bg-[#00ffc8] rounded-full blur opacity-20 group-hover:opacity-60 animate-pulse transition duration-1000 group-hover:duration-200" />

        {/* Main Trigger Button */}
        <button
          onClick={handleOpen}
          className="relative flex items-center justify-center w-16 h-16 bg-black border-2 border-[#00ffc8] rounded-full shadow-[0_0_15px_rgba(0,255,200,0.4)] transform transition-transform group-hover:scale-110 active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center p-1">
            <img
              src={jesterImg}
              alt="Jester Protocol AI"
              className="w-full h-full object-contain rounded-full border border-[#00ffc8]/50 animate-[spin_8s_linear_infinite]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#00ffc8] rounded-full shadow-[0_0_10px_#00ffc8]" />
          </div>
        </button>


      </div>
    </>
  );
};

export default BotpressChat;