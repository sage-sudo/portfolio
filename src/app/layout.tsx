import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Trevah | Portfoli0',
  description: 'Personal portfolio built with Next.js + Tailwind',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <nav className="flex justify-between items-center p-6 bg-gray-900 shadow-lg">
          <h1 className="text-2xl font-bold text-cyan-400">Tr3vah</h1>
          <div className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}

