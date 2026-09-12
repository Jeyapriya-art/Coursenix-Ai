import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Features - Coursenix AI",
    description: "Everything Coursenix AI does to turn a topic into a ready-to-teach course.",
};

interface Feature {
    title: string;
    desc: string;
    icon: string;
}

export default function FeaturesPage(): React.JSX.Element {
    const features: Feature[] = [
        {
            icon: "⚡",
            title: "Instant Course Structuring",
            desc: "Type a topic and get a full curriculum — modules, lessons, and objectives — generated in seconds.",
        },
        {
            icon: "🧠",
            title: "Pedagogically Sound",
            desc: "Every course follows clear learning objectives and a logical progression, not just a list of facts.",
        },
        {
            icon: "🎯",
            title: "Adjustable Difficulty",
            desc: "Generate the same topic at beginner, intermediate, or advanced level depending on your audience.",
        },
        {
            icon: "📚",
            title: "Editable Output",
            desc: "Nothing is locked in. Rename modules, reorder lessons, and rewrite descriptions after generation.",
        },
        {
            icon: "🔗",
            title: "Shareable Courses",
            desc: "Publish a course to a link you can send to students or embed on your own site.",
        },
        {
            icon: "📊",
            title: "Progress Tracking",
            desc: "Track which courses you're actively working on, right from your dashboard.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#2dd4a7] animate-pulse" />
                    FEATURES
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Everything you need to build a course
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Coursenix AI handles the structure so you can focus on the content.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2dd4a7]/40 transition"
                    >
                        <div className="text-3xl mb-4">{f.icon}</div>
                        <h3 className="font-semibold mb-2">{f.title}</h3>
                        <p className="text-sm text-gray-400">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
