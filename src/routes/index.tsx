import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import gustavoPhoto from "@/assets/gustavo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Gustavo Etelvino — Administração, Logística e Operações",
      },
      {
        name: "description",
        content:
          "Técnico em Logística e graduando em Administração, com seis anos de Exército Brasileiro (HMASP). Disponível para oportunidades em São Paulo.",
      },
      {
        property: "og:title",
        content: "Gustavo Etelvino — Administração, Logística e Operações",
      },
      {
        property: "og:description",
        content: "Organização nos processos. Agilidade nas soluções.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511980659157?text=" +
  encodeURIComponent(
    "Olá, Gustavo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade."
  );
const EMAIL_URL = "mailto:Etelvinog9@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/gustavo-barboza-262077165";

function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.1-1.7 1.2-.4 0-.9.2-3.1-.7-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.5.2.5.3.1.2.1.6-.1 1.2Z" />
    </svg>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const PILLARS = [
  {
    n: "01",
    title: "Processos",
    desc: "Vivência em rotinas administrativas e faturamento de contas e despesas hospitalares.",
  },
  {
    n: "02",
    title: "Materiais",
    desc: "Abastecimento, conferência, estoque, controle de validade e preparação de kits.",
  },
  {
    n: "03",
    title: "Pessoas",
    desc: "Atendimento ao público, orientação de passageiros e contato com ex-alunos em ações de empregabilidade.",
  },
];

const TIMELINE = [
  {
    year: "Abr 2017 — Ago 2018",
    title: "Jovem Aprendiz Administrativo",
    org: "Drogaria Nova DM",
    desc: "Apoio ao recebimento, à organização e à reposição de medicamentos, controle de estoque e atendimento.",
  },
  {
    year: "Set — Dez 2018",
    title: "Apoio à Empregabilidade",
    org: "IOS — Instituto da Oportunidade Social",
    desc: "Atualização de banco de dados, contato com ex-alunos e prospecção de oportunidades.",
  },
  {
    year: "Mar 2019 — Mar 2025",
    title: "Soldado — Farmácia Central e Centro Cirúrgico",
    org: "Exército Brasileiro / HMASP",
    desc: "Materiais, estoque, controle de validade e faturamento hospitalar em um ambiente que exige organização.",
  },
  {
    year: "Abr 2025 — Atual",
    title: "Cobrador de Ônibus",
    org: "Sambaíba Transportes Urbanos",
    desc: "Atendimento e orientação de passageiros, cobrança de tarifas, manuseio de valores e fechamento diário de caixa.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-navy font-sans text-ice">
      {/* Ambient diagonal glass accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-[520px] rounded-full bg-accent/15 blur-[120px] drift" />
      <div className="pointer-events-none absolute top-1/3 right-[-160px] size-[460px] rounded-full bg-accent/10 blur-[120px] drift" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[380px] w-[900px] rotate-[-18deg] bg-gradient-to-r from-transparent via-accent/10 to-transparent floaty" />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-accent/15 bg-navy/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-md bg-accent font-display text-sm font-semibold text-navy">
              G
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-ice-strong">
              Gustavo Etelvino
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-ice/70 md:flex">
            <a className="transition-colors hover:text-ice-strong" href="#sobre">
              Sobre
            </a>
            <a className="transition-colors hover:text-ice-strong" href="#trajetoria">
              Trajetória
            </a>
            <a className="transition-colors hover:text-ice-strong" href="#competencias">
              Competências
            </a>
            <a className="transition-colors hover:text-ice-strong" href="#contato">
              Contato
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-navy ring-1 ring-accent transition-transform hover:-translate-y-0.5"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-navy/60" />
              <span className="relative inline-flex size-2 rounded-full bg-navy" />
            </span>
            WhatsApp
          </a>
        </div>
      </header>

      <main className="relative">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 lg:grid-cols-12 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="rise d1 mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-accent uppercase">
              <span className="size-1.5 rounded-full bg-accent" /> Administração · Logística ·
              Operações
            </p>
            <h1
              className="rise d2 font-display text-5xl leading-[1.05] font-medium tracking-tight text-ice-strong sm:text-6xl lg:text-7xl"
              style={{ maxWidth: "40ch" }}
            >
              Organização nos processos. Agilidade nas soluções.
            </h1>
            <p className="rise d3 mt-6 max-w-[52ch] text-base leading-relaxed text-ice/75 sm:text-lg">
              Técnico em Logística e graduando em Administração. Seis anos no Exército Brasileiro
              construíram meu rigor com materiais, prazos e procedimentos — hoje, coloco essa
              organização a serviço de pessoas e resultados.
            </p>
            <div className="rise d4 mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy ring-1 ring-accent transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ice-strong transition-transform hover:-translate-y-0.5"
              >
                Conhecer o perfil
              </a>
            </div>
            <div className="rise d4 mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <div>
                <span className="font-display text-2xl font-semibold text-ice-strong">6</span>
                <span className="ml-2 text-ice/60">anos no Exército</span>
              </div>
              <div>
                <span className="font-display text-2xl font-semibold text-ice-strong">Téc.</span>
                <span className="ml-2 text-ice/60">em Logística</span>
              </div>
              <div>
                <span className="font-display text-2xl font-semibold text-ice-strong">TOTVS</span>
                <span className="ml-2 text-ice/60">e pacote Office</span>
              </div>
            </div>
          </div>

          {/* PHOTO CARD 3D */}
          <div className="lg:col-span-5">
            <div className="card3d relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-accent/30 via-transparent to-accent/10 blur-sm" />
              <div className="relative rounded-[24px] border border-white/10 bg-navy-2/80 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between px-2 pt-1 pb-3">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-accent uppercase">
                    Dossiê profissional
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-ice/40 uppercase">SP · Brasil</span>
                </div>
                <img
                  src={gustavoPhoto}
                  alt="Foto profissional de Gustavo Etelvino"
                  className="aspect-[4/5] w-full rounded-[16px] object-cover"
                  loading="eager"
                />
                <div className="mt-3 flex items-center justify-between px-1">
                  <div>
                    <p className="font-display text-base font-semibold text-ice-strong">
                      Gustavo Etelvino
                    </p>
                    <p className="text-xs text-ice/55">Logística & Operações · São Paulo</p>
                  </div>
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium tracking-wide text-accent uppercase">
                    Disponível
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE / 3 PILARES */}
        <section id="sobre" className="border-t border-accent/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mb-12 max-w-[48ch]">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Sobre
              </p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ice-strong sm:text-4xl">
                Experiência que conecta processos e pessoas
              </h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal key={p.n} delay={i * 100}>
                  <div className="card3d h-full rounded-2xl border border-white/10 bg-navy-2/60 p-6 backdrop-blur-sm">
                    <span className="font-display text-4xl font-semibold text-accent/40">{p.n}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ice-strong">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ice/70">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRAJETÓRIA */}
        <section id="trajetoria" className="border-t border-accent/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mb-12 max-w-[48ch]">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Trajetória
              </p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ice-strong sm:text-4xl">
                Uma trajetória em evolução
              </h2>
            </Reveal>
            <ol className="relative space-y-8 border-l border-white/10 pl-8">
              {TIMELINE.map((t, i) => (
                <li key={t.year} className="relative">
                  <Reveal delay={i * 80}>
                    <span className="absolute top-1 -left-[41px] grid size-5 place-items-center rounded-full bg-accent ring-4 ring-navy">
                      <span className="size-1.5 rounded-full bg-navy" />
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-display text-lg font-semibold text-accent">
                        {t.year}
                      </span>
                      <span className="font-display text-lg font-medium text-ice-strong">
                        {t.title}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium tracking-wide text-ice/45 uppercase">
                      {t.org}
                    </p>
                    <p className="mt-1 max-w-[44ch] text-sm text-ice/65">{t.desc}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* COMPETÊNCIAS BENTO */}
        <section id="competencias" className="border-t border-accent/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="mb-12 max-w-[48ch]">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent uppercase">
                Competências & Ferramentas
              </p>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ice-strong sm:text-4xl">
                O que trago para a operação
              </h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              <Reveal className="md:row-span-2">
                <div className="card3d h-full rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-navy-2/60 p-6">
                  <p className="text-xs tracking-[0.18em] text-accent uppercase">Seis anos</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ice-strong">
                    Exército Brasileiro — Hospital Militar de Área de São Paulo
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ice/75">
                    Farmácia Central e Centro Cirúrgico: abastecimento de medicamentos e materiais,
                    controle de validade, separação de insumos para internação e UTI, confecção de
                    kits cirúrgicos, inventários anuais e faturamento de contas médicas. Participação
                    na montagem do hospital de campanha durante a reforma do centro cirúrgico.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Estoque", "Validade", "Kits cirúrgicos", "Inventário", "Faturamento"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-navy/40 px-3 py-1 text-xs text-ice/80"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="card3d h-full rounded-2xl border border-white/10 bg-navy-2/60 p-6">
                  <h3 className="font-display text-lg font-semibold text-ice-strong">Ferramentas</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-accent/15 px-3 py-1.5 text-sm font-medium text-accent">
                      ERP TOTVS Protheus
                    </span>
                    <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-ice/80">Excel</span>
                    <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-ice/80">Word</span>
                    <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-ice/80">
                      PowerPoint
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="card3d h-full rounded-2xl border border-white/10 bg-navy-2/60 p-6">
                  <h3 className="font-display text-lg font-semibold text-ice-strong">Formação</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ice/70">
                    Graduação em Administração — Anhanguera (em andamento) · Técnico em Logística —
                    ETEC Parque da Juventude (2020) · Gestão de Pessoas — SENAT (20h).
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="card3d h-full rounded-2xl border border-white/10 bg-navy-2/60 p-6">
                  <h3 className="font-display text-lg font-semibold text-ice-strong">
                    Atendimento e Operação
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ice/70">
                    Empatia, clareza na comunicação e agilidade no dia a dia — com pontualidade,
                    segurança e cumprimento de procedimentos na rotina de transporte urbano.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="border-t border-accent/15 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-[28px] border border-accent/25 bg-gradient-to-br from-navy-2 to-navy p-10 sm:p-14">
                <div className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-accent/20 blur-[90px] floaty" />
                <div className="relative">
                  <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent uppercase">
                    Vamos conversar
                  </p>
                  <h2 className="max-w-[40ch] font-display text-3xl font-medium tracking-tight text-ice-strong sm:text-4xl">
                    Busco oportunidades em Administração, Logística e Operações
                  </h2>
                  <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-ice/70">
                    Posso contribuir com experiência em estoque, rotinas administrativas, faturamento
                    hospitalar e atendimento ao público. Escolha o canal que preferir.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy ring-1 ring-accent transition-transform hover:-translate-y-0.5"
                    >
                      <WhatsAppIcon />
                      WhatsApp — (11) 98065-9157
                    </a>
                    <a
                      href={EMAIL_URL}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ice-strong transition-transform hover:-translate-y-0.5"
                    >
                      <svg
                        className="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                      Etelvinog9@gmail.com
                    </a>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ice-strong transition-transform hover:-translate-y-0.5"
                    >
                      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.5V24H.5V8.5Zm7.5 0h4.3v2.1h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V24h-4.5v-7.7c0-1.8 0-4.2-2.6-4.2s-3 2-3 4V24H8V8.5Z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-accent/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-ice/45">
          <span>Gustavo Etelvino — Dossiê profissional · São Paulo, SP</span>
          <span>Organização nos processos. Agilidade nas soluções.</span>
        </div>
        <div className="mx-auto mt-3 max-w-6xl px-6 text-center text-xs text-ice/35">
          Feito por{" "}
          <a
            href="https://wa.me/5511954377399?text=Ol%C3%A1%20Andrew!%20Vi%20o%20cr%C3%A9dito%20no%20site%20e%20quero%20falar%20com%20voc%C3%AA."
            target="_blank"
            rel="noreferrer"
            className="text-accent/80 underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Andrew Moura @andrewgestortrafego · 11 95437-7399
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-accent text-navy shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
      >
        <WhatsAppIcon className="size-6" />
      </a>
    </div>
  );
}
