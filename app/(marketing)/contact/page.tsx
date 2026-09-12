"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage(): React.JSX.Element {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire this up to your email/API endpoint (e.g. a Supabase table or a mail service)
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <div className="text-center pt-24 pb-12 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-[#2dd4a7] text-xs font-semibold mb-6">
                    CONTACT
                </div>
                <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    Questions, feedback, or partnership ideas — we&apos;d love to hear from you.
                </p>
            </div>

            <div className="max-w-md mx-auto px-6 pb-24">
                {submitted ? (
                    <div className="p-6 rounded-xl border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-center">
                        <p className="font-medium mb-1">Message sent!</p>
                        <p className="text-sm text-gray-400">
                            Thanks for reaching out — we&apos;ll get back to you soon.
                        </p>
                        <Link href="/" className="text-[#2dd4a7] text-sm mt-4 inline-block">
                            ← Back home
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 outline-none focus:border-[#2dd4a7]"
                        />
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 outline-none focus:border-[#2dd4a7]"
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="How can we help?"
                            className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 outline-none focus:border-[#2dd4a7] resize-none"
                        />
                        <button
                            type="submit"
                            className="bg-[#2dd4a7] hover:bg-[#25b891] transition rounded-lg px-4 py-3 font-medium text-black"
                        >
                            Send message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}