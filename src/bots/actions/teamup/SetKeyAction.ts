import StandManager from "../../../managers/StandManager";
import BaseTeamupAction from "./BaseTeamupAction";

export default class SetKeyAction extends BaseTeamupAction {
  regexp = /^Мой ключ (.+)$/i;

  protected action() {
    const manager = new StandManager(this.userProfile());
    const key = this.arg(0).trim();

    return this.longRunningOperation(async () => {
      this.sendTextMessage(await manager.authorizeKey(key));
    });
  }
}
