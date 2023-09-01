import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { CatalogModule } from './catalog/catalog.module';
import { UsersModule } from './users/users.module';

@NgModule({
    declarations: [
        AppComponent,

    ],

    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CoreModule,
        CatalogModule,
        UsersModule
    ],
    providers: []
})
export class AppModule { }
