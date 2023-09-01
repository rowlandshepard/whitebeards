import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AccountMenuComponent } from "./account-menu.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from "./catalog/catalog.component";
import { CatalogRepositoryService } from './catalog/catalog-repository.service';
import { LoadingSpinnerComponent } from "./components/loading-spinner.component";
import { NavBarComponent } from './nav-bar.component';
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";
import { UserRepositoryService } from "./users/user-repository.service"

@NgModule({
  declarations: [
    AccountMenuComponent,
    AppComponent,
    CatalogComponent,
    LoadingSpinnerComponent,
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
  providers: [UserRepositoryService, CatalogRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
