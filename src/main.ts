import { toLocaleString } from "./utils/helper";
import { IOptions } from "./utils/types";
import "./style.css";
class PrintTime {
  private options: IOptions;
  private timer: NodeJS.Timeout | undefined;
  constructor(opts: IOptions) {
    const defaultOptions: IOptions = {
      targetEl: "#app",
    };
    this.options = Object.assign({}, defaultOptions, opts);

    this.init();
  }
  private init(): void {
    const { targetEl } = this.options;
    const app = document.querySelector<HTMLDivElement>(targetEl);
    if (!app) {
      console.error(`${targetEl} 元素不存在.`);
      return;
    }
    this.timer = this.setAppContent(app);
  }
  private setAppContent(app: HTMLDivElement): NodeJS.Timeout {
    return setInterval(() => {
      app.innerHTML = `
      <h1>Hello ADI!</h1>
      <p>${toLocaleString()}</p>
    `;
    }, 1000);
  }

  public destroy(): void {
    this.timer && clearInterval(this.timer);
  }
}

export default PrintTime;
