class GfgEnroll extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-20 bg-white" id="enroll">
      <div class="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <div class="lg:w-3/5">
          <h2 class="text-3xl font-sans font-bold text-gfg-black mb-8">
            Frequently Asked Questions
          </h2>
          <div class="space-y-6">
            <div class="border-b border-gfg-gray pb-4">
              <h4 class="font-bold text-gfg-black mb-2 flex items-center">
                <i class="fa-solid fa-circle-question text-gfg-green mr-2 text-sm"></i>
                Do I need prior experience?
              </h4>
              <p class="text-sm text-gray-600 font-body pl-6">
                No coding experience is required. We start completely from
                scratch — web architecture, HTML, and how browsers work — before
                writing a single line of JavaScript.
              </p>
            </div>
            <div class="border-b border-gfg-gray pb-4">
              <h4 class="font-bold text-gfg-black mb-2 flex items-center">
                <i class="fa-solid fa-circle-question text-gfg-green mr-2 text-sm"></i>
                Is TypeScript covered?
              </h4>
              <p class="text-sm text-gray-600 font-body pl-6">
                Yes. Sessions 16 and 17 are dedicated to TypeScript — from basic
                types and interfaces to generics, API typing, and full frontend
                integration with React.
              </p>
            </div>
            <div class="border-b border-gfg-gray pb-4">
              <h4 class="font-bold text-gfg-black mb-2 flex items-center">
                <i class="fa-solid fa-circle-question text-gfg-green mr-2 text-sm"></i>
                Will I learn system design?
              </h4>
              <p class="text-sm text-gray-600 font-body pl-6">
                Absolutely. Sessions 27–28 cover the Critical Rendering Path,
                CAP theorem, horizontal/vertical scaling, load balancing,
                security (XSS, CORS, CSRF), and deployment.
              </p>
            </div>
            <div class="pb-4">
              <h4 class="font-bold text-gfg-black mb-2 flex items-center">
                <i class="fa-solid fa-circle-question text-gfg-green mr-2 text-sm"></i>
                What is the capstone project?
              </h4>
              <p class="text-sm text-gray-600 font-body pl-6">
                You will design, build, test, and deploy a full-stack
                application of your choice — a Food Delivery app, LMS, or Auth
                System — from database schema to live deployment on Vercel or
                Render.
              </p>
            </div>
          </div>
        </div>

        <div class="lg:w-2/5">
          <div class="bg-gfg-black text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gfg-green rounded-bl-full opacity-20 -z-0"></div>
            <h3 class="text-2xl font-sans font-bold mb-2 relative z-10">
              Ready to master MERN?
            </h3>
            <p class="text-gray-400 font-body mb-8 text-sm relative z-10">
              Join the program and accelerate your career in Full Stack
              Development.
            </p>
            <div class="space-y-4 text-sm font-body text-gray-300 relative z-10 pt-4 border-t border-white/20">
              <div class="flex items-start">
                <i class="fa-solid fa-phone mt-1 w-6 text-gfg-lime"></i>
                <div>
                  <p class="font-bold text-white">Call Us</p>
                  <p>08069289001</p>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fa-solid fa-envelope mt-1 w-6 text-gfg-lime"></i>
                <div>
                  <p class="font-bold text-white">Email Us</p>
                  <p>courses@geeksforgeeks.org</p>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fa-solid fa-location-dot mt-1 w-6 text-gfg-lime"></i>
                <div>
                  <p class="font-bold text-white">Geeks Learning Together!</p>
                  <p class="text-xs">
                    A-143, 7th Floor, Sovereign Corporate Tower, Sector-136,
                    Noida, Uttar Pradesh - 201305
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('gfg-enroll', GfgEnroll);
