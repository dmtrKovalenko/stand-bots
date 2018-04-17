import BaseAction from "../BaseAction";
import AuthManager from "../../../managers/AuthManager";
import * as R from "../../../constants/messages";

export default abstract class BaseTeamupAction extends BaseAction {
  protected async checkTeamupKey() {
    const key = await AuthManager.getCalendarKey(this.userProfile());
    if (key == null) {
      this.sendTextMessage(R.NEED_SET_KEY);
      return false;
    }

    return true;
  }
}
