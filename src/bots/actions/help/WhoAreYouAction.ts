import BaseAction from "../BaseAction";
import * as R from "../../../constants/messages";

export default class WhoAreYouAction extends BaseAction {
  regexp = /^(Кто ты|Ты кто|Как тебя зовут)/i;

  protected async action() {
    this.sendTextMessage(R.ImBot(this.context().botName));
  }
}
