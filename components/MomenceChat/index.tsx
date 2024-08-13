"use client"
import { useEffect } from 'react';

function MomenceChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.src = 'https://momence.com/plugin/webchat/webchat.js';
    script.setAttribute('host-id', '35160');
    script.setAttribute('token', 'J57RWmK8Ad');
    script.setAttribute('position', 'bottom-right');

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
    </>
  );
}

export default MomenceChat;
