import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Use Cases - Coursenix AI",
    description: "How educators, trainers, and creators use Coursenix AI to build courses fast.",
};

interface UseCase {
    title: string;
    audience: string;
    desc: string;
    points: string[];
}

const useCases: UseCase[] = [
    {
        title: "Corporate Training",
        audience: "L&D Teams",
        desc: "Turn internal knowledge and onboarding topics into structured training modules without hiring an instructional designer.",
        points: [
            "Onboarding curricula for new hires",
            "Compliance and process training",
            "Upskilling programs for existing teams",
        ],
    },
    {
        title: "Online Course Creators",
        audience: "Independent Creators",
        desc: "Go from a raw topic idea to a full course outline in minutes, then focus your time on recording and content instead of planning.",
        points: [
            "Draft a course outline before recording",
            "Validate a topic idea quickly",
            "Break a broad subject into sellable modules",
        ],
    },
    {
        title: "Bootcamps & Cohort Courses",
        audience: "Instructors",
        desc: "Build week-by-week curricula for technical or professional bootcamps with consistent structure across cohorts.",
        points: [
            "Standardize curriculum across instructors",
            "Quickly adapt a syllabus for a new cohort",
            "Fill in supplementary lesson material",
        ],
    },
    {
        title: "Educators & Tutors",
        audience: "Teachers",
        desc: "Generate supplementary material or full lesson plans for subjects outside your usual specialty.",
        points: [
            "Build lesson plans for a new topic fast",
            "Create structured study guides for students",
            "Prepare workshop or seminar outlines",
        ],
    },
];

export default function UseCasesPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#2dd4a7]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    USE CASES
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Built for anyone who teaches</h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    From corporate training to independent course creation, Coursenix AI adapts to how you teach.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((u) => (
                    <div
                        key={u.title}
                        className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2dd4a7]/40 transition"
                    >
                        <span className="text-xs uppercase tracking-wide text-[#2dd4a7]">{u.audience}</span>
                        <h3 className="font-semibold text-lg mt-1 mb-2">{u.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{u.desc}</p>
                        <ul className="text-sm text-gray-500 flex flex-col gap-1.5">
                            {u.points.map((p) => (
                                <li key={p} className="flex items-start gap-2">
                                    <span className="text-[#2dd4a7] mt-0.5">✓</span>
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="text-center pb-24">
                <Link
                    href="/signup"
                    className="inline-block bg-[#2dd4a7] hover:bg-[#25b891] transition rounded-lg px-6 py-3 font-medium text-black"
                >
                    Start generating courses
                </Link>
            </div>
        </div>
    );
}