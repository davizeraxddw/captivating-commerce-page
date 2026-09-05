import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  AtSign,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Crosshair,
  FileCheck2,
  FileWarning,
  Gavel,
  GraduationCap,
  LockKeyhole,
  Medal,
  PenLine,
  Play,
  Scale,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import walaceCasual from "@/assets/walace-casual.jpeg.asset.json";
import walaceDireito from "@/assets/walace-direito.jpeg.asset.json";
import walaceFarda from "@/assets/walace-farda.jpeg.asset.json";
import walaceMedalhas from "@/assets/walace-medalhas.jpeg.asset.json";
import ebookCover from "@/assets/ebook-cover.jpeg.asset.json";

// Substitua apenas este valor pelo checkout da Kiwify quando o link estiver disponível.
const KIWIFY_URL = "#oferta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atividade Policial na Ponta da Linha | E-book + 42 videoaulas" },
      {
        name: "description",
        content:
          "Guia prático para compreender, fundamentar e registrar a atividade policial com mais segurança. E-book em PDF + 42 videoaulas por R$ 35.",
      },
      { property: "og:title", content: "Atividade Policial na Ponta da Linha" },
      {
        property: "og:description",
        content:
          "Experiência operacional e conhecimento jurídico em um e-book com 42 videoaulas complementares.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const topicos = [
  {
    icon: PenLine,
    titulo: "Redação policial",
    texto: "Como registrar uma ocorrência com clareza, contexto e atenção à preservação da prova.",
  },
  {
    icon: UserCheck,
    titulo: "Atuação do advogado",
    texto:
      "A atuação da defesa durante a atividade policial e os limites que precisam ser compreendidos.",
  },
  {
    icon: Search,
    titulo: "Buscas e cadeia de custódia",
    texto: "Cuidados na busca, apreensão, preservação e documentação dos elementos probatórios.",
  },
  {
    icon: Scale,
    titulo: "Limites da atuação investigativa",
    texto:
      "Até onde vai a atuação da Polícia Militar e o que pode gerar questionamentos de legalidade.",
  },
  {
    icon: ShieldCheck,
    titulo: "Direitos do investigado",
    texto:
      "Conhecer os direitos envolvidos também ajuda a proteger a legitimidade da atuação policial.",
  },
  {
    icon: Crosshair,
    titulo: "Operações específicas",
    texto:
      "Situações operacionais que exigem atenção especial na conduta, narrativa e documentação.",
  },
  {
    icon: FileWarning,
    titulo: "Prova, efetividade e nulidades",
    texto: "Por que produzir a prova não basta: é preciso preservá-la e registrá-la corretamente.",
  },
  {
    icon: Gavel,
    titulo: "O policial no processo",
    texto: "Como o que acontece na rua e fica no registro pode repercutir no processo judicial.",
  },
  {
    icon: FileCheck2,
    titulo: "Lei de Drogas",
    texto: "O que mudou, o que permanece e quais pontos merecem atenção durante a atuação.",
  },
];

const objecoes = [
  {
    pergunta: "Eu já aprendi isso na formação. Ainda faz sentido?",
    resposta:
      "A formação oferece a base. O material aproxima essa base das situações reais de serviço, com foco na aplicação, na fundamentação e no registro do que foi feito.",
  },
  {
    pergunta: "Preciso ter formação jurídica?",
    resposta:
      "Não. O conteúdo foi construído para policiais e alunos de formação, com linguagem objetiva e conectada à realidade operacional.",
  },
  {
    pergunta: "O material serve para quem já tem experiência de rua?",
    resposta:
      "Sim. Experiência é essencial, mas legislação e entendimentos evoluem. O material ajuda a revisar fundamentos e identificar pontos de atenção na rotina.",
  },
  {
    pergunta: "O que recebo ao comprar?",
    resposta:
      "Você recebe o e-book em PDF e acesso a 42 videoaulas complementares sobre os temas apresentados no material.",
  },
  {
    pergunta: "Qual é o valor?",
    resposta:
      "O conjunto completo custa R$ 35 em pagamento único. O checkout da Kiwify será conectado ao botão de compra.",
  },
];

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CtaButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a href={KIWIFY_URL} className={`btn-gold group ${className}`}>
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span>{children}</span>
    </p>
  );
}

