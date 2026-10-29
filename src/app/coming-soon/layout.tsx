import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This page on Esportific is currently under development.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
