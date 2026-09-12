import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Course Templates - Coursenix AI",
    description: "Start from a pre-structured template instead of a blank topic.",
};

interface Template {
    category: string;
    title: string;
    modules: number;
    level: string;
}

const templates: Template[] = [
    { category: "Technology", title: "Introduction to Web Development", modules: 8, level: "Beginner" },
    { category: "Technology", title: "Machine Learning Foundations", modules: 10, level: "Intermediate" },
    { category: "Business", title: "Startup Fundamentals", modules: 6, level: "Beginner" },
    { category: "Business", title: "Digital Marketing Strategy", modules: 7, level: "Intermediate" },
    { category: "Design", title: "UI/UX Design Principles", modules: 9, level: "Beginner" },
    { category: "Personal Development", title: "Public Speaking Mastery", modules: 5, level: "Beginner" },
    { category: "Data", title: "SQL for Data Analysis", modules: 8, level: "Intermediate" },
    { category: "Language", title: "Business English Communication", modules: 6, level: "Beginner" },
];

export default function TemplatesPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    TEMPLATES
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Start from a template</h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Pick a pre-structured starting point and let Coursenix AI fill in and adapt the details to your topic.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {templates.map((t) => (
                    <div
                        key={t.title}
                        className="p-5 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2dd4a7]/40 transition flex flex-col"
                    >
                        <span className="text-xs uppercase tracking-wide text-[#2dd4a7] mb-2">{t.category}</span>
                        <h3 className="font-semibold mb-3 flex-1">{t.title}</h3>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                            <span>{t.modules} modules</span>
                            <span>{t.level}</span>
                        </div>
                        <Link
                            href="/generate"
                            className="text-sm text-center bg-white/5 hover:bg-white/10 transition rounded-lg py-2"
                        >
                            Use this template
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}