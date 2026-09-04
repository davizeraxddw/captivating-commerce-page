import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import {
  ShieldCheck,
  FileText,
  PlayCircle,
  Scale,
  Search,
  Gavel,
  UserCheck,
  Crosshair,
  FileWarning,
  Cannabis,
  PenLine,
  Medal,
  GraduationCap,
  Instagram,
  ChevronDown,
  CheckCircle2,
  Star,
  Clock3,
  Users,
  BookOpen,
  Award,
} from "lucide-react";

import ebookCover from "@/assets/ebook-cover.jpeg.asset.json";
import sgtWalace from "@/assets/sgt-walace.jpeg.asset.json";
import tenTardelly from "@/assets/ten-tardelly.jpeg.asset.json";
import walaceCasual from "@/assets/walace-casual.jpeg.asset.json";
import walaceFarda from "@/assets/walace-farda.jpeg.asset.json";
import walaceMedalhas from "@/assets/walace-medalhas.jpeg.asset.json";
import walaceEsporte from "@/assets/walace-esporte.jpeg.asset.json";
import walaceDireito from "@/assets/walace-direito.jpeg.asset.json";

// TODO: substituir pelo link de checkout da Kiwify quando o cliente enviar.
const KIWIFY_URL = "#oferta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atividade Policial na Ponta da Linha — E-book + 42 Videoaulas" },
      {
        name: "description",
        content:
          "Guia prático com apontamentos jurídicos para agir, escrever e registrar com segurança na atividade policial. E-book + 42 videoaulas por apenas R$ 35.",
      },
      {
        property: "og:title",
        content: "Atividade Policial na Ponta da Linha — Evite erros que podem custar sua carreira",
      },
      {
        property: "og:description",
        content:
          "E-book em PDF + 42 videoaulas. Feito por policiais com 20 anos de rua e formação jurídica. Apenas R$ 35.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CtaButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={KIWIFY_URL}
      className={`btn-gold animate-pulse-ring inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 font-body text-lg font-bold tracking-wide uppercase ${className}`}
    >
      {children}
    </a>
  );
}

const topicos = [
  {
    icon: PenLine,
    titulo: "Redação policial",
    texto:
      "Como a forma de escrever e registrar uma ocorrência pode fazer diferença na preservação da prova e na sua segurança profissional.",
  },
  {
    icon: UserCheck,
    titulo: "Atuação do advogado",
    texto:
      "Apontamentos sobre a atuação da defesa durante a atividade policial e os limites que precisam ser compreendidos.",
  },
  {
    icon: Search,
    titulo: "Buscas, apreensões e cadeia de custódia",
    texto:
      "Fundamentos e cuidados na busca, apreensão, preservação e documentação dos elementos probatórios.",
  },
  {
    icon: Scale,
    titulo: "Limites da atuação investigativa da PM",
    texto:
      "Até onde vai a atuação policial? Quais os limites jurídicos e o que pode gerar questionamentos de legalidade.",
  },
  {
    icon: ShieldCheck,
    titulo: "Direitos e garantias do investigado",
    texto:
      "Conhecer os direitos envolvidos na ocorrência também é uma forma de proteger a atuação do próprio policial.",
  },
  {
    icon: Crosshair,
    titulo: "Operações policiais específicas",
    texto:
      "Situações operacionais que exigem atenção especial e conhecimento jurídico na narrativa e no registro.",
  },
  {
    icon: FileWarning,
    titulo: "Registro da prova, efetividade e nulidades",
    texto:
      "Não basta produzir uma prova: é preciso preservá-la e registrá-la corretamente para evitar nulidades.",
  },
  {
    icon: Gavel,
    titulo: "O papel do policial no processo",
    texto:
      "A ocorrência não termina na rua. O que foi registrado pode chegar ao processo judicial — entenda o seu papel.",
  },
  {
    icon: Cannabis,
    titulo: "Lei de Drogas: o que mudou",
    texto:
      "O que mudou, o que permanece em vigor e quais pontos merecem atenção durante a sua atuação.",
  },
];

