class Counter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.count = 0;

    const container = document.createElement('div');
    const plusButton = document.createElement('button');
    const minusButton = document.createElement('button');
    const display = document.createElement('div');

    display.textContent = this.count;
    plusButton.textContent = '+';
    minusButton.textContent = '-';

    plusButton.addEventListener('click', () => {
      this.updateCount(1);
    });

    minusButton.addEventListener('click', () => {
      this.updateCount(-1);
    })

    container.appendChild(plusButton);
    container.appendChild(display);
    container.appendChild(minusButton);

    this.shadowRoot.append(container);

    this.display = display;
  }

  updateCount(increment) {
    this.count += increment;
    this.display.textContent = this.count;
  }
}

customElements.define('counter-component', Counter);
//observedAttribute