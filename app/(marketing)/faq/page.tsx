import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "FAQ - Coursenix AI",
    description: "Answers to common questions about generating courses with Coursenix AI.",
};

interface FaqItem {
    q: string;
    a: string;
}

const faqs: FaqItem[] = [
    {
        q: "How does Coursenix AI generate a course?",
        a: "You give us a topic, and our AI structures it into modules and lessons with clear learning objectives, based on established instructional design patterns.",
    },
    {
        q: "Can I edit the course after it's generated?",
        a: "Yes. Every module, lesson, and description is fully editable after generation — nothing is locked.",
    },
    {
        q: "Is there a limit to how many courses I can create?",
        a: "Free accounts can actively track up to 3 courses at a time. Paid plans raise this limit — see the Pricing page for details.",
    },
    {
        q: "What topics can I generate courses about?",
        a: "Virtually any topic — technical skills, academic subjects, professional training, or creative disciplines.",
    },
    {
        q: "Do I need teaching experience to use this?",
        a: "No. Coursenix AI handles the instructional structure, so you can focus on refining content rather than designing a curriculum from scratch.",
    },
    {
        q: "Can I export or share my generated courses?",
        a: "Yes, courses can be shared via a link or exported for use in your own teaching platform.",
    },
];

export default function FaqPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-12 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    FAQ
                </div>
                <h1 className="text-4xl font-bold mb-4">Frequently asked questions</h1>
                <p className="text-gray-400">Can&apos;t find what you&apos;re looking for? Reach out on the Contact page.</p>
            </div>

            <div className="max-w-2xl mx-auto px-6 pb-24">
                {faqs.map((item) => (
                    <details key={item.q} className="border-b border-[#1a1a1a] py-5 group">
                        <summary className="flex items-center justify-between cursor-pointer list-none font-medium">
                            {item.q}
                            <span className="text-[#2dd4a7] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="text-gray-400 text-sm mt-3">{item.a}</p>
                    </details>
                ))}
            </div>
        </div>
    );
}
