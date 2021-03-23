import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormreactiveComponent } from "./formreactive/formreactive.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Global } from "./global";
import { FormLoginComponent } from './form-login/form-login.component';

@NgModule({
  declarations: [AppComponent, FormreactiveComponent, FormLoginComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule {}
