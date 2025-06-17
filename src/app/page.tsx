import { Span } from "next/dist/trace";

// app/page.tsx
export default function Home() {
  return (
    <section className="text-center space-y-8 mt-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400">Hey, I'm Trevah</h2>
      <p className="text-gray-300 max-w-xl mx-auto">
        Data Science + Finance nerd building cool things with code. Welcome to my digital playground.
      </p>
      <a
        href="/projects"
        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl transition-all"
      >
        View My Work
      </a>
    </section>
  );
}

