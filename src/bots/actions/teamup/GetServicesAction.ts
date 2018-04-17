import StandManager from "../../../managers/StandManager";
import BaseTeamupAction from "./BaseTeamupAction";

export default class GetServicesAction extends BaseTeamupAction {
  regexp = /^Кто (?:записан|стоит|служит) (.+)$/i;

  protected action() {
    const manager = new StandManager(this.userProfile());
    const when = this.arg(0).trim();

    return this.longRunningOperation(async () => {
      if (!await this.checkTeamupKey())
        return;

      this.sendTextMessage(await manager.getServices(when));
    });
  }
}
