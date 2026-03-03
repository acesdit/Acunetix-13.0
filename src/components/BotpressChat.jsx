import { useEffect } from 'react'

export default function BotpressChat() {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js'
    script1.async = true
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = 'https://files.bpcontent.cloud/2026/03/02/17/20260302171104-QSWM51L5.js'
    script2.defer = true
    document.head.appendChild(script2)

    const styleTimeout = setTimeout(() => {
      const style = document.createElement('style')
      style.id = 'acunetix-internal-style'
      style.textContent = `
        /* IN BotpressChat.jsx */
/* 1. Remove the Solid White Background */
.bpw-layout, .bpw-chat-container, .bpw-message-list-container {
  background: transparent !important;
}

/* 2. Style the Header to match the "Survive the Techfest" banner */
.bpw-header-container {
  background: rgba(255, 0, 0, 0.7) !important;
  backdrop-filter: blur(8px) !important;
  border-bottom: 2px solid #ff0000 !important;
  text-shadow: 0 0 10px #ff0000 !important;
}

/* 3. Ghostly Message Projections */
.bpw-from-bot .bpw-chat-bubble {
  background: rgba(255, 0, 0, 0.1) !important;
  border: 1px solid rgba(255, 0, 0, 0.4) !important;
  color: #ffffff !important;
}

/* 4. Glassmorphism for the Composer */
.bpw-composer {
  background: rgba(20, 20, 20, 0.85) !important;
  backdrop-filter: blur(10px) !important;
  border-top: 1px solid #ff0000 !important;
}
      `
      document.head.appendChild(style)
    }, 1500)

    return () => {
      clearTimeout(styleTimeout)
      const existing = document.getElementById('acunetix-internal-style')
      if (existing) existing.remove()
    }
  }, [])

  return <div id="bp-webchat-container" />
}