import { makeAutoObservable } from "mobx";

class ValueForRnd {
  countOfError: string = "";
  seed: string = "";
  region: string = "fr";
  constructor() {
    makeAutoObservable(this);
  }

  changeCountOfError(e: React.ChangeEvent<HTMLInputElement>): void {
    this.countOfError = e.currentTarget.value;
  }
  changeSeed(e: React.ChangeEvent<HTMLInputElement>): void {
    this.seed = e.currentTarget.value;
    this.seed = this.seed.replace(/\D/, "");
  }
  changeRegion(e: React.MouseEvent<HTMLOptionElement, MouseEvent>): void {
    this.region = e.currentTarget.value;
  }
}

export default new ValueForRnd();
