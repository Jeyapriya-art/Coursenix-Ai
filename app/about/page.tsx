import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us - Coursenix AI",
    description: "Learn about our mission to democratize education through AI course generation.",
};

interface ValueItem {
    title: string;
    desc: string;
}

interface StatItem {
    number: string;
    label: string;
}

export default function AboutPage(): React.JSX.Element {
    const values: ValueItem[] = [
        {
            title: "Accessibility",
            desc: "World-class course design tools should not be locked behind high complexity or steep costs. We build for all educators and creators.",
        },
        {
            title: "Instant Velocity",
            desc: "Ideas lose momentum when stuck in planning. Coursenix AI takes you from a raw topic idea to a fully structured curriculum in seconds.",
        },
        {
            title: "Pedagogical Depth",
            desc: "AI-generated does not mean shallow. Every curriculum is structured with clear Bloom's taxonomy objectives and practical lesson flows.",
        },
    ];

    const stats: StatItem[] = [
        { number: "50,000+", label: "Courses Generated" },
        { number: "12,000+", label: "Educators & Creators" },
        { number: "40+", label: "Countries Reached" },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* 🌟 HERO SECTION */}
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                {/* Glow Radial Gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#2dd4a7] animate-pulse" />
                    OUR STORY & MISSION
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
                    We believe anyone can teach —{" "}
                    <span className="bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] bg-clip-text text-transparent">
                        if the creation barrier is removed
                    </span>
                </h1>

                <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    Coursenix was built to solve the biggest bottleneck in education: transforming knowledge into a structured, teachable curriculum.
                </p>
            </div>


            <div className="max-w-4xl mx-auto px-6 pb-20 border-b border-zinc-900">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    {stats.map((s) => (
                        <div key={s.label} className="p-6 bg-[#111214]/60 border border-zinc-800/80 rounded-2xl shadow-lg">
                            <div className="text-3xl md:text-4xl font-extrabold text-[#2dd4a7] mb-1">{s.number}</div>
                            <div className="text-xs md:text-sm text-zinc-400">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission */}
            <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                    Every expert has invaluable knowledge to share, but formatting that into modules, lesson outlines, and quizzes takes hours of tedious work. Coursenix automates the heavy structural lifting with AI so you can focus entirely on teaching and impacting students.
                </p>
            </div>

            {/* 💎 VALUES */}
            <div className="max-w-5xl mx-auto px-6 pb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Stand For</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className="bg-[#111214] border border-zinc-800 hover:border-[#2dd4a7]/40 rounded-2xl p-7 transition shadow-lg flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-bold text-[#2dd4a7] mb-3">{v.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🚀 CALL TO ACTION */}
            <div className="text-center pb-24 px-6">
                <Link
                    href="/courses"
                    className="inline-block bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] text-black font-semibold px-8 py-3.5 rounded-xl hover:opacity-95 transition shadow-lg shadow-[#2dd4a7]/10"
                >
                    Start Building Your Course
                </Link>
            </div>
        </div>
    );
}
