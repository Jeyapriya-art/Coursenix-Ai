"use client";

import type { Metadata } from "next";
import React, { useState } from "react";

export default function GeneratePage(): React.JSX.Element {
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic.trim()) return;
        setLoading(true);
        try {
            // TODO: wire this up to your @google/genai course-generation call
            // e.g. const course = await generateCourse(topic);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-semibold mb-2">Generate a new course</h1>
            <p className="text-gray-400 mb-6">
                Enter a topic and Coursenix will structure a full course outline for you.
            </p>
            <form onSubmit={handleGenerate} className="flex flex-col gap-4">
                <input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. Introduction to Machine Learning"
                    className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-500 transition rounded-lg px-4 py-3 font-medium disabled:opacity-50"
                >
                    {loading ? "Generating..." : "Generate Course"}
                </button>
            </form>
        </div>
    );
}