import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Video Game DB",
	description:
		"A web app where you can find information about +400.000 video games.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
				</Suspense>
				{children}
				<footer className="flex justify-center items-center fixed bottom-0 w-full h-20 bg-gray-800 text-white">
					<p>Game Catalog</p>
				</footer>
			</body>
		</html>
	);
}
