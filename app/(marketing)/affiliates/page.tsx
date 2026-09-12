import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Affiliate Program - Coursenix AI",
    description: "Earn commission by referring creators and teams to Coursenix AI.",
};

interface Step {
    title: string;
    desc: string;
}

const steps: Step[] = [
    { title: "Sign up", desc: "Apply to the affiliate program with your email — approval is quick." },
    { title: "Share your link", desc: "Get a unique referral link to share with your audience or network." },
    { title: "Earn commission", desc: "Get paid a recurring commission for every paid plan referred through your link." },
];

export default function AffiliatesPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    AFFILIATES
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Earn by sharing Coursenix AI</h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    If you already talk to educators, trainers, or creators, turn that into recurring income.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((s, i) => (
                    <div key={s.title} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]">
                        <div className="w-8 h-8 rounded-full bg-[#2dd4a7]/10 text-[#2dd4a7] flex items-center justify-center text-sm font-semibold mb-4">
                            {i + 1}
                        </div>
                        <h3 className="font-semibold mb-2">{s.title}</h3>
                        <p className="text-sm text-gray-400">{s.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center pb-24">
                <Link
                    href="/contact"
                    className="inline-block bg-[#2dd4a7] hover:bg-[#25b891] transition rounded-lg px-6 py-3 font-medium text-black"
                >
                    Apply now
                </Link>
            </div>
        </div>
    );
}
