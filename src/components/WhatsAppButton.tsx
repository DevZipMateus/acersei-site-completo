
import { MessageSquare, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const predefinedMessages = [
    "Olá! Gostaria de saber mais sobre os serviços de contabilidade.",
    "Preciso de ajuda com a abertura de uma empresa.",
    "Quero solicitar um orçamento para folha de pagamento.",
    "Tenho dúvidas sobre imposto de renda.",
    "Gostaria de falar sobre assessoria tributária."
  ];

  const sendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5555991467177?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Message options */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 sm:w-96 max-w-[calc(100vw-2rem)] animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Como podemos ajudar?</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {predefinedMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => sendMessage(message)}
                className="w-full text-left p-3 text-xs sm:text-sm rounded-lg bg-gray-50 hover:bg-green-50 hover:text-green-700 transition-colors border border-transparent hover:border-green-200 leading-relaxed"
              >
                {message}
              </button>
            ))}
            <button
              onClick={() => sendMessage("Olá! Preciso de ajuda.")}
              className="w-full text-left p-3 text-xs sm:text-sm rounded-lg bg-green-50 text-green-700 border border-green-200 font-medium"
            >
              💬 Conversa personalizada
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-float"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
