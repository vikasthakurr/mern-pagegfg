class GfgOverview extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-24 bg-gray-50 relative overflow-hidden" id="overview">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gfg-green/10 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gfg-blue/10 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block py-1 px-3 rounded-full bg-gfg-green/10 text-gfg-green font-bold text-sm tracking-wide mb-4">THE JOURNEY</span>
          <h2 class="text-4xl md:text-5xl font-sans font-extrabold text-gray-900 mb-6 tracking-tight">
            The Complete MERN Lifecycle
          </h2>
          <p class="text-xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            We don't just teach syntax. We take you from web architecture
            fundamentals to deploying production-grade, full-stack applications
            — with real system design intuition built in.
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          <!-- Large Feature 1 -->
          <div class="md:col-span-8 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gfg-lightgreen2 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
            <div class="relative z-10 h-full flex flex-col justify-center">
              <div class="w-14 h-14 bg-gfg-green/10 text-gfg-green rounded-2xl flex items-center justify-center text-2xl mb-6">
                <i class="fa-solid fa-layer-group"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                Industry-Ready Full Stack
              </h3>
              <p class="text-gray-600 leading-relaxed max-w-xl text-lg">
                Master everything from HTML basics to advanced cloud deployment.
                Build scalable React frontends and robust REST APIs with real
                system design and security knowledge.
              </p>
            </div>
          </div>

          <!-- Small Feature 1 -->
          <div class="md:col-span-4 bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden group">
            <div class="absolute -right-4 -bottom-4 text-8xl text-white/5 group-hover:text-white/10 transition-colors duration-300">
              <i class="fa-brands fa-js"></i>
            </div>
            <div class="relative z-10">
              <div class="w-12 h-12 bg-white/10 text-yellow-400 rounded-xl flex items-center justify-center text-xl mb-6 backdrop-blur-sm">
                <i class="fa-brands fa-js"></i>
              </div>
              <h3 class="text-xl font-bold mb-3">Deep JavaScript</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Master closures, async patterns, the event loop, and the DOM. Go
                far beyond the basics.
              </p>
            </div>
          </div>

          <!-- Small Feature 2 -->
          <div class="md:col-span-4 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 group">
            <div class="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
              <i class="fa-brands fa-react"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              React Ecosystem
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Build production UIs with React, TypeScript, Redux, and modern
              performance optimization patterns.
            </p>
          </div>

          <!-- Small Feature 3 -->
          <div class="md:col-span-4 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 group">
            <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <i class="fa-brands fa-node-js"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Backend &amp; Database
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Build robust REST APIs with Express and master MongoDB schemas,
              aggregation, and indexing at scale.
            </p>
          </div>

          <!-- Small Feature 4 -->
          <div class="md:col-span-4 bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 group">
            <div class="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
              <i class="fa-solid fa-server"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Deploy &amp; Scale</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Learn CAP theorem, load balancing, security, and deploy with AWS,
              Vercel, Render, and Docker.
            </p>
          </div>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('gfg-overview', GfgOverview);
