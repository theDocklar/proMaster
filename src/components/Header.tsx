"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="nav-row">
        <Link href="/" className="nav-logo">
          Pro <span>Master</span>
        </Link>

        <nav className="nav-groups">
          <div className="nav-group">
            <Link className="nav-group-label" href="/products">Products</Link>
            
          </div>
          <div className="nav-group">
            <span className="nav-group-label">Company</span>
            <div className="nav-dropdown">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <a href="#contact">Distributors</a>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
          <div className="nav-group">
            <span className="nav-group-label">Resources</span>
            <div className="nav-dropdown">
              <a href="#resources">Technical Data Sheets</a>
              <a href="#resources">Safety Data Sheets</a>
              <a href="#resources">Application Guides</a>
              <a href="#resources">Downloads</a>
            </div>
          </div>
        </nav>

        <div className="nav-right">
          <span className="newsletter-label">Newsletter</span>
          <div className="toggle-btn" />
        </div>
      </div>
    </header>
  );
}
