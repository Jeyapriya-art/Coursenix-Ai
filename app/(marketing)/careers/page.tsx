import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Careers - Coursenix AI",
    description: "Join us in reshaping the future of AI-powered education and course creation.",
};

interface Perk {
    title: string;
    desc: string;
}

interface Role {
    title: string;
    type: string;
    dept: string;
}

export default function CareersPage(): React.JSX.Element {
    const perks: Perk[] = [
        { title: "Remote-First", desc: "Work from anywhere in the world. We value deep output and craftsmanship over office hours." },
        { title: "Flexible Schedule", desc: "Design your working routine around your peak focus hours." },
        { title: "Learning Budget", desc: "$2,000 annual allowance for courses, books, developer tools, and tech conferences." },
        { title: "Health & Wellness", desc: "Comprehensive health coverage for you and your family." },
        { title: "Equity Grants", desc: "Every full-time team member owns equity and shares directly in Coursenix's growth." },
        { title: "High-Impact Ships", desc: "Direct ownership — features you build ship quickly to thousands of global educators." },
    ];

    const openRoles: Role[] = [
        { title: "Senior Full-Stack Engineer (Next.js / TypeScript)", type: "Full-time · Remote", dept: "Engineering" },
        { title: "AI Prompt & LLM Systems Engineer", type: "Full-time · Remote", dept: "AI Team" },
        { title: "Product Designer (UI/UX & Design Systems)", type: "Full-time · Remote", dept: "Product" },
        { title: "Developer Advocate & Creator Lead", type: "Full-time · Remote", dept: "Growth" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero */}
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#2dd4a7] animate-pulse" />
                    WE&apos;RE HIRING BUILDERS
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
                    Help us build the next generation of{" "}
                    <span className="bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] bg-clip-text text-transparent">
                        AI-powered education
                    </span>
                </h1>

                <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    We are a fast-moving, remote-first team building AI tools that empower creators and educators to turn ideas into teachable curricula.
                </p>
            </div>

            {/* Perks */}
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Build With Coursenix</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {perks.map((p) => (
                        <div
                            key={p.title}
                            className="bg-[#111214] border border-zinc-800 hover:border-[#2dd4a7]/40 rounded-2xl p-6 transition shadow-lg"
                        >
                            <h3 className="text-base font-bold text-[#2dd4a7] mb-2">{p.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Open Roles */}
            <div className="max-w-3xl mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Open Positions</h2>
                <div className="space-y-4">
                    {openRoles.map((r) => (
                        <div
                            key={r.title}
                            className="bg-[#111214] border border-zinc-800 hover:border-[#2dd4a7]/50 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition shadow-lg"
                        >
                            <div>
                                <h3 className="text-base font-bold text-white mb-1">{r.title}</h3>
                                <p className="text-xs text-zinc-500 font-medium">{r.dept} · {r.type}</p>
                            </div>
                            <a
                                href="mailto:careers@coursenix.ai"
                                className="border border-zinc-700 hover:border-[#2dd4a7] hover:text-[#2dd4a7] text-white px-5 py-2 rounded-xl text-xs font-semibold transition"
                            >
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center text-zinc-500 text-xs mt-10">
                    Don&apos;t see an exact match? We&apos;re always looking for top talent. Email us at{" "}
                    <span className="text-[#2dd4a7] font-semibold">careers@coursenix.ai</span>
                </p>
            </div>
        </div>
    );
}
