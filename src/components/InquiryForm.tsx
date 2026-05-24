"use client";
import { useState, FormEvent } from "react";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="inq-right" style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div className="di-cat" style={{ marginBottom: 12 }}>Message Sent</div>
          <p style={{ fontSize: 14, color: "var(--mid)", lineHeight: 1.8 }}>
            Thank you. Our team will respond within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="inq-right">
      <form onSubmit={handleSubmit}>
        <div className="form-section-label">Send a Message</div>
        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="inq-name">Full Name</label>
            <input id="inq-name" type="text" placeholder="Eng. Ahmed Al Mansouri" />
          </div>
          <div className="form-group">
            <label htmlFor="inq-company">Company</label>
            <input id="inq-company" type="text" placeholder="Your Company LLC" />
          </div>
        </div>
        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="inq-phone">Phone / WhatsApp</label>
            <input id="inq-phone" type="tel" placeholder="+971 5X XXX XXXX" />
          </div>
          <div className="form-group">
            <label htmlFor="inq-email">Email</label>
            <input id="inq-email" type="email" placeholder="you@company.com" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inq-type">Inquiry Type</label>
          <select id="inq-type">
            <option>Product Inquiry</option>
            <option>Project Submittal</option>
            <option>Bulk Order</option>
            <option>Distributor Partnership</option>
            <option>Technical Support</option>
            <option>Lab / COA Request</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="inq-msg">Message</label>
          <textarea
            id="inq-msg"
            placeholder="Tell us about your project, product, quantity, and timeline..."
          />
        </div>
        <div className="form-footer">
          <div className="form-note">
            By submitting, I agree with the data protection policy of Pro Master.
          </div>
          <button type="submit" className="form-submit-btn">&#8594;</button>
        </div>
        <div className="form-wa">WhatsApp Inquiry &#8594;</div>
      </form>
    </div>
  );
}
