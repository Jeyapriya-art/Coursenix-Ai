import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Changelog - Coursenix AI",
    description: "What's new in Coursenix AI — recent features, fixes, and improvements.",
};

interface ChangeEntry {
    date: string;
    tag: "New" | "Improved" | "Fixed";
    title: string;
    desc: string;
}

const entries: ChangeEntry[] = [
    {
        date: "This month",
        tag: "New",
        title: "Course detail pages",
        desc: "Every generated course now has its own page showing the full module and lesson breakdown.",
    },
    {
        date: "This month",
        tag: "New",
        title: "Dashboard overview",
        desc: "A new dashboard summarizes your tracked courses and recent activity at a glance.",
    },
    {
        date: "Last month",
        tag: "Improved",
        title: "Faster course generation",
        desc: "Reduced average generation time by streamlining how topics are structured into modules.",
    },
    {
        date: "Last month",
        tag: "Fixed",
        title: "Course tracking limit edge case",
        desc: "Fixed an issue where the 3-course tracking limit wasn't always enforced correctly.",
    },
];

const tagStyles: Record<ChangeEntry["tag"], string> = {
    New: "bg-[#2dd4a7]/10 text-[#2dd4a7]",
    Improved: "bg-blue-500/10 text-blue-400",
    Fixed: "bg-orange-500/10 text-orange-400",
};

export default function ChangelogPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    CHANGELOG
                </div>
                <h1 className="text-4xl font-bold mb-4">What&apos;s new</h1>
            </div>

            <div className="max-w-2xl mx-auto px-6 pb-24 flex flex-col gap-6">
                {entries.map((e, i) => (
                    <div key={i} className="border-l-2 border-[#1a1a1a] pl-5 relative">
                        <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#2dd4a7]" />
                        <p className="text-xs text-gray-500 mb-1">{e.date}</p>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${tagStyles[e.tag]}`}>
                                {e.tag}
                            </span>
                            <h3 className="font-semibold">{e.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400">{e.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}