import delay from "delay";
import * as R from "../../constants/messages";
import {ProcessMessageContext} from "../events/ProcessMessage";
import Message from "../../models/Message";

export default abstract class BaseAction {
  private _context: ProcessMessageContext;
  private notHandled: boolean;

  public async testAndExecute(context: ProcessMessageContext): Promise<boolean> {
    this._context = context;

    if (this.test() == false) {
      return false;
    }

    await this.preExecute();
    await this.execute();

    return !this.notHandled;
  }

  protected test(): boolean | undefined {
    return undefined;
  };

  protected async preExecute(): Promise<void> {}
  protected abstract execute(): Promise<void>;

  protected get context() {
    return this._context;
  }

  protected get userProfile() {
    return this.context.userProfile;
  }

  protected async longRunningOperation(action: () => Promise<void>) {
    try {
      const _delay = delay(600);
      _delay.then(() => this.sendMessage(R.PROCESSING)).catch();

      await action();

      _delay.cancel();
    } catch (e) {
      e.toString();
    }
  }

  protected sendMessage(message: string) {
    this.context.sendMessage(message);
  }

  // noinspection JSUnusedGlobalSymbols
  protected markNotHandled() {
    this.notHandled = true;
  }
}

export class MessageRegexp {
  public constructor(private regexp: RegExp) {}

  public test(message: Message): boolean {
    return this.getRegexpResults(message.text) != null;
  }

  public execute(message: Message): MessageRegexpResults {
    const regexpResults = this.getRegexpResults(message.text);

    if (regexpResults == null) {
      throw new Error("Regexp expression does not match the message!");
    }

    return new MessageRegexpResults(message, regexpResults);
  }

  private getRegexpResults(message: string): RegExpExecArray | null {
    const results = this.regexp.exec(message);
    if (results == null) {
      return null;
    }

    if (results != null) {
      results.shift();
    }

    return results;
  }
}

export class MessageRegexpResults {
  public constructor(
    public message: Message,
    private args: string[]) {
  }

  public arg(index: number) {
    return this.args[index];
  }
}
