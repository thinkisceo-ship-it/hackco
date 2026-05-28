class FortuneTeller extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Pre-defined fortunes
    this.todaysFortunes = [
      "A beautiful day begins with a beautiful mindset.",
      "Good things are coming your way.",
      "You will have a surprisingly pleasant encounter today.",
      "A small act of kindness will bring you great joy.",
      "Your creativity will shine today. Embrace it.",
      "An unexpected opportunity will arise.",
      "Patience will be your greatest virtue today.",
      "Listen to your intuition; it will guide you well."
    ];
    this.yearsFortunes = [
      "This year will be a journey of self-discovery and growth.",
      "A major personal milestone is within your reach this year.",
      "New friendships and connections will enrich your life.",
      "Financial stability and prosperity are on the horizon.",
      "Embrace change, for it will lead to exciting new beginnings.",
      "Your hard work will pay off in unexpected and rewarding ways.",
      "This is a year to focus on health and well-being.",
      "Travel and adventure will broaden your perspective."
    ];

    this.shadowRoot.innerHTML = `
      <style>
        :host {
            display: block;
        }
        .wrapper {
            max-width: 600px;
            margin: 2rem auto;
            padding: 2rem;
            background-color: var(--card-background-color);
            border: 1px solid var(--card-border-color);
            border-radius: 15px;
            box-shadow: 0 10px 30px var(--card-shadow-color);
            text-align: center;
            transition: all 0.3s ease-in-out;
        }
        h2 {
            color: var(--text-color);
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        .input-group {
            margin-bottom: 1.5rem;
        }
        label {
            color: var(--text-color);
            font-size: 1.1rem;
            margin-right: 10px;
        }
        input[type="date"] {
            padding: 10px;
            border-radius: 8px;
            border: 1px solid var(--card-border-color);
            background-color: var(--background-color);
            color: var(--text-color);
            font-size: 1rem;
        }
        button {
          background-color: var(--button-bg-color);
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 15px var(--button-shadow-color);
        }
        button:hover {
            background-color: var(--button-hover-bg-color);
            box-shadow: 0 6px 20px var(--button-hover-shadow-color);
        }
        .fortune-results {
            margin-top: 2rem;
            text-align: left;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s, transform 0.5s;
        }
        .fortune-results.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .fortune-section {
            padding: 1.5rem;
            margin-top: 1rem;
            border-radius: 10px;
            background-color: var(--background-color);
        }
        h3 {
            margin-top: 0;
            color: var(--text-color);
            border-bottom: 2px solid var(--button-bg-color);
            padding-bottom: 10px;
        }
        p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--text-color);
        }
      </style>
      <div class="wrapper">
        <h2>Your Personal Fortune</h2>
        <div class="input-group">
            <label for="birthdate">Enter Your Birthdate:</label>
            <input type="date" id="birthdate">
        </div>
        <button id="get-fortune">Get Fortune</button>
        <div class="fortune-results">
            <div class="fortune-section">
                <h3>Today's Fortune</h3>
                <p id="todays-fortune"></p>
            </div>
            <div class="fortune-section">
                <h3>This Year's Fortune</h3>
                <p id="years-fortune"></p>
            </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('#get-fortune');
    const birthdateInput = this.shadowRoot.querySelector('#birthdate');

    // Set max date to today
    birthdateInput.max = new Date().toISOString().split('T')[0];

    button.addEventListener('click', () => {
      if (birthdateInput.value) {
        this.generateFortune(birthdateInput.value);
      } else {
        alert('Please enter your birthdate.');
      }
    });
  }

  generateFortune(birthdate) {
    const birthDateObj = new Date(birthdate);
    const today = new Date();

    // Simple seeding mechanism
    const todaySeed = (birthDateObj.getTime() + today.setHours(0,0,0,0)) % this.todaysFortunes.length;
    const yearSeed = (birthDateObj.getFullYear() + today.getFullYear()) % this.yearsFortunes.length;

    const todaysFortuneEl = this.shadowRoot.querySelector('#todays-fortune');
    const yearsFortuneEl = this.shadowRoot.querySelector('#years-fortune');
    const resultsContainer = this.shadowRoot.querySelector('.fortune-results');

    todaysFortuneEl.textContent = this.todaysFortunes[todaySeed];
    yearsFortuneEl.textContent = this.yearsFortunes[yearSeed];

    resultsContainer.classList.add('visible');
  }
}

customElements.define('fortune-teller', FortuneTeller);

class ContactForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .wrapper {
                    max-width: 600px;
                    margin: 2rem auto;
                    padding: 2rem;
                    background-color: var(--card-background-color);
                    border: 1px solid var(--card-border-color);
                    border-radius: 15px;
                    box-shadow: 0 10px 30px var(--card-shadow-color);
                    transition: all 0.3s ease-in-out;
                }
                h2 {
                    color: var(--text-color);
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                label {
                    display: block;
                    margin-bottom: 5px;
                    color: var(--text-color);
                }
                input, textarea {
                    width: 100%;
                    padding: 10px;
                    border-radius: 8px;
                    border: 1px solid var(--card-border-color);
                    background-color: var(--background-color);
                    color: var(--text-color);
                    font-size: 1rem;
                    box-sizing: border-box;
                }
                textarea {
                    resize: vertical;
                    min-height: 100px;
                }
                button {
                  background-color: var(--button-bg-color);
                  color: white;
                  border: none;
                  padding: 12px 25px;
                  border-radius: 8px;
                  font-size: 1.1rem;
                  cursor: pointer;
                  transition: background-color 0.3s, box-shadow 0.3s;
                  box-shadow: 0 4px 15px var(--button-shadow-color);
                  width: 100%;
                }
                button:hover {
                    background-color: var(--button-hover-bg-color);
                    box-shadow: 0 6px 20px var(--button-hover-shadow-color);
                }
            </style>
            <div class="wrapper">
                <h2>Partnership Inquiry</h2>
                <form action="https://formspree.io/f/xqejwjyw" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        `;
    }
}

customElements.define('contact-form', ContactForm);
