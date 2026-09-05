import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #050505;
          border-top: 1px solid #1a1a1a;
          padding: 50px 60px 30px;
        }
        .footer-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-brand {
          max-width: 280px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .footer-logo-text {
          font-size: 20px;
          font-weight: 700;
          color: #2dd4a7;
        }
        .footer-desc {
          color: #888;
          font-size: 14px;
          line-height: 1.6;
        }
        .footer-columns {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }
        .footer-col h4 {
          color: #fff;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col ul li a {
          color: #888;
          text-decoration: none;
          font-size: 14px;
        }
        .footer-col ul li a:hover {
          color: #00ffb2;
        }
        .footer-bottom {
          border-top: 1px solid #1a1a1a;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          color: #666;
          font-size: 13px;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 5 H9 A5 5 0 0 0 4 10 V14 A5 5 0 0 0 9 19 H17"
                  stroke="#2dd4a7"
                  strokeWidth="2.6"
                  strokeLinecap="square"
                  fill="none"
                />
              </svg>
              <span className="footer-logo-text">Coursenix</span>
            </div>
            <p className="footer-desc">
              Turn any topic into a structured, ready-to-teach course — generated instantly by AI.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><Link href="/how-it-works">How it works</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/career"></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Coursenix. All rights reserved.</span>
          <span>Made with AI, for learners.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
