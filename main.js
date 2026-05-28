class SimpleGreeting extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const text = document.createElement('p');
    text.textContent = `Hello, ${this.getAttribute('name') || 'World'}!`;

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        padding: 20px 30px;
        border: 2px solid var(--primary-color, #3b82f6);
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .wrapper:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
      }
      p {
        font-size: 1.5rem;
        color: var(--text-color, #333);
        margin: 0;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(text);
  }
}

customElements.define('simple-greeting', SimpleGreeting);
