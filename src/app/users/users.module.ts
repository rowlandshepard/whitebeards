import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    SignInComponent,
  ],
  exports: [ ],
  providers: []
})

export class UsersModule { };
