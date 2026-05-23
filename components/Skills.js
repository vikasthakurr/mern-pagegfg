class GfgSkills extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-20 bg-gfg-lightgreen" id="skills">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 class="text-4xl font-sans font-bold text-gfg-black mb-10">
              Skills You Will Learn
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-sitemap text-gfg-green text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">Web Architecture &amp; Request Lifecycle</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-brands fa-css3-alt text-gfg-blue text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">Responsive Layout Design</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-gears text-gfg-navy text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">JavaScript Engine &amp; Async Patterns</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-code-branch text-gfg-green text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">TypeScript &amp; Type Safety</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-brands fa-react text-gfg-blue text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">React State &amp; Performance</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-plug text-gfg-orange text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">REST API Design, Contracts and Validation</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-database text-gfg-green text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">MongoDB Aggregation &amp; Indexing</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-shield-halved text-gfg-navy text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">Security (XSS, CORS, CSRF)</span>
              </div>

              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-rocket text-gfg-orange text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">Deployment &amp; DevOps Basics</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-earth-americas text-gfg-green text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">ARIA, Web accessibility &amp; Best Practices</span>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-4xl font-sans font-bold text-gfg-black mb-4">
              Tech Stack You Will Learn
            </h2>
            <p class="text-gray-600 font-body mb-8">
              Focusing strictly on tools that have proven their practical
              utility beyond the 6-month hype cycle.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-brands fa-react text-[#61DAFB] text-3xl"></i> React
              </div>
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-brands fa-node-js text-[#68A063] text-3xl"></i>
                Node.js
              </div>
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-solid fa-leaf text-[#4DB33D] text-3xl"></i> MongoDB
              </div>
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-solid fa-bolt text-[#444] text-3xl"></i> Express.js
              </div>
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-solid fa-t text-[#F7DF1E] text-3xl"></i>
                TypeScript
              </div>
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-solid fa-wind text-[#38BDF8] text-3xl"></i>
                Tailwind CSS
              </div>
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-solid fa-diagram-project text-gfg-periwinkle text-3xl"></i>
                Redux
              </div>
              <div class="bg-white p-4 rounded-xl shadow-sm border border-gfg-gray flex flex-col items-center justify-center font-bold text-gfg-black text-center gap-2 text-sm">
                <i class="fa-brands fa-docker text-gfg-blue text-3xl"></i>
                Docker
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm border border-gfg-gray flex items-center gap-3">
                <i class="fa-solid fa-gauge-high text-gfg-pink text-xl w-6 text-center shrink-0"></i>
                <span class="font-body text-sm font-semibold text-gfg-black leading-tight">Performance Testing &amp; Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('gfg-skills', GfgSkills);
