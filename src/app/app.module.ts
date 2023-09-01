import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from "./catalog/catalog.component";
import { CatalogRepositoryService } from './catalog/catalog-repository.service';
import { LoadingSpinnerComponent } from "./components/loading-spinner.component";

import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";

import { CoreModule } from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,
        CatalogComponent,
        LoadingSpinnerComponent,
        RegisterComponent,
        SignInComponent,
    ],
    providers: [CatalogRepositoryService],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AppModule { }
