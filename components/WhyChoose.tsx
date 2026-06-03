const benefits = [
  {
    heading: "Recuperação Rápida",
    body: "Menos dor, menos tempo de internação, recuperação mais rápida",
  },
  {
    heading: "Indicação Precisa",
    body: "Indicação cirúrgica apenas quando realmente necessário",
  },
  {
    heading: "Do Início ao Fim",
    body: "Atendimento direto com o cirurgião — do diagnóstico ao pós-operatório",
  },
  {
    heading: "Excelência Comprovada",
    body: "Formação sólida, com atuação clínica e acadêmica reconhecida",
  },
  {
    heading: "Mínima Invasão",
    body: "Cirurgias minimamente invasivas (videolaparoscopia)",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-secondary py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-primary text-center mb-10 lg:mb-16">
          Por que escolher o{" "}
          <br className="lg:hidden" />
          <span className="text-tertiary">Dr. Ian Damas:</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`bg-primary rounded-sm p-8 lg:p-10 flex flex-col gap-6 lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-tertiary font-bold text-sm tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-tertiary/30" />
              </div>
              <h3 className="text-tertiary font-bold text-xl lg:text-2xl leading-snug">
                {b.heading}
              </h3>
              <p className="text-secondary/70 font-medium text-sm leading-relaxed flex-1">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
