class GfgProjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-20 bg-white" id="projects">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-sans font-bold text-gfg-black mb-4">
            Projects Throughout the Course
          </h2>
          <p class="text-lg text-gray-600 font-body max-w-2xl mx-auto">
            Stop doing toy problems. Build the applications companies are hiring
            for today.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gfg-lightgreen rounded-xl p-6 border border-gfg-lightgreen2 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-gfg-green text-white rounded-lg flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-plane-departure"></i>
            </div>
            <h3 class="text-lg font-sans font-bold text-gfg-black mb-2">
              Travel Website UI
            </h3>
            <p class="text-sm text-gray-600 font-body">
              Design a fully responsive, multi-section travel landing page using
              Bootstrap, Tailwind, and custom CSS animations.
            </p>
          </div>
          <div class="bg-gfg-lightgreen rounded-xl p-6 border border-gfg-lightgreen2 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-gfg-blue text-white rounded-lg flex items-center justify-center text-xl mb-4">
              <i class="fa-brands fa-js"></i>
            </div>
            <h3 class="text-lg font-sans font-bold text-gfg-black mb-2">
              Async Data Dashboard
            </h3>
            <p class="text-sm text-gray-600 font-body">
              Build a real-time data dashboard using Fetch API, Promise
              chaining, debounced search, and DOM event delegation.
            </p>
          </div>
          <div class="bg-gfg-lightgreen rounded-xl p-6 border border-gfg-lightgreen2 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-gfg-periwinkle text-white rounded-lg flex items-center justify-center text-xl mb-4">
              <i class="fa-brands fa-react"></i>
            </div>
            <h3 class="text-lg font-sans font-bold text-gfg-black mb-2">
              E-Commerce React App
            </h3>
            <p class="text-sm text-gray-600 font-body">
              Build a fully typed React e-commerce frontend with Redux cart
              management, React Router navigation, and lazy loading.
            </p>
          </div>
          <div class="bg-gfg-lightgreen rounded-xl p-6 border border-gfg-lightgreen2 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-gfg-orange text-white rounded-lg flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-server"></i>
            </div>
            <h3 class="text-lg font-sans font-bold text-gfg-black mb-2">
              RESTful API with Auth
            </h3>
            <p class="text-sm text-gray-600 font-body">
              Build a complete Express API with JWT authentication, Joi
              validation, pagination, file uploads, and email integration.
            </p>
          </div>
          <div class="bg-gfg-lightgreen rounded-xl p-6 border border-gfg-lightgreen2 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-gfg-navy text-white rounded-lg flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-leaf"></i>
            </div>
            <h3 class="text-lg font-sans font-bold text-gfg-black mb-2">
              MongoDB Analytics Engine
            </h3>
            <p class="text-sm text-gray-600 font-body">
              Design a MongoDB pipeline featuring complex aggregation queries,
              schema relationships, indexing, and performance tuning.
            </p>
          </div>
          <div class="bg-gfg-darkgreen rounded-xl p-6 border border-gfg-green hover:shadow-lg transition">
            <div class="w-12 h-12 bg-gfg-lime text-gfg-black rounded-lg flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-layer-group"></i>
            </div>
            <h3 class="text-lg font-sans font-bold text-white mb-2">
              Capstone: Full-Stack App
            </h3>
            <p class="text-sm text-gray-300 font-body">
              Build and deploy a production-grade app — Food Delivery, LMS, or
              Full Auth System — tested with Jest and live on the web.
            </p>
          </div>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('gfg-projects', GfgProjects);
