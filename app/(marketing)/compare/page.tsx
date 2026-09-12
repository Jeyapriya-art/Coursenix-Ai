import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Coursenix AI vs. Manual Course Creation",
    description: "See how Coursenix AI compares to building a course outline from scratch.",
};

interface Row {
    label: string;
    manual: string;
    coursenix: string;
}

const rows: Row[] = [
    { label: "Time to first outline", manual: "Several hours to days", coursenix: "Under a minute" },
    { label: "Instructional structure", manual: "Depends on your experience", coursenix: "Built-in, consistent" },
    { label: "Editing after draft", manual: "Start from scratch again", coursenix: "Edit modules & lessons freely" },
    { label: "Consistency across courses", manual: "Varies by author", coursenix: "Consistent structure every time" },
    { label: "Cost", manual: "Your time, or a hired designer", coursenix: "Free to start" },
];

export default function ComparePage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    COMPARISON
                </div>
                <h1 className="text-4xl font-bold mb-4">Coursenix AI vs. building it yourself</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    A quick look at how much faster course design gets with structured AI generation.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-6 pb-16 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="border-b border-[#1a1a1a] text-left text-gray-500">
                            <th className="py-3 pr-4 font-medium"> </th>
                            <th className="py-3 pr-4 font-medium">Manual</th>
                            <th className="py-3 font-medium text-[#2dd4a7]">Coursenix AI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r) => (
                            <tr key={r.label} className="border-b border-[#1a1a1a]">
                                <td className="py-4 pr-4 font-medium">{r.label}</td>
                                <td className="py-4 pr-4 text-gray-400">{r.manual}</td>
                                <td className="py-4 text-gray-200">{r.coursenix}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="text-center pb-24">
                <Link
                    href="/signup"
                    className="inline-block bg-[#2dd4a7] hover:bg-[#25b891] transition rounded-lg px-6 py-3 font-medium text-black"
                >
                    Try it free
                </Link>
            </div>
        </div>
    );
}

