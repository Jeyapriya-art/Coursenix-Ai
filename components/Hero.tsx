"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [showHowItWorks, setShowHowItWorks] = useState<boolean>(false);
  return (
    <>
      <style>{`
              .hero {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 40px;
                min-height: calc(100vh - 89px);
                padding: 40px 60px;
                background: #050505;
                box-sizing: border-box;
                overflow: hidden;
              }
              .hero::before {
                content: "";
                position: absolute;
                top: 50%;
                right: 50%;
                width: 900px;
                height: 900px;
                background: radial-gradient(circle, rgba(0,255,178,0.10) 0%, rgba(0,0,0,0) 65%);
                filter: blur(90px);
                pointer-events: none;
                z-index: 0;
              }
              .hero::after {
                content: "";
                position: absolute;
                bottom: -20%;
                left: 5%;
                width: 500px;
                height: 500px;
                background: radial-gradient(circle, rgba(0,195,255,0.08) 0%, rgba(0,0,0,0) 65%);
                filter: blur(80px);
                pointer-events: none;
                z-index: 0;
              }
              .hero-left {
                flex: 1;
                min-width: 320px;
                text-align: left;
                position: relative;
                z-index: 1;
              }
              .hero-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 6px 14px;
                border: 1px solid rgba(0,255,178,0.4);
                border-radius: 20px;
                font-size: 13px;
                color: #00ffb2;
                margin-bottom: 24px;
              }
              .hero-badge::before {
                content: "";
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #00ffb2;
              }
              .hero-title {
                font-size: 48px;
                font-weight: 700;
                color: #fff;
                line-height: 1.2;
                margin: 0 0 20px 0;
                text-align: left;
              }
              .hero-title .highlight {
                background: linear-gradient(90deg, #00ffb2, #00c3ff);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              .hero-desc {
                font-size: 16px;
                color: #a1a1aa;
                max-width: 480px;
                line-height: 1.6;
                margin-bottom: 32px;
                text-align: left;
              }
              .hero-buttons {
                display: flex;
                gap: 16px;
                justify-content: flex-start;
              }
              .hero-btn-primary {
                border: none;
                background: linear-gradient(90deg, #00ffb2, #00c3ff);
                color: #0a0a0a;
                padding: 14px 28px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 15px;
                cursor: pointer;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
              }
              .hero-btn-secondary {
                border: 1px solid #333;
                background: transparent;
                color: #fff;
                padding: 14px 28px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 15px;
                cursor: pointer;
              }
              .hero-right {
                flex: 1.3;
                min-width: 380px;
                display: flex;
                justify-content: center;
                position: relative;
                z-index: 1;
              }
              .demo-card {
                background: rgba(17,17,17,0.7);
                border: 1px solid #222;
                border-radius: 14px;
                width: 100%;
                max-width: 620px;
                overflow: hidden;
                backdrop-filter: blur(6px);
              }
              .demo-header {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 16px 20px;
                border-bottom: 1px solid #222;
              }
              .demo-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
              }
              .demo-dot.red { background: #ff5f56; }
              .demo-dot.yellow { background: #ffbd2e; }
              .demo-dot.green { background: #27c93f; }
              .demo-title {
                color: #ccc;
                font-size: 14px;
                font-weight: 500;
                margin: 0 0 0 8px;
              }
              .demo-prompt {
                margin: 22px;
                padding: 20px 24px;
                background: #1a1a1a;
                border-radius: 10px;
                color: #ccc;
                font-size: 17px;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .demo-label {
                font-size: 13px;
                letter-spacing: 1px;
                color: #666;
                padding: 0 22px;
                margin-bottom: 12px;
              }
              .demo-item {
                display: flex;
                align-items: center;
                gap: 16px;
                margin: 0 22px 16px 22px;
                padding: 18px;
                background: #161616;
                border-radius: 10px;
              }
              .demo-number {
                width: 36px;
                height: 36px;
                border-radius: 8px;
                background: rgba(0,255,178,0.15);
                color: #00ffb2;
                font-size: 14px;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
              }
              .demo-item-title {
                color: #fff;
                font-size: 17px;
                font-weight: 600;
              }
              .demo-item-sub {
                color: #777;
                font-size: 12px;
              }

              .modal-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(5, 5, 5, 0.85);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                animation: modalFadeIn 0.3s ease-out forwards;
              }

              .modal-container {
                background: #0a0e0c;
                border: 1px solid #1c2622;
                border-radius: 20px;
                width: 90%;
                max-width: 500px;
                padding: 36px;
                box-sizing: border-box;
                position: relative;
                box-shadow: 0 25px 60px -12px rgba(0, 255, 178, 0.15);
                transform: translateY(30px);
                opacity: 0;
                animation: modalSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
              }

              .modal-close {
                position: absolute;
                top: 20px;
                right: 20px;
                background: none;
                border: none;
                color: #5a6b64;
                font-size: 26px;
                cursor: pointer;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
              }
              .modal-close:hover {
                color: #fff;
                background: rgba(255, 255, 255, 0.08);
              }

              .modal-title {
                font-size: 26px;
                font-weight: 700;
                color: #fff;
                margin-top: 0;
                margin-bottom: 30px;
                background: linear-gradient(90deg, #00ffb2, #00c3ff);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .steps-container {
                display: flex;
                flex-direction: column;
                gap: 28px;
                position: relative;
              }

              .steps-container::before {
                content: "";
                position: absolute;
                left: 20px;
                top: 20px;
                bottom: 20px;
                width: 2px;
                background: linear-gradient(180deg, #00ffb2, #00c3ff);
                opacity: 0.25;
                z-index: 0;
              }

              .step-row {
                display: flex;
                align-items: flex-start;
                gap: 20px;
                position: relative;
                z-index: 1;
                transition: transform 0.2s ease;
              }

              .step-row:hover {
                transform: translateX(6px);
              }

              .step-circle {
                width: 42px;
                height: 42px;
                border-radius: 50%;
                background: #0b0f0d;
                border: 2px solid #00ffb2;
                color: #00ffb2;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 15px;
                box-shadow: 0 0 12px rgba(0, 255, 178, 0.2);
                flex-shrink: 0;
              }

              .step-row:nth-child(2) .step-circle {
                border-color: #00e5ff;
                color: #00e5ff;
                box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
              }
              .step-row:nth-child(3) .step-circle {
                border-color: #00c3ff;
                color: #00c3ff;
                box-shadow: 0 0 12px rgba(0, 195, 255, 0.2);
              }

              .step-info {
                display: flex;
                flex-direction: column;
                gap: 5px;
              }
              .step-heading {
                font-size: 17px;
                font-weight: 600;
                color: #fff;
                margin: 0;
              }
              .step-description {
                font-size: 13px;
                color: #8a9a94;
                line-height: 1.5;
                margin: 0;
              }

              @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }

              @keyframes modalSlideUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">live generation engine</div>
          <h1 className="hero-title">
            Type a topic.<br />
            Get a <span className="highlight">full course</span>,<br />
            instantly.
          </h1>
          <p className="hero-desc">
            Coursenix turns a single sentence into a structured curriculum —
            modules, lessons and objectives — generated by AI and ready to teach.
          </p>
          <div className="hero-buttons">
            <Link href="/courses" className="hero-btn-primary">Generate your course</Link>
            <button className="hero-btn-secondary" onClick={() => setShowHowItWorks(true)}>See how it works</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="demo-card">
            <div className="demo-header">
              <span className="demo-dot red"></span>
              <span className="demo-dot yellow"></span>
              <span className="demo-dot green"></span>
              <h3 className="demo-title">coursenix - generate.ai</h3>
            </div>
            <div className="demo-prompt">
              Build a beginner course on Machine Learning
              <span>→</span>
            </div>
            <div className="demo-label">GENERATED CURRICULUM</div>
            <div className="demo-item">
              <div className="demo-number">01</div>
              <div>
                <div className="demo-item-title">What is Machine Learning?</div>
                <div className="demo-item-sub">Concepts & real-world examples</div>
              </div>
            </div>
            <div className="demo-item">
              <div className="demo-number">02</div>
              <div>
                <div className="demo-item-title">Data & Features</div>
                <div className="demo-item-sub">Cleaning and preparing datasets</div>
              </div>
            </div>
            <div className="demo-item">
              <div className="demo-number">03</div>
              <div>
                <div className="demo-item-title">Your First Model</div>
                <div className="demo-item-sub">Train and evaluate results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showHowItWorks && (
        <div className="modal-backdrop" onClick={() => setShowHowItWorks(false)}>
          <div className="modal-container" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowHowItWorks(false)} aria-label="Close modal">
              &times;
            </button>
            <h2 className="modal-title">How Coursenix Works</h2>
            <div className="steps-container">
              <div className="step-row">
                <div className="step-circle">01</div>
                <div className="step-info">
                  <h4 className="step-heading">Enter Topic</h4>
                  <p className="step-description">
                    Type any subject or skill you want to learn or teach, from deep learning to culinary arts.
                  </p>
                </div>
              </div>
              <div className="step-row">
                <div className="step-circle">02</div>
                <div className="step-info">
                  <h4 className="step-heading">AI Curriculum Generation</h4>
                  <p className="step-description">
                    Our advanced generation engine drafts complete modules, structured lessons, and core learning outcomes instantly.
                  </p>
                </div>
              </div>
              <div className="step-row">
                <div className="step-circle">03</div>
                <div className="step-info">
                  <h4 className="step-heading">Finish & Get Certificate</h4>
                  <p className="step-description">
                    Progress through generated courses, test your knowledge, and earn a shareable, verified PDF certificate of completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
