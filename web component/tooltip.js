class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = "some dummy tooltip text";
    this.attachShadow({ mode: "open" }); //shadow DOM트리에 컴포넌트 외부로부터 액세스 기능 여부
    this.shadowRoot.innerHTML = ` 
    <style>
    div{
      background-color: black;
      color: white;
      position: absolute;
      z-index: 10;
    }
    </style>
    <slot>Some Some default</slot>
    <span> (?)</span>`;
  }
  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text"); //값을 추출할려는 속성
    }
    const tooltipIcon = this.shadowRoot.querySelector("span");
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = "relative";
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }
  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

customElements.define("uc-tooltip", Tooltip);
