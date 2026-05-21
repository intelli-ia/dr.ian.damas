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
    <section className="bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Topo: dois blocos lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
              Atendimento em ambiente{" "}
              <span className="text-tertiary">clínico e hospitalar:</span>
            </h2>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Especialidades:
            </h3>
            <ul className="flex flex-col gap-2">
              {specialties.map((s) => (
                <li key={s} className="flex items-center gap-3 text-primary/80">
                  <span className="w-2 h-2 rounded-full bg-tertiary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 mb-12" />

        {/* Locais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={loc}
              className="flex flex-col items-center text-center gap-3 p-6 border border-primary/20 rounded-sm"
            >
              <LocationIcon />
              <p className="text-primary font-semibold text-sm leading-snug">
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FE9601"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
