"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import type { Session } from "@supabase/supabase-js";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [session, setSession] = useState<Session | null | undefined>(undefined);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (!session) router.replace("/login");
        });

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (!session) router.replace("/login");
        });

        return () => listener.subscription.unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.replace("/login");
    };

    // Still checking session — avoid flashing protected content
    if (session === undefined) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
                Loading...
            </div>
        );
    }

    // No session — redirect is in-flight, render nothing
    if (session === null) {
        return null;
    }

    return (
        <div className="min-h-screen flex bg-[#050505] text-white">
            <aside className="w-60 shrink-0 border-r border-[#1a1a1a] flex flex-col p-4">
                <Link href="/" className="text-lg font-semibold mb-8 block">
                    <span className="text-purple-400">C</span>oursenix
                </Link>
                <nav className="flex flex-col gap-2 flex-1">
                    <Link href="/dashboard" className="px-3 py-2 rounded hover:bg-white/5">
                        Dashboard
                    </Link>
                    <Link href="/generate" className="px-3 py-2 rounded hover:bg-white/5">
                        + Generate Course
                    </Link>
                    <Link href="/courses" className="px-3 py-2 rounded hover:bg-white/5">
                        My Courses
                    </Link>
                    <Link href="/settings" className="px-3 py-2 rounded hover:bg-white/5">
                        Settings
                    </Link>
                </nav>
                <button
                    onClick={handleLogout}
                    className="px-3 py-2 rounded text-left hover:bg-white/5 text-sm text-gray-400"
                >
                    Log out
                </button>
            </aside>
            <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
    );
}
