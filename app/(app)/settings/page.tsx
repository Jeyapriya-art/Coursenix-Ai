"use client";

import React, { useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { supabase } from "@/lib/supabaseClient";

export default function SettingsPage(): React.JSX.Element {
    const { user } = useAppSelector((state) => state.auth);
    const [newPassword, setNewPassword] = useState("");
    const [status, setStatus] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPassword) return;
        setSaving(true);
        setStatus(null);
        const { error } = await supabase.auth.updateUser({ password: newPassword });
        setStatus(error ? error.message : "Password updated successfully.");
        setSaving(false);
        setNewPassword("");
    };

    return (
        <div className="p-8 max-w-lg">
            <h1 className="text-2xl font-semibold mb-8">Settings</h1>

            <div className="mb-10">
                <h2 className="font-medium mb-3 text-sm text-gray-400 uppercase tracking-wide">
                    Account
                </h2>
                <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#0a0a0a]">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="mt-1">{user?.email ?? "—"}</p>
                </div>
            </div>

            <div>
                <h2 className="font-medium mb-3 text-sm text-gray-400 uppercase tracking-wide">
                    Change password
                </h2>
                <form onSubmit={handlePasswordUpdate} className="flex flex-col gap-3">
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New password"
                        className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg px-4 py-3 outline-none focus:border-purple-500"
                    />
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-purple-600 hover:bg-purple-500 transition rounded-lg px-4 py-3 font-medium disabled:opacity-50 w-fit"
                    >
                        {saving ? "Saving..." : "Update password"}
                    </button>
                    {status && <p className="text-sm text-gray-400">{status}</p>}
                </form>
            </div>
        </div>
    );
}