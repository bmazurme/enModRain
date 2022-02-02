export class ProjectInfo {
  constructor(formSelector, data) {
    this._form = document.querySelector(formSelector);
    this._projectName = this._form.querySelector(data.name);
    this._projectAddress = this._form.querySelector(data.address);
  }
  
  getProjectInfo() {
    const name = this._projectName.textContent;
    const address = this._projectAddress.textContent;
    return {name, address};
  }
  
  setProjectInfo(obj) {
    this._projectName.textContent = obj.name;
    this._projectAddress.textContent = obj.address;
  }
}