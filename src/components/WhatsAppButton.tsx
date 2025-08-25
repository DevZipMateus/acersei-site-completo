import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <Button
        className="bg-primary hover:bg-primary/90 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 animate-float border-2 border-white"
        onClick={() => window.open('https://wa.me/5555991467177', '_blank')}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;
