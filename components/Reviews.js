class GfgReviews extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="py-20 bg-gfg-lightgreen" id="reviews">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-sans font-bold text-center text-gfg-black mb-16">
          What Our Students Say
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gfg-gray relative">
            <i class="fa-solid fa-quote-left text-4xl text-gfg-lightgreen2 absolute top-6 left-6"></i>
            <p class="text-gray-700 font-body relative z-10 pl-8 italic mb-6">
              "The content is highly relevant and closely aligned with current
              industry standards, demonstrating a strong understanding of modern
              practices, expectations, and professional requirements. It
              reflects practical knowledge and up-to-date methodologies that are
              widely accepted across the industry. The approach, concepts, and
              execution showcase a commitment to quality, efficiency, and
              innovation, making the work both credible and applicable in
              real-world scenarios. Its alignment with established standards
              enhances reliability, improves overall effectiveness, and ensures
              compatibility with current market demands. Overall, the material
              effectively bridges theoretical understanding with practical
              industry application, making it valuable, professional, and
              suitable for contemporary business and technical environments."
            </p>
            <div class="flex items-center pl-8">
              <div class="w-10 h-10 bg-gfg-green text-white rounded-full flex items-center justify-center font-bold mr-3">
                NR
              </div>
              <div>
                <p class="font-bold text-gfg-black text-sm">Nikhil Roy</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gfg-gray relative">
            <i class="fa-solid fa-quote-left text-4xl text-gfg-lightgreen2 absolute top-6 left-6"></i>
            <p class="text-gray-700 font-body relative z-10 pl-8 italic mb-6">
              "The course was an amazing learning experience. Complex topics
              were broken down into simple explanations, making it easy to grasp
              even difficult concepts. This strong foundation played a key role
              in helping me secure my placement at Cloud Maven Inc."
            </p>
            <div class="flex items-center pl-8">
              <div class="w-10 h-10 bg-gfg-blue text-white rounded-full flex items-center justify-center font-bold mr-3">
                MC
              </div>
              <div>
                <p class="font-bold text-gfg-black text-sm">Mridu Chauhan</p>
                <p class="text-xs text-gray-500">Cloud Maven Inc.</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gfg-gray relative">
            <i class="fa-solid fa-quote-left text-4xl text-gfg-lightgreen2 absolute top-6 left-6"></i>
            <p class="text-gray-700 font-body relative z-10 pl-8 italic mb-6">
              "It was a really great learning experience. Everything was
              explained in a clear and simple way, which made understanding much
              easier. Support was provided at every step whenever needed, making
              the process smooth and enjoyable. Overall, it was very helpful and
              engaging, and I feel more confident after this experience."
            </p>
            <div class="flex items-center pl-8">
              <div class="w-10 h-10 bg-gfg-orange text-white rounded-full flex items-center justify-center font-bold mr-3">
                MB
              </div>
              <div>
                <p class="font-bold text-gfg-black text-sm">Mohit Bhatia</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gfg-gray relative flex flex-col justify-center">
            <i class="fa-solid fa-quote-left text-4xl text-gfg-lightgreen2 absolute top-6 left-6"></i>
            <p class="text-gray-700 font-body relative z-10 pl-8 italic mb-6 text-lg text-gfg-green">
              "The system design sessions at the end tied everything together. I
              walked into interviews confident about CAP theorem, scaling, and
              security. Highly recommended!"
            </p>
            <div class="flex items-center pl-8">
              <div class="w-10 h-10 bg-gfg-navy text-white rounded-full flex items-center justify-center font-bold mr-3">
                SN
              </div>
              <div>
                <p class="font-bold text-gfg-black text-sm">Sneha Nair</p>
                <p class="text-xs text-gray-500">
                  Node.js Developer, Hyderabad
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-2xl text-gfg-green text-center mt-10 font-bold">
          You can be next in our Success Story!
        </p>
      </div>
    </section>`;
  }
}
customElements.define('gfg-reviews', GfgReviews);
