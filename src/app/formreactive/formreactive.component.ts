import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Global } from "../global";

@Component({
  selector: "app-formreactive",
  templateUrl: "./formreactive.component.html",
  styleUrls: ["./formreactive.component.css"]
})
export class FormreactiveComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  constructor(public global: Global) {}

  get firstname() {
    return this.form.get("firstName");
  }
  ngOnInit() {}

  onSubmit(form: NgForm) {
    var email = form.value.email;
    var pswd = form.value.password;
    this.global.userData.set(email, pswd);
    this.global.step = 1;
  }
}
