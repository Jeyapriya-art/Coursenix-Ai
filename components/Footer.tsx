
// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <>
//       <style>{`
//         .footer {
//           background: #050505;
//           border-top: 1px solid #1a1a1a;
//           padding: 50px 60px 30px;
//         }
//         .footer-top {
//           display: flex;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 40px;
//           margin-bottom: 40px;
//         }
//         .footer-brand {
//           max-width: 280px;
//         }
//         .footer-logo {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 12px;
//         }
//         .footer-logo-text {
//           font-size: 20px;
//           font-weight: 700;
//           color: #2dd4a7;
//         }
//         .footer-desc {
//           color: #888;
//           font-size: 14px;
//           line-height: 1.6;
//         }
//         .footer-columns {
//           display: flex;
//           gap: 60px;
//           flex-wrap: wrap;
//         }
//         .footer-col h4 {
//           color: #fff;
//           font-size: 14px;
//           margin-bottom: 16px;
//         }
//         .footer-col ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }
//         .footer-col ul li a {
//           color: #888;
//           text-decoration: none;
//           font-size: 14px;
//         }
//         .footer-col ul li a:hover {
//           color: #00ffb2;
//         }
//         .footer-bottom {
//           border-top: 1px solid #1a1a1a;
//           padding-top: 24px;
//           display: flex;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 12px;
//           color: #666;
//           font-size: 13px;
//         }
//       `}</style>

//       <footer className="footer">
//         <div className="footer-top">
//           <div className="footer-brand">
//             <div className="footer-logo">
//               <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M17 5 H9 A5 5 0 0 0 4 10 V14 A5 5 0 0 0 9 19 H17"
//                   stroke="#2dd4a7"
//                   strokeWidth="2.6"
//                   strokeLinecap="square"
//                   fill="none"
//                 />
//               </svg>
//               <span className="footer-logo-text">Coursenix</span>
//             </div>
//             <p className="footer-desc">
//               Turn any topic into a structured, ready-to-teach course — generated instantly by AI.
//             </p>
//           </div>

//           <div className="footer-columns">
//             <div className="footer-col">
//               <h4>Product</h4>
//               <ul>
//                 <li><Link href="/features">Features</Link></li>
//                 <li><Link href="/how-it-works">How it works</Link></li>
//                 <li><Link href="/courses">Courses</Link></li>
//                 <li><Link href="/pricing">Pricing</Link></li>
//                 <li><Link href="/templates">Templates</Link></li>
//                 <li><Link href="/integrations">Integrations</Link></li>
//                 <li><Link href="/changelog">Changelog</Link></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Solutions</h4>
//               <ul>
//                 <li><Link href="/use-cases">Use Cases</Link></li>
//                 <li><Link href="/enterprise">Enterprise</Link></li>
//                 <li><Link href="/compare">Compare</Link></li>
//                 <li><Link href="/case-studies">Case Studies</Link></li>
//                 <li><Link href="/affiliates">Affiliates</Link></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Company</h4>
//               <ul>
//                 <li><Link href="/about">About</Link></li>
//                 <li><Link href="/blog">Blog</Link></li>
//                 <li><Link href="/careers">Careers</Link></li>
//                 <li><Link href="/testimonials">Testimonials</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//                 <li><Link href="/faq">FAQ</Link></li>
//                 <li><Link href="/help">Help Center</Link></li>
//                 <li><Link href="/community">Community</Link></li>
//                 <li><Link href="/security">Security</Link></li>
//                 <li><Link href="/resources">Resources</Link></li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>Legal</h4>
//               <ul>
//                 <li><Link href="/privacy">Privacy</Link></li>
//                 <li><Link href="/terms">Terms</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <span>© 2026 Coursenix. All rights reserved.</span>
//           <span>Made with AI, for learners.</span>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(180deg, #050505 0%, #04140f 55%, #031a17 100%);
          border-top: 1px solid #123a30;
          padding: 50px 60px 30px;
          overflow: hidden;
        }
        .footer::before {
          content: "";
          position: absolute;
          top: -140px;
          left: 10%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(45,212,167,0.18) 0%, rgba(45,212,167,0) 70%);
          pointer-events: none;
        }
        .footer::after {
          content: "";
          position: absolute;
          bottom: -160px;
          right: 5%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(56,189,248,0) 70%);
          pointer-events: none;
        }
        .footer-top {
          position: relative;
          z-index: 1;
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
          background: linear-gradient(90deg, #2dd4a7, #38bdf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
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
          position: relative;
          display: inline-block;
        }
        .footer-col h4::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #2dd4a7, #38bdf8);
          border-radius: 2px;
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
          transition: color 0.2s ease;
        }
        .footer-col ul li a:hover {
          background: linear-gradient(90deg, #2dd4a7, #38bdf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .footer-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid #123a30;
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
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/how-it-works">How it works</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/templates">Templates</Link></li>
                <li><Link href="/integrations">Integrations</Link></li>
                <li><Link href="/changelog">Changelog</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul>
                <li><Link href="/use-cases">Use Cases</Link></li>
                <li><Link href="/enterprise">Enterprise</Link></li>
                <li><Link href="/compare">Compare</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/affiliates">Affiliates</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/community">Community</Link></li>
                <li><Link href="/security">Security</Link></li>
                <li><Link href="/resources">Resources</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
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