const objecoes = [
  {
    pergunta: "“Mas eu já aprendi isso na formação.”",
    resposta:
      "A experiência prática mostra que existe uma grande diferença entre conhecer uma regra e saber aplicá-la diante de uma ocorrência real, sob pressão, com a viatura na rua.",
  },
  {
    pergunta: "“Eu não sou da área jurídica.”",
    resposta:
      "Justamente por isso o material foi pensado para ser objetivo e aplicado à realidade operacional — sem transformar o conteúdo em um tratado jurídico.",
  },
  {
    pergunta: "“Eu já tenho experiência de rua.”",
    resposta:
      "Experiência é fundamental. Mas a legislação muda, os entendimentos evoluem, e uma conduta que parece simples pode gerar questionamentos quando analisada anos depois.",
  },
  {
    pergunta: "“Tenho medo de fazer alguma coisa errada.”",
    resposta:
      "Esse receio é compreensível. Conhecimento e preparação ajudam o profissional a identificar riscos antes que eles se transformem em problemas administrativos ou judiciais.",
  },
  {
    pergunta: "“Vale a pena investir nesse material?”",
    resposta:
      "Por apenas R$ 35 você recebe o e-book em PDF + 42 videoaulas complementares. É conhecimento para consultar, revisar e levar com você durante toda a sua jornada profissional.",
  },
];

