
import React from 'react';
import { Button } from '@/components/ui/button';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/8757";

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 mb-8 lg:mb-10">
          {/* Left column - Header Text */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <a 
              href={egestorLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Sistema de gestão empresarial
              </h2>
            </a>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-normal">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Right column - Video Container */}
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video 
                className="absolute inset-0 w-full h-full object-cover" 
                autoPlay 
                muted 
                loop 
                playsInline 
                poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
              >
                <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in">
          <a 
            href={egestorLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full max-w-xs sm:max-w-sm"
          >
            <button className="w-full py-3 sm:py-4 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
