const specialties = [
  "Cirurgia de vesícula",
  "Hérnias abdominais",
  "Câncer intestinal",
  "Traumas abdominais",
  "Complicações digestivas",
];

const locations = [
  "Consultório próprio no Centro do RJ",
  "Hospital Estadual Getúlio Vargas",
  "Hospital Estadual Alberto Torres",
  "Estrutura para cirurgias de urgência e eletivas",
];

export default function Attendance() {
  return (
    <section className="bg-secondary py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 lg:mb-16">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-primary leading-tight text-center lg:text-left">
              Atendimento em ambiente{" "}
              <span className="text-tertiary">clínico e hospitalar:</span>
            </h2>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-bold text-primary mb-3 text-center lg:text-left">Especialidades:</h3>
            <ul className="flex flex-col gap-2 items-center lg:items-start">
              {specialties.map((s) => (
                <li key={s} className="flex items-center gap-3 text-primary/80 text-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mb-8 lg:mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {locations.map((loc) => (
            <div
              key={loc}
              className="flex flex-col items-center text-center gap-2 lg:gap-3 p-4 lg:p-6 border border-primary/20 rounded-sm"
            >
              <LocationIcon />
              <p className="text-primary font-semibold text-xs lg:text-sm leading-snug">
                {loc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="#FE9601" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
