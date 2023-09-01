import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AccountMenuComponent } from "./account-menu.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from "./catalog/catalog.component";
import { DataRepositoryService } from "./services/data-repository.service"
import { LoadingComponent } from "./components/loading-spinner.component";
import { NavBarComponent } from './nav-bar.component';
import { RegisterComponent } from "./users/sign-in.component";
import { SignInComponent } from "./users/sign-in.component";

@NgModule({
  declarations: [
    AccountMenuComponent,
    AppComponent,
    CatalogComponent,
    LoadingComponent,
    NavBarComponent,
    RegisterComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DataRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
