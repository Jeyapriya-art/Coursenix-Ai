
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Privacy Policy - Coursenix AI",
    description: "Learn how Coursenix collects, uses, and protects your personal information.",
};

export default function PrivacyPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white px-6 md:px-14 py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-zinc-500 text-sm mb-10">Last updated: August 29, 2026</p>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    At Coursenix, we take your privacy and data ownership seriously. This policy outlines how your information is handled when you use our AI course generation platform.
                </p>

                <div className="space-y-8 text-sm text-zinc-400 leading-relaxed">
                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">1. Information We Collect</h2>
                        <p>
                            We collect account details (email, name, avatar) when you sign up via Supabase Auth (Google, GitHub, or Email). We also collect the course generation prompts, topics, and edits you make within the editor.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">2. How Your Data Is Used</h2>
                        <p>
                            Your data is used solely to generate, customize, and store your course curricula, authenticate your sessions, and improve our AI prompt formatting models.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">3. AI Processing & Ownership</h2>
                        <p>
                            When you generate a course, prompts are sent to our AI pipeline. We do not sell your proprietary course outlines, and you retain full ownership of all courses generated on Coursenix.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">4. Data Security</h2>
                        <p>
                            All database records and authentication tokens are secured with industry-standard encryption protocols via Supabase PostgreSQL infrastructure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-base font-bold text-[#2dd4a7] mb-2">5. Contact Information</h2>
                        <p>
                            If you have any questions or data requests regarding this policy, please reach out to{" "}
                            <span className="text-[#2dd4a7] font-semibold">privacy@coursenix.ai</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
