import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Integrations - Coursenix AI",
    description: "Connect Coursenix AI with the tools you already teach and train with.",
};

interface Integration {
    name: string;
    desc: string;
    status: "Available" | "Coming Soon";
}

const integrations: Integration[] = [
    { name: "Google Classroom", desc: "Export generated courses directly into your classroom.", status: "Coming Soon" },
    { name: "Notion", desc: "Sync course outlines to a Notion workspace as structured pages.", status: "Coming Soon" },
    { name: "Slack", desc: "Get notified when a course finishes generating or is updated.", status: "Available" },
    { name: "Zapier", desc: "Connect Coursenix to thousands of other apps via Zapier triggers.", status: "Coming Soon" },
    { name: "Moodle", desc: "Push modules and lessons into a Moodle course shell.", status: "Coming Soon" },
    { name: "CSV / PDF Export", desc: "Export any course as a spreadsheet or formatted PDF.", status: "Available" },
];

export default function IntegrationsPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    INTEGRATIONS
                </div>
                <h1 className="text-4xl font-bold mb-4">Works with your existing tools</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    Coursenix AI is built to fit into your workflow, not replace it.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {integrations.map((i) => (
                    <div key={i.name} className="p-5 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{i.name}</h3>
                            <span
                                className={`text-[10px] px-2 py-0.5 rounded-full ${i.status === "Available"
                                        ? "bg-[#2dd4a7]/10 text-[#2dd4a7]"
                                        : "bg-white/5 text-gray-500"
                                    }`}
                            >
                                {i.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">{i.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}