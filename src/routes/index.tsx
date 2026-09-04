import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  AtSign,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  CheckCircle2,
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
  PlayCircle,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";

import ebookCover from "@/assets/ebook-cover.jpeg.asset.json";
import sgtWalace from "@/assets/sgt-walace.jpeg.asset.json";
import tenTardelly from "@/assets/ten-tardelly.jpeg.asset.json";
import walaceCasual from "@/assets/walace-casual.jpeg.asset.json";
import walaceDireito from "@/assets/walace-direito.jpeg.asset.json";
import walaceFarda from "@/assets/walace-farda.jpeg.asset.json";
import walaceMedalhas from "@/assets/walace-medalhas.jpeg.asset.json";

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

const paraQuem = [
  "Está no curso de formação e quer começar mais preparado",
  "Já atua na Polícia Militar ou em outra força de segurança",
  "Quer elaborar documentos e registros com mais clareza",
  "Busca compreender os aspectos jurídicos da rotina operacional",
  "Quer reduzir falhas de atuação e documentação",
  "Deseja conhecer melhor os limites da própria atuação",
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <div className="min-h-screen overflow-x-hidden bg-night font-body text-white antialiased selection:bg-gold selection:text-night">
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gold"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-night/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Voltar ao início">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/45 bg-gold/10">
              <ShieldCheck className="h-5 w-5 text-gold" />
            </span>
            <span className="font-display text-lg tracking-[0.08em] text-white sm:text-xl">
              PONTA <span className="text-gold">DA LINHA</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm text-white/60 md:flex"
            aria-label="Principal"
          >
            <a className="nav-link" href="#conteudo">
              Conteúdo
            </a>
            <a className="nav-link" href="#autores">
              Autores
            </a>
            <a className="nav-link" href="#duvidas">
              Dúvidas
            </a>
          </nav>
          <a href={KIWIFY_URL} className="btn-outline hidden sm:inline-flex">
            Quero o material
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-grid relative isolate overflow-hidden">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/8 px-4 py-2 text-xs font-bold tracking-[0.16em] text-gold uppercase"
              >
                <Sparkles className="h-4 w-4" /> E-book em PDF + 42 videoaulas
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="mt-7 max-w-3xl font-display text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.92] tracking-[-0.025em] uppercase"
              >
                Sua atuação termina na rua.
                <span className="mt-2 block text-gold-gradient">O registro permanece.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-xl"
              >
                Um guia prático para compreender, fundamentar e documentar a atividade policial com
                mais segurança — criado por quem reúne experiência operacional e formação jurídica.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
              >
                <CtaButton>Quero me preparar melhor</CtaButton>
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl text-gold">R$ 35</span>
                  <span className="max-w-24 text-xs leading-snug text-white/45">
                    pagamento único
                  </span>
                </div>
              </motion.div>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.42 }}
                className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/62"
              >
                {["Linguagem objetiva", "Aplicação prática", "Acesso para revisar"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-gold" /> {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/45 backdrop-blur-sm sm:p-6">
                <img
                  src={ebookCover.url}
                  alt="Capa do e-book Atividade Policial Operacional na Ponta da Linha"
                  className="w-full rounded-[1.35rem] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-3 rounded-2xl border border-gold/30 bg-night-2/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-9">
                  <p className="text-xs font-bold tracking-[0.16em] text-gold uppercase">
                    Experiência real
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    20 anos de atividade policial
                  </p>
                </div>
                <div className="absolute -right-3 top-10 flex h-24 w-24 rotate-6 flex-col items-center justify-center rounded-full border border-gold/50 bg-gold text-center text-night shadow-xl sm:-right-8">
                  <span className="font-display text-3xl leading-none">42</span>
                  <span className="text-[10px] font-bold tracking-wide uppercase">videoaulas</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-night-2">
          <div className="mx-auto grid max-w-7xl divide-y divide-white/8 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
            {[
              { icon: BookOpen, value: "E-book", label: "material completo em PDF" },
              { icon: PlayCircle, value: "42 aulas", label: "conteúdo complementar" },
              { icon: Medal, value: "20 anos", label: "de experiência policial" },
            ].map((item) => (
              <div
                key={item.value}
                className="flex items-center gap-4 py-6 sm:justify-center sm:px-6"
              >
                <item.icon className="h-7 w-7 text-gold" />
                <div>
                  <p className="font-display text-2xl tracking-wide">{item.value}</p>
                  <p className="text-xs text-white/45">{item.label}</p>
                </div>
              </div>
            ))}
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
              <h2 className="section-title">Ouça de quem vive a atividade policial.</h2>
              <p className="section-copy mx-auto mt-5 max-w-2xl">
                Walace Costa e Walison Tardelly apresentam a ideia central do material: a atuação
                não é formada apenas pela ação, mas também pela qualidade da documentação.
              </p>
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
              <VideoCard
                src="/videos/apresentacao-ebook.mp4"
                eyebrow="Mensagem de Walace Costa"
                title="Bom policial não pode improvisar quando o assunto é documentação."
              />
              <VideoCard
                src="/videos/conteudo-por-dentro.mp4"
                eyebrow="Os autores apresentam"
                title="A ocorrência não termina na ação: ela continua na redação."
              />
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>O ponto crítico</Eyebrow>
              <h2 className="section-title">
                Uma decisão de segundos pode ser analisada anos depois.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-white/68 sm:text-lg">
                <p>
                  A abordagem pode ter sido correta. A prova pode ter sido encontrada. Mas, se
                  informações importantes forem omitidas ou descritas sem o contexto necessário, o
                  problema pode começar justamente no papel.
                </p>
                <p className="border-l-2 border-gold pl-5 font-semibold text-white">
                  Agir certo é importante. Saber fundamentar e registrar o que foi feito também.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/8 bg-night-2">
          <div className="section-shell mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.85fr]">
            <Reveal>
              <Eyebrow>Um material para usar de verdade</Eyebrow>
              <h2 className="section-title">
                Leia para compreender. Assista para aprofundar. Volte quando precisar.
              </h2>
              <p className="section-copy mt-6">
                O PDF organiza os fundamentos. As 42 videoaulas complementam os temas com
                explicações objetivas para você estudar no seu ritmo.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "E-book completo em PDF",
                  "42 videoaulas expositivas",
                  "Conteúdo direto ao ponto",
                  "Acesso para consulta e revisão",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-4 text-sm text-white/75"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> {item}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="offer-mini">
                <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
                  Acesso completo
                </p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="font-display text-7xl leading-none text-white">R$ 35</span>
                  <span className="mb-2 text-sm text-white/40">pagamento único</span>
                </div>
                <div className="my-7 h-px bg-white/10" />
                <p className="text-sm leading-relaxed text-white/60">
                  Um investimento acessível para reunir conteúdo escrito e audiovisual em um só
                  lugar.
                </p>
                <CtaButton className="mt-7 w-full">Quero o conteúdo completo</CtaButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="autores" className="section-shell mx-auto max-w-7xl scroll-mt-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Quem está por trás do material</Eyebrow>
            <h2 className="section-title">Conhecimento construído na prática.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <AuthorCard
              image={sgtWalace.url}
              name="Sargento Walace Costa"
              role="3º Sargento da PMMG · Tático Móvel"
              facts={[
                "20 anos de serviço na Polícia Militar de Minas Gerais",
                "Medalha de Mérito Militar e reconhecimentos operacionais",
                "Bacharel em Direito e pós-graduado em Advocacia Criminal e Atividade Policial",
              ]}
            />
            <AuthorCard
              image={tenTardelly.url}
              name="Tenente Walison Tardelly"
              role="Tenente da PMMG"
              facts={[
                "Experiência operacional na atividade policial",
                "Vivência prática de quem conhece a rotina do serviço",
                "Coautor com foco na realidade da ponta da linha",
              ]}
            />
          </div>
        </section>

        <section className="border-y border-white/8 bg-night-2">
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

        <section className="section-shell mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Para quem é</Eyebrow>
            <h2 className="section-title">
              Para quem prefere se preparar antes que o problema aconteça.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {paraQuem.map((item, index) => (
              <Reveal key={item} delay={(index % 2) * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-night">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="leading-relaxed text-white/72">{item}</p>
                </div>
              </Reveal>
            ))}
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

      <footer className="border-t border-white/8 bg-night-2 pb-24 sm:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
          <div>
            <p className="font-display text-xl tracking-wide">
              PONTA <span className="text-gold">DA LINHA</span>
            </p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/38">
              Conteúdo educacional desenvolvido por Sargento Walace Costa e Tenente Walison
              Tardelly.
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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-night/92 p-3 backdrop-blur-xl sm:hidden">
        <a href={KIWIFY_URL} className="btn-gold w-full py-3 text-sm">
          Quero o material por R$ 35 <ArrowRight className="h-4 w-4" />
        </a>
      </div>
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

function AuthorCard({
  image,
  name,
  role,
  facts,
}: {
  image: string;
  name: string;
  role: string;
  facts: string[];
}) {
  return (
    <Reveal>
      <article className="group grid h-full overflow-hidden rounded-[1.6rem] border border-white/9 bg-white/[0.025] sm:grid-cols-[.72fr_1fr]">
        <div className="relative min-h-72 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-transparent to-transparent sm:bg-gradient-to-r" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-7">
          <p className="text-xs font-bold tracking-[0.14em] text-gold uppercase">{role}</p>
          <h3 className="mt-2 font-display text-3xl uppercase">{name}</h3>
          <ul className="mt-6 space-y-3">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/58"
              >
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {fact}
              </li>
            ))}
          </ul>
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
