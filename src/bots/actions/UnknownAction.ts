import BaseAction from "./BaseAction";
import * as R from "../../constants/messages";

export default class UnknownAction extends BaseAction {
  regexp = null;

  protected async action() {
    this.sendTextMessage(R.UNKNOWN);
  }
}
