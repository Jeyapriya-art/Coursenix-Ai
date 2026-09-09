import React from "react";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section className="min-h-screen">{children}</section>;
}