import { useState } from "react";
import { Github, Mail, MapPin, Calendar, Award, Briefcase, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePhoto from "@/imports/84DEA58E-DD5C-49FA-BA3A-5092FA009641_1_105_c.jpeg";
import screenshot1 from "@/imports/screenshot_1.png";
import screenshot2 from "@/imports/screenshot_2.png";
import screenshot3 from "@/imports/screenshot_3.png";

const profile = {
  name: "菱山 大悟",
  nameEn: "Daigo Hishiyama",
  university: "九州大学工学部量子物理工学科 4年",
  location: "福岡市",
  email: "makaroni4679@gmail.com",
  github: "github.com/Maple170",
  githubUrl: "https://github.com/Maple170",
  bio: "九州大学工学部量子物理工学科4年。多田研究室にて量子アニーリングを用いた最適化問題の研究に取り組んでいます。Python・PyTorchを用いたシミュレーション・機械学習を扱い、物理と情報の融合領域でエンジニアとして貢献できる環境を求めています。",
};

const certifications = [
  { name: "基本情報技術者試験", org: "IPA", year: "", level: "国家資格" },
  { name: "TOEIC L&R", org: "ETS", year: "", score: "760点", level: "英語" },
];

const experiences = [
  {
    role: "九州大学工学部 在学",
    company: "九州大学工学部量子物理工学科",
    period: "2023年4月 — 現在",
    duration: "継続中",
    description: "量子力学、統計力学といった物理学を横断的に学習。2年次には民間企業から奨学金を授与。",
    tags: [],
  },
  {
    role: "研究室配属（多田研究室）",
    company: "九州大学 多田研究室",
    period: "2026年4月 — 現在",
    duration: "継続中",
    description: "量子アニーリングを用いた組合せ最適化問題の研究に従事。イジングモデルへの問題定式化からシミュレーション実装・評価まで一貫して担当。",
    tags: ["Python", "PyTorch"],
  },
];

const projects: { title: string; description: string; tech: string[]; github: string; demo: string | null; images: string[] }[] = [
  {
    title: "ポートフォリオ最適化：古典 vs 量子",
    description: "幾何ブラウン運動で生成したダミー株価データを用い、古典ソルバー (scipy) と量子アニーリング (Fixstars Amplify) でポートフォリオ最適化を行い結果を比較。研究室での量子アニーリング研究を応用したデモアプリ。",
    tech: ["Python", "Amplify", "scipy", "Streamlit"],
    github: "https://github.com/Maple170/portfolio-optimization",
    demo: null,
    images: [screenshot1, screenshot2, screenshot3],
  },
];

const skills = ["Python", "PyTorch", "Git"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "certifications", label: "資格" },
    { id: "experience", label: "経歴" },
    { id: "projects", label: "制作物" },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Portfolio
          </span>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.label}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="メニュー"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            {navLinks.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="about" className="pt-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 min-h-[92vh] items-start">
            {/* Mobile photo */}
            <div className="md:hidden flex justify-center pt-12 pb-6">
              <div className="w-[160px] h-[200px] rounded-2xl overflow-hidden bg-muted">
                <ImageWithFallback
                  src={profilePhoto}
                  alt={`${profile.name}のプロフィール写真`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Left — text */}
            <div className="pb-16 pt-0 md:py-20 pr-0 md:pr-16">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-3 text-foreground"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
              >
                {profile.name}
              </h1>
              <p
                className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 tracking-wider"
                style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}
              >
                {profile.nameEn}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin size={13} />
                <span className="text-xs sm:text-sm">{profile.university} · {profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 md:mb-10">
                <Mail size={13} />
                <span className="text-xs sm:text-sm break-all">{profile.email}</span>
              </div>

              <p className="text-[14px] md:text-[15px] leading-[1.85] text-foreground/80 max-w-[52ch] mb-8 md:mb-10">
                {profile.bio}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 border border-border text-sm font-medium rounded-full hover:bg-secondary transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Right — photo (desktop only) */}
            <div className="hidden md:flex flex-col items-end self-center py-20">
              <div className="w-[260px] h-[340px] rounded-2xl overflow-hidden bg-muted">
                <ImageWithFallback
                  src={profilePhoto}
                  alt={`${profile.name}のプロフィール写真`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Certifications */}
      <section id="certifications" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel index="01" label="資格" />
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-foreground/20 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded-full"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {cert.level}
                  </span>
                  <span
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {cert.year}
                  </span>
                </div>
                <Award size={20} className="text-accent mb-3" />
                <h3 className="text-base font-medium text-foreground mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.org}{cert.score ? ` — ${cert.score}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel index="02" label="経歴" />
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Experience
          </h2>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div key={exp.role} className="relative">
                {i < experiences.length - 1 && (
                  <div className="absolute left-[11px] top-[26px] bottom-0 w-px bg-border" />
                )}
                <div className="flex gap-6 pb-10">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-foreground bg-background flex items-center justify-center">
                      <Briefcase size={10} className="text-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-base font-medium text-foreground">{exp.role}</h3>
                      <span
                        className="text-xs text-muted-foreground whitespace-nowrap"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-1">{exp.company}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                      <Calendar size={11} />
                      <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</span>
                    </div>
                    <p className="text-[14px] leading-[1.75] text-foreground/75 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-md border border-border"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel index="03" label="制作物" />
          <h2
            className="text-3xl md:text-4xl mb-10 md:mb-14 text-foreground"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Projects
          </h2>
          <div className="space-y-0 divide-y divide-border">
            {projects.map((project) => (
              <div key={project.title} className="py-10 flex flex-col md:flex-row md:items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-foreground mb-3">{project.title}</h3>
                  <p className="text-[14px] leading-[1.85] text-foreground/75 max-w-[60ch] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-md border border-border"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm rounded-full hover:bg-secondary transition-colors"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm rounded-full hover:opacity-80 transition-opacity"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
                {project.images.length > 0 && (
                  <button
                    onClick={() => setLightbox({ images: project.images, index: 0 })}
                    className="w-full md:w-96 shrink-0 rounded-xl overflow-hidden border border-border cursor-zoom-in group relative"
                  >
                    <ImageWithFallback
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs bg-black/50 px-3 py-1 rounded-full">
                        スクリーンショットを見る ({project.images.length}枚)
                      </span>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {profile.name} · {profile.university}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
          >
            <Mail size={13} />
            {profile.email}
          </a>
        </div>
      </footer>
    </div>
  );
}

function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <img src={images[idx]} alt="" className="w-full rounded-xl shadow-2xl" />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div
      className="flex items-center gap-3 mb-4 text-xs text-muted-foreground tracking-[0.2em] uppercase"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span>{index}</span>
      <div className="w-8 h-px bg-border" />
      <span>{label}</span>
    </div>
  );
}
