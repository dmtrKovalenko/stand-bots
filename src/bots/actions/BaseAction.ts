import { ProcessMessageSession } from "../events/ProcessMessage";
import * as R from "../../constants/messages";
import delay from 'delay';

export default abstract class BaseAction {
  protected abstract regexp: RegExp | null;
  private _session: ProcessMessageSession | null;
  private _args: string[] | null;
  private handled = true;
  private used: boolean;

  async testAndExecute(session: ProcessMessageSession): Promise<boolean> {
    const message = session.context.message;

    if (this.regexp == null)
      throw new Error("Regexp cannot be null");

    const regexpResults = this.regexp.exec(message.text);
    if (regexpResults == null)
      return false;

    regexpResults.shift();
    return this.execute(session, regexpResults);
  }

  async execute(session: ProcessMessageSession, args: string[] | null): Promise<boolean> {
    if (this.used)
      throw new Error("Action cannot be used twice");
    this.used = true;

    this._session = session;
    this._args = args;

    await this.action();

    this._session = null;
    this._args = null;

    return this.handled;
  }

  protected abstract action(): Promise<void>;

  protected session() {
    if (this._session == null)
      throw new Error("Session is not exists");

    return this._session;
  }

  protected arg(index: number) {
    if (this._args == null)
      throw new Error("Args is null");

    return this._args[index];
  }

  protected context() {
    return this.session().context;
  }

  protected userProfile() {
    return this.context().userProfile;
  }

  protected async longRunningOperation(action: () => Promise<void>) {
    const _delay = delay(600);
    _delay.then(() => this.session().sendTextMessage(R.PROCESSING));

    await action();

    _delay.cancel();
  }

  protected sendTextMessage(text: string) {
    this.session().sendTextMessage(text);
  }

  // noinspection JSUnusedGlobalSymbols
  protected markUnhandled() {
    this.handled = false;
  }
}
