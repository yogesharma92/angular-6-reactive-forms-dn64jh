import { Injectable } from "@angular/core";

enum Step {
  Register,
  Login
}

@Injectable()
export class Global {
  constructor() {}

  step: Step;
  public userData: Map<string, number>;
}