function LandingPage() {
  const reduceMotion = useReducedMotion();
  const topicsTrackRef = useRef<HTMLDivElement>(null);
  const [activeTopic, setActiveTopic] = useState(0);

  const goToTopic = useCallback(
    (nextIndex: number) => {
      const normalizedIndex = (nextIndex + topicos.length) % topicos.length;
      const track = topicsTrackRef.current;
      const slide = track?.children.item(normalizedIndex) as HTMLElement | null;

      setActiveTopic(normalizedIndex);
      if (track && slide) {
        track.scrollTo({
          left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }
    },
    [reduceMotion],
  );

  const syncActiveTopic = useCallback(() => {
    const track = topicsTrackRef.current;
    if (!track || window.matchMedia("(min-width: 640px)").matches) return;

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - trackCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveTopic(nearestIndex);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-night font-body text-white antialiased">
      <div className="grain-overlay" aria-hidden="true" />

      {/* ---------- Header ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-night/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Voltar ao início">
            <span className="flex h-8 w-8 items-center justify-center bg-gold">
              <ShieldCheck className="h-4.5 w-4.5 text-night" />
            </span>
            <span className="font-display text-xs tracking-[0.12em] text-white uppercase sm:text-sm">
              Ponta da Linha
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-white/55 md:flex" aria-label="Principal">
            <a className="nav-link" href="#walace">
              Trajetória
            </a>
            <a className="nav-link" href="#conteudo">
              Conteúdo
            </a>
            <a className="nav-link" href="#duvidas">
              Dúvidas
            </a>
          </nav>
          <a
            href={KIWIFY_URL}
            className="hidden bg-gold px-4 py-2 font-display text-[0.7rem] tracking-wider text-night uppercase transition-colors hover:bg-white sm:inline-flex"
          >
            Acesso • R$ 35
          </a>
        </div>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section id="inicio" className="relative isolate overflow-hidden">
          {/* marca d'água */}
          <div
            className="pointer-events-none absolute -top-10 -left-6 z-0 opacity-[0.05] select-none"
            aria-hidden="true"
          >
            <span className="font-display text-[16rem] leading-none text-gold md:text-[22rem]">
              PDL
            </span>
          </div>
          {/* linhas técnicas */}
          <div className="tech-lines tech-lines-h right-0 bottom-0 w-72" aria-hidden="true" />
          <div className="tech-lines tech-lines-v right-0 bottom-0 h-72" aria-hidden="true" />
          <div
            className="dot-grid absolute top-24 right-8 hidden h-40 w-40 opacity-15 lg:block"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pt-32 pb-24 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-40 lg:pb-32">
            {/* Texto */}
            <div className="space-y-8 lg:col-span-7">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
              >
                <span className="inline-block -skew-x-12 bg-gold px-4 py-1.5">
                  <span className="block skew-x-12 text-xs font-bold tracking-[0.2em] text-night uppercase sm:text-sm">
                    PMMG • Sargento Walace Costa
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[2.9rem] leading-[0.88] tracking-tight text-white uppercase sm:text-6xl lg:text-[5rem]"
              >
                Atividade <br />
                <span className="text-gold">Policial</span> <br />
                <span className="relative inline-block">
                  na ponta
                  <span
                    className="absolute -bottom-1 left-0 h-2 w-full bg-gold opacity-50"
                    aria-hidden="true"
                  />
                </span>{" "}
                <br />
                da linha
              </motion.h1>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="max-w-lg border-l-4 border-gold py-1 pl-6"
              >
                <p className="text-lg leading-relaxed text-white/60">
                  20 anos de rua condensados em um guia direto:{" "}
                  <span className="font-semibold text-white">e-book + 42 videoaulas</span> para
                  agir, escrever e registrar com segurança jurídica na atividade policial.
                </p>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="flex flex-col items-start gap-8 pt-2 sm:flex-row sm:items-center"
              >
                <div className="relative">
                  <CtaButton>Quero acessar agora</CtaButton>
                  <span className="absolute -bottom-7 left-0 text-xs font-bold tracking-[0.2em] text-gold uppercase">
                    Apenas R$ 35,00
                  </span>
                </div>
                <dl className="grid grid-cols-3 gap-6 border-l border-white/15 pl-6">
                  <div>
                    <dt className="text-[0.6rem] font-bold tracking-[0.18em] text-white/40 uppercase">
                      Desde
                    </dt>
                    <dd className="font-display text-lg text-white">2006</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] font-bold tracking-[0.18em] text-white/40 uppercase">
                      Atuação
                    </dt>
                    <dd className="font-display text-lg text-white">Tático</dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] font-bold tracking-[0.18em] text-white/40 uppercase">
                      Aulas
                    </dt>
                    <dd className="font-display text-lg text-gold">42</dd>
                  </div>
                </dl>
              </motion.div>
            </div>

            {/* Retrato */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:col-span-5"
            >
              {/* moldura deslocada */}
              <div
                className="absolute top-8 right-8 hidden h-full w-full border-2 border-gold/25 md:block"
                aria-hidden="true"
              />
              <div className="group relative aspect-[4/5] overflow-hidden border-r-8 border-b-8 border-gold bg-night-2">
                <div
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-night via-transparent to-transparent"
                  aria-hidden="true"
                />
                <img
                  src="/images/sgt-walace-original.jpg"
                  alt="Sargento Walace Costa, da Polícia Militar de Minas Gerais"
                  className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                {/* badge 42 */}
                <div className="absolute top-6 right-6 z-20 flex flex-col items-end">
                  <span className="font-display text-5xl leading-none text-gold">42</span>
                  <span className="mt-1 bg-night px-2 py-1 text-[0.6rem] font-bold tracking-[0.2em] text-white uppercase">
                    Videoaulas
                  </span>
                </div>
                {/* legenda */}
                <div className="absolute bottom-7 left-7 z-20 space-y-1.5">
                  <span className="block font-display text-2xl leading-none tracking-tight text-white uppercase sm:text-3xl">
                    Walace Costa
                  </span>
                  <div className="h-1 w-12 bg-gold" aria-hidden="true" />
                  <span className="block text-[0.65rem] font-bold tracking-[0.22em] text-white/55 uppercase">
                    Polícia Militar de Minas Gerais
                  </span>
                </div>
              </div>
              {/* bloco decorativo flutuante */}
              <div
                className="absolute -right-5 -bottom-5 z-30 hidden bg-gold p-5 shadow-2xl md:block"
                aria-hidden="true"
              >
                <div className="h-7 w-7 border-4 border-night" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ---------- Marquee âmbar ---------- */}
        <div className="marquee-band marquee-band-amber" aria-hidden="true">
          <div className="marquee-track text-night">
            {[0, 1].map((copy) => (
              <div key={copy}>
                <span>Disciplina</span>
                <i />
                <span>Experiência operacional</span>
                <i />
                <span>Formação jurídica</span>
                <i />
                <span>Registro sem erro</span>
                <i />
                <span>E-book + 42 videoaulas</span>
                <i />
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Trajetória ---------- */}
        <section id="walace" className="relative scroll-mt-16 overflow-hidden">
          <span className="section-watermark" aria-hidden="true">
            01
          </span>
          <div className="section-shell relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal className="relative">
              <div
                className="absolute -top-6 -left-6 hidden h-24 w-24 border-t-2 border-l-2 border-gold/50 lg:block"
                aria-hidden="true"
              />
              <ImageCarousel
                images={[
                  { src: walaceCasual.url, alt: "Walace Costa em momento pessoal" },
                  { src: walaceFarda.url, alt: "Walace Costa em uniforme da PMMG" },
                  { src: walaceMedalhas.url, alt: "Condecorações da carreira de Walace Costa" },
                  { src: walaceDireito.url, alt: "Formação acadêmica de Walace Costa" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.12} className="lg:-translate-y-6">
              <Eyebrow>A trajetória</Eyebrow>
              <h2 className="section-title">
                20 anos de farda, <span className="text-gold">formação jurídica</span> e compromisso
                com o aprendizado.
              </h2>
              <p className="section-copy mt-6">
                Desde 2006 na Polícia Militar de Minas Gerais, Walace construiu uma trajetória de
                atuação operacional, estudo e aprimoramento. É bacharel em Direito, pós-graduado em
                Advocacia Criminal e em Atividade Policial.
              </p>
              <div className="mt-9 space-y-6">
                {[
                  {
                    icon: Medal,
                    title: "Experiência reconhecida",
                    text: "Medalha de Mérito Militar e ocorrências de destaque ao longo da carreira.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Formação que complementa a prática",
                    text: "Conhecimento jurídico aplicado às situações da atividade operacional.",
                  },
                  {
                    icon: Users,
                    title: "Um propósito claro",
                    text: "Compartilhar conhecimento acessível para fortalecer a atuação de outros profissionais.",
                  },
                ].map((item) => (
                  <div key={item.title} className="group flex gap-5">
                    <span className="icon-tile mt-0.5 transition-colors group-hover:bg-gold group-hover:text-night">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-sm tracking-wide text-white uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/50">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Conteúdo programático ---------- */}
        <section
          id="conteudo"
          className="relative scroll-mt-20 overflow-hidden border-y border-white/8 bg-night-2"
        >
          <span className="section-watermark" aria-hidden="true">
            02
          </span>
          <div className="section-shell relative z-10 mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <Eyebrow>Conteúdo programático</Eyebrow>
              <h2 className="section-title">
                Nove temas para conectar a rua ao{" "}
                <span className="text-gold">fundamento jurídico</span>.
              </h2>
              <p className="section-copy mt-5">
                Conteúdo pensado para consulta, revisão e aplicação consciente no cotidiano
                profissional.
              </p>
            </Reveal>
            <div
              id="conteudo-carousel"
              ref={topicsTrackRef}
              className="topic-carousel mt-14"
              onScroll={syncActiveTopic}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  goToTopic(activeTopic - 1);
                }
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  goToTopic(activeTopic + 1);
                }
              }}
              role="region"
              aria-label="Temas do conteúdo programático"
              tabIndex={0}
            >
              {topicos.map((topico, index) => (
                <Reveal
                  key={topico.titulo}
                  delay={(index % 3) * 0.07}
                  className={`topic-slide ${index % 3 === 1 ? "lg:translate-y-6" : ""}`}
                >
                  <article className="topic-card group">
                    <div className="flex items-center justify-between">
                      <span className="icon-tile">
                        <topico.icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-4xl text-white/8 transition-colors group-hover:text-gold/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-7 font-display text-base leading-tight tracking-wide text-white uppercase">
                      {topico.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/50">{topico.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="topic-carousel-controls" aria-label="Controles do carrossel">
              <button
                type="button"
                onClick={() => goToTopic(activeTopic - 1)}
                aria-label="Tema anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="topic-carousel-progress">
                <span style={{ width: `${((activeTopic + 1) / topicos.length) * 100}%` }} />
              </div>
              <strong>
                {String(activeTopic + 1).padStart(2, "0")}
                <small>/ {String(topicos.length).padStart(2, "0")}</small>
              </strong>
              <button
                type="button"
                onClick={() => goToTopic(activeTopic + 1)}
                aria-label="Próximo tema"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ---------- Vídeo + produto ---------- */}
        <section className="relative overflow-hidden">
          <span className="section-watermark" aria-hidden="true">
            03
          </span>
          <div className="section-shell relative z-10 mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <Eyebrow>Por dentro do projeto</Eyebrow>
                <h2 className="section-title">
                  Ouça quem <span className="text-gold">vive</span> a atividade policial.
                </h2>
                <p className="section-copy mt-5 max-w-xl">
                  Walace Costa apresenta a ideia central do material: a atuação não é formada apenas
                  pela ação, mas também pela qualidade da documentação.
                </p>
                <div className="mt-10 flex items-center gap-6 border border-white/10 bg-night-2 p-5">
                  <img
                    src={ebookCover.url}
                    alt="Capa do e-book Atividade Policial Operacional na Ponta da Linha"
                    className="w-20 flex-none border border-gold/30 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-[0.65rem] font-bold tracking-[0.2em] text-gold uppercase">
                      O material
                    </p>
                    <p className="mt-1.5 font-display text-sm leading-snug text-white uppercase">
                      E-book em PDF + 42 videoaulas complementares
                    </p>
                    <p className="mt-1.5 text-xs text-white/45">
                      Acesso imediato após a confirmação do pagamento.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <VideoCard
                  src="/videos/apresentacao-ebook.mp4"
                  eyebrow="Mensagem de Walace Costa"
                  title="Bom policial não pode improvisar quando o assunto é documentação."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Marquee secundária ---------- */}
        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track text-white/45">
            {[0, 1].map((copy) => (
              <div key={copy}>
                <span>Redação policial</span>
                <i />
                <span>Cadeia de custódia</span>
                <i />
                <span>Direitos do investigado</span>
                <i />
                <span>Lei de drogas</span>
                <i />
                <span>Prova e nulidades</span>
                <i />
              </div>
            ))}
          </div>
        </div>

        {/* ---------- FAQ ---------- */}
        <section
          id="duvidas"
          className="relative scroll-mt-20 overflow-hidden border-b border-white/8 bg-night-2"
        >
          <span className="section-watermark" aria-hidden="true">
            04
          </span>
          <div className="section-shell relative z-10 mx-auto max-w-4xl">
            <Reveal>
              <Eyebrow>Dúvidas frequentes</Eyebrow>
              <h2 className="section-title">
                O que você precisa saber <span className="text-gold">antes de começar</span>.
              </h2>
            </Reveal>
            <div className="mt-12 space-y-4">
              {objecoes.map((item, index) => (
                <FaqItem key={item.pergunta} {...item} delay={index * 0.04} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Oferta ---------- */}
        <section id="oferta" className="relative isolate scroll-mt-16 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #f5b301 0 2px, transparent 2px 26px)",
            }}
          />
          <div className="section-shell relative z-10 mx-auto max-w-5xl text-center">
            <Reveal>
              <Eyebrow>Oferta de lançamento</Eyebrow>
              <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.9] uppercase">
                Prepare-se hoje. <span className="text-gold">Registre melhor</span> amanhã.
              </h2>
              <p className="section-copy mx-auto mt-6 max-w-2xl">
                Tenha o e-book em PDF e 42 videoaulas complementares para estudar, consultar e
                revisar no seu ritmo.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="corner-frame relative mx-auto mt-14 max-w-2xl border border-gold/30 bg-night-2 p-7 sm:p-10">
                <div className="flex flex-col items-center justify-between gap-7 sm:flex-row">
                  <div className="text-center sm:text-left">
                    <p className="text-[0.65rem] font-bold tracking-[0.24em] text-white/40 uppercase">
                      E-book + 42 videoaulas
                    </p>
                    <p className="mt-2 font-display text-7xl leading-none text-gold">R$ 35</p>
                    <p className="mt-2 text-xs font-bold tracking-[0.18em] text-white/40 uppercase">
                      Pagamento único
                    </p>
                  </div>
                  <div className="space-y-3 text-left text-sm text-white/65">
                    <p className="flex items-center gap-3">
                      <BadgeCheck className="h-4 w-4 flex-none text-gold" /> Conteúdo completo e
                      direto
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock3 className="h-4 w-4 flex-none text-gold" /> Acesso para revisão no seu
                      ritmo
                    </p>
                    <p className="flex items-center gap-3">
                      <ShieldCheck className="h-4 w-4 flex-none text-gold" /> Feito por quem vive a
                      rua
                    </p>
                  </div>
                </div>
                <CtaButton className="mt-9 w-full">Quero garantir meu acesso</CtaButton>
                <p className="mt-5 flex items-center justify-center gap-2 text-xs text-white/38">
                  <LockKeyhole className="h-3.5 w-3.5" /> Checkout seguro pela Kiwify
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-white/8 bg-night-2">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
          <div>
            <p className="font-display text-lg tracking-wide uppercase">
              Ponta <span className="text-gold">da linha</span>
            </p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/38">
              Conteúdo educacional desenvolvido por Sargento Walace Costa.
            </p>
          </div>
          <a
            href="https://instagram.com/walacef.costa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <AtSign className="h-4 w-4" /> @walacef.costa
          </a>
        </div>
      </footer>
    </div>
  );
}

function VideoCard({ src, eyebrow, title }: { src: string; eyebrow: string; title: string }) {
  return (
    <article className="relative border border-white/10 bg-night shadow-2xl shadow-black/50">
      <div
        className="absolute -top-3 -right-3 h-full w-full border border-gold/25"
        aria-hidden="true"
      />
      <div className="relative aspect-[9/12] max-h-[34rem] w-full overflow-hidden bg-black">
        <video
          className="h-full w-full object-cover"
          src={src}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
        >
          Seu navegador não suporta a reprodução deste vídeo.
        </video>
        <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 bg-night/85 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-white uppercase backdrop-blur">
          <Play className="h-3 w-3 fill-gold text-gold" /> Aperte o play
        </div>
      </div>
      <div className="relative border-t-2 border-gold p-5">
        <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">{eyebrow}</p>
        <h3 className="mt-2 text-base leading-snug font-semibold text-white/88">{title}</h3>
      </div>
    </article>
  );
}

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();
  const paginate = useCallback(
    (step: number) => {
      setDirection(step);
      setIndex((current) => (current + step + images.length) % images.length);
    },
    [images.length],
  );
  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => paginate(1), 5500);
    return () => window.clearInterval(timer);
  }, [paginate, reduceMotion]);
  const variants = {
    enter: (step: number) => ({ x: step > 0 ? "12%" : "-12%", opacity: 0, scale: 1.03 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (step: number) => ({ x: step > 0 ? "-12%" : "12%", opacity: 0, scale: 0.98 }),
  };
  return (
    <div className="relative mx-auto w-full max-w-lg border-r-8 border-b-8 border-gold bg-night-2 shadow-2xl shadow-black/50">
      <div className="relative aspect-[4/5] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index]!.src}
            alt={images[index]!.alt}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </AnimatePresence>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute top-4 left-4 z-10 bg-night/85 px-3 py-1.5 font-display text-[0.6rem] tracking-[0.2em] text-gold uppercase backdrop-blur">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
      </div>
      <button
        onClick={() => paginate(-1)}
        className="carousel-button left-4"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="carousel-button right-4"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((image, itemIndex) => (
          <button
            key={image.alt}
            onClick={() => {
              setDirection(itemIndex > index ? 1 : -1);
              setIndex(itemIndex);
            }}
            className={`h-1.5 transition-all ${itemIndex === index ? "w-8 bg-gold" : "w-2 bg-white/45"}`}
            aria-label={`Mostrar imagem ${itemIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function FaqItem({
  pergunta,
  resposta,
  delay,
}: {
  pergunta: string;
  resposta: string;
  delay: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`w-full border p-5 text-left transition-colors sm:p-6 ${
          open
            ? "border-gold/60 bg-gold/[0.05]"
            : "border-white/10 bg-white/[0.02] hover:border-gold/35"
        }`}
        aria-expanded={open}
      >
        <span className="flex items-center justify-between gap-5">
          <span className="font-display text-sm leading-snug tracking-wide text-white/90 uppercase sm:text-base">
            {pergunta}
          </span>
          <span
            className={`flex h-8 w-8 flex-none items-center justify-center transition-colors ${
              open ? "bg-gold text-night" : "bg-gold/10 text-gold"
            }`}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </span>
        </span>
        <motion.span
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="block overflow-hidden"
        >
          <span className="block pt-4 text-sm leading-relaxed text-white/55">{resposta}</span>
        </motion.span>
      </button>
    </Reveal>
  );
}
