class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
      console.log("esacpe key pressed");
    }
  }
  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }
  close() {
    this._popupElement.classList.remove("popup_visible");
    console.log("close emethod");
  }
  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === "popup__close" || evt.target === "popup") {
        this.close();
      }
    });
  }
}
export default Popup;
