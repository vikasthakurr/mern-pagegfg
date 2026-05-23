class GfgCurriculum extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-24 bg-gray-900 text-white relative overflow-hidden" id="curriculum">
      <!-- Background glows -->
      <div class="absolute top-1/4 left-0 w-96 h-96 bg-gfg-green/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-gfg-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="text-center mb-20">
          <span class="inline-block py-1 px-3 rounded-full bg-gfg-green/20 text-gfg-green font-bold text-sm tracking-wide mb-4">ROADMAP</span>
          <h2 class="text-4xl md:text-5xl font-sans font-extrabold mb-6 tracking-tight">
            Curriculum Breakdown
          </h2>
          <p class="text-gray-400 font-body text-lg max-w-2xl mx-auto">
            28 focused sessions structured in a cohesive, theme-driven model
            designed to transform you into an industry-ready engineer.
          </p>
        </div>

        <div class="relative wrap overflow-hidden px-0 md:px-10 h-full">
          <!-- Continuous Vertical Line -->
          <div class="absolute border-opacity-20 border-white h-full border-l-2 left-[2.5rem] md:left-1/2 transform md:-translate-x-1/2 top-0"></div>

          <!-- Phase 1: Left on desktop -->
          <div class="mb-12 flex justify-between md:items-center w-full md:flex-row-reverse flex-col relative z-10">
            <div class="hidden md:block md:w-5/12"></div>
            <!-- Circle -->
            <div class="flex items-center justify-center bg-gray-900 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-gfg-green shrink-0 mb-6 md:mb-0 ml-[1rem] md:ml-0 z-20 shadow-[0_0_20px_rgba(47,141,70,0.3)]">
              <h1 class="font-bold text-lg md:text-xl text-gfg-green">1</h1>
            </div>
            <!-- Content -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-8 md:w-5/12 w-full backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl">
              <h3 class="mb-2 font-bold text-gfg-green text-2xl">
                Web Foundations
              </h3>
              <p class="text-xs text-gray-400 mb-6 font-semibold tracking-wide uppercase">
                Sessions 1–7
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-green mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">Web Architecture &amp; HTML:</strong>
                    Client-server flow, semantic forms, accessibility.
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-green mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">Modern CSS &amp; Layouts:</strong>
                    Flexbox, Grid, positioning, responsive media queries.
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-green mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">UI Frameworks:</strong> Tailwind
                    CSS, Bootstrap, and custom animations.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <!-- Phase 2: Right on desktop -->
          <div class="mb-12 flex justify-between md:items-center w-full flex-col md:flex-row relative z-10">
            <div class="hidden md:block md:w-5/12"></div>
            <!-- Circle -->
            <div class="flex items-center justify-center bg-gray-900 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-gfg-blue shrink-0 mb-6 md:mb-0 ml-[1rem] md:ml-0 z-20 shadow-[0_0_20px_rgba(47,141,70,0.3)]">
              <h1 class="font-bold text-lg md:text-xl text-gfg-blue">2</h1>
            </div>
            <!-- Content -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-8 md:w-5/12 w-full backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl">
              <h3 class="mb-2 font-bold text-gfg-blue text-2xl">
                JavaScript &amp; TypeScript
              </h3>
              <p class="text-xs text-gray-400 mb-6 font-semibold tracking-wide uppercase">
                Sessions 8–17
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-blue mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">Deep JS Engine:</strong>
                    Execution context, memory model, closures, hoisting.
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-blue mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">Async Patterns:</strong> Event
                    loop, Promises, Async/Await, and Fetch API.
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-blue mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">TypeScript:</strong> Interfaces,
                    generics, type inference, and scalable API typing.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <!-- Phase 3: Left on desktop -->
          <div class="mb-12 flex justify-between md:items-center w-full md:flex-row-reverse flex-col relative z-10">
            <div class="hidden md:block md:w-5/12"></div>
            <!-- Circle -->
            <div class="flex items-center justify-center bg-gray-900 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-gfg-orange shrink-0 mb-6 md:mb-0 ml-[1rem] md:ml-0 z-20 shadow-[0_0_20px_rgba(255,165,0,0.3)]">
              <h1 class="font-bold text-lg md:text-xl text-gfg-orange">3</h1>
            </div>
            <!-- Content -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-8 md:w-5/12 w-full backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl">
              <h3 class="mb-2 font-bold text-gfg-orange text-2xl">
                React Ecosystem
              </h3>
              <p class="text-xs text-gray-400 mb-6 font-semibold tracking-wide uppercase">
                Sessions 18–22
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-orange mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">React Core:</strong> Vite,
                    components, state management (useState, useEffect).
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-orange mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">Advanced Hooks &amp; State:</strong>
                    Redux, Context API, performance tuning (useMemo).
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-orange mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">Scalable UI:</strong> React
                    Router, code splitting, lazy loading, and shell
                    architectures.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <!-- Phase 4: Right on desktop -->
          <div class="mb-12 flex justify-between md:items-center w-full flex-col md:flex-row relative z-10">
            <div class="hidden md:block md:w-5/12"></div>
            <!-- Circle -->
            <div class="flex items-center justify-center bg-gray-900 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-gfg-yellow shrink-0 mb-6 md:mb-0 ml-[1rem] md:ml-0 z-20 shadow-[0_0_20px_rgba(255,255,0,0.3)]">
              <h1 class="font-bold text-lg md:text-xl text-gfg-yellow">4</h1>
            </div>
            <!-- Content -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-8 md:w-5/12 w-full backdrop-blur-md hover:bg-white/10 transition-colors duration-300 shadow-xl">
              <h3 class="mb-2 font-bold text-gfg-yellow text-2xl">
                Backend &amp; Scale
              </h3>
              <p class="text-xs text-gray-400 mb-6 font-semibold tracking-wide uppercase">
                Sessions 23–28
              </p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-yellow mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">Node.js &amp; Express:</strong> MVC
                    patterns, REST API design, Joi/Zod validation.
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-yellow mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">MongoDB:</strong> Complex
                    aggregation pipelines, schemas, relationships, indexing.
                  </p>
                </li>
                <li class="flex items-start">
                  <i class="fa-solid fa-check text-gfg-yellow mt-1 mr-3 text-sm shrink-0"></i>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    <strong class="text-white">System Design &amp; Deploy:</strong>
                    CAP theorem, security, Docker, Vercel/Render deployments.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('gfg-curriculum', GfgCurriculum);
