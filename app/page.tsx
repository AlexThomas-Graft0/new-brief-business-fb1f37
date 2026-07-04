import { ArrowRight, Zap, Palette, Clock, CheckCircle } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter uppercase italic">Ghost Designs</div>
        <div className="hidden md:flex gap-8 font-medium text-sm">
          <a href="#work" className="hover:text-indigo-600 transition">Our Work</a>
          <a href="#process" className="hover:text-indigo-600 transition">How it Works</a>
          <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
        </div>
        <a href="#contact" className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-600 transition">
          Get Started
        </a>
      </nav>

      <header className="px-8 py-20 text-center max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">Design at the speed of thought</span>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
          Design your brand, <span className="text-indigo-600">on demand.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Skip the hiring, the contracts, and the overhead. Get a dedicated design partner for a flat monthly subscription.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition">
            Start Your Request <ArrowRight size={20} />
          </a>
        </div>
      </header>

      <section id="work" className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Recent Branding</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tech Startup Identity", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" },
              { title: "Luxury Retail UI", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
              { title: "Eco Brand System", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" }
            ].map((item, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-slate-100">
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
                <div className="p-6">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-500 text-sm">Branding & Visual Design</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-8 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white"><Zap /></div>
            <h3 className="text-xl font-bold">Request Anything</h3>
            <p className="text-slate-600">Submit unlimited design requests via your private dashboard. No project is too small or complex.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white"><Clock /></div>
            <h3 className="text-xl font-bold">Fast Turnaround</h3>
            <p className="text-slate-600">We work in 48-hour sprints. You'll see drafts in your inbox before you know it.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white"><Palette /></div>
            <h3 className="text-xl font-bold">Polished Output</h3>
            <p className="text-slate-600">Receive source files, style guides, and assets ready for production and scaling.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to transform your brand?</h2>
          <p className="text-slate-400 mb-12 text-lg">Send us a brief below and we'll reach out to get your subscription started.</p>
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500" />
            <input type="email" placeholder="Work Email" className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500" />
            <textarea placeholder="Tell us about your project" className="w-full p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-indigo-500 h-32"></textarea>
            <button className="w-full bg-indigo-600 py-4 rounded-lg font-bold hover:bg-indigo-500 transition">Submit Brief</button>
          </form>
        </div>
      </section>

      <footer className="px-8 py-12 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Ghost Designs. All rights reserved.
      </footer>
    </div>
  );
}