import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import InquiryForm from "@/components/InquiryForm";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* ── HEADER ── */}
      <Header />

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-newsletter">
          <div className="hn-label">Newsletter</div>
          <div className="hn-input-row">
            <input
              className="hn-input"
              type="email"
              placeholder="your@email.com"
            />
            <button className="hn-arrow">&#8594;</button>
          </div>
          <div className="hn-note">
            By signing up, I agree with the data protection policy of Pro
            Master.
          </div>
        </div>

        <div className="hero-text">
          <div className="hero-eyebrow">Trusted Supplier — UAE &amp; GCC</div>
          <h1 className="hero-h1">
            Construction chemicals
            <br />
            built for the
            <br />
            Gulf climate.
          </h1>
          <p className="hero-sub">
            Waterproofing, adhesives, coatings, and repair systems. ISO
            certified. Distributed across the GCC.
          </p>
          <a href="#products" className="hero-cta">
            Explore Products &nbsp;&#8594;
          </a>
        </div>

        <div className="hero-image">
          <div
            className="img-ph"
            style={{ width: "100%", height: "100%", minHeight: 600 }}
          >
            <div className="img-ph-label">Hero Product Image</div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <div className="showcase" id="products">
        {[
          {
            name: "Waterproofing",
            tag: "Crystalline, membrane & cementitious systems",
          },
          {
            name: "Tile Adhesives",
            tag: "C1, C2, C2S1, C2S2 for all substrates",
          },
          {
            name: "Concrete Repair",
            tag: "Structural mortars and protection systems",
          },
        ].map(({ name, tag }) => (
          <div className="showcase-col" key={name}>
            <div className="sc-name">{name}</div>
            <div className="sc-tag">{tag}</div>
            <div className="sc-image">
              <div
                className="img-ph"
                style={{ width: "100%", height: "100%", minHeight: 260 }}
              >
                <div className="img-ph-label">Product Image</div>
              </div>
            </div>
            <a className="sc-link" href="#">
              View range &nbsp;&#8594;
            </a>
          </div>
        ))}
      </div>

      {/* ── BRAND TYPE ── */}
      <div className="brand-type">
        <span className="brand-word">PRO</span>
        <span className="brand-word outline">MASTER</span>
      </div>

      {/* ── PRODUCT DETAIL ── */}
      <div id="product-detail">
        {/* <div className="breadcrumb">
          <a href="#">Home</a>
          <span className="bc-sep">/</span>
          <a href="#">Products</a>
          <span className="bc-sep">/</span>
          <a href="#">Waterproofing</a>
          <span className="bc-sep">/</span>
          PM-CRYSTAL 300
        </div> */}

        {/* <ProductDetailTabs /> */}

        <div className="detail-wrap">
          <div className="detail-image">
            <div className="img-ph" style={{ minHeight: 600 }}>
              <div className="img-ph-label">Product Image</div>
            </div>
          </div>
          <div className="detail-info">
            <div className="di-cat">Crystalline Waterproofing System</div>
            <div className="di-name">
              PM-CRYSTAL 300
              <br />
              Penetrating Crystalline Slurry
            </div>
            <div className="di-desc">
              Single-component, cement-based crystalline compound that reacts
              with moisture to form insoluble crystals within the concrete
              matrix — permanently blocking capillaries and hairline cracks up
              to 0.4mm.
            </div>

            <div className="di-features">
              {[
                "Self-sealing — crystals re-activate in the presence of moisture",
                "Withstands up to 7 bar negative hydrostatic pressure",
                "Non-toxic — potable water tank approved (WRAS)",
                "Applicable to green or cured concrete",
                "Compliant with EN 1504-2 Surface Protection",
              ].map((feat) => (
                <div className="di-feat-item" key={feat}>
                  {feat}
                </div>
              ))}
            </div>

            <div className="di-specs">
              {[
                ["Coverage", "0.8 – 1.2 kg/m² per coat"],
                ["Pot Life @ 25°C", "30 minutes"],
                ["Packaging", "5 kg pail, 25 kg bag"],
                ["Standard", "EN 1504-2"],
                ["Shelf Life", "12 months sealed"],
              ].map(([key, val]) => (
                <div className="di-spec-row" key={key}>
                  <span className="di-spec-key">{key}</span>
                  <span className="di-spec-val">{val}</span>
                </div>
              ))}
            </div>

            <div className="di-area-row">
              {[
                "Basement Walls",
                "Water Tanks",
                "Swimming Pools",
                "Tunnels",
                "Foundations",
                "Lift Pits",
              ].map((area) => (
                <span className="di-area-tag" key={area}>
                  {area}
                </span>
              ))}
            </div>

            <div className="di-downloads">
              <button className="di-dl-btn">TDS PDF</button>
              <button className="di-dl-btn">SDS PDF</button>
              <button className="di-dl-btn">Application Guide</button>
            </div>

            <div className="di-actions">
              <button className="di-btn-primary">Request a Quote</button>
              <button className="di-btn-secondary">WhatsApp Inquiry</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div className="about-split" id="about">
        <div className="about-left">
          <div className="about-img-top">
            <div
              className="img-ph"
              style={{ width: "100%", height: "100%", minHeight: 400 }}
            >
              <div className="img-ph-label">Company / Site Image</div>
            </div>
          </div>
          <div className="about-stats">
            {[
              { num: "15+", lbl: "Years GCC" },
              { num: "200+", lbl: "Products" },
              { num: "500+", lbl: "Projects" },
            ].map(({ num, lbl }) => (
              <div className="about-stat" key={lbl}>
                <div className="as-num">{num}</div>
                <div className="as-lbl">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="eyebrow">About Pro Master</div>
          <h2>Engineered for the GCC&apos;s toughest conditions.</h2>
          <p>
            UAE-based supplier of premium construction chemicals and building
            materials — serving contractors, developers, and distributors across
            the GCC for over 15 years.
          </p>
          <p>
            Every product is engineered to perform in the extreme heat,
            humidity, and saline conditions of the Gulf.
          </p>
          <div className="about-list">
            {[
              "ISO 9001:2015 certified quality management",
              "In-house testing laboratory for batch QC",
              "Technical support team available UAE-wide",
              "Full TDS, SDS, and project submittal support",
              "Compliant with MOEI, ASTM, EN, and BS standards",
            ].map((item) => (
              <div className="al-item" key={item}>
                {item}
              </div>
            ))}
          </div>
          <Link href="/about" className="about-cta">
            Company Profile &nbsp;&#8594;
          </Link>
        </div>
      </div>

      {/* ── CERTIFICATIONS ── */}
      <div className="certs-row">
        {[
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
        ].map(({ abbr, name, desc }) => (
          <div className="cert-col" key={abbr}>
            <div className="cert-abbr">{abbr}</div>
            <div className="cert-name">{name}</div>
            <div className="cert-desc">{desc}</div>
          </div>
        ))}
      </div>

      {/* ── RESOURCES ── */}
      <div className="resources-section" id="resources">
        <div className="resources-header">
          <div className="rh-left">
            <h2>
              Data Sheets
              <br />
              &amp; Documentation.
            </h2>
          </div>
          <div className="rh-right">
            <p>
              Access the full technical document library. All documents are free
              to download — no sign-up required. Updated weekly.
            </p>
          </div>
        </div>
        <div className="res-grid">
          {[
            {
              num: "200+",
              type: "PDF Library",
              title: "Technical Data Sheets",
              desc: "Product composition, mechanical properties, application method, mixing ratios, and performance data.",
              link: "Browse TDS",
            },
            {
              num: "200+",
              type: "PDF Library",
              title: "Safety Data Sheets",
              desc: "GHS/SDS/MSDS documents — hazard info, handling, storage, and first aid for every product.",
              link: "Browse SDS",
            },
            {
              num: "12",
              type: "Guides",
              title: "Application Guides",
              desc: "Illustrated installation manuals for waterproofing systems, floor coatings, and repair mortars.",
              link: "Browse Guides",
            },
            {
              num: "8",
              type: "Marketing",
              title: "Product Brochures",
              desc: "Category and system brochures for submittal, specification, and client presentations.",
              link: "Browse",
            },
            {
              num: "50+",
              type: "Certificates",
              title: "Test Reports",
              desc: "Third-party laboratory certificates issued under ASTM, EN, and UAE standard references.",
              link: "Browse",
            },
            {
              num: "30+",
              type: "Case Studies",
              title: "Project Documentation",
              desc: "Documented applications on landmark UAE projects with performance data and consultant references.",
              link: "Browse",
            },
          ].map(({ num, type, title, desc, link }) => (
            <div className="res-col" key={title}>
              <div className="rc-num">{num}</div>
              <div className="rc-type">{type}</div>
              <div className="rc-title">{title}</div>
              <div className="rc-desc">{desc}</div>
              <span className="rc-link">{link} &#8594;</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div className="projects-section" id="projects">
        <div className="projects-header">
          <div className="ph-left">
            <h2>Featured Projects.</h2>
            <p>
              Specified and applied on landmark construction projects across the
              UAE and GCC.
            </p>
          </div>
          <div className="ph-right">
            <Link href="/projects">All Projects &#8594;</Link>
          </div>
        </div>

        <div className="proj-list">
          {[
            {
              idx: "01 / Dubai",
              name: "Dubai Marina Mixed-Use Tower",
              tags: ["Waterproofing", "Below-grade", "AECOM"],
              year: "2024",
            },
            {
              idx: "02 / Abu Dhabi",
              name: "Government Authority Headquarters",
              tags: ["Epoxy Flooring", "4,500 m²"],
              year: "2023",
            },
            {
              idx: "03 / Sharjah",
              name: "Industrial Plant Structural Restoration",
              tags: ["Concrete Repair", "EN 1504-3 R3"],
              year: "2024",
            },
            {
              idx: "04 / Ras Al Khaimah",
              name: "Luxury Resort Pool Complex",
              tags: ["Waterproofing", "WRAS Certified", "8 Pools"],
              year: "2023",
            },
            {
              idx: "05 / Dubai",
              name: "Metro Expansion Underground Station",
              tags: ["Crystalline", "Injection", "Infrastructure"],
              year: "2022",
            },
          ].map(({ idx, name, tags, year }) => (
            <div className="proj-row" key={idx}>
              <div>
                <div className="pr-index">{idx}</div>
              </div>
              <div>
                <div className="pr-name">{name}</div>
                <div className="pr-tags">
                  {tags.map((t) => (
                    <span className="pr-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pr-meta">{year}</div>
            </div>
          ))}
        </div>

        <div className="proj-grid-visual">
          {[
            {
              type: "Waterproofing — Dubai",
              name: "Dubai Marina Tower",
              loc: "Dubai Marina, UAE — 2024",
            },
            {
              type: "Flooring — Abu Dhabi",
              name: "Government Authority HQ",
              loc: "Abu Dhabi, UAE — 2023",
            },
            {
              type: "Infrastructure — Dubai",
              name: "Metro Expansion Station",
              loc: "Dubai, UAE — 2022",
            },
          ].map(({ type, name, loc }) => (
            <div className="pgv-card" key={name}>
              <div className="img-ph" style={{ height: 280 }}>
                <div className="img-ph-label">Project Image</div>
              </div>
              <div className="pgv-info">
                <div className="pgv-type">{type}</div>
                <div className="pgv-name">{name}</div>
                <div className="pgv-loc">{loc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── INQUIRY ── */}
      <div className="inquiry-section" id="contact">
        <div className="inq-left">
          <div className="eyebrow">Get In Touch</div>
          <h2>
            How can we
            <br />
            help you?
          </h2>
          <p>
            Our team responds within one business day. Choose the inquiry type
            that best describes your need.
          </p>
          <div className="inq-types">
            {[
              "Product Inquiry",
              "Project Submittal / Approval Support",
              "Bulk Order Request",
              "Become a Distributor",
              "Technical Support",
              "Lab Testing / Certificate of Analysis",
            ].map((item) => (
              <div className="inq-type-row" key={item}>
                <span className="it-name">{item}</span>
                <span className="it-arrow">&#8594;</span>
              </div>
            ))}
          </div>
        </div>

        <InquiryForm />
      </div>

      <Footer />

      {/* ── FLOATING WHATSAPP ── */}
      <div className="wa-float">
        <div className="wa-pill">WhatsApp</div>
        <div className="wa-circle">
          <FaWhatsapp color="white" size={24} />
        </div>
      </div>
    </>
  );
}
