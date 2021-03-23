import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Global } from "../global";

@Component({
  selector: "app-form-login",
  templateUrl: "./form-login.component.html",
  styleUrls: ["./form-login.component.css"]
})
export class FormLoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  constructor(public global: Global) {}

  ngOnInit() {}
}
