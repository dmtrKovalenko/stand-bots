import BaseAction from "../BaseAction";
import * as R from "../../../constants/messages";

export default class HelpAction extends BaseAction {
  regexp = /^(Помощь|\/start|\/help)/i;

  protected async action() {
    this.sendTextMessage(R.HELP(this.context().botName, this.userProfile().name));
  }
}
