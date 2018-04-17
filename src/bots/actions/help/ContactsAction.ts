import BaseAction from "../BaseAction";
import * as R from "../../../constants/messages";

export default class ContactsAction extends BaseAction {
  regexp = /^Контакты/i;

  protected async action() {
    this.sendTextMessage(R.CONTACTS);
  }
}
