"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import type { Session, User } from '@supabase/supabase-js';

const Navbar: React.FC = () => {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async (): Promise<void> => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const user: User | undefined = session?.user;
  const avatar: string | undefined = user?.user_metadata?.avatar_url;
  const name: string = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email || 'User';

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-14 py-5 bg-[#050505]/90 backdrop-blur-md border-b border-zinc-900 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#2dd4a7]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 5 H9 A5 5 0 0 0 4 10 V14 A5 5 0 0 0 9 19 H17"
            stroke="#2dd4a7"
            strokeWidth="2.6"
            strokeLinecap="square"
            fill="none"
          />
        </svg>
        <span className="text-2xl font-bold tracking-tight text-[#2dd4a7] group-hover:opacity-90 transition">
          oursenixAI
        </span>
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-9 text-[15px] font-medium text-zinc-400">
        <li>
          <Link href="/how-it-works" className="hover:text-white transition-colors">
            How it works
          </Link>
        </li>
        <li>
          <Link href="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>
        </li>
        <li>
          <Link href="/Resources" className="hover:text-white transition-colors">
            Resources
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </li>

      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3">
        {session === undefined ? null : user ? (
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-sm text-zinc-200 font-medium bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full">
              {avatar && <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full object-cover" />}
              <span className="max-w-[120px] truncate">{name}</span>
            </span>
            <button
              onClick={handleLogout}
              className="border border-zinc-800 hover:bg-zinc-900 text-zinc-200 px-4 py-2 rounded-lg font-semibold text-sm transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="border border-zinc-800 hover:bg-zinc-900 text-zinc-200 px-4 py-2 rounded-lg font-semibold text-sm transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-[#2dd4a7] hover:bg-[#26b890] text-black px-4 py-2 rounded-lg font-semibold text-sm transition shadow-lg shadow-[#2dd4a7]/10"
            >
              Sign up free
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

