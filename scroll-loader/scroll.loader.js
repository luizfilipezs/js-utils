class ScrollLoader {

  /**
   * You can optionally provide an element to serve as status bar or add
   * an element with `"scroll-loader"` class in HTML
   * @param {HTMLElement} [element] Scroll status bar
   */
  constructor(element) {
    this.element = element || document.querySelector('.scroll-loader');
    window.addEventListener('scroll', () => this.updateElementWidth());
  }

  getPercentage() {
    // Scrolled value
    const scrollPos = window.scrollY;
  
    // Window height
    const windowHeight = window.innerHeight;
  
    // Total scroll value (removing window height)
    const scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ) - windowHeight;
    
    // Logic: total = 100 | current = x
    return (scrollPos * 100) / scrollHeight;
  }

  updateElementWidth() {
    this.element.style.width = this.getPercentage() + '%';
  }

}