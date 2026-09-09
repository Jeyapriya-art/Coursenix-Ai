import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Help Center - Coursenix AI",
    description: "Get support, browse guides, and find answers about using Coursenix AI.",
};

interface HelpTopic {
    title: string;
    desc: string;
    href: string;
}

const topics: HelpTopic[] = [
    {
        title: "Getting Started",
        desc: "Create your account and generate your first course in under 5 minutes.",
        href: "/how-it-works",
    },
    {
        title: "Managing Courses",
        desc: "Edit, organize, and track the courses you've generated.",
        href: "/courses",
    },
    {
        title: "Billing & Plans",
        desc: "Understand plan limits, upgrades, and how billing works.",
        href: "/pricing",
    },
    {
        title: "Frequently Asked Questions",
        desc: "Quick answers to the most common questions about Coursenix AI.",
        href: "/faq",
    },
];

export default function HelpPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    HELP CENTER
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help?</h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Browse common topics below, or reach out directly if you can't find what you need.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {topics.map((t) => (
                    <Link
                        key={t.title}
                        href={t.href}
                        className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2dd4a7]/40 transition block"
                    >
                        <h3 className="font-semibold mb-2">{t.title}</h3>
                        <p className="text-sm text-gray-400">{t.desc}</p>
                    </Link>
                ))}
            </div>

            <div className="text-center pb-24">
                <p className="text-gray-400 mb-4">Still stuck?</p>
                <Link
                    href="/contact"
                    className="inline-block bg-[#2dd4a7] hover:bg-[#25b891] transition rounded-lg px-6 py-3 font-medium text-black"
                >
                    Contact support
                </Link>
            </div>
        </div>
    );
}