import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#2b1a12]">
      {/* soft vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_50%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />

        <footer className="py-10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Solis Scents. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
