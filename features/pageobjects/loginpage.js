class Loginpage {
  // get method used to resue

  get title() {
    return browser.getTitle();
  }

  get inputEmail() {
    return $("");
  }

  get inputPassword() {
    return $("");
  }
  get btnSubmit() {}

  //   async Login() {
  //     await this.inputEmail.setValue(email);
  //     await this.inputPassword.setValue(password);
  //     await this.btnSubmit.click();
  //   }

  // for getter method just call the name
  // for method you can use ()
}

module.exports = new Loginpage();
