class GfgInstructor extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-24 bg-gray-50" id="instructor">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="inline-block py-1 px-3 rounded-full bg-gfg-green/10 text-gfg-green font-bold text-sm tracking-wide mb-4">YOUR MENTOR</span>
          <h2 class="text-4xl md:text-5xl font-sans font-extrabold text-gray-900 mb-6 tracking-tight">
            Learn from an Industry Expert
          </h2>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <!-- Image Column -->
          <div class="w-full lg:w-1/3 flex justify-center shrink-0 relative">
            <div class="absolute inset-0 bg-gradient-to-br from-gfg-green to-gfg-blue rounded-3xl transform rotate-3 scale-[1.02] opacity-20 blur-lg"></div>
            <img src="assets/vikas.jpg" alt="Vikas - Software Engineer &amp; Mentor" class="relative z-10 w-full max-w-sm rounded-3xl shadow-xl object-cover aspect-square border-4 border-white" onerror="this.src = 'https://placehold.co/600x600?text=Vikas'">

            <!-- Floating Badges -->
            <div class="absolute -bottom-6 -right-2 md:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <div>
                <p class="font-bold text-gray-900 leading-tight">
                  3x Top Voice
                </p>
                <p class="text-xs text-gray-500">Web Development</p>
              </div>
            </div>

            <div class="absolute -top-6 -left-2 md:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 hover:-translate-y-1 transition-transform duration-300">
              <div class="w-12 h-12 bg-green-50 text-gfg-green rounded-full flex items-center justify-center text-xl">
                <i class="fa-solid fa-users"></i>
              </div>
              <div>
                <p class="font-bold text-gray-900 leading-tight">12,000+</p>
                <p class="text-xs text-gray-500">Students Trained</p>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="w-full lg:w-2/3 space-y-6 text-gray-600 leading-relaxed font-body text-lg">
            <div>
              <h3 class="text-3xl font-bold text-gray-900 font-sans mb-1">
                Vikas Thakur
              </h3>
              <p class="text-xl text-gfg-green font-semibold">
                Software Engineer &amp; Mentor
              </p>
            </div>

            <p>
              <strong class="text-gray-900">Full Stack Engineer:</strong> 4+ years of industry experience specializing in Full Stack Development, building scalable, high-performance web applications using robust backend architectures and modern frontend frameworks.
            </p>

            <p>
              <strong class="text-gray-900">AI &amp; Emerging Tech:</strong> Experience working with emerging AI technologies, conducting sessions on Generative AI, RAG systems, AI tools, and practical AI integration in modern applications.
            </p>

            <p>
              <strong class="text-gray-900">Mentorship &amp; Training:</strong> Trained 12,000+ students through 26+ batches and 430+ seminars, emphasizing hands-on learning to help students build strong technical foundations. Many of his students have secured positions at leading organizations such as Tata 1mg, Salesforce, Wipro, and Celebal Technologies.
            </p>

            <p>
              <strong class="text-gray-900">Industry Leadership:</strong> Serves as a Google Cloud Jury Member and has judged 38+ national and college hackathons, evaluating innovative projects and mentoring aspiring developers across web, cloud, and software engineering domains.
            </p>
          </div>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('gfg-instructor', GfgInstructor);
