import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Security - Coursenix AI",
    description: "How Coursenix AI handles your data and keeps your account secure.",
};

interface SecurityPoint {
    title: string;
    desc: string;
}

const points: SecurityPoint[] = [
    {
        title: "Encrypted in transit",
        desc: "All traffic between your browser and Coursenix AI is encrypted using HTTPS/TLS.",
    },
    {
        title: "Secure authentication",
        desc: "Accounts are protected via Supabase Auth, supporting email/password and OAuth sign-in.",
    },
    {
        title: "Data isolation",
        desc: "Your courses and account data are scoped to your account and not accessible by other users.",
    },
    {
        title: "You control your content",
        desc: "You can edit or delete any course you generate at any time from your dashboard.",
    },
];

export default function SecurityPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    SECURITY
                </div>
                <h1 className="text-4xl font-bold mb-4">Security &amp; trust</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    We take the protection of your account and course content seriously.
                </p>
            </div>

            <div className="max-w-2xl mx-auto px-6 pb-16 flex flex-col gap-4">
                {points.map((p) => (
                    <div key={p.title} className="p-5 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]">
                        <h3 className="font-semibold mb-2">{p.title}</h3>
                        <p className="text-sm text-gray-400">{p.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center pb-24 text-sm text-gray-500">
                For more on how we handle your data, see our{" "}
                <Link href="/privacy" className="text-[#2dd4a7] hover:underline">
                    Privacy Policy
                </Link>
                .
            </div>
        </div>
    );
}
