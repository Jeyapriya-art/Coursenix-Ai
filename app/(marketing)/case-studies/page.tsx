import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Case Studies - Coursenix AI",
    description: "Real results from teams and creators using Coursenix AI to build courses.",
};

interface CaseStudy {
    company: string;
    industry: string;
    headline: string;
    result: string;
    detail: string;
}

const cases: CaseStudy[] = [
    {
        company: "BrightPath Academy",
        industry: "Online Education",
        headline: "Cut curriculum design time by 70%",
        result: "70% faster",
        detail: "BrightPath used Coursenix AI to restructure their entire beginner-to-advanced coding track, going from a rough topic list to a full module breakdown in under a day instead of two weeks.",
    },
    {
        company: "Vertex Consulting",
        industry: "Corporate Training",
        headline: "Standardized onboarding across 5 regional offices",
        result: "5 offices aligned",
        detail: "Vertex generated a consistent onboarding curriculum baseline, then let regional managers customize the details — eliminating drift between offices.",
    },
    {
        company: "Nadia Osei, Independent Creator",
        industry: "Course Creator",
        headline: "Launched 3 courses in a single quarter",
        result: "3 courses shipped",
        detail: "Instead of spending weeks outlining each course, Nadia used Coursenix to draft structures and spent her time recording and refining content instead.",
    },
];

export default function CaseStudiesPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    CASE STUDIES
                </div>
                <h1 className="text-4xl font-bold mb-4">Real results, real courses</h1>
            </div>

            <div className="max-w-3xl mx-auto px-6 pb-24 flex flex-col gap-6">
                {cases.map((c) => (
                    <div key={c.company} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="font-semibold">{c.company}</p>
                                <p className="text-xs text-gray-500">{c.industry}</p>
                            </div>
                            <span className="text-[#2dd4a7] font-semibold text-sm whitespace-nowrap">
                                {c.result}
                            </span>
                        </div>
                        <h3 className="font-medium mb-2">{c.headline}</h3>
                        <p className="text-sm text-gray-400">{c.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}