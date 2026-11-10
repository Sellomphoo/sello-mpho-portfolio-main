import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Github, Menu, X } from "lucide-react";
import mtnDashboard from "@/assets/mtn-customer-churn-dashboard.png.asset.json";
import telecomDashboard from "@/assets/telecom-customer-analytics-dashboard.png.asset.json";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mpho Sello — ICT Professional Portfolio" },
      { name: "description", content: "Explore Mpho Sello’s ICT portfolio, data analytics projects, skills, education, and professional achievements." },
      { property: "og:title", content: "Mpho Sello — ICT Professional Portfolio" },
      { property: "og:description", content: "Data analytics, technology projects, skills, education, and achievements from Mpho Sello." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "className": "dark", "lang": "en", "style": { scrollBehavior: "smooth" } }, body: { "className": "\x62g-[#\x3050505]" } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="root">
        <div style={{ pointerEvents: "none" }} role="region" aria-label="Notifications (F8)" tabIndex={-1}>
          <ol className={"fixed top-0 z-[100] flex w-full flex-col-reverse p-4 \x73m:\x62ottom-0 \x73m:\x72ight-0 \x73m:\x74op-auto \x73m:\x66lex-col [max-height:100vh] [@media(min-width:768px)]:max-w-[420px]"} tabIndex={-1} />
        </div>
        <div className={"relative \x62g-background [min-height:100vh] [overflow-x:hidden]"}>
          <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
            <div className={"h-full \x62g-gradient-to-r \x66rom-cyan-400/\x380 \x76ia-foreground \x74o-fuchsia-400/\x380 \x73hadow-[\x30_0_12px_hsl(\x30_0%\x5f100%/\x30.\x35)] transition-[width] \x64uration-150 \x65ase-out"} style={{ width: "0%" }} />
          </div>
          <div className="pointer-events-none fixed inset-0 z-0 [overflow:hidden]" aria-hidden="true">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(black 30%, transparent 75%)" } as CSSProperties} />
            <div className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(37, 209, 244, 0.6), transparent 60%)", translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -10%) translate3d(0px, 0px, 0px)" } as CSSProperties} data-site-import-responsive="10" />
            <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full opacity-25" style={{ background: "radial-gradient(circle, rgba(180, 71, 235, 0.55), transparent 60%)", translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -10%) translate3d(0px, 0px, 0px)" } as CSSProperties} data-site-import-responsive="11" />
            <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(37, 106, 244, 0.5), transparent 60%)", translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -3.5714%) translate3d(0px, 0px, 0px)" } as CSSProperties} data-site-import-responsive="12" />
            <div className={"absolute h-[600px] w-[600px] rounded-full opacity-20 [&]:will-change-transform"} style={{ background: "radial-gradient(circle, rgba(102, 229, 255, 0.5), transparent 60%)", transform: "translate3d(468px, 132px, 0px)" }} />
          </div>
          <div className="relative z-10">
            <ImportedNav />
            <ImportedSectionIBuildIntelligentanalyticsData />
            <ImportedSectionAboutMe />
            <div id="projects" aria-busy="false">
              <ImportedSectionFeaturedProjects />
            </div>
            <div id="skills" aria-busy="false">
              <ImportedSectionSkillsTechnologies />
            </div>
            <div id="certificates" aria-busy="false">
              <ImportedSectionCertificatesAwards />
            </div>
            <div id="education" aria-busy="false">
              <ImportedSectionEducationJourney />
            </div>
            <div id="contact" aria-busy="false">
              <ImportedSectionGetInTouch />
            </div>
            <div className={"min-h-[420px] lg:min-h-[108px]"} id="footer" aria-busy="false">
              <ImportedFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ImportedNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;
    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <nav className={"fixed top-0 w-full z-50 transition-all \x64uration-300 bg-transparent"} data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"nav-blur\",\"border-b\",\"border-border\"],\"removed\":[\"bg-transparent\"],\"threshold\":648},\"mobile\":{\"added\":[\"nav-blur\",\"border-b\",\"border-border\"],\"removed\":[\"bg-transparent\"],\"threshold\":633}}"}>
      <div className={"max-w-7xl \x6dx-auto \x70x-4 \x73m:\x70x-6 \x6cg:\x70x-8"}>
        <div className="flex justify-between items-center h-16">
          <div className={"\x74ext-xl \x66ont-bold \x74ext-gradient"}>Mpho Sello</div>
          <div className={"hidden \x6dd:\x66lex items-center gap-4"}>
            <div className="gooey-nav-container relative">
              <nav>
                <ul className="flex items-center gap-1 list-none m-0 p-0 relative z-[2]">
                  <li className={"relative cursor-pointer \x74ext-sm \x66ont-medium transition-colors \x64uration-300 active text-primary-foreground"}>
                    <a className={"\x6futline-none \x70y-[\x30.\x35em] \x70x-[\x30.\x38em] inline-block"} href="#home">Home</a>
                  </li>
                  <li className={"relative cursor-pointer \x74ext-sm \x66ont-medium transition-colors \x64uration-300 text-foreground"}>
                    <a className={"\x6futline-none \x70y-[\x30.\x35em] \x70x-[\x30.\x38em] inline-block"} href="#about">About Me</a>
                  </li>
                  <li className={"relative cursor-pointer \x74ext-sm \x66ont-medium transition-colors \x64uration-300 text-foreground"}>
                    <a className={"\x6futline-none \x70y-[\x30.\x35em] \x70x-[\x30.\x38em] inline-block"} href="#projects">Projects</a>
                  </li>
                  <li className={"relative cursor-pointer \x74ext-sm \x66ont-medium transition-colors \x64uration-300 text-foreground"}>
                    <a className={"\x6futline-none \x70y-[\x30.\x35em] \x70x-[\x30.\x38em] inline-block"} href="#skills">Skills</a>
                  </li>
                  <li className={"relative cursor-pointer \x74ext-sm \x66ont-medium transition-colors \x64uration-300 text-foreground"}>
                    <a className={"\x6futline-none \x70y-[\x30.\x35em] \x70x-[\x30.\x38em] inline-block"} href="#certificates">Achievements</a>
                  </li>
                  <li className={"relative cursor-pointer \x74ext-sm \x66ont-medium transition-colors \x64uration-300 text-foreground"}>
                    <a className={"\x6futline-none \x70y-[\x30.\x35em] \x70x-[\x30.\x38em] inline-block"} href="#education">Education</a>
                  </li>
                  <li className={"relative cursor-pointer \x74ext-sm \x66ont-medium transition-colors \x64uration-300 text-foreground"}>
                    <a className={"\x6futline-none \x70y-[\x30.\x35em] \x70x-[\x30.\x38em] inline-block"} href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <span className={"effect \x66ilter"} style={{ left: "0px", top: "0px", width: "61.9219px", height: "34px" }} data-site-import-responsive="37" />
              <span className="effect text active" style={{ left: "0px", top: "0px", width: "61.9219px", height: "34px" }} data-site-import-responsive="38">Home</span>
            </div>
            <button className="luxury-toggle group" type="button" aria-label={isDark ? "Switch to luxury light theme" : "Switch to luxury dark theme"} onClick={toggleTheme}>
              <span className="luxury-toggle-thumb">
                <svg className={"absolute h-3.5 w-3.5 \x74ext-[\x68sl(\x328_35%\x5f12%)] transition-all \x64uration-500 opacity-0 \x2drotate-90 \x73cale-50"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <svg className={"absolute h-3.5 w-3.5 \x74ext-[\x68sl(\x336_50%\x5f88%)] transition-all \x64uration-500 opacity-100 \x72otate-0 \x73cale-100"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </span>
            </button>
          </div>
          <div className={"\x6dd:\x68idden flex items-center \x73pace-x-2"}>
            <button className="luxury-toggle group" type="button" aria-label={isDark ? "Switch to luxury light theme" : "Switch to luxury dark theme"} onClick={toggleTheme}>
              <span className="luxury-toggle-thumb">
                <svg className={"absolute h-3.5 w-3.5 \x74ext-[\x68sl(\x328_35%\x5f12%)] transition-all \x64uration-500 opacity-0 \x2drotate-90 \x73cale-50"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
                <svg className={"absolute h-3.5 w-3.5 \x74ext-[\x68sl(\x336_50%\x5f88%)] transition-all \x64uration-500 opacity-100 \x72otate-0 \x73cale-100"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </span>
            </button>
            <button
              className="inline-flex h-9 items-center justify-center rounded-md px-3 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              ref={menuButtonRef}
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="portfolio-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="portfolio-mobile-menu" className="absolute left-4 right-4 top-16 z-[70] border border-border bg-background/95 p-2 shadow-lg backdrop-blur-md sm:left-6 sm:right-6 md:hidden">
            {[
              ["Home", "#home"],
              ["About Me", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Achievements", "#certificates"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                className="block px-3 py-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                href={href}
                key={href}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function ImportedSectionIBuildIntelligentanalyticsData() {
  return (
    <section className={"relative w-full \x62g-background [min-height:100vh] [overflow:hidden]"} id="home">
      <div className={"pointer-events-none absolute \x69nset-x-0 top-1/4 text-[18vw] \x66ont-bold \x74ext-foreground/[\x30.\x3025] \x6ceading-none select-none whitespace-nowrap [&]:text-center [letter-spacing:-0.05em]"} style={{ fontFamily: "\"Space Grotesk\", sans-serif", translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 22.4014%) translate3d(0px, 0px, 0px)" } as CSSProperties} aria-hidden="true" data-site-import-responsive="44">MPHO · SELLO</div>
      <div className={"pointer-events-none absolute top-1/3 left-1/2 \x2dtranslate-x-1/\x32 h-[80vh] w-[80vh] rounded-full opacity-40 [&]:will-change-transform"} style={{ background: "radial-gradient(circle, rgba(61, 214, 245, 0.35), transparent 60%)", transform: "translate3d(0px, 0px, 0px)" }} aria-hidden="true" />
      <div className={"absolute top-20 left-0 right-0 z-20 \x70x-6 \x73m:\x70x-10 \x6cg:\x70x-16"}>
        <div className={"flex items-center justify-between \x74ext-xs uppercase \x74racking-[\x30.\x325em] text-muted-foreground"}>
          <span className={"hidden \x6dd:\x69nline"}>Portfolio / 2026</span>
          <div className="flex items-center gap-5">
            <a className={"\x68over:\x74ext-foreground transition-colors"} href="https://www.linkedin.com/in/mpho-sello-692193241" rel="noopener noreferrer" target="_blank">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a className={"\x68over:\x74ext-foreground transition-colors"} href="https://github.com/Sellomphoo" rel="noopener noreferrer" target="_blank">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            
            <a className={"\x68over:\x74ext-foreground transition-colors"} href="mailto:202324276@student.spu.ac.za">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={"relative z-10 grid grid-cols-1 \x6cg:\x67rid-cols-12 items-center gap-8 \x70x-6 \x73m:\x70x-10 \x6cg:\x70x-16 pt-32 pb-24 [min-height:100vh]"}>
        <div className={"\x73pace-y-10 [@media(min-width:1024px)]:[grid-column:span_7/span_7]"}>
          <div className={"\x61nimate-slide-in-left"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 5.2855%) translate3d(0px, 0px, 0px)", opacity: "1" } as CSSProperties} data-site-import-responsive="70">
            <div className={"flex items-center gap-3 \x74ext-xs uppercase \x74racking-[\x30.\x33em] text-muted-foreground mb-6"}><span className={"h-px w-10 \x62g-foreground/\x340"} />Hi, I'm Mpho Sello</div>
            <h1 className={"\x74ext-display text-[2.6rem] \x73m:\x74ext-[\x33.\x36rem] \x6cg:\x74ext-[\x34.\x36rem] \x66ont-bold \x6ceading-[\x30.\x395] [letter-spacing:-0.04em]"}>I build <span className={"italic \x66ont-light text-muted-foreground"}>intelligent</span><br />analytics &amp;<br /><span className={"\x74ext-gradient"}>data dashboards.</span></h1>
          </div>
          <div className={"\x61nimate-slide-in-right flex items-center gap-4"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 9%) translate3d(0px, 0px, 0px)", opacity: "1" } as CSSProperties} data-site-import-responsive="78">
            <span className={"h-px w-12 \x62g-foreground/\x330"} />
            <div className="h-7 [overflow:hidden]">
              <div className={"transition-transform \x64uration-700"} style={{ transform: "translateY(-3.5rem)" }}>
                <div className={"h-7 \x74ext-sm \x73m:\x74ext-base uppercase \x74racking-[\x30.\x325em] \x74ext-foreground/\x380"}>Data Analyst</div>
                <div className={"h-7 \x74ext-sm \x73m:\x74ext-base uppercase \x74racking-[\x30.\x325em] \x74ext-foreground/\x380"}>PowerBI Developer</div>
                <div className={"h-7 \x74ext-sm \x73m:\x74ext-base uppercase \x74racking-[\x30.\x325em] \x74ext-foreground/\x380"}>Bussiness Intelligence Analyst</div>
              </div>
            </div>
          </div>
          <p className={"\x61nimate-scale-in \x74ext-base \x73m:\x74ext-lg text-muted-foreground \x6ceading-relaxed [max-width:36rem]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 7.6434%) translate3d(0px, 0px, 0px)", opacity: "1" } as CSSProperties} data-site-import-responsive="85">Data Analyst skilled in Excel, SQL, and Python, with practical experience cleaning, analyzing, and reconciling complex datasets for local and international clients. Experienced in handling missing values, building data validation checks, identifying discrepancies, and transforming raw data into meaningful insights on sales performance, customer behavior, payment trends, and business performance. Certified through IBM Skills Build and Oracle Analytics Cloud, with Power BI currently in progress.</p>
          <div className={"\x61nimate-scale-in flex flex-col \x73m:\x66lex-row gap-4"} style={{ transform: "scale(1)", opacity: "1" }}>
            <button type="button" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x68over:\x62g-accent magnetic-btn group rounded-none \x62order-foreground/\x330 bg-transparent text-foreground \x68over:\x74ext-background \x70x-8 h-14 \x74ext-sm uppercase \x74racking-[\x30.\x325em]"}>View Projects<svg className={"ml-3 h-4 w-4 \x2drotate-45 transition-transform \x67roup-hover:\x74ranslate-x-1"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg></button>
            <a href="/Mpho_Sello_Resume.pdf" download className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 rounded-none \x70x-8 h-14 \x74ext-sm uppercase \x74racking-[\x30.\x325em] text-muted-foreground \x68over:\x74ext-foreground \x68over:\x62g-transparent"}><svg className="mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>Resume</a>
          </div>
        </div>
        <div className={"relative \x61nimate-slide-in-right [@media(min-width:1024px)]:[grid-column:span_5/span_5]"} style={{ transform: "translate(0px)", opacity: "1" }}>
          <div className={"relative w-full \x6dx-auto [&]:will-change-transform [max-width:28rem]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -5.6965%) translate3d(0px, 0px, 0px)" } as CSSProperties} data-site-import-responsive="97">
            <figure className={"relative w-full h-full flex flex-col items-center justify-center [&]:[perspective:800px]"} style={{ height: "520px", width: "100%" }}>
              <div className={"relative [transform-style:preserve-3d] transition-transform \x64uration-300 \x65ase-out [&]:will-change-transform"} style={{ width: "390px", height: "520px" }}>
                <img className={"absolute top-0 left-0 rounded-[15px] [transform:translateZ(0)] [&]:object-cover [&]:will-change-transform"} style={{ width: "390px", height: "520px" }} src="/site-assets/6848d22de5c94b3a.webp" alt="Mpho Sello portrait" loading="eager" fetchPriority="high" decoding="async" />
                <div className={"absolute top-0 left-0 z-[2] [transform:translateZ(30px)] [&]:will-change-transform"}>
                  <div className="flex h-full w-full items-end p-5">
                    <div className={"flex w-full items-center justify-between text-[10px] uppercase \x74racking-[\x30.\x33em] \x74ext-white/\x390"}>
                      <span>SPU · ICT</span>
                      <span>EST. 2027</span>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className={"pointer-events-none absolute left-0 top-0 rounded-[4px] \x62g-white \x70x-[\x310px] \x70y-[\x34px] text-[10px] \x74ext-[#\x32d2d2d] opacity-0 z-[3] hidden \x73m:\x62lock transition-opacity \x64uration-200"} style={{ opacity: "0" }}>Mpho Sello — ICT</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className={"absolute bottom-8 left-1/2 \x2dtranslate-x-1/\x32 z-10 flex flex-col items-center gap-2 text-[10px] uppercase \x74racking-[\x30.\x33em] text-muted-foreground \x68over:\x74ext-foreground transition-colors"} aria-label="Scroll to about">Scroll<span className={"h-10 w-px \x62g-gradient-to-b \x66rom-foreground/\x360 \x74o-transparent \x61nimate-float"} /></button>
    </section>
  );
}

function ImportedSectionAboutMe() {
  return (
    <section className={"relative \x70y-32 section-bg [overflow:hidden]"} id="about">
      <div className={"pointer-events-none absolute -top-10 left-0 right-0 text-[20vw] \x66ont-bold \x74ext-foreground/[\x30.\x3025] \x6ceading-none whitespace-nowrap select-none [letter-spacing:-0.05em]"} style={{ fontFamily: "\"Space Grotesk\", sans-serif", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-hidden="true">PROFILE — ABOUT</div>
      <div className={"relative max-w-7xl \x6dx-auto \x70x-4 \x73m:\x70x-6 \x6cg:\x70x-8"}>
        <div className={"mb-16 [&]:text-center"}>
          <h2 className={"\x74ext-display \x74ext-4xl \x73m:\x74ext-5xl \x6cg:\x74ext-6xl \x66ont-bold mb-4 \x74ext-gradient [letter-spacing:-0.04em]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-12px, 24px)" } as CSSProperties}>About Me</h2>
          <p className={"\x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 14px)" } as CSSProperties}>Get to know more about my background, skills, and passion for technology</p>
        </div>
        <div className={"grid grid-cols-1 \x6cg:\x67rid-cols-2 gap-12 items-center mb-16"}>
          <div className={"relative \x61nimate-slide-in-left [order:1] [&]:[perspective:1200px]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px)", opacity: "1" } as CSSProperties} data-site-import-responsive="113">
            <div className={"pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] \x62g-[\x72adial-gradient(\x63ircle_at_center,\x68sl(\x76ar(\x2d-primary)/\x30.\x335),\x74ransparent_70%)] transition-transform \x64uration-500 \x65ase-out [&]:will-change-transform"} style={{ transform: "translate3d(15.6589px, -43.37px, 0px)" }} aria-hidden="true" />
            <div className={"relative rounded-2xl \x73hadow-2xl \x72ing-1 \x72ing-border/\x340 [overflow:hidden]"}>
              <div className={"relative w-full transition-transform \x64uration-500 \x65ase-out [&]:aspect-[4/5] [&]:will-change-transform"} style={{ transform: "translate3d(7.82945px, -21.685px, 0px) scale(1.05)" }}>
                <img className={"absolute inset-0 h-full w-full [&]:object-cover"} src="/site-assets/cf092e57f605627c.webp" alt="Mpho Sello portrait" loading="lazy" decoding="async" />
                <div className={"absolute inset-0 \x62g-background/\x320"} />
              </div>
            </div>
            <div className={"absolute -top-6 -left-6 w-20 h-20 \x62g-primary/\x310 rounded-full \x61nimate-float hidden \x6cg:\x62lock"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="119" />
            <div className={"absolute -bottom-6 -right-6 w-16 h-16 \x62g-accent/\x310 rounded-full \x61nimate-float hidden \x6cg:\x62lock"} style={{ animationDelay: "1s", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="120" />
            <div className={"absolute top-1/2 -right-4 w-12 h-12 \x62g-primary/\x35 rounded-full \x61nimate-float hidden \x6cg:\x62lock"} style={{ animationDelay: "2s", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="121" />
          </div>
          <div className={"\x73pace-y-8 [order:2]"}>
            <div className={"\x61nimate-slide-up"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translateY(0px)" } as CSSProperties}>
              <h3 className={"\x74ext-2xl \x66ont-bold mb-6 flex items-center [letter-spacing:-0.03em]"}><svg className="mr-3 h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>Profile Summary</h3>
              <p className={"\x74ext-lg text-muted-foreground \x6ceading-relaxed"}>Data Analyst skilled in Excel, SQL, and Python, with practical experience cleaning, analyzing, and reconciling complex datasets for local and international clients. Experienced in handling missing values, building data validation checks, identifying discrepancies, and transforming raw data into meaningful insights on sales performance, customer behavior, payment trends, and business performance.</p>
              <p className={"\x74ext-lg text-muted-foreground \x6ceading-relaxed mt-6"}>Certified through IBM Skills Build and Oracle Analytics Cloud, with Power BI currently in progress.</p>
            </div>
            <div className={"\x61nimate-slide-up"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translateY(0px)" } as CSSProperties}>
              <h4 className={"\x74ext-xl \x66ont-semibold mb-4 flex items-center [letter-spacing:-0.03em]"}><svg className="mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>Languages</h4>
              <div className={"flex gap-3 [&]:flex-wrap"}>
                <span className={"\x70x-4 \x70y-2 \x62g-skill-bg rounded-full \x74ext-sm \x66ont-medium"}>English</span>
                <span className={"\x70x-4 \x70y-2 \x62g-skill-bg rounded-full \x74ext-sm \x66ont-medium"}>Sesotho</span>
                <span className={"\x70x-4 \x70y-2 \x62g-skill-bg rounded-full \x74ext-sm \x66ont-medium"}>Xhosa</span>
                <span className={"\x70x-4 \x70y-2 \x62g-skill-bg rounded-full \x74ext-sm \x66ont-medium"}>Zulu</span>
                <span className={"\x70x-4 \x70y-2 \x62g-skill-bg rounded-full \x74ext-sm \x66ont-medium"}>Setswana</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"grid grid-cols-1 \x6cg:\x67rid-cols-2 gap-6"}>
          <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card"}>
            <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
              <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none flex items-center [letter-spacing:-0.025em]"}><svg className="mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>Core Values</h3>
            </div>
            <div className="p-6 pt-0">
              <ul className={"\x73pace-y-2 text-muted-foreground"}>
                <li>• Continuous learning and growth</li>
                <li>• Data-Driven Innovation</li>
                <li>• People Centred Analysis</li>
                <li>• Ethical and responsible development</li>
              </ul>
            </div>
          </div>
          <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card"}>
            <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
              <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none flex items-center [letter-spacing:-0.025em]"}><svg className="mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>Soft Skills</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-2 gap-3">
                <div className={"flex items-center \x73pace-x-2"}>
                  <div className={"w-2 h-2 \x62g-primary rounded-full"} />
                  <span className={"\x74ext-sm text-muted-foreground"}>Problem Solving</span>
                </div>
                <div className={"flex items-center \x73pace-x-2"}>
                  <div className={"w-2 h-2 \x62g-primary rounded-full"} />
                  <span className={"\x74ext-sm text-muted-foreground"}>Cross-functional Collaboration</span>
                </div>
                <div className={"flex items-center \x73pace-x-2"}>
                  <div className={"w-2 h-2 \x62g-primary rounded-full"} />
                  <span className={"\x74ext-sm text-muted-foreground"}>Critical Thinking</span>
                </div>
                <div className={"flex items-center \x73pace-x-2"}>
                  <div className={"w-2 h-2 \x62g-primary rounded-full"} />
                  <span className={"\x74ext-sm text-muted-foreground"}>Communication</span>
                </div>
                <div className={"flex items-center \x73pace-x-2"}>
                  <div className={"w-2 h-2 \x62g-primary rounded-full"} />
                  <span className={"\x74ext-sm text-muted-foreground"}>Adaptability</span>
                </div>
                <div className={"flex items-center \x73pace-x-2"}>
                  <div className={"w-2 h-2 \x62g-primary rounded-full"} />
                  <span className={"\x74ext-sm text-muted-foreground"}>Deadline-driven Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"mt-16 grid grid-cols-2 \x6dd:\x67rid-cols-4 gap-8"}>
          <div className={"[&]:text-center"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9984", transform: "translate(0px, 18px)" } as CSSProperties}>
            <div className={"\x74ext-3xl \x66ont-bold text-primary mb-2 flex items-center justify-center"}><span className="inline-block tabular-nums [letter-spacing:0.05em]">4</span>+</div>
            <div className={"\x74ext-sm text-muted-foreground"}>Programming Languages</div>
          </div>
          <div className={"[&]:text-center"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9862", transform: "translate(0px, 18px)" } as CSSProperties}>
            <div className={"\x74ext-3xl \x66ont-bold text-primary mb-2 flex items-center justify-center"}><span className="inline-block tabular-nums [letter-spacing:0.05em]">5</span>+</div>
            <div className={"\x74ext-sm text-muted-foreground"}>Projects Completed</div>
          </div>
          <div className={"[&]:text-center"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9521", transform: "translate(0px, 18px)" } as CSSProperties}>
            <div className={"\x74ext-3xl \x66ont-bold text-primary mb-2 flex items-center justify-center"}><span className="inline-block tabular-nums [letter-spacing:0.05em]">3</span>+</div>
            <div className={"\x74ext-sm text-muted-foreground"}>Years of Study</div>
          </div>
          <div className={"[&]:text-center"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, 18px)" } as CSSProperties}>
            <div className={"\x74ext-3xl \x66ont-bold text-primary mb-2 flex items-center justify-center"}><span className="inline-block tabular-nums [letter-spacing:0.05em]">7</span>+</div>
            <div className={"\x74ext-sm text-muted-foreground"}>Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}

type PortfolioProject = {
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  code: string;
};

function ImportedSectionFeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const projectTriggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const projects: PortfolioProject[] = [
    {
      title: "MTN Customer Churn Analytics Dashboard",
      description: "Power BI analysis of 496 customers, churn drivers, and revenue, with a carefully validated customer and purchase data model.",
      longDescription: "An end-to-end Power BI project exploring customer churn in an MTN telecom dataset. The analysis separates customer-level details from purchase lines to avoid inflated counts, then checks key figures against the raw data: 496 customers, 146 churned customers, and 199,348,200 in revenue.",
      category: "Power BI · Customer Churn",
      image: mtnDashboard.url,
      imageAlt: "MTN customer churn analytics dashboard overview",
      technologies: ["Power BI", "Power Query", "DAX", "Microsoft Excel"],
      features: ["Churn and revenue KPIs", "Churn reasons and tenure analysis", "Customer age and satisfaction breakdown", "Monthly revenue analysis", "Gender slicer", "Validated customer and purchase model"],
      code: "https://github.com/Sellomphoo/MTN-Customer-Churn-Analytics-Dashboard---Power-BI",
    },
    {
      title: "Telecom Customer Analytics Dashboard",
      description: "A Power BI profile of 7,043 telecom customers, highlighting revenue, contracts, services, payment methods, and customer locations.",
      longDescription: "An interactive Power BI dashboard built to understand a telecom company's customer base and revenue. It examines customer demographics, contract types, internet services, payment preferences, and geographic distribution, with data profiling and revenue reconciliation guiding the analysis.",
      category: "Power BI · Customer Analytics",
      image: telecomDashboard.url,
      imageAlt: "Telecom customer analytics dashboard overview",
      technologies: ["Power BI Desktop", "Power Query", "DAX"],
      features: ["Customer and revenue KPI cards", "Age, gender, and marital status profile", "Revenue by contract and internet type", "Payment method breakdown", "Customer location map", "Gender and customer status slicers"],
      code: "https://github.com/Sellomphoo/Telecom-Customer-Analytics-Dashboard-Power-BI-",
    },
  ];

  useEffect(() => {
    if (!selectedProject) return;
    dialogRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      projectTriggerRef.current?.focus();
    };
  }, [selectedProject]);

  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="pointer-events-none absolute left-0 right-0 top-20 select-none whitespace-nowrap text-[18vw] font-bold leading-none text-foreground/[0.03]" style={{ fontFamily: "\"Space Grotesk\", sans-serif" }} aria-hidden="true">WORK · 2024</div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-display mb-4 text-4xl font-bold text-gradient sm:text-5xl lg:text-6xl">Featured Projects</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">Explore some of my recent work and the technologies I've used to bring ideas to life</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group h-full overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <button type="button" className="block w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-haspopup="dialog" aria-label={`View details for ${project.title}`} onClick={(event) => { projectTriggerRef.current = event.currentTarget; setSelectedProject(project); }}>
                <img className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
              </button>
              <div className="space-y-4 p-6">
                <div>
                  <span className="mb-2 block text-sm font-medium text-muted-foreground">{project.category}</span>
                  <button type="button" className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-haspopup="dialog" aria-label={`View details for ${project.title}`} onClick={(event) => { projectTriggerRef.current = event.currentTarget; setSelectedProject(project); }}>
                    <h3 className="text-xl font-semibold leading-tight transition-colors group-hover:text-primary">{project.title}</h3>
                  </button>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">{technology}</span>)}
                </div>
                <a className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" href={project.code} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true" />GitHub repository</a>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" tabIndex={-1} className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-xl sm:p-8">
            <button type="button" className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Close project details" onClick={() => setSelectedProject(null)}><X className="h-5 w-5" aria-hidden="true" /></button>
            <h3 id="project-dialog-title" className="mb-4 pr-12 text-2xl font-semibold">{selectedProject.title}</h3>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{selectedProject.longDescription}</p>
            <h4 className="mb-3 text-lg font-semibold">Key Features</h4>
            <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {selectedProject.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-muted-foreground"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />{feature}</li>)}
            </ul>
            <h4 className="mb-3 text-lg font-semibold">Technologies Used</h4>
            <div className="mb-8 flex flex-wrap gap-2">{selectedProject.technologies.map((technology) => <span key={technology} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{technology}</span>)}</div>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90" href={selectedProject.code} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true" />View Source Code</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ImportedSectionSkillsTechnologies() {
  return (
    <section className={"relative \x70y-32 section-bg [overflow:hidden]"}>
      <div className={"pointer-events-none absolute -top-10 left-0 right-0 text-[20vw] \x66ont-bold \x74ext-foreground/[\x30.\x3025] \x6ceading-none whitespace-nowrap select-none [letter-spacing:-0.05em]"} style={{ fontFamily: "\"Space Grotesk\", sans-serif", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-hidden="true">SKILLS — TOOLS</div>
      <div className={"relative max-w-7xl \x6dx-auto \x70x-4 \x73m:\x70x-6 \x6cg:\x70x-8"}>
        <div className={"mb-16 [&]:text-center"}>
          <h2 className={"\x74ext-display \x74ext-4xl \x73m:\x74ext-5xl \x6cg:\x74ext-6xl \x66ont-bold mb-4 \x74ext-gradient [letter-spacing:-0.04em]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9922", transform: "translate(-12px, 24px)" } as CSSProperties}>Skills &amp; Technologies</h2>
          <p className={"\x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9996", transform: "translate(0px, 14px)" } as CSSProperties}>Programming languages and tools I work with</p>
        </div>
        <div className="mb-10">
          <div className={"relative rounded-2xl \x62order \x62order-border/\x350 \x62g-card/\x320 \x62ackdrop-blur-sm [overflow:hidden]"}>
            <div className={"pointer-events-none absolute \x69nset-y-0 left-0 w-20 \x62g-gradient-to-r \x66rom-background \x74o-transparent"} />
            <div className={"pointer-events-none absolute \x69nset-y-0 right-0 w-20 \x62g-gradient-to-l \x66rom-background \x74o-transparent"} />
            <div className={"flex w-max items-center gap-3 \x70y-4 \x70x-3 \x6dotion-reduce:\x74ransform-none \x68over:[\x61nimation-play-state:\x70aused]"} style={{ animation: "26s linear 0s infinite normal none running marquee" } as CSSProperties}>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(55, 118, 171)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                </svg>
                <span className="whitespace-nowrap">Python</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(248, 152, 32)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" />
                </svg>
                <span className="whitespace-nowrap">Java</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(247, 223, 30)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg>
                <span className="whitespace-nowrap">JavaScript</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(227, 79, 38)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                </svg>
                <span className="whitespace-nowrap">HTML5</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(21, 114, 182)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                </svg>
                <span className="whitespace-nowrap">CSS3</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(49, 120, 198)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
                <span className="whitespace-nowrap">TypeScript</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(51, 103, 145)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z" />
                </svg>
                <span className="whitespace-nowrap">SQL</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(242, 200, 17)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
                </svg>
                <span className="whitespace-nowrap">Power BI</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(33, 115, 70)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
                </svg>
                <span className="whitespace-nowrap">Excel</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(97, 218, 251)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                </svg>
                <span className="whitespace-nowrap">React</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(51, 153, 51)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
                </svg>
                <span className="whitespace-nowrap">Node.js</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(240, 80, 50)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" />
                </svg>
                <span className="whitespace-nowrap">Git</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(55, 118, 171)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
                </svg>
                <span className="whitespace-nowrap">Python</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(248, 152, 32)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" />
                </svg>
                <span className="whitespace-nowrap">Java</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(247, 223, 30)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg>
                <span className="whitespace-nowrap">JavaScript</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(227, 79, 38)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                </svg>
                <span className="whitespace-nowrap">HTML5</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(21, 114, 182)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                </svg>
                <span className="whitespace-nowrap">CSS3</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(49, 120, 198)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
                <span className="whitespace-nowrap">TypeScript</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(51, 103, 145)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z" />
                </svg>
                <span className="whitespace-nowrap">SQL</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(242, 200, 17)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
                </svg>
                <span className="whitespace-nowrap">Power BI</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(33, 115, 70)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
                </svg>
                <span className="whitespace-nowrap">Excel</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(97, 218, 251)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                </svg>
                <span className="whitespace-nowrap">React</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(51, 153, 51)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
                </svg>
                <span className="whitespace-nowrap">Node.js</span>
              </div>
              <div className={"flex items-center gap-2 rounded-full \x62order \x62order-border/\x360 \x62g-background/\x330 \x70x-4 \x70y-2 \x74ext-sm text-muted-foreground transition-colors \x68over:\x74ext-foreground"}>
                <svg className="h-4 w-4" style={{ color: "rgb(240, 80, 50)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" />
                </svg>
                <span className="whitespace-nowrap">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionCertificatesAwards() {
  return (
    <section className={"relative \x70y-32 section-bg [overflow:hidden]"}>
      <div className={"pointer-events-none absolute -top-10 left-0 right-0 text-[20vw] \x66ont-bold \x74ext-foreground/[\x30.\x3025] \x6ceading-none whitespace-nowrap select-none [letter-spacing:-0.05em]"} style={{ fontFamily: "\"Space Grotesk\", sans-serif", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-hidden="true">CERTIFICATES — AWARDS</div>
      <div className={"relative max-w-7xl \x6dx-auto \x70x-4 \x73m:\x70x-6 \x6cg:\x70x-8"}>
        <div className={"mb-16 [&]:text-center"}>
          <h2 className={"\x74ext-display \x74ext-4xl \x73m:\x74ext-5xl \x6cg:\x74ext-6xl \x66ont-bold mb-4 \x74ext-gradient [letter-spacing:-0.04em]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9867", transform: "translate(-12px, 24px)" } as CSSProperties}>Certificates &amp; Awards</h2>
          <p className={"\x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9983", transform: "translate(0px, 14px)" } as CSSProperties}>Professional certifications and achievements</p>
        </div>
        <div className={"grid grid-cols-1 \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-3 \x78l:\x67rid-cols-4 gap-8"}>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/CLOUD_DATABASE.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/CLOUD_DATABASE.jpg" alt="CLOUD DATABASE preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Cloud Database</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/DataCertificate.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/DataCertificate.jpg" alt="DataCertificate preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Data Certificate</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/eCertificate.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/eCertificate.jpg" alt="eCertificate preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>eCertificate</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/FNB_App_of_the_Year_Awards_Academy_2025.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/FNB_App_of_the_Year_Awards_Academy_2025.jpg" alt="FNB App of the Year Awards Academy 2025 preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>FNB App Awards 2025</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/IBM_First_Certificate.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/IBM_First_Certificate.jpg" alt="IBM First Certificate preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>IBM Certificate</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/IBM_PY0101EN_Certificate_IBM_SkillsBuild.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/IBM_PY0101EN_Certificate_IBM_SkillsBuild.jpg" alt="IBM PY0101EN Certificate IBM SkillsBuild preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>IBM Python (SkillsBuild)</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/Oracle_Analytics_Cloud_22025.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/Oracle_Analytics_Cloud_22025.jpg" alt="Oracle Analytics Cloud 22025 preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Oracle Analytics Cloud</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px) scale(0.98, 0.98)" } as CSSProperties}>
            <div className={"relative rounded-2xl \x62order \x62order-border/\x360 \x62g-card/\x380 \x62ackdrop-blur-sm \x73hadow-[\x30_1px_2px_rgba(\x30,\x30,\x30,\x30.\x304),\x30_8px_24px_-12px_rgba(\x30,\x30,\x30,\x30.\x315)] transition-all \x64uration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-primary/\x340 \x68over:\x73hadow-[\x30_4px_8px_rgba(\x30,\x30,\x30,\x30.\x306),\x30_20px_40px_-16px_hsl(\x76ar(\x2d-primary)/\x30.\x325)] group h-full [overflow:hidden]"}>
              <a className="block" href="/certificates/Spark_Fundamentals_I_Certificate.pdf" rel="noopener noreferrer" target="_blank">
                <div className={"relative w-full h-56 \x62g-muted [overflow:hidden]"}>
                  <img className="absolute inset-0 h-full w-full object-cover object-top" src="/site-assets/Spark_Fundamentals_I_Certificate.jpg" alt="Spark Fundamentals I Certificate preview" loading="lazy" decoding="async" />
                  <div className={"absolute inset-0 bg-transparent \x67roup-hover:\x62g-foreground/\x35 transition-colors \x64uration-300"} />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <span className={"\x74ext-sm \x66ont-medium text-foreground text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Spark Fundamentals I</span>
                  <svg className={"\x74ext-xs text-muted-foreground \x67roup-hover:\x74ext-primary transition-colors flex-shrink-0"} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className={"\x74ext-sm text-muted-foreground mt-8 [&]:text-center"}>If previews don't load, your browser extension (e.g. ad-blocker) may be blocking PDF embeds. Click any card to open the full certificate.</p>
      </div>
    </section>
  );
}

function ImportedSectionEducationJourney() {
  return (
    <section className={"\x70y-32 \x62g-background"}>
      <div className={"max-w-7xl \x6dx-auto \x70x-4 \x73m:\x70x-6 \x6cg:\x70x-8"}>
        <div className={"mb-16 [&]:text-center"}>
          <h2 className={"\x74ext-display \x74ext-4xl \x73m:\x74ext-5xl \x6cg:\x74ext-6xl \x66ont-bold mb-4 \x74ext-gradient [letter-spacing:-0.04em]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9907", transform: "translate(-12px, 24px)" } as CSSProperties}>Education Journey</h2>
          <p className={"\x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9994", transform: "translate(0px, 14px)" } as CSSProperties}>My academic path and the knowledge foundation that shapes my expertise</p>
        </div>
        <div className="relative">
          <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 top-0 bottom-0 w-0.5 \x62g-border \x6dd:\x74ransform \x6dd:\x2dtranslate-x-0.\x35"} />
          <div className={"\x73pace-y-12"}>
            <div className={"relative flex items-center \x6dd:\x66lex-row flex-col \x6dd:\x69tems-start"} style={{ animationDelay: "0s", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-28px, 0px)" } as CSSProperties}>
              <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 w-4 h-4 \x62g-primary rounded-full \x62order-4 \x62order-background \x6dd:\x74ransform \x6dd:\x2dtranslate-x-2 z-10"} />
              <div className={"w-full \x6dd:\x77-5/\x312 ml-16 \x6dd:\x6dl-0 \x6dd:\x6dr-8"}>
                <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card \x61nimate-slide-up"} style={{ transform: "translateY(0px)", opacity: "1" }}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={"\x74ext-xl \x66ont-bold text-foreground mb-2 [letter-spacing:-0.03em]"}>Sol Plaatje University</h3>
                        <h4 className={"\x74ext-lg \x66ont-semibold text-primary mb-2 [letter-spacing:-0.03em]"}>Information Technology (Software Development)</h4>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                          <path d="M22 10v6" />
                          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                        </svg>
                      </div>
                    </div>
                    <div className={"\x73pace-y-3 mb-4"}>
                      <div className={"flex items-center \x74ext-sm text-muted-foreground"}>
                        <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </svg>
                        <span>2026 - Graduating 2027</span>
                        <span className={"\x6dx-2"}>•</span>
                        <span className={"\x70x-2 \x70y-1 \x62g-skill-bg rounded-full \x74ext-xs \x66ont-medium"}>Coursework Completed</span>
                      </div>
                      <div className={"flex items-center \x74ext-sm text-muted-foreground"}>
                        <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Kimberley, Northern Cape</span>
                      </div>
                    </div>
                    <p className={"text-muted-foreground mb-4 \x6ceading-relaxed"}>Comprehensive ICT program focusing on software and application development, database management, web technologies, and data analysis.</p>
                    <div>
                      <h5 className={"\x66ont-semibold mb-2 \x74ext-sm"}>Key Subjects/Areas:</h5>
                      <div className={"grid grid-cols-1 \x73m:\x67rid-cols-2 gap-2"}>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Data Analysis and Visualization</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Big Data Programming</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Software Engineering</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Web Development</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Mobile App Development</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Information Systems</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Networking</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Project Management</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>ICT Fundamentals</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Business Practice</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Professional Communication</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"relative flex items-center \x6dd:\x66lex-row flex-col \x6dd:\x69tems-start"} style={{ animationDelay: "0.4s", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-28px, 0px)" } as CSSProperties}>
              <div className={"absolute left-8 \x6dd:\x6ceft-1/\x32 w-4 h-4 \x62g-primary rounded-full \x62order-4 \x62order-background \x6dd:\x74ransform \x6dd:\x2dtranslate-x-2 z-10"} />
              <div className={"w-full \x6dd:\x77-5/\x312 ml-16 \x6dd:\x6dl-0 \x6dd:\x6dr-8"}>
                <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card \x61nimate-slide-up"} style={{ transform: "translateY(0px)", opacity: "1" }}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={"\x74ext-xl \x66ont-bold text-foreground mb-2 [letter-spacing:-0.03em]"}>Bainsvlei Combined School</h3>
                        <h4 className={"\x74ext-lg \x66ont-semibold text-primary mb-2 [letter-spacing:-0.03em]"}>National Senior Certificate </h4>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                          <path d="M22 10v6" />
                          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                        </svg>
                      </div>
                    </div>
                    <div className={"\x73pace-y-3 mb-4"}>
                      <div className={"flex items-center \x74ext-sm text-muted-foreground"}>
                        <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M8 2v4" />
                          <path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </svg>
                        <span>2019</span>
                        <span className={"\x6dx-2"}>•</span>
                        <span className={"\x70x-2 \x70y-1 \x62g-skill-bg rounded-full \x74ext-xs \x66ont-medium"}>Completed</span>
                      </div>
                      <div className={"flex items-center \x74ext-sm text-muted-foreground"}>
                        <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Bainsvlei, South Africa</span>
                      </div>
                    </div>
                    <p className={"text-muted-foreground mb-4 \x6ceading-relaxed"}>Completed secondary education with focus on Mathematics and Science subjects</p>
                    <div>
                      <h5 className={"\x66ont-semibold mb-2 \x74ext-sm"}>Key Subjects/Areas:</h5>
                      <div className={"grid grid-cols-1 \x73m:\x67rid-cols-2 gap-2"}>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Mathematics</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Physical Science</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>Life Science</span>
                        </div>
                        <div className={"flex items-center \x73pace-x-2"}>
                          <div className={"w-1.5 h-1.5 \x62g-primary rounded-full"} />
                          <span className={"\x74ext-sm text-muted-foreground"}>English First Language</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"mt-20 grid grid-cols-1 \x6dd:\x67rid-cols-3 gap-8"}>
          <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card [&]:text-center"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, 28px)" } as CSSProperties}>
            <div className="p-6 pt-6">
              <div className={"\x74ext-3xl \x66ont-bold text-primary mb-2"}>3+</div>
              <div className={"\x74ext-sm text-muted-foreground"}>Years of ICT Education</div>
            </div>
          </div>
          <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card [&]:text-center"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, 28px)" } as CSSProperties}>
            <div className="p-6 pt-6">
              <div className={"\x74ext-3xl \x66ont-bold text-primary mb-2"}>15+</div>
              <div className={"\x74ext-sm text-muted-foreground"}>Technical Courses Completed</div>
            </div>
          </div>
          <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card [&]:text-center"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, 28px)" } as CSSProperties}>
            <div className="p-6 pt-6">
              <div className={"\x74ext-3xl \x66ont-bold text-primary mb-2"}>5+</div>
              <div className={"\x74ext-sm text-muted-foreground"}>Industry Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGetInTouch() {
  return (
    <section className={"relative \x70y-32 section-bg [overflow:hidden]"}>
      <div className={"pointer-events-none absolute top-10 left-0 right-0 text-[20vw] \x66ont-bold \x74ext-foreground/[\x30.\x3025] \x6ceading-none whitespace-nowrap select-none [letter-spacing:-0.05em]"} style={{ fontFamily: "\"Space Grotesk\", sans-serif", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-hidden="true">SAY · HELLO</div>
      <div className={"relative max-w-7xl \x6dx-auto \x70x-4 \x73m:\x70x-6 \x6cg:\x70x-8"}>
        <div className={"mb-16 [&]:text-center"}>
          <h2 className={"\x74ext-display \x74ext-4xl \x73m:\x74ext-5xl \x6cg:\x74ext-6xl \x66ont-bold mb-4 \x74ext-gradient [letter-spacing:-0.04em]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9902", transform: "translate(-12px, 24px)" } as CSSProperties}>Get In Touch</h2>
          <p className={"\x74ext-lg text-muted-foreground \x6dx-auto [max-width:48rem]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9992", transform: "translate(0px, 14px)" } as CSSProperties}>Ready to collaborate or have questions? I'd love to hear from you. Let's connect and discuss opportunities.</p>
        </div>
        <div className={"grid grid-cols-1 \x6cg:\x67rid-cols-2 gap-12"}>
          <div className={"\x73pace-y-8"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 18px)" } as CSSProperties}>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Contact Information</h3>
              </div>
              <div className={"p-6 pt-0 \x73pace-y-6"}>
                <div className={"flex items-center \x73pace-x-4"}>
                  <div className={"p-3 \x62g-skill-bg rounded-lg"}>
                    <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                  </div>
                  <div>
                    <p className={"\x66ont-medium"}>Email</p>
                    <p className="text-muted-foreground">202324276@spu.ac.za</p>
                    <p className="text-muted-foreground">sellompho1601@gmail.com</p>
                  </div>
                </div>
                <div className={"flex items-center \x73pace-x-4"}>
                  <div className={"p-3 \x62g-skill-bg rounded-lg"}>
                    <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                  </div>
                  <div>
                    <p className={"\x66ont-medium"}>Phone</p>
                    <p className="text-muted-foreground">+27 67 668 7955</p>
                  </div>
                </div>
                <div className={"flex items-center \x73pace-x-4"}>
                  <div className={"p-3 \x62g-skill-bg rounded-lg"}>
                    <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className={"\x66ont-medium"}>Location</p>
                    <p className="text-muted-foreground">Bloemfontein, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Connect With Me</h3>
              </div>
              <div className="p-6 pt-0">
                <div className={"flex \x73pace-x-4"}>
                  <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-11 rounded-md \x70x-8"}><svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>LinkedIn</button>
                  <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x62order-input \x62g-background \x68over:\x62g-accent \x68over:\x74ext-accent-foreground h-11 rounded-md \x70x-8"}><svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>GitHub</button>
                </div>
              </div>
            </div>
            <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card"}>
              <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
                <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Professional References</h3>
              </div>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground">Available upon request.</p>
              </div>
            </div>
          </div>
          <div className={"rounded-lg \x62order \x62g-card text-card-foreground \x73hadow-sm project-card"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, 18px)" } as CSSProperties}>
            <div className={"flex flex-col \x73pace-y-1.\x35 p-6"}>
              <h3 className={"\x74ext-2xl \x66ont-semibold \x6ceading-none [letter-spacing:-0.025em]"}>Send Me a Message</h3>
            </div>
            <div className="p-6 pt-0">
              <form className={"\x73pace-y-6"}>
                <div className={"grid grid-cols-1 \x73m:\x67rid-cols-2 gap-4"}>
                  <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, 18px)" } as CSSProperties}>
                    <label className={"block \x74ext-sm \x66ont-medium mb-2"} htmlFor="name">Full Name</label>
                    <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} id="name" name="name" placeholder="Your full name" required defaultValue="" />
                  </div>
                  <div style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0px, 18px)" } as CSSProperties}>
                    <label className={"block \x74ext-sm \x66ont-medium mb-2"} htmlFor="email">Email Address</label>
                    <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} type="email" id="email" name="email" placeholder="your.email@example.com" required defaultValue="" />
                  </div>
                </div>
                <div>
                  <label className={"block \x74ext-sm \x66ont-medium mb-2"} htmlFor="subject">Subject</label>
                  <input className={"flex h-10 w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-base \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm"} id="subject" name="subject" placeholder="What's this about?" required defaultValue="" />
                </div>
                <div>
                  <label className={"block \x74ext-sm \x66ont-medium mb-2"} htmlFor="message">Message</label>
                  <textarea className={"flex w-full rounded-md \x62order \x62order-input \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 [&]:min-h-[80px]"} id="message" name="message" placeholder="Tell me about your project, opportunity, or question..." rows={6} required />
                </div>
                <button className={"inline-flex items-center justify-center gap-2 whitespace-nowrap \x74ext-sm \x66ont-medium \x72ing-offset-background transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-ring \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62g-primary text-primary-foreground \x68over:\x62g-primary/\x390 h-11 rounded-md \x70x-8 w-full"} type="submit"><svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className={"relative \x62order-t \x62order-border/\x340 \x62g-background/\x360 \x62ackdrop-blur-xl text-foreground \x70y-16 [overflow:hidden]"}>
      <div className={"pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full \x62lur-[\x3120px] opacity-30 [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} style={{ background: "radial-gradient(circle, rgba(37, 209, 244, 0.55), transparent 60%)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-hidden="true" />
      <div className={"pointer-events-none absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full \x62lur-[\x3140px] opacity-25 [filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} style={{ background: "radial-gradient(circle, rgba(180, 71, 235, 0.5), transparent 60%)", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-hidden="true" />
      <div className={"pointer-events-none absolute \x69nset-x-0 -bottom-10 text-[18vw] \x66ont-black \x6ceading-none \x74ext-foreground/[\x30.\x304] select-none whitespace-nowrap [&]:text-center [letter-spacing:-0.05em]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-hidden="true">MPHO SELLO</div>
      <div className={"relative max-w-7xl \x6dx-auto \x70x-4 \x73m:\x70x-6 \x6cg:\x70x-8"}>
        <div className={"grid grid-cols-1 \x6dd:\x67rid-cols-3 gap-10 mb-10"}>
          <div style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties}>
            <h3 className={"\x74ext-2xl \x66ont-bold mb-4 \x74ext-gradient [letter-spacing:-0.03em]"}>Mpho Sello</h3>
            <p className={"text-muted-foreground mb-5 \x6ceading-relaxed"}>Aspiring ICT Professional passionate about creating innovative solutions through technology and programming.</p>
            <div className={"flex \x73pace-x-3"}>
              <a className={"p-2.5 rounded-lg \x62order \x62order-border/\x350 \x62g-card/\x340 \x62ackdrop-blur-md \x68over:\x62g-primary \x68over:\x74ext-primary-foreground \x68over:\x62order-primary transition-all \x64uration-300"} href="https://www.linkedin.com/in/mpho-sello-692193241" rel="noopener noreferrer" target="_blank">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a className={"p-2.5 rounded-lg \x62order \x62order-border/\x350 \x62g-card/\x340 \x62ackdrop-blur-md \x68over:\x62g-primary \x68over:\x74ext-primary-foreground \x68over:\x62order-primary transition-all \x64uration-300"} href="https://github.com/Sellomphoo" rel="noopener noreferrer" target="_blank">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a className={"p-2.5 rounded-lg \x62order \x62order-border/\x350 \x62g-card/\x340 \x62ackdrop-blur-md \x68over:\x62g-primary \x68over:\x74ext-primary-foreground \x68over:\x62order-primary transition-all \x64uration-300"} href="mailto:202324276@spu.ac.za">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </a>
            </div>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties}>
            <h4 className={"\x66ont-semibold mb-4 text-foreground [letter-spacing:-0.03em]"}>Quick Links</h4>
            <ul className={"\x73pace-y-2"}>
              <li>
                <button className={"text-muted-foreground \x68over:\x74ext-primary transition-colors \x64uration-200"}>About Me</button>
              </li>
              <li>
                <button className={"text-muted-foreground \x68over:\x74ext-primary transition-colors \x64uration-200"}>Projects</button>
              </li>
              <li>
                <button className={"text-muted-foreground \x68over:\x74ext-primary transition-colors \x64uration-200"}>Skills</button>
              </li>
              <li>
                <button className={"text-muted-foreground \x68over:\x74ext-primary transition-colors \x64uration-200"}>Education</button>
              </li>
              <li>
                <button className={"text-muted-foreground \x68over:\x74ext-primary transition-colors \x64uration-200"}>Contact</button>
              </li>
            </ul>
          </div>
          <div style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties}>
            <h4 className={"\x66ont-semibold mb-4 text-foreground [letter-spacing:-0.03em]"}>Get In Touch</h4>
            <div className={"\x73pace-y-2 text-muted-foreground"}>
              <p>sellompho1601@gmail.com</p>
              <p>202324276@spu.ac.za</p>
              <p>+27 67 668 7955</p>
              <p>Bloemfontein, South Africa</p>
            </div>
          </div>
        </div>
        <div className={"\x62order-t \x62order-border/\x340 pt-6 flex flex-col \x6dd:\x66lex-row justify-between items-center"}>
          <p className={"text-muted-foreground \x74ext-sm mb-3 \x6dd:\x6db-0"}>© 2026 Mpho Sello. All rights reserved.</p>
          <div className={"flex items-center \x74ext-sm text-muted-foreground"}>
            <span>Made with</span>
            <svg className={"h-4 w-4 \x6dx-1.\x35 text-primary \x66ill-primary/\x340"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>using React &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}
