import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Terms of Service - Coursenix AI",
    description: "Terms and conditions for using the Coursenix AI course generator platform.",
};

export default function TermsPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white px-6 md:px-14 py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
                <p className="text-zinc-500 text-sm mb-10">Last updated: August 29, 2026</p>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    Welcome to Coursenix. By using our AI course generation tools and services, you agree to comply with the following terms.
                </p>

                <div className="space-y-8 text-sm text-zinc-400 leading-relaxed">
                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By accessing Coursenix or creating an account, you agree to be bound by these terms. If you disagree with any part, you may discontinue use of the platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">2. Description of Service</h2>
                        <p>
                            Coursenix provides AI-driven tools that turn prompts into structured course modules, lessons, and learning objectives. Generated output serves as an accelerated starting foundation for educators.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">3. Content Ownership</h2>
                        <p>
                            You own 100% of the course curricula you generate and customize. You are free to publish, sell, or distribute your courses without royalty fees owed to Coursenix.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">4. Acceptable Use Policy</h2>
                        <p>
                            You agree not to use our AI engines to generate harmful, illegal, misleading, or plagiarized materials.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">5. Support & Inquiries</h2>
                        <p>
                            For legal or support inquiries regarding these terms, please contact{" "}
                            <span className="text-[#2dd4a7] font-semibold">support@coursenix.ai</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
