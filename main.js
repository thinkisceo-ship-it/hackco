class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .wrapper {
          max-width: 500px;
          margin: 2rem auto;
          padding: 2rem;
          border: 1px solid var(--card-border-color);
          border-radius: 12px;
          background-color: var(--card-background-color);
          box-shadow: 0 10px 30px var(--card-shadow-color);
          text-align: center;
          transition: background-color 0.3s, border-color 0.3s;
        }
        h2 {
          color: var(--text-color);
          font-size: 1.8rem;
          transition: color 0.3s;
        }
        button {
          background-color: var(--button-bg-color);
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 15px var(--button-shadow-color);
        }
        button:hover {
          background-color: var(--button-hover-bg-color);
          box-shadow: 0 6px 20px var(--button-hover-shadow-color);
        }
        .numbers {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 1.5rem;
        }
        .number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: white;
          transition: background-color 0.3s;
        }
      </style>
      <div class="wrapper">
        <h2>Lotto Number Generator</h2>
        <button id="generate">Generate Numbers</button>
        <div class="numbers"></div>
      </div>
    `;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('#generate');
    button.addEventListener('click', () => this.generateNumbers());
  }

  generateNumbers() {
    const numbersContainer = this.shadowRoot.querySelector('.numbers');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNumber);
    }

    Array.from(numbers).sort((a, b) => a - b).forEach(number => {
      const numberDiv = document.createElement('div');
      numberDiv.className = 'number';
      numberDiv.textContent = number;
      numberDiv.style.backgroundColor = this.getColorForNumber(number);
      numbersContainer.appendChild(numberDiv);
    });
  }

  getColorForNumber(number) {
    if (number <= 10) return `var(--num-color-1)`;
    if (number <= 20) return `var(--num-color-2)`;
    if (number <= 30) return `var(--num-color-3)`;
    if (number <= 40) return `var(--num-color-4)`;
    return `var(--num-color-5)`;
  }
}

customElements.define('lotto-generator', LottoGenerator);
