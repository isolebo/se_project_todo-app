import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    const inputValues = {};
    this._inputList.forEach((input) => {
      //add a key value pair
      //the khey is input.name and input.value
      //bracket notioninput.name = "input.value";
      inputValues[input.name] = input.value;
    });
    return inputValues;
    console.log(this._inputList);
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      //pass result of getInputValue to submission handler
      this._handleFormSubmit(evt);
    });
  }
}
export default PopupWithForm;
