import BackToTop from "@/components/BackToTop";

export default function Footer() {
  return (
    <>
      <div className="pre-footer">
        <div className="pre-footer-brand">PRO MASTER</div>

        <div className="pf-newsletter">
          <div className="pf-nl-title">
            Subscribe to the<br />Pro Master Newsletter
          </div>
          <div className="pf-nl-sub">
            Latest product launches, technical updates, and project news direct to your inbox.
          </div>
          <div className="pf-input-row">
            <input className="pf-input" type="email" placeholder="your@email.com" />
            <button className="pf-arrow">&#8594;</button>
          </div>
          <div className="pf-nl-note">
            By signing up, I agree with the data protection policy of Pro Master.
          </div>
        </div>

        <div className="pf-col">
          <h4>Products</h4>
          <div className="pf-links">
            {[
              "Waterproofing Systems",
              "Tile Adhesives & Grouts",
              "Concrete Repair",
              "Sealants & Joints",
              "Coatings",
              "Admixtures",
              "Flooring",
              "Bonding & Grouting",
            ].map((l) => (
              <a href="#" key={l}>
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="pf-col">
          <h4>Company</h4>
          <div className="pf-links">
            {["About", "Projects", "Distributors", "Careers", "Contact"].map((l) => (
              <a href="#" key={l}>
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="pf-col">
          <h4>Resources</h4>
          <div className="pf-links">
            {[
              "Technical Data Sheets",
              "Safety Data Sheets",
              "Application Guides",
              "Downloads",
              "Newsletter",
            ].map((l) => (
              <a href="#" key={l}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <span>Pro Master Construction Products LLC</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
        <BackToTop />
      </div>
    </>
  );
}
