import BaseAction from "../BaseAction";

export default class HelloAction extends BaseAction {
  regexp = /^Привет/i;

  protected async action() {
    this.sendTextMessage(`Привет, ${this.userProfile().name} 😉`);
  }
}
