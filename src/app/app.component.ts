import { Component, OnInit } from "@angular/core";
import { Global } from "./global";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  constructor(public global: Global) {}

  ngOnInit(): void {
    this.global.step = 0;
  }
}
