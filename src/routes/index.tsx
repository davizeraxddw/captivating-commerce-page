import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
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
import Aurora from "@/components/Aurora";

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
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
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
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </p>
  );
}

function LandingPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-hidden bg-night font-body text-white antialiased selection:bg-gold selection:text-night">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#070b10]/68 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Voltar ao início">
            <span className="flex h-8 w-8 items-center justify-center border border-white/20">
              <span className="h-2 w-2 bg-gold" />
            </span>
            <span className="text-sm font-semibold tracking-[0.16em] text-white uppercase sm:text-base">
              Walace Costa
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm text-white/60 md:flex"
            aria-label="Principal"
          >
            <a className="nav-link" href="#walace">
              Walace
            </a>
            <a className="nav-link" href="#conteudo">
              Conteúdo
            </a>
            <a className="nav-link" href="#duvidas">
              Dúvidas
            </a>
          </nav>
          <a href="#walace" className="presentation-nav-cta hidden sm:inline-flex">
            Conheça a trajetória
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="presentation-hero relative isolate overflow-hidden">
          <div className="aurora-stage" aria-hidden="true">
            {!reduceMotion && (
              <Aurora
                colorStops={["#7cff67", "#B497CF", "#5227FF"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
              />
            )}
          </div>
          <div className="aurora-shade" aria-hidden="true" />
          <div className="presentation-grid" aria-hidden="true" />
          <div className="presentation-glow presentation-glow-one" aria-hidden="true" />
          <div className="presentation-glow presentation-glow-two" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl items-center px-5 pt-24 pb-24 sm:px-8 sm:pt-28 sm:pb-28">
            <div className="walace-hero-layout w-full">
              <div className="relative z-10 py-10 sm:py-16">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55 }}
                  className="presentation-signal"
                >
                  <span className="presentation-signal-dot" />
                  20 anos de serviço e experiência operacional
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="presentation-kicker"
                >
                  Uma trajetória construída na prática
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                  className="presentation-title"
                >
                  <span className="presentation-rank">Sargento</span>
                  <span className="presentation-name">Walace Costa</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.24 }}
                  className="presentation-copy"
                >
                  Há 20 anos na Polícia Militar de Minas Gerais, unindo experiência operacional,
                  formação em Direito e uma carreira dedicada a transformar vivência em
                  conhecimento.
                </motion.p>

                <motion.dl
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.32 }}
                  className="walace-facts"
                >
                  <div>
                    <dt>Desde</dt>
                    <dd>2006</dd>
                  </div>
                  <div>
                    <dt>Atuação</dt>
                    <dd>Tático Móvel</dd>
                  </div>
                  <div>
                    <dt>Formação</dt>
                    <dd>Direito</dd>
                  </div>
                </motion.dl>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.42 }}
                  className="mt-9 flex flex-wrap items-center gap-5"
                >
                  <a href="#walace" className="presentation-enter group">
                    Conheça a trajetória
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <span className="presentation-proof">
                    <ShieldCheck className="h-4 w-4" /> Experiência e formação
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="walace-hero-portrait"
              >
                <div className="portrait-radar portrait-radar-one" aria-hidden="true" />
                <div className="portrait-radar portrait-radar-two" aria-hidden="true" />
                <div className="walace-portrait-frame">
                  <span className="portrait-corner portrait-corner-top" aria-hidden="true" />
                  <span className="portrait-corner portrait-corner-bottom" aria-hidden="true" />
                  <img
                    src="/images/sgt-walace-original.jpg"
                    alt="Sargento Walace Costa, da Polícia Militar de Minas Gerais"
                  />
                  <div className="portrait-caption">
                    <span>Polícia Militar de Minas Gerais</span>
                    <strong>Sargento Walace Costa</strong>
                  </div>
                </div>
                <motion.div
                  className="portrait-float portrait-float-top"
                  animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Medal className="h-5 w-5" />
                  <span>
                    <small>Carreira</small>
                    <strong>Desde 2006</strong>
                  </span>
                </motion.div>
                <motion.div
                  className="portrait-float portrait-float-bottom"
                  animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
                  transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>
                    <small>Formação</small>
                    <strong>Bacharel em Direito</strong>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="presentation-marquee" aria-hidden="true">
            <div>
              <span>Disciplina</span>
              <i />
              <span>Experiência operacional</span>
              <i />
              <span>Formação jurídica</span>
              <i />
              <span>Conhecimento aplicado</span>
              <i />
              <span>Disciplina</span>
              <i />
              <span>Experiência operacional</span>
              <i />
              <span>Formação jurídica</span>
              <i />
              <span>Conhecimento aplicado</span>
              <i />
            </div>
          </div>
        </section>

        <section id="walace" className="border-y border-white/8 bg-night-2 scroll-mt-16">
          <div className="section-shell mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <ImageCarousel
                images={[
                  { src: walaceCasual.url, alt: "Walace Costa em momento pessoal" },
                  { src: walaceFarda.url, alt: "Walace Costa em uniforme da PMMG" },
                  { src: walaceMedalhas.url, alt: "Condecorações da carreira de Walace Costa" },
                  { src: walaceDireito.url, alt: "Formação acadêmica de Walace Costa" },
                ]}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <Eyebrow>A trajetória de Walace Costa</Eyebrow>
              <h2 className="section-title">
                20 anos de farda, formação jurídica e compromisso com o aprendizado.
              </h2>
              <p className="section-copy mt-6">
                Desde 2006 na Polícia Militar de Minas Gerais, Walace construiu uma trajetória de
                atuação operacional, estudo e aprimoramento. É bacharel em Direito, pós-graduado em
                Advocacia Criminal e em Atividade Policial.
              </p>
              <div className="mt-8 space-y-5">
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
                  <div key={item.title} className="flex gap-4">
                    <span className="icon-tile mt-0.5">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="conteudo" className="section-shell mx-auto max-w-7xl scroll-mt-20">
          <Reveal className="max-w-3xl">
            <Eyebrow>Conteúdo programático</Eyebrow>
            <h2 className="section-title">
              Nove temas para conectar a rua ao fundamento jurídico.
            </h2>
            <p className="section-copy mt-5">
              Conteúdo pensado para consulta, revisão e aplicação consciente no cotidiano
              profissional.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topicos.map((topico, index) => (
              <Reveal key={topico.titulo} delay={(index % 3) * 0.07}>
                <article className="topic-card group">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile">
                      <topico.icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-4xl text-white/8">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{topico.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{topico.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-night-2">
          <div className="section-shell mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <Eyebrow>Por dentro do projeto</Eyebrow>
              <h2 className="section-title">Ouça quem vive a atividade policial.</h2>
              <p className="section-copy mx-auto mt-5 max-w-2xl">
                Walace Costa apresenta a ideia central do material: a atuação não é formada apenas
                pela ação, mas também pela qualidade da documentação.
              </p>
            </Reveal>
            <div className="mx-auto mt-12 max-w-2xl">
              <VideoCard
                src="/videos/apresentacao-ebook.mp4"
                eyebrow="Mensagem de Walace Costa"
                title="Bom policial não pode improvisar quando o assunto é documentação."
              />
            </div>
          </div>
        </section>

        <section id="duvidas" className="border-y border-white/8 bg-night-2 scroll-mt-20">
          <div className="section-shell mx-auto max-w-4xl">
            <Reveal className="text-center">
              <Eyebrow>Dúvidas frequentes</Eyebrow>
              <h2 className="section-title">O que você precisa saber antes de começar.</h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {objecoes.map((item, index) => (
                <FaqItem key={item.pergunta} {...item} delay={index * 0.04} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="oferta"
          className="offer-section relative isolate overflow-hidden scroll-mt-16"
        >
          <div className="hero-orb hero-orb-three" />
          <div className="section-shell relative mx-auto max-w-5xl text-center">
            <Reveal>
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <ShieldCheck className="h-7 w-7 text-gold" />
              </div>
              <Eyebrow>Atividade Policial Operacional na Ponta da Linha</Eyebrow>
              <h2 className="mx-auto max-w-4xl font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] uppercase">
                Prepare-se hoje para registrar melhor amanhã.
              </h2>
              <p className="section-copy mx-auto mt-6 max-w-2xl">
                Tenha o e-book em PDF e 42 videoaulas complementares para estudar, consultar e
                revisar no seu ritmo.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-gold/25 bg-night-2/85 p-6 shadow-2xl shadow-black/35 backdrop-blur sm:p-9">
                <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
                      E-book + 42 videoaulas
                    </p>
                    <p className="mt-2 font-display text-6xl text-gold">R$ 35</p>
                  </div>
                  <div className="space-y-2 text-left text-sm text-white/65">
                    <p className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4 text-gold" /> Conteúdo completo
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-gold" /> Acesso para revisão
                    </p>
                  </div>
                </div>
                <CtaButton className="mt-7 w-full">Quero garantir meu acesso</CtaButton>
                <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/38">
                  <LockKeyhole className="h-3.5 w-3.5" /> Checkout seguro pela Kiwify
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-night-2">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
          <div>
            <p className="font-display text-xl tracking-wide">
              PONTA <span className="text-gold">DA LINHA</span>
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
    <Reveal>
      <article className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-night shadow-xl shadow-black/25">
        <div className="relative aspect-[9/12] overflow-hidden bg-black">
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
          <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-night/80 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur">
            <Play className="h-3 w-3 fill-gold text-gold" /> Aperte o play
          </div>
        </div>
        <div className="p-5">
          <p className="text-[10px] font-bold tracking-[0.18em] text-gold uppercase">{eyebrow}</p>
          <h3 className="mt-2 text-base font-semibold leading-snug text-white/88">{title}</h3>
        </div>
      </article>
    </Reveal>
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
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-white/10 bg-night shadow-2xl shadow-black/35">
      <div className="relative aspect-[4/5]">
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
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
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, itemIndex) => (
          <button
            key={image.alt}
            onClick={() => {
              setDirection(itemIndex > index ? 1 : -1);
              setIndex(itemIndex);
            }}
            className={`h-1.5 rounded-full transition-all ${itemIndex === index ? "w-8 bg-gold" : "w-2 bg-white/45"}`}
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
        className="w-full rounded-2xl border border-white/9 bg-white/[0.025] p-5 text-left transition-colors hover:border-gold/35 sm:p-6"
        aria-expanded={open}
      >
        <span className="flex items-center justify-between gap-5">
          <span className="font-semibold text-white/88">{pergunta}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
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
