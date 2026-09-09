import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Enterprise - Coursenix AI",
    description: "Coursenix AI for teams and organizations that need scale, control, and support.",
};

interface EnterpriseFeature {
    title: string;
    desc: string;
}

const enterpriseFeatures: EnterpriseFeature[] = [
    { title: "Unlimited course generation", desc: "No per-seat caps on how many courses your team can build." },
    { title: "Team workspaces", desc: "Shared libraries so your whole org works from the same course structures." },
    { title: "Admin controls", desc: "Manage seats, permissions, and usage from a central admin view." },
    { title: "Priority support", desc: "Dedicated support with faster response times for your team." },
    { title: "SSO & security review", desc: "Support for single sign-on and enterprise security requirements." },
    { title: "Custom onboarding", desc: "A guided rollout plan tailored to how your team creates training." },
];

export default function EnterprisePage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    ENTERPRISE
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Coursenix AI for your organization</h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Give your whole team a faster way to build training and course content, with the controls a larger org needs.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {enterpriseFeatures.map((f) => (
                    <div key={f.title} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]">
                        <h3 className="font-semibold mb-2">{f.title}</h3>
                        <p className="text-sm text-gray-400">{f.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center pb-24">
                <Link
                    href="/contact"
                    className="inline-block bg-[#2dd4a7] hover:bg-[#25b891] transition rounded-lg px-6 py-3 font-medium text-black"
                >
                    Talk to sales
                </Link>
            </div>
        </div>
    );
}