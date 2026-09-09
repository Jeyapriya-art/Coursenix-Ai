import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Testimonials - Coursenix AI",
    description: "What educators and creators say about building courses with Coursenix AI.",
};

interface Testimonial {
    name: string;
    role: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Ananya R.",
        role: "Corporate Trainer",
        quote: "What used to take me a full weekend to outline now takes minutes. I still refine the content, but the structure is already there.",
    },
    {
        name: "Marcus D.",
        role: "Bootcamp Instructor",
        quote: "The module breakdown alone is worth it. It thinks about learning progression in a way most templates don't.",
    },
    {
        name: "Priya K.",
        role: "Independent Course Creator",
        quote: "I generate a rough draft with Coursenix, then spend my time on examples and exercises instead of staring at a blank page.",
    },
    {
        name: "Tom H.",
        role: "University TA",
        quote: "Genuinely useful for putting together supplementary material fast, especially for topics outside my usual specialty.",
    },
];

export default function TestimonialsPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    TESTIMONIALS
                </div>
                <h1 className="text-4xl font-bold mb-4">Trusted by educators and creators</h1>
            </div>

            <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                    <div
                        key={t.name}
                        className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]"
                    >
                        <p className="text-gray-300 mb-4">&ldquo;{t.quote}&rdquo;</p>
                        <div className="text-sm">
                            <span className="font-medium">{t.name}</span>
                            <span className="text-gray-500"> — {t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}