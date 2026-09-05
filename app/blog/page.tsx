"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Author {
    name: string;
    role: string;
    avatar: string;
}

interface BlogPost {
    id: number;
    tag?: string;
    category: string;
    title: string;
    desc: string;
    author: Author;
    date: string;
    readTime: string;
    featured: boolean;
    badge: string;
    imageGradient: string;
}

const allPosts: BlogPost[] = [
    {
        id: 1,
        tag: "Featured",
        category: "AI Generation Engine",
        title: "Inside the Coursenix Engine: How a Single Sentence Becomes an 8-Module Teachable Syllabus",
        desc: "A deep dive into our AI prompt pipeline: transforming a raw topic like 'Machine Learning for Finance' into structured modules, 30+ bite-sized lessons, clear bloom-taxonomy objectives, and downloadable PDF certificates.",
        author: {
            name: "Coursenix Core AI Team",
            role: "AI & Learning Architecture",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        },
        date: "Aug 29, 2026",
        readTime: "6 min read",
        featured: true,
        badge: "ENGINE ARCHITECTURE",
        imageGradient: "from-[#2dd4a7]/30 via-cyan-500/20 to-zinc-950",
    },
    {
        id: 2,
        category: "Prompt Engineering",
        title: "How to Prompt Coursenix to Generate Niche Tech Courses (With 10 Real Examples)",
        desc: "From 'Rust for Solidity Developers' to 'Prompt Engineering for Healthcare' — learn the exact prompt formula to get deep, intermediate, and advanced curricula on your first try.",
        author: {
            name: "Karthik Raja",
            role: "Lead Prompt Engineer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        },
        date: "Aug 24, 2026",
        readTime: "5 min read",
        featured: false,
        badge: "TUTORIAL",
        imageGradient: "from-purple-500/20 via-pink-500/10 to-zinc-950",
    },
    {
        id: 3,
        category: "Course Creation",
        title: "The 10-Minute Micro-Course Playbook: Why Short Modules Increase Completion by 84%",
        desc: "Long 40-hour video courses have a 5% completion rate. Discover how educators use Coursenix to structure 15-minute high-impact micro-modules that keep students engaged.",
        author: {
            name: "Priya Sundar",
            role: "Curriculum Specialist",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
        },
        date: "Aug 18, 2026",
        readTime: "4 min read",
        featured: false,
        badge: "PEDAGOGY",
        imageGradient: "from-blue-500/20 via-teal-500/10 to-zinc-950",
    },
    {
        id: 4,
        category: "Monetization",
        title: "How Solo Creators Are Packaging and Selling AI-Generated Cohorts for $499+",
        desc: "Case study on how educators use Coursenix to generate the core curriculum, export to PDF, and pair it with live Q&A sessions to build a scalable education business.",
        author: {
            name: "Marcus Vance",
            role: "Growth & Monetization",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        },
        date: "Aug 12, 2026",
        readTime: "7 min read",
        featured: false,
        badge: "MONETIZATION",
        imageGradient: "from-emerald-500/20 via-teal-500/10 to-zinc-950",
    },
    {
        id: 5,
        category: "Case Studies",
        title: "Case Study: How a Coding Bootcamp Generated 45 Custom Upskilling Tracks in 1 Month",
        desc: "Learn how an enterprise training institute leveraged Coursenix's automated duration & level tags (Beginner, Intermediate, Advanced) to deliver custom corporate training.",
        author: {
            name: "Coursenix Research",
            role: "Enterprise Case Studies",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
        },
        date: "Aug 05, 2026",
        readTime: "8 min read",
        featured: false,
        badge: "CASE STUDY",
        imageGradient: "from-amber-500/20 via-orange-500/10 to-zinc-950",
    },
    {
        id: 6,
        category: "Certificates & Evaluation",
        title: "Automating Verified PDF Certificates: How Proof of Completion Boosts Student Loyalty",
        desc: "Why giving learners a shareable credential and LinkedIn badge doubles word-of-mouth referrals for your AI-generated courses.",
        author: {
            name: "Priya Sundar",
            role: "Curriculum Specialist",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
        },
        date: "Jul 27, 2026",
        readTime: "4 min read",
        featured: false,
        badge: "CREDENTIALS",
        imageGradient: "from-cyan-500/20 via-indigo-500/10 to-zinc-950",
    },
];

const categories: string[] = [
    "All",
    "AI Generation Engine",
    "Prompt Engineering",
    "Course Creation",
    "Monetization",
    "Case Studies",
    "Certificates & Evaluation",
];

export default function BlogPage(): React.JSX.Element {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [emailInput, setEmailInput] = useState<string>("");
    const [subscribed, setSubscribed] = useState<boolean>(false);

    const filteredPosts: BlogPost[] = allPosts.filter((post) => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost: BlogPost = allPosts.find((p) => p.featured) || allPosts[0];
    const regularPosts: BlogPost[] = filteredPosts.filter((p) =>
        activeCategory !== "All" || searchQuery ? true : !p.featured
    );

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (emailInput.trim()) {
            setSubscribed(true);
            setEmailInput("");
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <section className="relative px-6 md:px-14 pt-20 pb-12 border-b border-zinc-900 overflow-hidden">
                <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-radial from-[#2dd4a7]/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-xs font-semibold text-[#2dd4a7] mb-5 tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-[#2dd4a7] animate-pulse" />
                        COURSENIX KNOWLEDGE HUB
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
                        Master AI Course Generation & <span className="bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] bg-clip-text text-transparent">Digital Teaching</span>
                    </h1>

                    <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
                        Insights on AI curriculum architecture, prompt engineering for educators, course monetization, and high-retention teaching strategies.
                    </p>

                    <div className="max-w-md mx-auto relative mb-6">
                        <input
                            type="text"
                            placeholder="Search AI prompts, curriculum strategies, topics..."
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#111] border border-zinc-800 focus:border-[#2dd4a7] rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-zinc-500 outline-none transition shadow-lg"
                        />
                        <svg
                            className="absolute left-3.5 top-3.5 text-zinc-500 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition ${activeCategory === cat
                                        ? "bg-[#2dd4a7] text-black font-semibold shadow-md shadow-[#2dd4a7]/20"
                                        : "bg-[#121212] border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 md:px-14 py-16">
                {activeCategory === "All" && !searchQuery && featuredPost && (
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-[#2dd4a7]">
                            <span>★ Featured Coursenix Blueprint</span>
                        </div>

                        <div className="group bg-[#0d1210] border border-zinc-800/90 hover:border-[#2dd4a7]/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 min-h-[280px] lg:min-h-[360px] bg-gradient-to-br from-emerald-600/25 via-cyan-600/15 to-zinc-950 p-8 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-800/80">
                                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#2dd4a7]/20 rounded-full blur-3xl pointer-events-none" />

                                <div className="flex items-center justify-between z-10">
                                    <span className="bg-black/60 backdrop-blur-md border border-white/10 text-[#2dd4a7] text-xs font-semibold px-3 py-1 rounded-md">
                                        {featuredPost.category}
                                    </span>
                                    <span className="text-xs text-zinc-400 bg-black/40 px-2.5 py-1 rounded-md border border-zinc-800">
                                        {featuredPost.badge}
                                    </span>
                                </div>

                                <div className="bg-black/60 border border-zinc-800/80 rounded-xl p-4 my-4 font-mono text-xs text-zinc-300 z-10 backdrop-blur-md">
                                    <div className="text-[#2dd4a7] font-semibold mb-1">⚡ Prompt: &quot;Build Machine Learning Curriculum&quot;</div>
                                    <div className="text-zinc-400 text-[11px]">→ Module 1: Core Concepts & Math Foundations</div>
                                    <div className="text-zinc-400 text-[11px]">→ Module 2: Data Preprocessing & Features</div>
                                    <div className="text-zinc-500 text-[11px]">→ Module 3: Supervised & Unsupervised Models</div>
                                </div>

                                <div className="text-xs text-zinc-400 z-10">
                                    Powered by Coursenix Engine v2.4
                                </div>
                            </div>

                            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                                        <span>{featuredPost.date}</span>
                                        <span>•</span>
                                        <span>{featuredPost.readTime}</span>
                                    </div>

                                    <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#2dd4a7] transition-colors leading-tight mb-4">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                                        {featuredPost.desc}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-zinc-900">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={featuredPost.author.avatar}
                                            alt={featuredPost.author.name}
                                            className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                                        />
                                        <div>
                                            <div className="text-sm font-semibold text-white">{featuredPost.author.name}</div>
                                            <div className="text-xs text-zinc-500">{featuredPost.author.role}</div>
                                        </div>
                                    </div>

                                    <Link href="/courses" className="text-[#2dd4a7] font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Try Generator →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                            {searchQuery
                                ? `Search Results for "${searchQuery}" (${filteredPosts.length})`
                                : activeCategory === "All"
                                    ? "Latest Coursenix Guides & Case Studies"
                                    : `${activeCategory} (${filteredPosts.length})`}
                        </h3>
                        <span className="text-xs text-zinc-500">{filteredPosts.length} articles</span>
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20 bg-[#0d1210]/40 border border-zinc-900 rounded-2xl">
                            <p className="text-zinc-400 text-base mb-2">No articles match your search or filter.</p>
                            <button
                                onClick={() => {
                                    setActiveCategory("All");
                                    setSearchQuery("");
                                }}
                                className="text-[#2dd4a7] text-sm font-semibold underline mt-2"
                            >
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {regularPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group bg-[#0d1210] border border-zinc-800/80 hover:border-[#2dd4a7]/50 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-[#2dd4a7]/5"
                                >
                                    <div>
                                        <div className={`h-40 bg-gradient-to-br ${post.imageGradient} p-5 flex flex-col justify-between relative overflow-hidden border-b border-zinc-800/60`}>
                                            <div className="flex justify-between items-center">
                                                <span className="self-start bg-black/60 backdrop-blur-md border border-white/10 text-[#2dd4a7] text-xs font-semibold px-3 py-1 rounded-md">
                                                    {post.category}
                                                </span>
                                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded border border-zinc-800">
                                                    {post.badge}
                                                </span>
                                            </div>

                                            <div className="text-xs text-zinc-400 flex items-center gap-2">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-white group-hover:text-[#2dd4a7] transition-colors leading-snug mb-3">
                                                {post.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                                                {post.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-zinc-900/80">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                className="w-7 h-7 rounded-full object-cover border border-zinc-700"
                                            />
                                            <div>
                                                <div className="text-xs text-zinc-300 font-medium">{post.author.name}</div>
                                                <div className="text-[10px] text-zinc-500">{post.author.role}</div>
                                            </div>
                                        </div>

                                        <span className="text-xs font-semibold text-[#2dd4a7] group-hover:translate-x-1 transition-transform">
                                            Read Guide →
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-20 relative bg-gradient-to-r from-[#0d1713] via-[#09120e] to-[#0d1713] border border-[#2dd4a7]/30 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#2dd4a7]/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-2xl mx-auto relative z-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4a7] mb-2 block">
                            Free Weekly Prompt Toolkit
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Get 50+ Tested Prompts to Generate High-Retention Courses
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                            Join 12,000+ educators, boot camp leaders, and creators receiving our weekly cheatsheet on curriculum structuring, prompt tuning, and micro-course monetization.
                        </p>

                        {subscribed ? (
                            <div className="p-4 bg-[#2dd4a7]/10 border border-[#2dd4a7]/40 rounded-xl text-[#2dd4a7] font-semibold text-sm">
                                🎉 Welcome to the community! Your 50+ prompt cheatsheet is on its way to your inbox.
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your work email address"
                                    value={emailInput}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailInput(e.target.value)}
                                    required
                                    className="flex-1 bg-[#151f1a] border border-zinc-700 focus:border-[#2dd4a7] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition"
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] text-black font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-95 transition shadow-lg shadow-[#2dd4a7]/10"
                                >
                                    Get Free Toolkit
                                </button>
                            </form>
                        )}

                        <p className="text-[11px] text-zinc-500 mt-4">Zero spam. Actionable AI course prompts every Thursday. Unsubscribe anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
