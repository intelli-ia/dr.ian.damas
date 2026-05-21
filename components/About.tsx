export default function About() {
  return (
    <section className="bg-secondary relative overflow-hidden min-h-[680px] flex items-center">

      {/* Imagem — altura 100% da seção, largura automática (sem corte) */}
      <div className="absolute left-[6%] top-0 h-full flex items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Group 1171275949.png"
          alt="Dr. Ian Damas"
          className="h-full w-auto block"
        />
      </div>

      {/* Bio — lado direito */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
        <div className="ml-auto mr-[6%] max-w-xl flex flex-col gap-5">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-1">
              Conheça o{" "}
              <span className="text-tertiary">Dr. Ian Damas</span>
            </h2>
            <p className="text-primary/50 text-xs font-medium tracking-wide mt-2">
              CRM-RJ 1135430 – RQE N° 49458 – RQE N° 5150
            </p>
          </div>
          <p className="text-primary/80 leading-relaxed">
            Eu sou o Dr. Ian Damas, cirurgião geral e do aparelho digestivo e
            estou aqui para cuidar de você.
          </p>
          <p className="text-primary/80 leading-relaxed">
            Sou especializado em Cirurgia do aparelho digestivo, e utilizo uma
            abordagem videolaparoscópica minimamente invasiva para garantir que
            você tenha a melhor experiência possível.
          </p>
          <p className="text-primary/80 leading-relaxed">
            Quero que saiba que estou à disposição para responder as suas
            perguntas e fornecer o apoio que você precisa durante todo o
            processo.
          </p>
          <p className="text-primary/80 leading-relaxed">
            Sinto uma profunda gratidão pela confiança que você deposita em
            mim e em minha equipe.
          </p>
          <p className="text-primary/80 leading-relaxed">
            Saiba que estamos totalmente comprometidos em cuidar de você de
            forma humanizada, porque{" "}
            <span className="text-tertiary font-semibold">
              a sua saúde e bem-estar são a nossa prioridade número um.
            </span>
          </p>
        </div>
      </div>

    </section>
  );
}