const paraQuem = [
  "Está no curso de formação e quer começar a carreira mais preparado",
  "Já atua na Polícia Militar ou em outra força de segurança",
  "Tem dúvidas sobre como elaborar documentos e registros policiais",
  "Quer compreender melhor os aspectos jurídicos da atividade operacional",
  "Quer reduzir riscos de erros na atuação e na documentação",
  "Deseja evoluir profissionalmente e se preparar para o dia a dia",
  "Quer conhecer seus limites de atuação para decidir com segurança",
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-night font-body text-white antialiased">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 20%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
          }}
        />
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-display text-xl tracking-wide text-gold-gradient">
            PONTA DA LINHA
          </span>
          <a
            href={KIWIFY_URL}
            className="rounded-md border border-gold/50 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-night"
          >
            Garantir o meu
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pt-6 pb-20 lg:grid-cols-2 lg:pb-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold tracking-widest text-gold uppercase"
            >
              <BookOpen className="h-4 w-4" /> E-book + 42 videoaulas
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl leading-[1.05] uppercase sm:text-6xl lg:text-7xl"
            >
              Evite erros que podem{" "}
              <span className="text-gold-gradient">custar sua carreira</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Guia prático com apontamentos jurídicos para agir, escrever e registrar com segurança
              na atividade policial. Criado por quem vive a rua há 20 anos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <CtaButton>
                Quero o meu agora <ShieldCheck className="h-5 w-5" />
              </CtaButton>
              <div>
                <p className="text-sm tracking-widest text-white/50 uppercase">Apenas</p>
                <p className="font-display text-4xl text-gold-gradient">
                  R$ 35<span className="text-2xl">,00</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-3"
            >
              {[
                { icon: FileText, label: "Material completo em PDF" },
                { icon: PlayCircle, label: "42 aulas expositivas" },
                { icon: Medal, label: "20 anos de experiência" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="card-glass flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center"
                >
                  <b.icon className="h-6 w-6 text-gold" />
                  <span className="text-xs leading-snug font-medium text-white/80">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="animate-float-slow">
              <img
                src={ebookCover.url}
                alt="E-book Atividade Policial na Ponta da Linha — Evite erros que podem custar sua carreira"
                className="w-full rounded-xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-gold/30"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 card-glass animate-float-slow rounded-lg px-5 py-3 [animation-delay:1.2s]">
              <p className="text-xs tracking-widest text-gold uppercase">Baseado na</p>
              <p className="font-display text-xl tracking-wide">PRÁTICA REAL DAS RUAS</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FAIXA DE DOR ================= */}
      <section className="border-y border-line bg-night-2">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl uppercase sm:text-4xl">
              Na atividade policial, <span className="text-gold-gradient">não basta agir certo</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Uma decisão tomada em segundos pode ser analisada anos depois. E aquilo que não foi
              devidamente registrado — ou foi registrado de maneira equivocada — pode gerar
              consequências para a ocorrência, para a prova e, principalmente,{" "}
              <strong className="text-white">para a sua carreira</strong>.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 inline-block rounded-lg border border-gold/40 bg-gold/10 px-6 py-3 font-display text-xl tracking-wide text-gold uppercase">
              Agir certo é importante. Saber registrar o que foi feito também.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTEÚDO ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            Conteúdo programático
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
            O que você vai <span className="text-gold-gradient">encontrar no e-book</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topicos.map((t, i) => (
            <Reveal key={t.titulo} delay={(i % 3) * 0.1}>
              <div className="card-glass group h-full rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1.5 hover:border-gold/50">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/30 transition-colors group-hover:bg-gold group-hover:text-night">
                    <t.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl text-white/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gold">{t.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{t.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= NÃO É SÓ UM E-BOOK ================= */}
      <section className="border-y border-line bg-night-2">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
              Não é só um e-book
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
              E-book em PDF <span className="text-gold-gradient">+ 42 videoaulas</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Além do material completo em PDF, você recebe acesso a 42 videoaulas com dicas e
              explicações complementares sobre os assuntos abordados. Leia, assista, revise e volte
              ao conteúdo sempre que precisar.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: FileText, text: "E-book completo em PDF, direto ao ponto" },
                { icon: PlayCircle, text: "42 videoaulas expositivas complementares" },
                { icon: Clock3, text: "Acesso para consultar e revisar quando quiser" },
                { icon: ShieldCheck, text: "Conteúdo atualizado com a prática policial" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-white/80">
                  <item.icon className="h-5 w-5 shrink-0 text-gold" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CtaButton>Garantir por R$ 35</CtaButton>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="card-glass rounded-2xl p-8 text-center">
              <p className="text-sm tracking-[0.3em] text-white/50 uppercase">Tudo isso por apenas</p>
              <p className="mt-4 font-display text-8xl text-gold-gradient sm:text-9xl">R$ 35</p>
              <p className="mt-2 text-white/60">pagamento único • acesso imediato</p>
              <div className="mx-auto mt-8 max-w-xs space-y-3 text-left">
                {["E-book em PDF completo", "42 videoaulas expositivas", "Linguagem objetiva e aplicável"].map(
                  (f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/75">
                      <CheckCircle2 className="h-4 w-4 text-gold" /> {f}
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= AUTORES ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            Desenvolvido por policiais, para policiais
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
            Quem está por trás do <span className="text-gold-gradient">material</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            {
              foto: sgtWalace.url,
              nome: "Sargento Walace Costa",
              cargo: "3º Sargento da PMMG • Tático Móvel",
              pontos: [
                "20 anos de serviço na Polícia Militar de Minas Gerais",
                "Medalha de Mérito Militar (Bronze) e destaques operacionais",
                "Bacharel em Direito (FAMINAS-BH), pós em Advocacia Criminal (FUMEC) e em Atividade Policial",
              ],
            },
            {
              foto: tenTardelly.url,
              nome: "Tenente Walison Tardelly",
              cargo: "Tenente da PMMG",
              pontos: [
                "Experiência operacional na atividade policial de rua",
                "Visão técnica de quem atua há 20 anos como policial",
                "Coautor do guia com foco na realidade do serviço operacional",
              ],
            },
          ].map((a, i) => (
            <Reveal key={a.nome} delay={i * 0.15}>
              <div className="card-glass group h-full overflow-hidden rounded-2xl">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={a.foto}
                    alt={a.nome}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <p className="text-xs font-semibold tracking-widest text-gold uppercase">
                      {a.cargo}
                    </p>
                    <h3 className="font-display text-3xl uppercase">{a.nome}</h3>
                  </div>
                </div>
                <ul className="space-y-3 p-6">
                  {a.pontos.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-white/75">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= QUEM É WALACE ================= */}
      <section className="border-y border-line bg-night-2">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
                Quem é Walace Costa
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
                20 anos de farda. <span className="text-gold-gradient">Formação jurídica.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-white/70">
                Em 16 de agosto de 2006, Walace ingressou na Polícia Militar de Minas Gerais. Desde
                então, construiu uma trajetória reconhecida pela atuação operacional — incluindo um
                parto realizado em via pública, ocorrência que virou até tema de questão de concurso.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Medal,
                    titulo: "Condecorado pela PMMG",
                    texto:
                      "Medalha de Mérito Militar (Bronze), ocorrências de destaque e reconhecimento operacional.",
                  },
                  {
                    icon: GraduationCap,
                    titulo: "Formação jurídica completa",
                    texto:
                      "Bacharel em Direito (2018), pós-graduado em Advocacia Criminal (2021) e em Atividade Policial (2025).",
                  },
                  {
                    icon: Users,
                    titulo: "Mentor de policiais",
                    texto:
                      "Ajuda policiais e alunos de formação a evoluir, prevenir problemas administrativos e escrever melhor.",
                  },
                ].map((c) => (
                  <div key={c.titulo} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold ring-1 ring-gold/30">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold">{c.titulo}</h3>
                      <p className="mt-1 text-sm text-white/65">{c.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: walaceFarda.url, alt: "Walace Costa em uniforme de gala da PMMG" },
                  { src: walaceMedalhas.url, alt: "Condecorações recebidas pela PMMG" },
                  { src: walaceDireito.url, alt: "Formação em Direito e certificados" },
                  { src: walaceCasual.url, alt: "Walace Costa fora da farda" },
                ].map((img, i) => (
                  <motion.img
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`aspect-[4/5] w-full rounded-xl object-cover object-top ring-1 ring-line transition-transform duration-500 hover:scale-[1.03] hover:ring-gold/50 ${
                      i % 2 === 1 ? "mt-8" : ""
                    }`}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= PARA QUEM É ================= */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">
            Este material é <span className="text-gold-gradient">para você que…</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {paraQuem.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <div className="card-glass flex items-start gap-3 rounded-lg p-4 text-white/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= OBJEÇÕES ================= */}
      <section className="border-y border-line bg-night-2">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <Reveal className="text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
              A sua maior dúvida pode ser a nossa próxima resposta
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
              Perguntas <span className="text-gold-gradient">frequentes</span>
            </h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {objecoes.map((o, i) => (
              <FaqItem key={o.pergunta} pergunta={o.pergunta} resposta={o.resposta} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= OFERTA FINAL ================= */}
      <section id="oferta" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 100%, color-mix(in oklab, var(--gold) 20%, transparent), transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
              Não espere uma situação difícil acontecer
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight uppercase sm:text-6xl">
              Esteja mais preparado para a{" "}
              <span className="text-gold-gradient">atividade policial</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-glass mx-auto mt-12 max-w-lg rounded-2xl p-10">
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-sm tracking-[0.3em] text-white/50 uppercase">
                E-book + 42 videoaulas
              </p>
              <p className="mt-3 font-display text-7xl text-gold-gradient">R$ 35,00</p>
              <p className="mt-2 text-sm text-white/60">Pagamento único • Acesso imediato</p>
              <CtaButton className="mt-8 w-full">
                Quero garantir o meu acesso
              </CtaButton>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-white/50">
                <ShieldCheck className="h-4 w-4 text-gold" /> Compra segura • Checkout Kiwify
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-line bg-night-2">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center">
          <span className="font-display text-2xl tracking-wide text-gold-gradient">
            PONTA DA LINHA
          </span>
          <a
            href="https://instagram.com/walacef.costa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-night"
          >
            <Instagram className="h-4 w-4" /> @walacef.costa
          </a>
          <p className="max-w-md text-xs leading-relaxed text-white/40">
            Atividade Policial Operacional na Ponta da Linha — desenvolvido por Sargento Walace
            Costa e Tenente Walison Tardelly. Conhecimento para quem está na ponta da linha.
          </p>
        </div>
      </footer>
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
        onClick={() => setOpen((v) => !v)}
        className="card-glass w-full rounded-lg p-5 text-left transition-colors hover:border-gold/40"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-bold text-white">{pergunta}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pt-4 text-sm leading-relaxed text-white/65">{resposta}</p>
        </motion.div>
      </button>
    </Reveal>
  );
}
