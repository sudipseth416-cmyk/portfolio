import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Intro Section */}
      <Hero />

      {/* About Biography Section */}
      <About />

      {/* Skills Proficiency Grid */}
      <Skills />

      {/* Bento Grid Projects Showcase */}
      <Projects />

      {/* Experience Milestone Timeline */}
      <Experience />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer copyright */}
      <footer className="py-12 border-t border-white/5 bg-[#030712]/80 backdrop-blur-sm text-center text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} Sudip Seth. All Rights Reserved.</p>
        <p className="mt-2 text-[10px] text-cyan-500/50">Designed with Next.js 15, Three.js & Framer Motion</p>
      </footer>
    </div>
  );
}
