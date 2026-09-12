import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pricing - Coursenix AI",
    description: "Simple, transparent pricing plans for course creators, educators, and teams.",
};

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    desc: string;
    features: string[];
    highlight: boolean;
}

export default function PricingPage(): React.JSX.Element {
    const plans: PricingPlan[] = [
        {
            name: "Free",
            price: "$0",
            period: "/forever",
            desc: "Try Coursenix and generate your first AI course curricula.",
            features: [
                "3 AI course generations / month",
                "Standard curriculum modules & lessons",
                "Community support",
                "Export as Markdown / Text",
            ],
            highlight: false,
        },
        {
            name: "Pro Creator",
            price: "$19",
            period: "/month",
            desc: "For educators and creators building courses regularly.",
            features: [
                "Unlimited AI course generations",
                "Deep Bloom's taxonomy objectives",
                "Automated Quiz & Flashcard generation",
                "Export as PDF, DOCX & LMS package",
                "Custom branding & PDF certificates",
                "Priority AI generation speed",
            ],
            highlight: true,
        },
        {
            name: "Team & Enterprise",
            price: "$49",
            period: "/month",
            desc: "For boot camps, academies, and organizations at scale.",
            features: [
                "Everything in Pro Creator",
                "Up to 10 team seats",
                "Shared institutional course library",
                "Analytics & completion tracking",
                "Custom domain & white-label certs",
                "Dedicated onboarding & prompt review",
            ],
            highlight: false,
        },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white px-6 md:px-14 py-20">
            <div className="text-center max-w-3xl mx-auto mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#2dd4a7]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#2dd4a7] animate-pulse" />
                    SIMPLE, TRANSPARENT PRICING
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Plans for Every Stage of{" "}
                    <span className="bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] bg-clip-text text-transparent">
                        Teaching & Scaling
                    </span>
                </h1>

                <p className="text-zinc-400 text-base md:text-lg">
                    Start for free. Upgrade whenever you need unlimited generations, PDF certificates, and LMS exports.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-xl ${plan.highlight
                            ? "bg-gradient-to-b from-[#10241c] to-[#0d1411] border-2 border-[#2dd4a7] shadow-[#2dd4a7]/10 md:scale-105"
                            : "bg-[#111214] border border-zinc-800 hover:border-zinc-700"
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2dd4a7] text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                Most Popular
                            </div>
                        )}

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">{plan.desc}</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                                <span className="text-zinc-500 text-sm">{plan.period}</span>
                            </div>

                            <ul className="space-y-3.5 mb-8 text-sm text-zinc-300">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5">
                                        <span className="text-[#2dd4a7] font-bold">✓</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href={plan.name === "Free" ? "/signup" : "/signup"}
                            className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition ${plan.highlight
                                ? "bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] text-black hover:opacity-95 shadow-lg shadow-[#2dd4a7]/10"
                                : "bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800"
                                }`}
                        >
                            {plan.name === "Free" ? "Get Started Free" : `Choose ${plan.name}`}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
