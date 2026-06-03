"use client";

import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { trackGenerateLead } from "@/lib/gtag";

const WHATSAPP_LINK = "https://wa.me/5521975178377";

const cards = [
  {
    title: "Liderança em trauma abdominal",
    description: "Chefias em plantões críticos, decisões sob pressão real.",
  },
  {
    title: "Formação de excelência",
    description: "Especialista em cirurgias digestivas complexas.",
  },
  {
    title: "Reconhecimento e mídia",
    description: "Esteve na Globo e em portais médicos como fonte de confiança.",
  },
];

export default function Credentials() {
  return (
    <section className="bg-primary py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary text-center mb-8 lg:mb-14">
          Experiência que vai{" "}
          <span className="text-tertiary">além do consultório</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-14">
          {cards.map((card) => (
            <div key={card.title}>
              {/* Mobile */}
              <div className="md:hidden bg-secondary/10 border border-secondary/20 rounded-sm p-6 flex flex-col gap-3">
                <CheckIcon />
                <h3 className="text-secondary font-bold text-base leading-snug">{card.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">{card.description}</p>
              </div>
              {/* Desktop */}
              <GlowCard glowColor="orange" className="hidden md:flex flex-col gap-4 p-8 border-secondary/20">
                <CheckIcon />
                <h3 className="text-secondary font-bold text-lg leading-snug">{card.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">{card.description}</p>
              </GlowCard>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <ShinyButton
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackGenerateLead}
            className="bg-tertiary text-primary px-4 py-1.5 lg:px-10 lg:py-4"
          >
            <span className="flex items-center gap-3">
              <WhatsAppIcon />
              Agendar Consulta
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
      fill="none" stroke="#FE9601" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
