class GfgNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gfg-gray py-4">
      <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div class="flex items-center gap-2 text-2xl font-sans font-bold text-gfg-green tracking-tight">
          <i class="fa-solid fa-code border-2 border-gfg-green rounded px-1"></i>
          GeeksforGeeks
        </div>
        <a href="#enroll" class="bg-gfg-green hover:bg-gfg-ocean text-white font-sans font-bold py-2 px-6 rounded-full transition duration-300 print:hidden">
          Enroll Now
        </a>
      </div>
    </nav>`;
  }
}
customElements.define('gfg-navbar', GfgNavbar);
