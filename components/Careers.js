class GfgCareers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-20 bg-gfg-darkgreen text-white" id="careers">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-sans font-bold mb-4">
          From Classes to Careers
        </h2>
        <p class="text-gray-400 font-body mb-12 max-w-2xl mx-auto">
          Mastering the MERN stack positions you for the most in-demand roles in
          modern software development.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14">
          <div class="bg-white/10 rounded-xl py-4 px-3 font-sans font-bold text-sm border border-white/10">
            <i class="fa-solid fa-layer-group text-gfg-lime mb-2 text-xl block"></i>
            Full Stack Developer
          </div>
          <div class="bg-white/10 rounded-xl py-4 px-3 font-sans font-bold text-sm border border-white/10">
            <i class="fa-brands fa-react text-[#61DAFB] mb-2 text-xl block"></i>
            Frontend Engineer
          </div>
          <div class="bg-white/10 rounded-xl py-4 px-3 font-sans font-bold text-sm border border-white/10">
            <i class="fa-brands fa-node-js text-[#68A063] mb-2 text-xl block"></i>
            Backend Developer
          </div>
          <div class="bg-white/10 rounded-xl py-4 px-3 font-sans font-bold text-sm border border-white/10">
            <i class="fa-solid fa-code text-gfg-periwinkle mb-2 text-xl block"></i>
            Software Engineer
          </div>
        </div>

        <h3 class="text-lg font-sans font-bold text-gray-300 mb-8 uppercase tracking-wider">
          Where Our Alumni Work
        </h3>
        <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-blue-600">
            <i class="fa-brands fa-salesforce mr-1 text-lg"></i> Salesforce
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-red-500">
            <i class="fa-brands Tech Mahindra mr-1 text-lg"></i> Tech Mahindra
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-orange-500">
            <i class="fa-brands fa-capgemini mr-1 text-lg"></i> Capgemini
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-purple-600">
            Accenture
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-blue-500">
            Infosys
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-blue-700">
            Wipro
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-blue-800">
            TCS
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-blue-400">
            Nagarro
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-red-600">
            HashedIn by Deloitte
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-blue-400">
            Celebal Technologies
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-yellow-500">
            Cloud Maven
          </div>
          <div class="bg-white text-black font-bold px-4 py-2 rounded flex items-center shadow-sm text-sm text-blue-400">
            Tata 1mg
          </div>
        </div>
        <p class="text-gfg-lime text-sm mt-10 font-bold">
          <i class="fa-solid fa-briefcase mr-2"></i> Includes Resume/LinkedIn
          Optimization and Mock Interviews
        </p>
      </div>
    </section>`;
  }
}
customElements.define('gfg-careers', GfgCareers);
