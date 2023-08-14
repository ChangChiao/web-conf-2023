class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const h1 = document.createElement("h1");
    h1.textContent = "Hello World";
    shadow.appendChild(h1);
    const style = document.createElement("style");
    style.textContent = `h1 {color: red}`;
    shadow.appendChild(style);
  }

  // mount
  connectedCallback() {
    console.log("connected");
  }

  //unmount
  disconnectCallback() {
    console.log("disconnected");
  }
}

customElements.define("my-component", MyComponent);
