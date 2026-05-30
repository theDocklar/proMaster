import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Pro Master Construction Products",
  description:
    "UAE-based supplier of premium construction chemicals and building materials — serving contractors, developers, and distributors across the GCC for over 15 years.",
};

const stats = [
  { num: "15+", lbl: "Years GCC" },
  { num: "200+", lbl: "Products" },
  { num: "500+", lbl: "Projects" },
  { num: "6", lbl: "GCC Markets" },
];

const values = [
  {
    num: "01",
    type: "Foundation",
    title: "Industrial Confidence",
    desc: "Every formulation is tested for the extreme heat, humidity, and saline conditions of the Gulf — not adapted from temperate-climate products.",
  },
  {
    num: "02",
    type: "Foundation",
    title: "Technical Reliability",
    desc: "In-house laboratory QC, full TDS and SDS documentation, and a technical support team available across the UAE for site-level guidance.",
  },
  {
    num: "03",
    type: "Foundation",
    title: "Premium Performance",
    desc: "Specified on landmark projects across Dubai, Abu Dhabi, Sharjah, and the wider GCC — from basement waterproofing to structural repair.",
  },
];

const capabilities = [
  "ISO 9001:2015 certified quality management",
  "In-house testing laboratory for batch QC",
  "Technical support team available UAE-wide",
  "Full TDS, SDS, and project submittal support",
  "Compliant with MOEI, ASTM, EN, and BS standards",
  "Distributor network across the GCC",
];

const certifications = [
  {
    abbr: "ISO",
    name: "ISO 9001:2015",
    desc: "Quality management — manufacturing and supply chain",
  },
  {
    abbr: "MOEI",
    name: "UAE Ministry of Energy",
    desc: "Product approvals for selected waterproofing systems",
  },
  {
    abbr: "ASTM",
    name: "ASTM International",
    desc: "Tested to ASTM C1202, C109, and C882 standards",
  },
  {
    abbr: "EN / BS",
    name: "EN 1504 / BS 6920",
    desc: "European and British Standards for concrete protection",
  },
  {
    abbr: "WRAS",
    name: "WRAS Approval",
    desc: "Potable water contact approval for tank waterproofing",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="page-main page-main--bg about-page">
        <header className="about-page-header">
          <div className="about-page-header-text">
            <p className="mb-3 font-[family-name:var(--mono)] text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
              Company Profile
            </p>
            <h1 className="mb-4 text-[clamp(28px,4vw,40px)] font-black uppercase leading-none tracking-[-0.04em] text-[var(--black)]">
              Built for Protection.
              <br />
              Engineered for Performance.
            </h1>
            <p className="max-w-3xl text-sm leading-[1.7] text-[var(--mid)]">
              Pro Master is a bold construction chemicals brand built around
              industrial confidence, technical reliability, and premium UAE
              project performance.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block font-[family-name:var(--mono)] text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--pm-red)] transition-opacity hover:opacity-75"
            >
              ← Back to home
            </Link>
          </div>
          <div className="about-page-header-logo">
            <Image
              src="/promaster-logo.png"
              alt="Pro Master logo"
              width={200}
              height={200}
              priority
              className="about-page-logo"
            />
          </div>
        </header>

        {/* ── MISSION + STATS ── */}
        <div className="about-split">
          <div className="about-left">
            <div className="about-img-top">
              <div
                className="img-ph"
                style={{ width: "100%", height: "100%", minHeight: 360 }}
              >
                <div className="img-ph-label">Company / Site Image</div>
              </div>
            </div>
            <div className="about-stats about-stats--4">
              {stats.map(({ num, lbl }) => (
                <div className="about-stat" key={lbl}>
                  <div className="as-num">{num}</div>
                  <div className="as-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="eyebrow">Our Mission</div>
            <h2>Engineered for the GCC&apos;s toughest conditions.</h2>
            <p>
              UAE-based supplier of premium construction chemicals and building
              materials — serving contractors, developers, and distributors
              across the GCC for over 15 years.
            </p>
            <p>
              Every product is engineered to perform in the extreme heat,
              humidity, and saline conditions of the Gulf. From crystalline
              waterproofing and tile adhesives to structural repair mortars and
              epoxy floor coatings, Pro Master delivers systems that contractors
              can specify with confidence.
            </p>
            <p>
              We combine international manufacturing standards with local
              technical expertise — so your project submittals, site
              applications, and after-sales support are handled by people who
              understand Gulf construction.
            </p>
          </div>
        </div>

        {/* ── VALUES ── */}
        <div className="resources-section">
          <div className="resources-header">
            <div className="rh-left">
              <p className="mb-3 font-[family-name:var(--mono)] text-[11px] font-bold uppercase tracking-[0.13em] text-[var(--pm-red)]">
                Brand Foundation
              </p>
              <h2>
                Industrial. Premium.
                <br />
                Dependable.
              </h2>
            </div>
            <div className="rh-right">
              <p>
                The brand is built to feel strong, clean, and technical — ready
                for harsh construction environments without compromise.
              </p>
            </div>
          </div>
          <div className="res-grid">
            {values.map(({ num, type, title, desc }) => (
              <div className="res-col" key={num}>
                <div className="rc-num">{num}</div>
                <div className="rc-type">{type}</div>
                <div className="rc-title">{title}</div>
                <div className="rc-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CAPABILITIES ── */}
        <div className="about-split">
          <div className="about-left">
            <div className="about-img-top">
              <div
                className="img-ph"
                style={{ width: "100%", height: "100%", minHeight: 360 }}
              >
                <div className="img-ph-label">Technical Support / Lab</div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="eyebrow">What We Deliver</div>
            <h2>Full-spectrum support.</h2>
            <p>
              Beyond product supply, Pro Master provides the documentation,
              testing, and on-site guidance that Gulf contractors need to keep
              projects moving.
            </p>
            <div className="about-list">
              {capabilities.map((item) => (
                <div className="al-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CERTIFICATIONS ── */}
        <div className="projects-section">
          <div className="projects-header">
            <div className="ph-left">
              <h2>Certified Quality.</h2>
              <p>Compliance and standards across manufacturing and supply.</p>
            </div>
          </div>
          <div className="certs-row">
            {certifications.map(({ abbr, name, desc }) => (
              <div className="cert-col" key={abbr}>
                <div className="cert-abbr">{abbr}</div>
                <div className="cert-name">{name}</div>
                <div className="cert-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="projects-header">
          <div className="ph-left">
            <h2>Ready to specify Pro Master?</h2>
            <p>
              Browse our full product range, explore project case studies, or
              reach out for a quote.
            </p>
          </div>
          <div className="ph-right about-page-cta-links">
            <Link href="/products">Explore Products &#8594;</Link>
            <Link href="/projects">View Projects &#8594;</Link>
            <Link href="/#contact">Contact Us &#8594;</Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
