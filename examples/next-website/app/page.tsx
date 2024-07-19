'use client';

import {
  OpenAssistantGPTChat,
  TooltipProvider,
  ChatbotConfig,
} from '@openassistantgpt/ui';

export default function ChatPage() {
  const bot: ChatbotConfig = {
    id: 'clq6m06gc000114hm42s838g2',
    name: 'OpenAssistantGPT',

    chatTitle: 'Chat with OpenAssistantGPT',
    welcomeMessage:
      "Welcome to OpenAssistantGPT! 🚀 I'm your AI assistant, crafted using this platform. How may I assist you today?",
    chatMessagePlaceHolder: 'Ask us any question...',

    rightToLeftLanguage: false,

    bubbleColor: 'linear-gradient(to top left, #003366, #336699)',
    bubbleTextColor: '#FFFFFF',

    chatHeaderBackgroundColor: '#FFFFFF',
    chatHeaderTextColor: '#52525b',

    chatbotReplyBackgroundColor: '#e4e4e7',
    chatbotReplyTextColor: '#000000',

    userReplyBackgroundColor: '#e4e4e7',
    userReplyTextColor: '#000000',

    chatbotLogoURL:
      'https://gwetfkan2dovfoiz.public.blob.vercel-storage.com/search-8jZhOvOBPxuTmohrup5TPvSzrjsyog.png',
    chatInputStyle: 'default',

    chatHistoryEnabled: true,
    chatFileAttachementEnabled: true,

    displayFooterText: true,
    footerLink: 'https://www.openassistantgpt.io',
    footerTextName: 'OpenAssistantGPT',
  };

  return (
    <TooltipProvider>
      <OpenAssistantGPTChat
        chatbot={bot}
        path="/api/chat/assistant"
        defaultMessage=""
      />
    </TooltipProvider>
  );
}
