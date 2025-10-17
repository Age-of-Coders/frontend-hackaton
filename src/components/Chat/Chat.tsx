// App.tsx
import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';
import './chat.css';

export const Chat = () => {
    useEffect(() => {
        createChat({
            webhookUrl: 'http://localhost:5678/webhook/05ea00e0-5b2e-4522-823b-6aedf46d703f/chat',
            webhookConfig: {
                method: 'POST',
                headers: {}
            },
            target: '#n8n-chat',
            mode: 'window',
            chatInputKey: 'chatInput',
            chatSessionKey: 'sessionId',
            loadPreviousSession: true,
            metadata: {},
            showWelcomeScreen: false,
            defaultLanguage: 'en',
            initialMessages: ['¡Hola!♥️ Soy tu espacio de contención emocional. Estoy aquí para escucharte y acompañarte en lo que sientas respecto a vivir con diabetes.'],
            i18n: {
                en: {
                    title: 'Asistente',
                    subtitle: '',
                    footer: '',
                    getStarted: 'New Conversation',
                    inputPlaceholder: 'Has una pregunta..',
                    closeButtonTooltip: 'Close chat',
                }
            },
            enableStreaming: true,
        });
    }, []);

    return (<div></div>);
};