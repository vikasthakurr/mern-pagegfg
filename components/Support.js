class GfgSupport extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-20 bg-gfg-lightgreen" id="support">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-sans font-bold text-gfg-black mb-4">
            Unmatched Support System
          </h2>
          <p class="text-lg text-gray-600 font-body">
            We ensure you never get stuck. Our ecosystem is designed to support
            you from day one to deployment.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 border border-gfg-gray shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-gfg-lightgreen2 rounded-xl flex items-center justify-center shrink-0 text-gfg-green text-xl">
              <i class="fa-solid fa-video"></i>
            </div>
            <div>
              <h3 class="font-sans font-bold text-gfg-black mb-1">
                Recorded Video Content
              </h3>
              <p class="text-sm text-gray-600 font-body">
                Get access to premium session recordings by industry-active
                engineers, always available on demand.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gfg-gray shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-gfg-lightgreen2 rounded-xl flex items-center justify-center shrink-0 text-gfg-green text-xl">
              <i class="fa-solid fa-robot"></i>
            </div>
            <div>
              <h3 class="font-sans font-bold text-gfg-black mb-1">
                24×7 AI Doubt Support
              </h3>
              <p class="text-sm text-gray-600 font-body">
                Instant help at 2 AM from our custom-trained AI teaching
                assistant — never wait till the next class.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gfg-gray shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-gfg-lightgreen2 rounded-xl flex items-center justify-center shrink-0 text-gfg-green text-xl">
              <i class="fa-solid fa-users"></i>
            </div>
            <div>
              <h3 class="font-sans font-bold text-gfg-black mb-1">
                Limited Batch Size &amp; Weekly Q&amp;A
              </h3>
              <p class="text-sm text-gray-600 font-body">
                Online doubt sessions every Tuesday &amp; Thursday in intimate
                cohort settings for focused learning.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gfg-gray shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-gfg-lightgreen2 rounded-xl flex items-center justify-center shrink-0 text-gfg-green text-xl">
              <i class="fa-solid fa-user-tie"></i>
            </div>
            <div>
              <h3 class="font-sans font-bold text-gfg-black mb-1">
                1:1 Mentorship Sessions
              </h3>
              <p class="text-sm text-gray-600 font-body">
                Schedule dedicated one-on-one calls with mentors for
                personalized code reviews and career guidance.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gfg-gray shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-gfg-lightgreen2 rounded-xl flex items-center justify-center shrink-0 text-gfg-green text-xl">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div>
              <h3 class="font-sans font-bold text-gfg-black mb-1">
                Mastering MERN Interviews
              </h3>
              <p class="text-sm text-gray-600 font-body">
                Dedicated mock interview sessions focused on real full-stack
                interview patterns and system design questions.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gfg-gray shadow-sm flex items-start gap-4">
            <div class="w-12 h-12 bg-gfg-lightgreen2 rounded-xl flex items-center justify-center shrink-0 text-gfg-green text-xl">
              <i class="fa-solid fa-certificate"></i>
            </div>
            <div>
              <h3 class="font-sans font-bold text-gfg-black mb-1">
                Industry-Recognised Certificate
              </h3>
              <p class="text-sm text-gray-600 font-body">
                Earn a GeeksforGeeks certificate of completion, recognised by
                top-tier tech companies across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
}
customElements.define('gfg-support', GfgSupport);
