import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Daily News",
  description: "Your Daily Source of News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <nav className="bg-gray-900 text-white px-4 py-3">
          <div className="max-w-5xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            
            <span className="text-xl font-bold">The Daily News</span>
            
            <ul className="flex flex-wrap gap-4 text-sm">
               <li><a href="#" className="hover:underline">Technology</a></li>
               <li><a href="#" className="hover:underline">Finance</a></li>
               <li><a href="#" className="hover:underline">Wellness</a></li>
               <li><a href="#" className="hover:underline">Travel</a></li>
               <li><a href="#" className="hover:underline">Education</a></li>
            </ul>
          </div>
        </nav>
        {children}            
      </body>
    </html>
  )
}
