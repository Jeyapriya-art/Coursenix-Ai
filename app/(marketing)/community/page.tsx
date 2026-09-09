import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Community - Coursenix AI",
    description: "Connect with other educators and creators using Coursenix AI.",
};

interface CommunityChannel {
    title: string;
    desc: string;
    cta: string;
}

const channels: CommunityChannel[] = [
    {
        title: "Discord Server",
        desc: "Chat with other course creators, share feedback, and get quick help from the community.",
        cta: "Join Discord",
    },
    {
        title: "Community Forum",
        desc: "Browse discussions, ask questions, and share how you're using Coursenix AI.",
        cta: "Visit Forum",
    },
    {
        title: "Monthly Showcase",
        desc: "See courses the community has generated and shared, sorted by category.",
        cta: "View Showcase",
    },
];

export default function CommunityPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    COMMUNITY
                </div>
                <h1 className="text-4xl font-bold mb-4">Join the Coursenix community</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    Connect with educators, trainers, and creators building courses with AI.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-5">
                {channels.map((c) => (
                    <div
                        key={c.title}
                        className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] flex flex-col"
                    >
                        <h3 className="font-semibold mb-2">{c.title}</h3>
                        <p className="text-sm text-gray-400 flex-1 mb-4">{c.desc}</p>
                        <button className="text-sm bg-white/5 hover:bg-white/10 transition rounded-lg py-2">
                            {c.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}