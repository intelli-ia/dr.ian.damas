import Image from "next/image";

const benefits = [
  {
    title: "Menos dor, menos tempo de internação, recuperação mais rápida",
    image: "/images/benefit-3.jpg",
    alt: "Paciente satisfeita com a recuperação",
  },
  {
    title: "Indicação cirúrgica apenas quando realmente necessário",
    image: "/images/benefit-2.jpg",
    alt: "Médico confiante com estetoscópio",
  },
  {
    title: "Atendimento direto com o cirurgião — do diagnóstico ao pós-operatório",
    image: "/images/benefit-4.jpg",
    alt: "Médica em atendimento",
  },
  {
    title: "Formação sólida, com atuação clínica e acadêmica reconhecida",
    image: "/images/benefit-1.jpg",
    alt: "Equipe cirúrgica experiente em sala de operação",
  },
  {
    title: "Cirurgias minimamente invasivas (videolaparoscopia)",
    image: "/images/benefit-5.jpg",
    alt: "Cirurgiões realizando procedimento minimamente invasivo",
  },
];

// Duplicamos os cards para o loop ser contínuo e sem saltos
const loopedBenefits = [...benefits, ...benefits];

export default function WhyChoose() {
  return (
    <section className="bg-secondary py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-14">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center">
          Por que escolher o{" "}
          <span className="text-tertiary">Dr. Ian Damas:</span>
        </h2>
      </div>

      {/* Faixa infinita */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6"
          style={{
            width: "max-content",
            animation: "marquee 22s linear infinite",
          }}
        >
          {loopedBenefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col rounded-sm overflow-hidden shadow-md flex-shrink-0"
              style={{ width: "280px" }}
            >
              <div className="relative bg-primary/20" style={{ height: "180px" }}>
                <Image
                  src={b.image}
                  alt={b.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-5 flex-1 flex items-center" style={{ minHeight: "80px" }}>
                <p className="text-primary font-semibold text-sm leading-relaxed">
                  {b.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
