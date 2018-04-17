import StandManager from "../../../managers/StandManager";
import BaseTeamupAction from "./BaseTeamupAction";

export default class AddServiceAction extends BaseTeamupAction {
  regexp = /^Запиши меня(?: на)? (.{1,20}) с (\d{1,2}(?::\d{2})?) до (\d{1,2}(?::\d{2})?)/i;

  protected action() {
    const manager = new StandManager(this.context().userProfile);

    const date = this.arg(0).trim();
    const startTime = this.arg(1).trim();
    const endTime = this.arg(2).trim();

    return this.longRunningOperation(async () => {
      if (await this.checkTeamupKey())
        return;

      this.sendTextMessage(await manager.addService(date, startTime, endTime));
    });
  }
}
