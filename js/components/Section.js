export class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _clear() {
    this._container.innerHTML = '';
  }

  render() {
    this._clear();
    this._items.forEach((item) => {
    this._renderer(item);
    });
  }
  
  addItem(item) {
    this._container.prepend(item);
  }
}