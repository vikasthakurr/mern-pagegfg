class GfgFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="bg-gfg-darkgreen py-6 border-t border-white/10 text-center">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-2 text-xl font-sans font-bold text-gfg-green">
          <i class="fa-solid fa-code border-2 border-gfg-green rounded px-1"></i>
          GeeksforGeeks
        </div>
        <p class="text-white/50 text-sm font-body">
          © 2026 GeeksforGeeks. All rights reserved.
        </p>
        <div class="flex gap-4 text-white/50">
          <a href="#" class="hover:text-white transition"><i class="fa-brands fa-linkedin text-xl"></i></a>
          <a href="#" class="hover:text-white transition"><i class="fa-brands fa-youtube text-xl"></i></a>
          <a href="#" class="hover:text-white transition"><i class="fa-brands fa-facebook text-xl"></i></a>
        </div>
      </div>
    </footer>`;
  }
}
customElements.define('gfg-footer', GfgFooter);
