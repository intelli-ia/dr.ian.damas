"use client";

import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FloatingPaths } from "@/components/ui/background-paths";
import { trackGenerateLead, trackGoogleAdsConversion } from "@/lib/gtag";

const WHATSAPP_LINK = "https://wa.me/5521975178377";

export default function Hero() {
  return (
    <>
      {/* ── MOBILE ─────────────────────────────────────────── */}
      <section className="lg:hidden flex flex-col bg-primary min-h-screen">
        {/* Imagem no topo */}
        <div className="w-full flex justify-center">
          <img
            src="/images/Mask group.png"
            alt="Dr. Ian Damas"
            className="w-3/4 h-auto block"
          />
        </div>

        {/* Texto centralizado abaixo */}
        <div className="flex-1 flex flex-col items-center text-center gap-5 px-6 py-5">
          <h1 className="text-base font-bold text-secondary leading-snug">
            Cirurgião do Aparelho Digestivo.{" "}
            <span className="text-tertiary">
              Especialista em Laparoscopia e Trauma.
            </span>
          </h1>
          <p className="text-secondary/80 text-xs leading-relaxed max-w-xs">
            Cirurgias seguras, minimamente invasivas e com recuperação rápida —
            conduzidas por quem lidera equipes no maior centro de trauma do Rio
            de Janeiro.
          </p>
          <ShinyButton
            href={WHATSAPP_LINK}
              onClick={() => { trackGenerateLead(); trackGoogleAdsConversion(); }}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-1.5 w-fit"
          >
            <span className="flex items-center gap-2">
              <WhatsAppIcon />
              Agendar Consulta
            </span>
          </ShinyButton>
        </div>
      </section>

      {/* ── DESKTOP ────────────────────────────────────────── */}
      <section className="hidden lg:flex bg-primary min-h-screen relative overflow-hidden items-center">
        <FloatingPaths position={1} flip />
        <FloatingPaths position={-1} flip />

        <div className="absolute right-[8%] top-0 h-full z-10">
          <Image
            src="/images/Group 1171275949.png"
            alt="Dr. Ian Damas"
            width={520}
            height={900}
            className="h-full w-auto object-contain object-top"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-12 w-full py-20">
          <div className="w-max flex flex-col gap-10">
            <h1 className="text-4xl xl:text-5xl font-bold text-secondary leading-tight">
              <span className="block whitespace-nowrap">Cirurgião do</span>
              <span className="block whitespace-nowrap">Aparelho Digestivo.</span>
              <span className="block whitespace-nowrap text-tertiary">Especialista em</span>
              <span className="block whitespace-nowrap text-tertiary">Laparoscopia e Trauma.</span>
            </h1>
            <p className="text-xl text-secondary/80 leading-relaxed">
              <span className="block whitespace-nowrap">Cirurgias seguras, minimamente invasivas</span>
              <span className="block whitespace-nowrap">e com recuperação rápida — conduzidas por quem</span>
              <span className="block whitespace-nowrap">lidera equipes no maior centro de trauma do Rio de Janeiro.</span>
            </p>
            <ShinyButton
              href={WHATSAPP_LINK}
              onClick={() => { trackGenerateLead(); trackGoogleAdsConversion(); }}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-10 py-5 w-fit"
            >
              <span className="flex items-center gap-3">
                <WhatsAppIcon size={20} />
                Agendar Consulta
              </span>
            </ShinyButton>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
