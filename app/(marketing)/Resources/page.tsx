import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Resources - Coursenix AI",
    description: "Guides and resources on instructional design and building better courses.",
};

interface Resource {
    title: string;
    desc: string;
    category: string;
}

const resources: Resource[] = [
    {
        category: "Guide",
        title: "How to structure a course nobody finishes... and fix it",
        desc: "Common reasons learners drop off, and how better module pacing solves it.",
    },
    {
        category: "Guide",
        title: "Writing learning objectives that actually work",
        desc: "A practical framework for objectives that shape better lessons, not just checkbox goals.",
    },
    {
        category: "Checklist",
        title: "Pre-launch checklist for a new course",
        desc: "What to review before publishing a course, from structure to assessments.",
    },
    {
        category: "Guide",
        title: "Beginner vs. advanced: setting the right difficulty",
        desc: "How to judge what level your audience actually needs.",
    },
];

export default function ResourcesPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    RESOURCES
                </div>
                <h1 className="text-4xl font-bold mb-4">Guides on building better courses</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    Practical instructional design advice, not just AI feature updates.
                </p>
            </div>

            <div className="max-w-2xl mx-auto px-6 pb-16 flex flex-col gap-4">
                {resources.map((r) => (
                    <div
                        key={r.title}
                        className="p-5 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2dd4a7]/40 transition"
                    >
                        <span className="text-xs uppercase tracking-wide text-[#2dd4a7]">{r.category}</span>
                        <h3 className="font-semibold mt-1 mb-2">{r.title}</h3>
                        <p className="text-sm text-gray-400">{r.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center pb-24 text-sm text-gray-500">
                Looking for more? Check out the{" "}
                <Link href="/blog" className="text-[#2dd4a7] hover:underline">
                    Blog
                </Link>
                .
            </div>
        </div>
    );
}