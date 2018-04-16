import BaseAction from "./BaseAction";
import * as R from "../../constants/messages";
import { ProcessMessageSession } from "../events/ProcessMessage";

export default class UnknownAction extends BaseAction {
  constructor() {
    super(null);
  }

  protected async action(session: ProcessMessageSession) {
    session.sendTextMessage(R.UNKNOWN);
    return true;
  }
}
