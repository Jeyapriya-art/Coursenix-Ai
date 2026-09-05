import type { Metadata } from "next";
import React from "react";
import Courses from "@/components/Courses";

export const metadata: Metadata = {
    title: "Courses - Coursenix",
    description: "Browse and manage all AI-generated courses.",
};

export default function CoursesPage(): React.JSX.Element {
    return <Courses />;
}

