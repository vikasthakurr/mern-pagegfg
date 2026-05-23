class GfgHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="bg-gfg-darkgreen text-white py-24 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-gfg-ocean rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-gfg-navy rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-3/5">
          <div class="inline-block bg-gfg-lightgreen2 text-gfg-green font-bold px-3 py-1 rounded-full text-sm mb-6 uppercase tracking-wider font-sans">
            Full Stack Web Development Program
          </div>
          <h1 class="text-5xl md:text-6xl font-sans font-bold leading-tight mb-6">
            Become an industry-ready
            <span class="text-gfg-lime">Full Stack Developer</span> from the
            ground up.
          </h1>
          <p class="text-xl text-gray-300 mb-8 font-body max-w-2xl">
            Learn to engineer production-ready web applications from the ground
            up using the MERN stack, modern TypeScript workflows, and scalable
            system design practices used in the industry.
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">
              <i class="fa-solid fa-star text-gfg-yellow mr-2"></i>
              <span class="font-bold">4.8 Rating</span>
            </div>
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">
              <i class="fa-solid fa-user-tie text-gfg-periwinkle mr-2"></i>
              <span class="font-bold">1:1 Mentorship</span>
            </div>
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">
              <i class="fa-solid fa-headset text-gfg-orange mr-2"></i>
              <span class="font-bold">24/7 AI Support</span>
            </div>
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">
              <i class="fa-solid fa-comments text-gfg-orange mr-2"></i>
              <span class="font-bold">Dedicated doubt clearing sessions</span>
            </div>
            <div class="flex items-center bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm">
              <i class="fa-solid fa-layer-group text-gfg-lime mr-2"></i>
              <span class="font-bold">28 Sessions</span>
            </div>
          </div>
        </div>
        <div class="md:w-2/5 hidden md:block">
          <div class="w-full h-96 bg-gradient-to-tr from-gfg-navy to-gfg-ocean rounded-2xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500 group">
            <div class="w-full h-full bg-[#0d1117] rounded-xl border border-white/10 p-5 flex flex-col relative overflow-hidden shadow-inner">
              <!-- Window Controls -->
              <div class="flex justify-between items-center text-white/50 border-b border-white/10 pb-3 mb-4 z-10">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div class="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-md text-xs font-mono text-gray-300">
                  <i class="fa-brands fa-node-js text-[#68a063]"></i> server.js
                </div>
              </div>

              <!-- Code Snippet -->
              <div class="font-mono text-xs md:text-[13px] leading-relaxed flex-1 overflow-hidden z-10">
                <div class="text-[#ff7b72]">
                  import <span class="text-[#c9d1d9]">express</span> from
                  <span class="text-[#a5d6ff]">'express'</span>;
                </div>
                <div class="text-[#ff7b72]">
                  import <span class="text-[#c9d1d9]">mongoose</span> from
                  <span class="text-[#a5d6ff]">'mongoose'</span>;
                </div>
                <div class="text-[#ff7b72]">
                  import <span class="text-[#c9d1d9]">authRouter</span> from
                  <span class="text-[#a5d6ff]">'./routes/auth'</span>;
                </div>
                <br>
                <div class="text-[#8b949e] italic">// Initialize Core App</div>
                <div>
                  <span class="text-[#ff7b72]">const</span>
                  <span class="text-[#c9d1d9]">app</span>
                  <span class="text-[#ff7b72]">=</span>
                  <span class="text-[#d2a8ff]">express</span>();
                </div>
                <div>
                  <span class="text-[#c9d1d9]">app</span>.<span class="text-[#d2a8ff]">use</span>(<span class="text-[#c9d1d9]">express</span>.<span class="text-[#d2a8ff]">json</span>());
                </div>
                <br>
                <div class="text-[#8b949e] italic">// Mount Secure Routes</div>
                <div>
                  <span class="text-[#c9d1d9]">app</span>.<span class="text-[#d2a8ff]">use</span>(<span class="text-[#a5d6ff]">'/api/v1/auth'</span>,
                  <span class="text-[#c9d1d9]">authRouter</span>);
                </div>
                <br>
                <div class="text-[#8b949e] italic">// Connect to Database</div>
                <div>
                  <span class="text-[#c9d1d9]">mongoose</span>.<span class="text-[#d2a8ff]">connect</span>(<span class="text-[#c9d1d9]">process.env</span>.<span class="text-[#79c0ff]">MONGO_URI</span>)
                </div>
                <div class="pl-4">
                  .<span class="text-[#d2a8ff]">then</span>(()
                  <span class="text-[#ff7b72]">=&gt;</span> {
                </div>
                <div class="pl-8">
                  <span class="text-[#c9d1d9]">console</span>.<span class="text-[#d2a8ff]">log</span>(<span class="text-[#a5d6ff]">'⚡ DB Synced'</span>);
                </div>
                <div class="pl-8">
                  <span class="text-[#c9d1d9]">app</span>.<span class="text-[#d2a8ff]">listen</span>(<span class="text-[#79c0ff]">5000</span>, ()
                  <span class="text-[#ff7b72]">=&gt;</span> {
                </div>
                <div class="pl-12">
                  <span class="text-[#c9d1d9]">console</span>.<span class="text-[#d2a8ff]">log</span>(<span class="text-[#a5d6ff]">'🚀 Server running'</span>);
                </div>
                <div class="pl-8">});</div>
                <div class="pl-4">});</div>
              </div>

              <!-- Floating Live Status Widget -->
              <div class="absolute bottom-4 right-4 bg-[#238636]/20 border border-[#238636] text-[#3fb950] px-3 py-1.5 rounded text-xs font-sans font-bold flex items-center shadow-lg backdrop-blur-md transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <span class="relative flex h-2 w-2 mr-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3fb950] opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-[#3fb950]"></span>
                </span>
                API ONLINE
              </div>

              <!-- Decorative glow -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </header>`;
  }
}
customElements.define('gfg-hero', GfgHero);
