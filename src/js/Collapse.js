export default class Collpase {
  constructor(elem) {
    this.elem = elem;
    this.flag = false;
  }

  paintWidget() {
    const container = document.createElement(this.elem);
    container.classList.add('container');

    container.innerHTML = `
      <div>
      <button class="btn">
        <span class="btn-text">Collapse</span>
      </button>
      </div>
      <div class="text-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit culpa dicta, non eaque atque nobis mollitia, libero, ad eos molestias quae eveniet id minima nostrum. Molestias distinctio nemo eius!
        Obcaecati facilis delectus ratione libero vero possimus dicta facere et eligendi consectetur dolor vitae excepturi deleniti odio, quas ipsam, similique velit molestias dolores eaque nesciunt id, unde accusantium non. Doloribus.
      </div>
    `;
    document.body.appendChild(container);
  }

  toggleText() {
    const textBox = document.querySelector('.text-box');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
      if (this.flag === false) {
        textBox.classList.add('show');
        btn.classList.add('clicked');
        this.flag = true;
      } else {
        textBox.classList.remove('show');
        btn.classList.remove('clicked');
        this.flag = false;
      }
    });
  }
}
