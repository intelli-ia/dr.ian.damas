"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const specialties = [
  {
    name: "Cirurgia de Vesícula",
    icon: <VesiculaIcon />,
    symptoms: "Dor intensa no lado direito do abdômen após refeições gordurosas, enjoo e vômitos recorrentes.",
    importance: "Pedras na vesícula podem evoluir para infecções graves e pancreatite aguda. O diagnóstico precoce evita internações de urgência.",
    approach: "Dr. Ian realiza a colecistectomia videolaparoscópica com recuperação rápida e mínima dor — na maioria dos casos, alta no mesmo dia.",
  },
  {
    name: "Hérnias Abdominais",
    icon: <HerniaIcon />,
    symptoms: "Abaulamento visível na barriga ou virilha, dor ao esforço físico e sensação de peso ou desconforto local.",
    importance: "Sem tratamento, a hérnia pode crescer e causar estrangulamento intestinal — uma emergência cirúrgica que exige ação imediata.",
    approach: "Correção minimamente invasiva com técnica segura e retorno às atividades normais em poucos dias.",
  },
  {
    name: "Câncer Intestinal",
    icon: <CancerIcon />,
    symptoms: "Alterações persistentes no hábito intestinal, sangramento nas fezes, dor abdominal e perda de peso sem causa aparente.",
    importance: "Quando detectado precocemente, o câncer intestinal tem alta taxa de cura. O rastreamento regular é essencial para quem tem histórico familiar.",
    approach: "Cirurgia oncológica precisa, com acompanhamento humanizado do pré-operatório ao pós-operatório.",
  },
  {
    name: "Traumas Abdominais",
    icon: <TraumaIcon />,
    symptoms: "Lesões abdominais por acidentes, quedas ou impactos — podem envolver sangramento ou lesões internas invisíveis.",
    importance: "Traumas abdominais podem causar danos graves a órgãos internos que não aparecem externamente, exigindo avaliação cirúrgica imediata.",
    approach: "Dr. Ian lidera equipes especializadas no maior centro de trauma do Rio de Janeiro, com experiência em decisões críticas sob pressão.",
  },
  {
    name: "Complicações Digestivas",
    icon: <DigestiveIcon />,
    symptoms: "Dores abdominais persistentes, distensão, dificuldade de digestão, refluxo intenso ou alterações intestinais inexplicadas.",
    importance: "Sintomas digestivos crônicos podem indicar condições graves que precisam de investigação especializada para o diagnóstico correto.",
    approach: "Avaliação completa e individualizada — com indicação cirúrgica apenas quando realmente necessário.",
  },
];

const locations = [
  {
    name: "Consultório Particular",
    area: "Centro, Rio de Janeiro",
    description: "Consultas eletivas, avaliações e acompanhamento pós-operatório em ambiente confortável e reservado.",
  },
  {
    name: "Hospital Estadual Getúlio Vargas",
    area: "Penha, Rio de Janeiro",
    description: "Referência em cirurgias de urgência e trauma abdominal — onde Dr. Ian lidera equipes em casos críticos.",
  },
  {
    name: "Hospital Estadual Alberto Torres",
    area: "São Gonçalo, RJ",
    description: "Atendimento hospitalar de excelência para cirurgias eletivas e de urgência.",
  },
  {
    name: "Cirurgias Eletivas e de Urgência",
    area: "Infraestrutura completa",
    description: "Estrutura hospitalar para procedimentos de rotina e emergências, com equipe especializada disponível.",
  },
];

export default function Attendance() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-primary py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Título */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
            Atendimento em ambiente{" "}
            <span className="text-tertiary">clínico e hospitalar</span>
          </h2>
          <p className="text-secondary/60 text-sm lg:text-base mt-3 max-w-xl mx-auto">
            Entenda os principais sinais de alerta e como a abordagem do Dr. Ian Damas pode beneficiar o seu caso.
          </p>
        </div>

        {/* Especialidades */}
        <div className="flex flex-col divide-y divide-secondary/15 border border-secondary/15 rounded-sm mb-14 lg:mb-20">
          {specialties.map((s, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-4 px-5 py-5 lg:px-7 lg:py-6 text-left group"
              >
                <span className="text-tertiary flex-shrink-0">{s.icon}</span>
                <span className="text-secondary font-bold text-sm lg:text-base flex-1 group-hover:text-tertiary transition-colors">
                  {s.name}
                </span>
                <span className="text-tertiary text-xl flex-shrink-0 ml-2">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-5 pb-8 lg:px-7 lg:pb-10">
                      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-secondary/10 border-t border-secondary/10 pt-6">
                        {[
                          { label: "Sintomas comuns", text: s.symptoms },
                          { label: "Por que tratar logo", text: s.importance },
                          { label: "Abordagem do Dr. Ian", text: s.approach },
                        ].map((item, j) => (
                          <div key={j} className="flex flex-col gap-3 py-5 lg:py-0 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-px bg-tertiary flex-shrink-0" />
                              <p className="text-tertiary font-semibold text-xs uppercase tracking-[0.15em]">{item.label}</p>
                            </div>
                            <p className="text-secondary/60 text-sm leading-relaxed">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Locais */}
        <h3 className="text-xl lg:text-2xl font-bold text-secondary text-center mb-8 lg:mb-10">
          Onde o Dr. Ian <span className="text-tertiary">atende:</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {locations.map((loc, i) => (
            <div key={i} className="bg-secondary/10 rounded-sm p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-tertiary font-bold text-sm tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-tertiary/30" />
              </div>
              <h4 className="text-tertiary font-bold text-base lg:text-lg leading-snug">{loc.name}</h4>
              <p className="text-secondary/65 text-sm leading-relaxed">{loc.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function VesiculaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8 2 5 6 5 10c0 5 4 10 7 12 3-2 7-7 7-12 0-4-3-8-7-8z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function HerniaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a5 5 0 0 1 5 5c0 2-1 3.5-2 4.5L12 21l-3-8.5C8 11.5 7 10 7 8a5 5 0 0 1 5-5z" />
      <path d="M9.5 8.5 Q12 11 14.5 8.5" />
    </svg>
  );
}

function CancerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
      <path d="M7.05 7.05l1.41 1.41M15.54 15.54l1.41 1.41M7.05 16.95l1.41-1.41M15.54 8.46l1.41-1.41" />
    </svg>
  );
}

function TraumaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 L4.5 13.5 H11 L11 22 L19.5 10.5 H13 Z" />
    </svg>
  );
}

function DigestiveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3 C5 3 4 6 6 8 C8 10 8 12 6 14 C4 16 5 19 8 20 C11 21 13 19 12 16 C11 13 13 11 15 12 C17 13 18 10 16 8 C14 6 15 3 12 3" />
    </svg>
  );
}
