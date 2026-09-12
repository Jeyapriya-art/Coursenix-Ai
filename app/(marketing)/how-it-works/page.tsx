import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How It Works - Coursenix AI",
    description: "Learn how Coursenix generates complete AI-based courses in seconds.",
};

interface Step {
    id: string;
    title: string;
    desc: string;
}

const steps: Step[] = [
    {
        id: "01",
        title: "Type your topic or prompt",
        desc: "Type any skill or subject — 'Full-Stack Next.js with Supabase', 'Intro to Machine Learning', or 'Digital Marketing for Startups'.",
    },
    {
        id: "02",
        title: "AI structures the curriculum",
        desc: "Our AI engine creates structured modules, bite-sized lessons, Bloom's taxonomy learning objectives, and knowledge checks.",
    },
    {
        id: "03",
        title: "Review, edit & customize",
        desc: "Preview generated modules, reorder lessons, tune prompts, or add your custom teaching notes in the interactive editor.",
    },
    {
        id: "04",
        title: "Export, teach & certify",
        desc: "Download as PDF or publish directly. Students complete modules and earn automated verified completion certificates.",
    },
];

export default function HowItWorksPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero */}
            <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#2dd4a7] animate-pulse" />
                    AI COURSE GENERATION WORKFLOW
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
                    From a single sentence to a <br />
                    <span className="bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] bg-clip-text text-transparent">
                        complete teachable course
                    </span>{" "}
                    in seconds
                </h1>

                <p className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg">
                    No manual syllabus planning. No blank page block. Just enter a topic and let AI structure the entire curriculum.
                </p>
            </section>

            {/* Steps */}
            <section className="max-w-3xl mx-auto px-6 pb-20 space-y-4">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex items-start gap-5 bg-[#111214] border border-zinc-800 hover:border-[#2dd4a7]/40 rounded-2xl p-6 transition shadow-lg"
                    >
                        <div className="bg-[#2dd4a7]/10 border border-[#2dd4a7]/30 text-[#2dd4a7] font-mono text-sm font-bold px-3.5 py-1.5 rounded-xl shrink-0">
                            {step.id}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-1.5">{step.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Before / After Comparison */}
            <section className="max-w-4xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-6">
                <div className="bg-[#111214] border border-zinc-800/80 rounded-2xl p-8">
                    <h4 className="text-zinc-400 text-sm font-semibold mb-3">Traditional Course Planning</h4>
                    <p className="text-3xl font-bold text-white mb-2">2 - 4 Weeks</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Manual topic research, structuring modules from scratch, writing lecture objectives, and creating quiz rubrics.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-[#12241d] to-[#0b1411] border border-[#2dd4a7]/40 rounded-2xl p-8 shadow-xl shadow-[#2dd4a7]/5">
                    <h4 className="text-[#2dd4a7] text-sm font-semibold mb-3">With Coursenix AI</h4>
                    <p className="text-3xl font-bold text-white mb-2">Under 60 Seconds</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                        Instant AI curriculum generation, ready-to-teach modules, duration estimates, level categorization, and exportable PDF.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center pb-24 px-6">
                <Link
                    href="/courses"
                    className="inline-block bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] text-black font-semibold px-8 py-3.5 rounded-xl hover:opacity-95 transition shadow-lg shadow-[#2dd4a7]/10"
                >
                    Generate Your Course Now
                </Link>
            </section>
        </div>
    );
}

