import { InfiniteSlider } from "@/components/ui/infinite-slider";

const testimonials = [
  {
    quote: "Ótimo profissional, atencioso, fala com clareza sobre o procedimento.",
    name: "Viviane Franca",
    stars: 5,
  },
  {
    quote: "Um profissional excelente, atencioso e preocupado — acompanha o paciente durante todo período pré e pós cirurgia, independente do horário.",
    name: "Joana Silva",
    stars: 5,
  },
  {
    quote: null,
    highlight: true,
    name: "Cláudia Carvalho",
    stars: 5,
  },
  {
    quote: "Me senti acolhida desde a primeira consulta. Profissional humanizado e extremamente competente.",
    name: "Renata Souza",
    stars: 5,
  },
  {
    quote: "Cirurgia realizada com total segurança e recuperação muito mais rápida do que eu esperava.",
    name: "Marcos Oliveira",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-primary py-12 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 lg:mb-14">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary text-center">
          O que nossos{" "}
          <span className="text-tertiary">pacientes dizem</span>
        </h2>
      </div>

      <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <InfiniteSlider gap={16} duration={35} durationOnHover={80}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-64 lg:w-80 flex-shrink-0 bg-secondary/10 border border-secondary/20 rounded-sm p-5 lg:p-7 flex flex-col gap-4 lg:gap-5"
            >
              <span className="text-tertiary text-3xl leading-none font-serif select-none">"</span>
              <p className="text-secondary/90 text-xs lg:text-sm leading-relaxed flex-1">
                {t.highlight ? (
                  <>Eu amo esse doutor.{" "}<strong className="text-tertiary">Ele salvou a minha vida.</strong>{" "}Só isso!</>
                ) : t.quote}
              </p>
              <div>
                <p className="text-secondary font-bold text-xs lg:text-sm">{t.name}</p>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: t.stars }).map((_, s) => <StarIcon key={s} />)}
                </div>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FE9601">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
