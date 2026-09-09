"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchAllCourses, initializeTrackedCourses } from "@/lib/store/slices/courseSlice";

export default function DashboardPage(): React.JSX.Element {
    const dispatch = useAppDispatch();
    const { courses, trackedCourses, maxCourseLimit, loading } = useAppSelector(
        (state) => state.courses
    );
    const { user } = useAppSelector((state) => state.auth);

    useEffect(() => {
        dispatch(initializeTrackedCourses());
        dispatch(fetchAllCourses());
    }, [dispatch]);

    const stats = [
        { label: "Total Courses", value: courses.length },
        { label: "Tracked Courses", value: `${trackedCourses.length} / ${maxCourseLimit}` },
        {
            label: "Beginner Level",
            value: courses.filter((c) => c.level === "beginner").length,
        },
    ];

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Welcome back{user?.email ? `, ${user.email.split("@")[0]}` : ""}
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">Here's what's happening with your courses.</p>
                </div>
                <Link
                    href="/generate"
                    className="bg-purple-600 hover:bg-purple-500 transition rounded-lg px-4 py-2 text-sm font-medium"
                >
                    + Generate Course
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {stats.map((s) => (
                    <div key={s.label} className="border border-[#1a1a1a] rounded-xl p-5 bg-[#0a0a0a]">
                        <p className="text-2xl font-semibold">{s.value}</p>
                        <p className="text-sm text-gray-400 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium">Recent courses</h2>
                <Link href="/courses" className="text-sm text-purple-400 hover:underline">
                    View all →
                </Link>
            </div>

            {loading ? (
                <p className="text-gray-500 text-sm">Loading...</p>
            ) : courses.length === 0 ? (
                <p className="text-gray-500 text-sm">No courses yet — generate your first one.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {courses.slice(0, 4).map((c) => (
                        <Link
                            key={c.id}
                            href={`/courses/${c.id}`}
                            className="border border-[#1a1a1a] rounded-xl p-4 bg-[#0a0a0a] hover:border-purple-500/40 transition"
                        >
                            <p className="font-medium">{c.title}</p>
                            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{c.description}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
