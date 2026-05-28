class FortuneTeller extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.todaysFortunes = [
      "아름다운 하루는 아름다운 마음가짐에서 시작됩니다.",
      "좋은 일들이 당신을 찾아오고 있습니다.",
      "오늘, 예상치 못한 즐거운 만남이 있을 것입니다.",
      "작은 친절이 당신에게 큰 기쁨을 가져다 줄 것입니다.",
      "당신의 창의력이 빛나는 날입니다. 마음껏 펼쳐보세요.",
      "뜻밖의 기회가 당신을 찾아올 것입니다.",
      "오늘은 인내가 최고의 미덕이 될 것입니다.",
      "당신의 직감을 믿으세요. 좋은 길로 인도할 것입니다."
    ];
    this.yearsFortunes = [
      "올해는 자기 발견과 성장의 여정이 될 것입니다.",
      "중요한 개인적 목표를 달성할 수 있는 한 해입니다.",
      "새로운 우정과 인연이 당신의 삶을 풍요롭게 할 것입니다.",
      "재정적 안정과 풍요가 당신을 기다리고 있습니다.",
      "변화를 두려워하지 마세요. 흥미로운 시작으로 이어질 것입니다.",
      "당신의 노력이 예상치 못한 큰 보상으로 돌아올 것입니다.",
      "건강과 웰빙에 집중하기 좋은 한 해입니다.",
      "여행과 모험이 당신의 시야를 넓혀줄 것입니다."
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
        <h2>당신의 운세</h2>
        <div class="input-group">
            <label for="birthdate">생년월일을 입력하세요:</label>
            <input type="date" id="birthdate">
        </div>
        <button id="get-fortune">운세 보기</button>
        <div class="fortune-results">
            <div class="fortune-section">
                <h3>오늘의 운세</h3>
                <p id="todays-fortune"></p>
            </div>
            <div class="fortune-section">
                <h3>올해의 운세</h3>
                <p id="years-fortune"></p>
            </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('#get-fortune');
    const birthdateInput = this.shadowRoot.querySelector('#birthdate');

    birthdateInput.max = new Date().toISOString().split('T')[0];

    button.addEventListener('click', () => {
      if (birthdateInput.value) {
        this.generateFortune(birthdateInput.value);
      } else {
        alert('생년월일을 입력해주세요.');
      }
    });
  }

  generateFortune(birthdate) {
    const birthDateObj = new Date(birthdate);
    const today = new Date();

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
                <h2>제휴 문의</h2>
                <form action="https://formspree.io/f/xqejwjyw" method="POST">
                    <div class="form-group">
                        <label for="name">이름</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">이메일</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">메시지</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">메시지 보내기</button>
                </form>
            </div>
        `;
    }
}

customElements.define('contact-form', ContactForm);
